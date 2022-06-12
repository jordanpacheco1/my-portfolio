import "../styles/global.css";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import type { AppProps } from "next/app";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps, router }: AppProps) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  function AnimateOnlyFirstTime({ children }: { children: React.ReactNode }) {
    return (
      <AnimatePresence>
        <motion.div
          initial="pageInitial"
          animate="pageAnimate"
          exit="pageExit"
          key={router.pathname}
          variants={{
            pageInitial: { width: "0%" },
            pageAnimate: { width: "100%", transition: { duration: 0.8 } },
            pageExit: { x: width },
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <NextNProgress
        stopDelayMs={400}
        options={{ easing: "ease", speed: 400 }}
      />
      <AnimateOnlyFirstTime>
        <Component className="main" {...pageProps} />
      </AnimateOnlyFirstTime>
    </>
  );
}

export default appWithTranslation(MyApp);
