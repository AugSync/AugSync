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

const HomePwd = ({ idx, currentPage }: cmdProps) => (
  <span
    className="text-base text-white sm:text-xl xl:text-2xl font-play leading-3"
    id={`home-${currentPage}-${idx}`}
  />
);
const Folder = ({ currentPage, color, idx }: cmdProps) => (
  <span
    className={clsx(
      'text-base sm:text-xl xl:text-2xl  font-play leading-3',
      color || 'text-orange-light'
    )}
    id={`folder-${currentPage}-${idx}`}
  />
);
const Split = ({ currentPage, idx }: cmdProps) => (
  <span
    className="text-base text-white sm:text-xl xl:text-2xl font-play leading-3"
    id={`split-${currentPage}-${idx}`}
  />
);
const CmdInput = ({ currentPage, idx }: cmdProps) => (
  <span
    className="mx-2 text-base text-white sm:text-xl xl:text-2xl font-play leading-3"
    id={`input-${currentPage}-${idx}`}
  />
);
const Output = ({ currentPage, color, idx }: cmdProps) => (
  <span
    className={clsx(
      'text-base sm:text-xl xl:text-2xl  font-play leading-tight',
      color || 'text-white'
    )}
    id={`output-${currentPage}-${idx}`}
  />
);

const CommandLineRender = ({
  values,
  setIsDisconnect,
}: {
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

            return reject(new Error('Unexpected'));
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
                reject(new Error('Unexpected'));
              }
            } else resolve('');
          };

          typeWriter();
        } catch (error) {
          return console.error(error);
        }
      } else return resolve('');
    });
  }

  useEffect(() => {
    (async () => {
      let index = 0;
      for (const value of values) {
        try {
          await startTyping(value, index);
          index++;
        } catch (error) {}
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  useEffect(() => {
    if (router.pathname !== currentPage) setIsDisconnect(true);

    setCurrentPage(router.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname]);

  return (
    <div className="container px-10 pt-10 pb-16 m-auto">
      {currentPage &&
        values.map(({ type, title, color }, idx) => {
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

export default function CommandLine({ values }: { values: cmdProps[] }) {
  const [bind, { height }, setIsDisconnect]: any = useMeasure();
  const commandStyle = useSpring({ height });

  return (
    <animated.div style={commandStyle} className="overflow-hidden bg-green">
      <div {...bind} className="inline-block">
        <CommandLineRender values={values} setIsDisconnect={setIsDisconnect} />
      </div>
    </animated.div>
  );
}
