import Header from 'components/Header';
import Footer from 'components/Footer';
import React from 'react';
import Hero from 'components/Hero';

export default function Article() {
  return (
    <>
      <Header />
      <Hero />
      <article className="m-10">
        <h1 className="text-2xl text-left font-play text-blue">
          How to make a blog with Gatsby
        </h1>
        <h2 className="mt-4 text-lg text-left font-ubuntu text-orange-dark">
          This is a mini resume of the information that will be presentate
        </h2>
      </article>
      <Footer />
    </>
  );
}
