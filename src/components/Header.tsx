import { ActiveLink } from "./ActiveLink";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "next-i18next";

export function Header() {
  const { t } = useTranslation();
  const constraintRef = useRef<HTMLSpanElement>(null);

  return (
    <>
      <header className="navbar-header">
        <div className="w-full h-16 flex flex-col justify-around sm:flex-row items-center">
          <motion.span
            className="text-xs font-RockSalt font-bold sm:text-2xl dark:text-white"
            ref={constraintRef}
            animate={{
              scale: [0, 0.5, 1],
              rotate: [-360, 360],
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <motion.div
              drag
              dragElastic={{ top: 0, bottom: 0, left: 0.2, right: 0.3 }}
              dragSnapToOrigin
              dragMomentum={false}
              dragConstraints={constraintRef}
            >
              {t("slogan")}
            </motion.div>
          </motion.span>
          <nav className="leading-6">
            <ul className="flex text-lg gap-6">
              <motion.li
                className="dark:hover:text-sky-400"
                whileHover={{
                  scale: 1.3,
                  transition: { duration: 0.3, ease: "easeInOut" },
                }}
              >
                <ActiveLink href="/projects">{t("projects")}</ActiveLink>
              </motion.li>
              <motion.li
                className="dark:hover:text-sky-400"
                whileHover={{
                  scale: 1.3,
                  transition: { duration: 0.3, ease: "easeInOut" },
                }}
              >
                <ActiveLink href="/about">{t("about")}</ActiveLink>
              </motion.li>
              <motion.li
                className="dark:hover:text-sky-400"
                whileHover={{
                  scale: 1.3,
                  transition: { duration: 0.3, ease: "easeInOut" },
                }}
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
