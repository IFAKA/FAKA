"use client";

import { CONTACTS } from "@/services";
import { isStyledAtom } from "@/store";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import Link from "next/link";

const Footer = () => {
  const [isStyled] = useAtom(isStyledAtom);
  return (
    <footer
      className={`flex ${
        isStyled ? "justify-center" : "justify-start"
      } w-full max-w-5xl`}
    >
      <div className="flex">
        {!isStyled ? (
          CONTACTS.map(({ href, icon, title }) => (
            <div key={href} className="p-3">
              <Link
                href={href}
                title={title}
                target="_blank"
                rel="noopener noreferrer"
              >
                {icon}
              </Link>
            </div>
          ))
        ) : (
          <div className="flex items-center justify-around h-full py-2 overflow-hidden w-80">
            {CONTACTS.map(({ href, icon }, i) => (
              <motion.div
                className="rounded-full"
                key={i}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                  duration: 0.3,
                }}
              >
                <motion.a
                  className="flex flex-col justify-between h-full p-3 border rounded-full shadow cursor-pointer dark:border-none hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={href}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                    duration: 0.3,
                    delay: i * 0.1,
                  }}
                >
                  {icon}
                </motion.a>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
