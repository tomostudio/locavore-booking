import '../styles/globals.scss';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps}>
      <Head>
      </Head>
    </Component>
  );
}

export default MyApp;
