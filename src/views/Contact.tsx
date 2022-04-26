/* eslint-disable tailwind/class-order */
import Header from 'components/Header';
import Footer from 'components/Footer';
import React from 'react';
import Hero from 'components/Hero';
import Icon from 'assets/icons';
import Link from 'next/link';

export default function Contact() {
  return (
    <>
      <Header />
      <Hero url="/images/contact.jpg" alt="Person contacting to anybody" />
      <h1 className="mt-10 text-xl text-center font-play text-blue">
        Contact Me
      </h1>
      <h2 className="mt-4 text-lg text-center font-ubuntu text-orange-dark">
        You can contact me by different means
      </h2>
      <div className="flex justify-center w-full mb-10">
        <div className="inline-block px-6 py-4 mt-4 bg-green">
          <div className="flex flex-col items-center sm:flex-row">
            <Link href="https://github.com/AugSync" passHref>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center mb-4 sm:mb-0"
              >
                <Icon
                  name="github"
                  className="fill-current text-orange"
                  width="2.5rem"
                />
                <p className="ml-4 mr-6 text-lg font-play text-orange">
                  Github
                </p>
              </a>
            </Link>
            <Link href="https://twitter.com/augsync" passHref>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center mb-4 sm:mb-0"
              >
                <Icon name="twitter" width="2.5rem" />
                <p className="ml-4 mr-6 text-lg font-play text-blue">Twitter</p>
              </a>
            </Link>
            <Link href="https://www.facebook.com/AugSync/" passHref>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center mb-4 sm:mb-0"
              >
                <Icon
                  name="facebook"
                  className="fill-current text-blue-light"
                  width="2.5rem"
                />
                <p className="ml-4 mr-6 text-lg font-play text-blue-light">
                  Facebook
                </p>
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/augsync/" passHref>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Icon
                  name="linked-in"
                  className="fill-current text-white"
                  width="2.5rem"
                />
                <p className="ml-4 text-lg text-white font-play">LinkedIn</p>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <view className="absolute bottom-0 sm:relative w-full">
        <Footer />
      </view>
    </>
  );
}
