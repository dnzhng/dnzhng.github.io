import { Html, Head, Main, NextScript } from 'next/document'
import useDarkMode from '../hooks/useDarkMode';

const Document = () => {
  const darkMode = useDarkMode();

  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700i&display=swap" rel="stylesheet"/>
        <script src="https://kit.fontawesome.com/5d40daf955.js" crossOrigin="anonymous"></script>
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-41808375-1"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-41808375-1');`
          }}
        />
      </Head>
      <body className={ darkMode ? 'dark' : '' }>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
