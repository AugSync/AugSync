import Header from 'components/Header';
import Footer from 'components/Footer';
import React from 'react';
import Hero from 'components/Hero';
import Icon from 'assets/icons';
import { PoweredByBadge } from 'components/Badges';

export default function Article() {
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
        <h3 className="mt-4 text-xl text-left font-play text-orange">
          This is a second subtitle
        </h3>
        <p className="mt-4 text-sm text-left text-white font-ubuntu">
          {` Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32. The standard chunk of Lorem Ipsum used since the
          1500s is reproduced below for those interested. Sections 1.10.32 and
          1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
          reproduced in their exact original form, accompanied by English
          versions from the 1914 translation by H. Rackham.`}
        </p>
      </article>
      <Footer />
    </>
  );
}
