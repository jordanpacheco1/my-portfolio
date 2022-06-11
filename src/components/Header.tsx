import { ActiveLink } from "./ActiveLink";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";

export function Header() {
  const { t } = useTranslation();

  return (
    <>
      <header className="navbar-header">
        <div className="w-full h-16 flex flex-col justify-around sm:flex-row items-center">
          <motion.span
            className="text-xs font-RockSalt font-bold sm:text-2xl dark:text-white select-none"
            animate={{ scale: [0, 1.5, 1] }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <Link href="/">{t("slogan")}</Link>
          </motion.span>
          <nav className="leading-6">
            <ul className="flex text-lg gap-6">
              <motion.li
                animate={{ y: ["-100vh", "0vh"] }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="dark:hover:text-sky-400"
              >
                <ActiveLink href="/projects">{t("projects")}</ActiveLink>
              </motion.li>
              <motion.li
                animate={{ y: ["-100vh", "0vh"] }}
                transition={{ duration: 1.7, ease: "easeInOut" }}
                className="dark:hover:text-sky-400"
              >
                <ActiveLink href="/about">{t("about")}</ActiveLink>
              </motion.li>
              <motion.li
                animate={{ y: ["-100vh", "0vh"] }}
                transition={{ duration: 1.9, ease: "easeInOut" }}
                className="dark:hover:text-sky-400"
              >
                <ActiveLink href="/contact">{t("contact")}</ActiveLink>
              </motion.li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
