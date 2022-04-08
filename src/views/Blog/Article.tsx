/* eslint-disable react/display-name */
import Header from 'components/Header';
import Footer from 'components/Footer';
import Image from 'next/image';
import React from 'react';
import Hero from 'components/Hero';
import { LangBadge, PoweredByBadge } from 'components/Badges';
import MarkdownView from 'react-showdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { IArticle } from 'lib/dato-cms-service';
import { getLang } from 'utils';

export default function Article({ article }: { article: IArticle }) {
  return (
    <>
      <Header />
      <Hero url={article.openGraph.url} alt={article.openGraph.alt} />
      <article className="w-4/5 m-10 border-blue-dark">
        <h1 className="text-2xl text-left font-play text-blue">
          {article.title}
        </h1>
        <h2 className="mt-4 text-lg text-left font-ubuntu text-orange-dark">
          {article.seo.description}
        </h2>
        <div className="flex flex-row mt-4">
          {article._allContentLocales.map((lang) => (
            <div key={lang.locale} className="mr-3">
              <LangBadge lang={getLang(lang.locale)} />
            </div>
          ))}
          {article.tags.map((tag) => (
            <div key={tag.id} className="mr-3">
              <PoweredByBadge languages={tag.title} />
            </div>
          ))}
        </div>

        <MarkdownView
          markdown={article.content}
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
            img: (props) => {
              return (
                <Image
                  src={props.src}
                  alt={props.alt}
                  layout="responsive"
                  objectFit="cover"
                  width={100}
                  height={100}
                />
              );
            },
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
      </article>
      <Footer />
    </>
  );
}
