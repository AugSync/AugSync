import Header from 'components/Header';
import Footer from 'components/Footer';
import React from 'react';
import Hero from 'components/Hero';
import { LangBadge, PoweredByBadge } from 'components/Badges';
import { IArticle } from 'lib/dato-cms-service';
import { getLang } from 'utils';
import MarkDown from 'components/MarkDown';
import { capitalize } from 'lodash';

export default function Article({ article }: { article: IArticle }) {
  return (
    <>
      <Header />
      <Hero url={article.openGraph.url} alt={article.openGraph.alt} />
      <article className="w-4/5 m-10">
        <h1 className="text-2xl text-left font-play text-blue">
          {article.title}
        </h1>
        <h2 className="mt-4 text-lg text-left font-ubuntu text-orange-dark">
          {article.seo.description}
        </h2>
        <div className="flex flex-row mt-4">
          {article._allContentLocales
            .map((tag) => capitalize(tag.locale))
            .map((lang) => (
              <div key={lang} className="mr-3">
                <LangBadge lang={getLang(lang)} />
              </div>
            ))}
          {article.tags.map((tag) => (
            <div key={tag.id} className="mr-3">
              <PoweredByBadge languages={capitalize(tag.title)} />
            </div>
          ))}
        </div>

        <MarkDown content={article.content} />
      </article>
      <Footer />
    </>
  );
}
