import "../styles/global.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <NextNProgress
        stopDelayMs={400}
        options={{ easing: "ease", speed: 400 }}
      />
      <Component className="main" {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);
