import { BR, US } from "country-flag-icons/react/3x2";

import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export default function Footer() {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <>
      <footer className="footer">
        <motion.div
          animate={{ scale: [0, 1] }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="flex flex-col gap-1 items-center p-2"
        >
          <span className="text-lg">{t("change_lang")}:</span>
          <div className="flex gap-3">
            <Link href={router.pathname} locale="en">
              <US title="English" className="w-10 h-10 cursor-pointer" />
            </Link>
            <Link href={router.pathname} locale="pt-BR">
              <BR title="Português" className="w-10 h-10 cursor-pointer" />
            </Link>
          </div>
        </motion.div>
      </footer>
    </>
  );
}
