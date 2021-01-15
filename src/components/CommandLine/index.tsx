import { useState, useEffect } from 'react';
import clsx from 'clsx';

interface cmdProps {
  type?: string;
  title?: string;
  color?: string;
  isResponse?: boolean;
  idx?: number;
}

const HomePwd = (props: cmdProps) => (
  <span
    className="text-base sm:text-xl xl:text-2xl text-white font-play leading-3"
    id={`home-${props.idx}`}
  />
);
const Folder = (props: cmdProps) => (
  <span
    className={clsx(
      'text-base sm:text-xl xl:text-2xl  font-play leading-3',
      props.color || 'text-orange-light'
    )}
    id={`folder-${props.idx}`}
  />
);
const Split = (props: cmdProps) => (
  <span
    className="text-base sm:text-xl xl:text-2xl text-white font-play leading-3"
    id={`split-${props.idx}`}
  />
);
const CmdInput = (props: cmdProps) => (
  <span
    className="text-base sm:text-xl xl:text-2xl text-white font-play mx-2 leading-3"
    id={`input-${props.idx}`}
  />
);
const Output = (props: cmdProps) => (
  <span
    className={clsx(
      'text-base sm:text-xl xl:text-2xl  font-play leading-tight',
      props.color || 'text-white'
    )}
    id={`output-${props.idx}`}
  />
);

const CommandLineRender = (props: { values: cmdProps[] }) => {
  function startTyping(value: cmdProps, idx: number) {
    return new Promise((resolve, reject) => {
      const { type, title, isResponse } = value;
      const speed = 200;

      if (type !== 'break') {
        try {
          if (
            (type === 'output' && isResponse) ||
            ['home', 'folder', 'split'].includes(type)
          ) {
            const element = document.getElementById(`${type}-${idx}`);
            if (element) {
              element.innerHTML += title;
              return resolve('');
            }

            return reject('');
          }
          let i = 0;

          const typeWriter = () => {
            if (i < title.length) {
              const element = document.getElementById(`${type}-${idx}`);
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
  }, [props.values]);
  return (
    <>
      {props.values.map(({ type, title, color }, idx) => {
        switch (type) {
          case 'home':
            return <HomePwd idx={idx} key={idx} />;
          case 'folder':
            return <Folder idx={idx} title={title} color={color} key={idx} />;
          case 'split':
            return <Split idx={idx} key={idx} />;
          case 'input':
            return <CmdInput idx={idx} key={idx} />;
          case 'output':
            return <Output idx={idx} title={title} color={color} key={idx} />;
          case 'break':
            return <br key={idx} />;
          default:
            return <HomePwd idx={idx} key={idx} />;
        }
      })}
    </>
  );
};

export default function CommandLine(props: { values: cmdProps[] }) {
  return (
    <div className="bg-green h-auto pt-3 pb-10">
      <div className="container p-10 m-auto">
        <CommandLineRender values={props.values} />
      </div>
    </div>
  );
}
