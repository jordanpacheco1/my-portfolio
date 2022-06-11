import Head from "next/head";
import { motion } from "framer-motion";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function Custom404() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>404 {t("not_found")} | Jordan Pacheco Borges</title>
      </Head>
      <div className="flex flex-col mt-36 sm:mt-48 text-red-700 gap-10 justify-center items-center">
        <motion.span
          animate={{ scale: [0, 1.25, 1] }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="text-6xl sm:text-9xl"
        >
          404
        </motion.span>
        <motion.span
          animate={{ x: ["-100%", "10%", "0%"] }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            stiffness: 500,
            damping: 25,
          }}
          className="text-5xl md:text-7xl"
        >
          {t("not_found").toUpperCase()}
        </motion.span>
      </div>
    </>
  );
}
