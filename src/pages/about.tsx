import Footer from "../components/Footer";
import Head from "next/head";
import { Header } from "../components/Header";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "about"])),
    },
  };
}

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("about:about")} | Jordan Pacheco Borges</title>
      </Head>
      <div className="flex flex-col h-screen justify-between">
        <Header />
        <main className="main">
          <div>
            <h1>{t("about:about")}</h1>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
