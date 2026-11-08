import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { APPS } from '../../lib/augsyncApps';

// AugSync brand page: the homepage of the shared Google sign-in screen, so its name must be «AugSync».
const AugSyncApps: React.FC = () => (
  <div className="flex flex-col min-h-screen">
    <Head>
      <title>AugSync | Apps</title>
      <meta
        name="description"
        content="AugSync builds mobile apps for Android and iOS."
      />
      <meta property="og:site_name" content="AugSync" />
      <meta property="og:title" content="AugSync | Apps" />
    </Head>
    <Header />
    <article className="flex-auto w-full px-7 py-10 mx-auto max-w-6xl">
      <h1 className="text-2xl font-play text-blue">AugSync</h1>
      <h2 className="mt-4 text-lg font-ubuntu text-orange-dark">
        Mobile apps for Android and iOS
      </h2>
      <p className="mt-4 text-base font-ubuntu text-white">
        Made by César Augusto Barco De Gouveia. Some apps let you sign in with
        your Google Account: read the{' '}
        <Link href="/privacy-policy" className="underline text-blue-light">
          AugSync Privacy Policy
        </Link>
        .
      </p>
      <div className="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3">
        {APPS.map((a) => (
          <Link
            key={a.href}
            href={a.href}
            className="flex items-center gap-5 p-5 transition bg-green-dark ring-blue-light hover:ring-4 hover:shadow-2xl"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={a.icon}
              alt=""
              width={64}
              height={64}
              className="flex-none w-16 h-16 rounded-2xl"
            />
            <div>
              <p className="text-lg font-play text-blue">{a.name}</p>
              <p className="text-sm font-ubuntu text-orange">Privacy policy</p>
            </div>
          </Link>
        ))}
      </div>
      <p className="mt-10 text-base font-ubuntu text-white">
        Contact:{' '}
        <a
          href="mailto:augustobarco.dev@gmail.com"
          className="underline text-blue-light"
        >
          augustobarco.dev@gmail.com
        </a>
      </p>
    </article>
    <Footer />
  </div>
);

export default AugSyncApps;
