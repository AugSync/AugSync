import Header from 'components/Header';
import Footer from 'components/Footer';
import React from 'react';
import Hero from 'components/Hero';
import { LangBadge, PoweredByBadge } from 'components/Badges';
import { IArticle } from 'lib/dato-cms-service';
import { getLang } from 'utils';
import MarkDown from 'components/MarkDown';
import { capitalize } from 'lodash';
import Link from 'next/link';

export default function Article({ article }: { article: IArticle }) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Hero
        alt={article.openGraph.alt}
        responsiveImage={article.openGraph.responsiveImage}
      />
      <article className="flex-auto w-full p-7 sm:w-4/5">
        <h1 className="text-2xl text-left font-play text-blue">
          {article.title}
        </h1>
        <h2 className="mt-4 text-lg text-left font-ubuntu text-orange-dark">
          {article.seo.description}
        </h2>
        <div className="flex flex-row flex-wrap mt-4">
          {article._allContentLocales
            .map((tag) => capitalize(tag.locale))
            .map((lang) => (
              <Link
                key={lang}
                href={`/blog?search=${getLang(lang)}`}
                className="mb-4 mr-3"
                passHref
              >
                <LangBadge lang={getLang(lang)} />
              </Link>
            ))}
          {article.tags.map((tag) => (
            <Link
              key={tag.id}
              href={`/blog?search=${capitalize(tag.title)}`}
              className="mb-4 mr-3"
              passHref
            >
              <PoweredByBadge languages={capitalize(tag.title)} />
            </Link>
          ))}
        </div>

        <MarkDown content={article.content} />
      </article>
      <Footer />
    </div>
  );
}
