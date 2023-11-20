import '@/styles/main.scss'
import { useRouter } from 'next/router'
import Header from '@/components/modules/header.jsx'
import Script from 'next/script'
import Head from 'next/head'
import { AppWrapper } from 'context/state'
import TOMOStudioHead from '@/components/utils/tomostudio-insert'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  return (
    <>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-60M9C8DJQJ`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-60M9C8DJQJ');
  `}
        </Script>

      <Head>
        <TOMOStudioHead />
        {/* FAVICON  */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1,viewport-fit=cover"
        />
        {/* FAVICON  */}
      </Head>

      <AppWrapper>
        <Header header={pageProps.headerAPI} footer={pageProps.footerAPI} />
        <Component {...pageProps} key={router.asPath} />
      </AppWrapper>
    </>
  )
}
