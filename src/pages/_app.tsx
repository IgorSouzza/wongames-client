import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import theme from 'styles/theme';
import GlobalStyles from 'styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Wongames</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple project starter to work with Typescript, React, NextJS and Styled Components"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
