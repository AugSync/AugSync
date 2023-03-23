import '../styles/index.css';
import { useState } from 'react';
import { GlobalStateContext } from 'context/GlobalStateContext';
import { Analytics } from '@vercel/analytics/react';

export function reportWebVitals(metric) {
  const url = process.env.NEXT_PUBLIC_AXIOM_INGEST_ENDPOINT;

  if (!url) {
    return;
  }

  const body = JSON.stringify({
    route: window.__NEXT_DATA__.page,
    ...metric,
  });

  if (navigator.sendBeacon) {
    navigator.sendBeacon(url, body);
  } else {
    fetch(url, { body, method: 'POST', keepalive: true });
  }
}

function App({ Component, pageProps }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  function toggleSidebar() {
    setIsSidebarVisible((visible) => !visible);
  }

  return (
    <GlobalStateContext.Provider value={{ isSidebarVisible, toggleSidebar }}>
      <Component {...pageProps} />
      <Analytics />
    </GlobalStateContext.Provider>
  );
}

export default App;
