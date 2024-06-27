import React from 'react';
import Image from 'next/image';
import Head from 'next/head'; // Import Head for SEO

const RocketAlliance: React.FC = () => {
  return (
    <>
      <Head>
        <title>Rocket Alliance - Improve Your Game</title>
        <meta
          name="description"
          content="Learn amazing Rocket League tips and tricks to improve your game with Rocket Alliance."
        />
        <meta
          property="og:title"
          content="Rocket Alliance - Improve Your Game"
        />
        <meta
          property="og:description"
          content="Learn amazing Rocket League tips and tricks to improve your game with Rocket Alliance."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/rocket-alliance.png" />
        <meta
          property="og:url"
          content="https://augsync.com/apps/rocket-alliance"
        />
        <link rel="icon" href="/rocket-alliance-favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-100">
        <section className="bg-gray-100">
          <div className="px-4 py-8 mx-auto grid max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl">
                Welcome to Rocket Alliance
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
                Rocket Alliance is an app to learn amazing Rocket League tips
                and tricks. We have a lot of content to help you improve your
                game.
              </p>
              <a
                href="https://play.google.com/store/apps/details?id=com.augsync.RocketAlliance"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block p-1 bg-white rounded-lg"
              >
                <Image
                  src="/google-play-3.svg"
                  alt="Download on Google Play"
                  width={150}
                  height={50}
                  className="cursor-pointer"
                />
              </a>
            </div>
            <div className="mt-10 lg:mt-0 lg:col-span-5 lg:flex">
              {/* Replace with Image component if using Next.js Image optimization */}
              <Image
                src="/phone-mockup.png"
                alt="mockup"
                width={500}
                height={300}
              />
            </div>
          </div>
        </section>
        <footer className="mt-8 text-gray-600">
          &copy; {new Date().getFullYear()} Rocket Alliance. All rights
          reserved.
        </footer>
      </div>
    </>
  );
};

export default RocketAlliance;
