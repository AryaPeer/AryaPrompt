import React from 'react';
import '../styles/global.css';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/next';
import config from '../../config.json';

const App = ({ Component, pageProps }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClickAnywhere = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
          maximum-scale="1"
        />
        <meta
          name="description"
          content={config.description}
          key="description"
        />
        <meta
          name="theme-color"
          content={config.colors.dark.background}
          key="theme-color"
        />

        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content={config.title} key="og:title" />
        <meta
          property="og:description"
          content={config.description}
          key="og:description"
        />
        <meta property="og:url" content={config.url} key="og:url" />
        <meta
          property="og:image"
          content={`${config.url}/og.png`}
          key="og:image"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
          key="twitter:card"
        />
        <meta name="twitter:title" content={config.title} key="twitter:title" />
        <meta
          name="twitter:description"
          content={config.description}
          key="twitter:description"
        />
        <meta
          name="twitter:image"
          content={`${config.url}/og.png`}
          key="twitter:image"
        />
      </Head>

      <div
        className="text-light-foreground dark:text-dark-foreground text-xs sm:text-sm md:text-base terminal-container"
        onClick={onClickAnywhere}
      >
        <main className="bg-light-background dark:bg-dark-background w-full h-full p-2">
          <Component {...pageProps} inputRef={inputRef} />
        </main>
      </div>
      <Analytics />
    </>
  );
};

export default App;