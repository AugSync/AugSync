import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import useMeasure from './useMeasure';

interface cmdProps {
  type?: string;
  title?: string;
  color?: string;
  isResponse?: boolean;
  idx?: number;
  currentPage?: string;
}

const HomePwd = (props: cmdProps) => (
  <span
    className="text-base sm:text-xl xl:text-2xl text-white font-play leading-3"
    id={`home-${props.currentPage}-${props.idx}`}
  />
);
const Folder = (props: cmdProps) => (
  <span
    className={clsx(
      'text-base sm:text-xl xl:text-2xl  font-play leading-3',
      props.color || 'text-orange-light'
    )}
    id={`folder-${props.currentPage}-${props.idx}`}
  />
);
const Split = (props: cmdProps) => (
  <span
    className="text-base sm:text-xl xl:text-2xl text-white font-play leading-3"
    id={`split-${props.currentPage}-${props.idx}`}
  />
);
const CmdInput = (props: cmdProps) => (
  <span
    className="text-base sm:text-xl xl:text-2xl text-white font-play mx-2 leading-3"
    id={`input-${props.currentPage}-${props.idx}`}
  />
);
const Output = (props: cmdProps) => (
  <span
    className={clsx(
      'text-base sm:text-xl xl:text-2xl  font-play leading-tight',
      props.color || 'text-white'
    )}
    id={`output-${props.currentPage}-${props.idx}`}
  />
);

const CommandLineRender = (props: {
  values: cmdProps[];
  setIsDisconnect: (state: boolean) => void;
}) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<string>();

  function startTyping(value: cmdProps, idx: number) {
    return new Promise((resolve, reject) => {
      const { type, title, isResponse } = value;
      const speed = 50;

      if (type !== 'break') {
        try {
          // write text directly
          if (
            (type === 'output' && isResponse) ||
            ['home', 'folder', 'split'].includes(type)
          ) {
            const element = document.getElementById(
              `${type}-${currentPage}-${idx}`
            );
            if (element) {
              element.innerHTML += title;
              return resolve('');
            }

            return reject('');
          }

          // write text with timeout
          let i = 0;
          const typeWriter = () => {
            if (i < title.length) {
              const element = document.getElementById(
                `${type}-${currentPage}-${idx}`
              );
              if (element) {
                element.innerHTML += title.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
              } else {
                reject('');
              }
            } else resolve('');
          };

          typeWriter();
        } catch (error) {
          console.log({ error });
        }
      } else resolve('');
    });
  }

  useEffect(() => {
    (async () => {
      let index = 0;
      for (const value of props.values) {
        try {
          await startTyping(value, index);
          index++;
        } catch (error) {}
      }
    })();
  }, [currentPage]);

  useEffect(() => {
    if (router.pathname !== currentPage) props.setIsDisconnect(true);

    setCurrentPage(router.pathname);
  }, [router.pathname]);

  return (
    <div className="container px-10 pt-10 pb-16 m-auto">
      {currentPage &&
        props.values.map(({ type, title, color }, idx) => {
          switch (type) {
            case 'home':
              return <HomePwd idx={idx} key={idx} currentPage={currentPage} />;
            case 'folder':
              return (
                <Folder
                  idx={idx}
                  title={title}
                  color={color}
                  key={idx}
                  currentPage={currentPage}
                />
              );
            case 'split':
              return <Split idx={idx} key={idx} currentPage={currentPage} />;
            case 'input':
              return <CmdInput idx={idx} key={idx} currentPage={currentPage} />;
            case 'output':
              return (
                <Output
                  idx={idx}
                  title={title}
                  color={color}
                  key={idx}
                  currentPage={currentPage}
                />
              );
            case 'break':
              return <br key={idx} />;
            default:
              return <HomePwd idx={idx} key={idx} currentPage={currentPage} />;
          }
        })}
    </div>
  );
};

export default function CommandLine(props: { values: cmdProps[] }) {
  const [bind, { height }, setIsDisconnect]: any = useMeasure();
  const commandStyle = useSpring({ height });

  return (
    <animated.div
      style={commandStyle}
      className="bg-green overflow-hidden"
    >
      <div {...bind} className="inline-block">
        <CommandLineRender
          values={props.values}
          setIsDisconnect={setIsDisconnect}
        />
      </div>
    </animated.div>
  );
}
