import '../styles/index.css';
import { useState, createContext } from 'react';
import { GlobalStateContext } from 'context/GlobalStateContext';

function App({ Component, pageProps }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  function toggleSidebar() {
    setIsSidebarVisible((visible) => !visible);
  }

  return (
    <GlobalStateContext.Provider value={{ isSidebarVisible, toggleSidebar }}>
      <Component {...pageProps} />
    </GlobalStateContext.Provider>
  );
}

export default App;
