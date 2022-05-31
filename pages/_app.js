import '../styles/global.scss';
import '../styles/text-texture.scss';
import '../styles/background-texture.scss';
import { useEffect } from 'react';
import useDarkMode from '../hooks/useDarkMode';

const App = ({ Component, pageProps }) => {
  const darkMode = useDarkMode();

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  });

  return <Component { ...pageProps } />
};

export default App;
