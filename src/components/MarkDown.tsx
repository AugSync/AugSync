/* eslint-disable react/display-name */
import MarkdownView from 'react-showdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Image from 'next/image';

export default function MarkDown({ content }: { content: string }) {
  return (
    <MarkdownView
      markdown={content}
      components={{
        h1: (props) => (
          <h1 className="mt-4 text-2xl text-left font-play text-orange">
            {props.children}
          </h1>
        ),
        h2: (props) => (
          <h2 className="mt-4 text-xl text-left font-play text-orange">
            {props.children}
          </h2>
        ),
        h3: (props) => (
          <h3 className="mt-4 text-lg text-left font-play text-orange">
            {props.children}
          </h3>
        ),
        img: (props) => (
          <div className="float-right w-1/3 h-auto my-4 ml-4">
            <Image
              src={props.src}
              alt={props.alt}
              layout="responsive"
              objectFit="cover"
              width={100}
              height={100}
            />
          </div>
        ),

        p: (props) => (
          <p className="mt-4 text-sm text-left text-white font-ubuntu">
            {props.children}
          </p>
        ),
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter
              className="mt-5"
              style={vscDarkPlus}
              language={match[1]}
              PreTag="div"
              {...props}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    />
  );
}
