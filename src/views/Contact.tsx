/* eslint-disable tailwind/class-order */
import Header from 'components/Header';
import Footer from 'components/Footer';
import React from 'react';
import Hero from 'components/Hero';
import Icon from 'assets/icons';

export default function Contact() {
  return (
    <>
      <Header />
      <Hero />
      <h1 className="mt-10 text-xl text-center font-play text-blue">
        Contact Me
      </h1>
      <h2 className="mt-4 text-lg text-center font-ubuntu text-orange-dark">
        You can contact me by different means
      </h2>
      <div className="flex justify-center w-full mb-10">
        <div className="inline-block px-6 py-4 mt-4 bg-green">
          <div className="flex items-center">
            <Icon name="github" className="fill-current text-orange" />
            <p className="ml-4 mr-6 text-lg font-play text-orange">Github</p>
            <Icon name="twitter" />
            <p className="ml-4 mr-6 text-lg font-play text-blue">Twitter</p>
            <Icon name="facebook" className="fill-current text-blue-light" />
            <p className="ml-4 mr-6 text-lg font-play text-blue-light">
              Facebook
            </p>
            <Icon name="linked-in" className="fill-current text-white" />
            <p className="ml-4 text-lg text-white font-play">LinkedIn</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
