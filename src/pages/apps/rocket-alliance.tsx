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
        <header className="text-4xl font-bold text-gray-800">
          Rocket Alliance
        </header>
        <main className="flex flex-col items-center justify-center mt-8">
          <h1 className="text-2xl font-bold text-center text-gray-800">
            Welcome to Rocket Alliance!
          </h1>
          <p className="mt-4 mb-10 text-center text-gray-600">
            Rocket Alliance is an app to learn amazing Rocket League tips and
            tricks. We have a lot of content to help you improve your game.
          </p>
          {/* Google Play Download Button */}
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
        </main>
        <footer className="mt-8 text-gray-600">
          &copy; {new Date().getFullYear()} Rocket Alliance. All rights
          reserved.
        </footer>
      </div>
    </>
  );
};

export default RocketAlliance;
