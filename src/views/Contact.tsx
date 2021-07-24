import Header from 'components/Header';
import Footer from 'components/Footer';
import React from 'react';
import Hero from 'components/Hero';

export default function Contact() {
  return (
    <>
      <Header />
      <Hero />
      <h1 className="my-10 text-xl text-center font-play text-blue">
        Contact Me
      </h1>
      <Footer />
    </>
  );
}
