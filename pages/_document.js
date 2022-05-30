import { Html, Head, Main, NextScript } from 'next/document'
import useDarkMode from '../hooks/useDarkMode';

const Document = () => {
  const darkMode = useDarkMode();

  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700i&display=swap" rel="stylesheet"/>
        <script src="https://kit.fontawesome.com/5d40daf955.js" crossOrigin="anonymous"></script>
      </Head>
      <body className={ darkMode ? 'dark' : '' }>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
