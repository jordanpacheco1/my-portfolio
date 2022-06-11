import Footer from "../components/Footer";
import Head from "next/head";
import { Header } from "../components/Header";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home"])),
    },
  };
}

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>Portfolio | Jordan Pacheco Borges</title>
      </Head>
      <div className="flex flex-col h-screen justify-between">
        <Header />
        <main className="main">
          <div>
            <h1>{t("home:welcome_msg")}</h1>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
