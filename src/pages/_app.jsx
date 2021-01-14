import Head from 'next/head';

import '../styles/index.css';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Augusto Barco | Full Stack Developer</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
