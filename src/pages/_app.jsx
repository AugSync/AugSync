import Head from 'next/head';

import '../styles/index.css';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tailwindcss Emotion Example</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
