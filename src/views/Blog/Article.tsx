/* eslint-disable react/display-name */
import Header from 'components/Header';
import Footer from 'components/Footer';
import React from 'react';
import Hero from 'components/Hero';
import Icon from 'assets/icons';
import { PoweredByBadge } from 'components/Badges';
import MarkdownView from 'react-showdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import clsx from 'clsx';

export default function Article({ markDown }: { markDown: string }) {
  return (
    <>
      <Header />
      <Hero />
      <article className="m-10">
        <h1 className="text-2xl text-left font-play text-blue">
          This is a Project
        </h1>
        <h2 className="mt-4 text-lg text-left font-ubuntu text-orange-dark">
          This is a mini resume of the information that will be presentate
        </h2>
        <div className="flex flex-row mt-4">
          <div className="mr-3">
            <PoweredByBadge languages="React" />
          </div>
          <div className="mr-3">
            <PoweredByBadge languages="Javascript" />
          </div>
          <div className="mr-3">
            <PoweredByBadge languages="MySQL" />
          </div>
        </div>

        <div className="inline-block px-6 py-4 mt-4 bg-green">
          <div className="flex items-center">
            <Icon name="play" />
            <p className="ml-4 mr-6 text-lg font-play text-orange">
              See in operation
            </p>
            <Icon name="github" />
            <p className="ml-4 text-lg font-play text-blue">
              Github Repository
            </p>
          </div>
        </div>
        <MarkdownView
          markdown={markDown}
          components={{
            h3: (props) => (
              <h3 className="mt-4 text-xl text-left font-play text-orange">
                {props.children}
              </h3>
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
                  className="mt-8"
                  style={vscDarkPlus}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={clsx(className, 'mt-4')} {...props}>
                  {children}
                </code>
              );
            },
          }}
        />
      </article>
      <Footer />
    </>
  );
}
