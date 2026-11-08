import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { APPS } from '../../lib/augsyncApps';

// AugSync brand page: the homepage of the shared Google sign-in screen, so its name must be «AugSync».
const AugSyncApps: React.FC = () => (
  <>
    <Head>
      <title>AugSync | Apps</title>
      <meta
        name="description"
        content="AugSync builds mobile apps for Android and iOS."
      />
      <meta property="og:site_name" content="AugSync" />
      <meta property="og:title" content="AugSync | Apps" />
    </Head>
    <div
      style={{
        backgroundColor: 'white',
        padding: 70,
        minHeight: '100vh',
        maxWidth: 820,
      }}
    >
      <h1 style={{ fontSize: 32, fontWeight: 800 }}>AugSync</h1>
      <p>
        AugSync builds mobile apps for Android and iOS, made by César Augusto
        Barco De Gouveia. Some of them let you sign in with your Google Account;
        see the <Link href="/privacy-policy">AugSync Privacy Policy</Link>.
      </p>
      <p>
        <strong>Our apps</strong>
      </p>
      <ul>
        {APPS.map((a) => (
          <li key={a.href}>
            <Link href={a.href}>{a.name}</Link>
          </li>
        ))}
      </ul>
      <p>
        <strong>Contact</strong>:{' '}
        <a href="mailto:augustobarco.dev@gmail.com">
          augustobarco.dev@gmail.com
        </a>
      </p>
    </div>
  </>
);

export default AugSyncApps;
