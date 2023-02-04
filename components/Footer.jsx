"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { socials } from "../constants";
import styles from "../styles";
import { footerVariants } from "../utils/motion";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hiden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative `}
  >
    <div className="flex flex-col">
      <div className="mb-[50px] h-1 bg-black opacity-100" />

      <div className="flex items-center justify-between flex-wrap">
        <h4 className="font-extrabold text-[24px] text-black">Mitegra</h4>
        <p className="font-normal text-[14px] text-black opacity-70">
          Copyright @ 2021 Mitegra Technology System. All Rights Reserved.
          website made & Hosted by
          <Link href="https:talehost.com">
            <span className="text-blue-500"> TaleHost</span>
          </Link>
        </p>
        <div className="flex gap-4">
          {socials.map((social) => (
            <img
              key={social.name}
              src={social.url}
              alt={social.name}
              className="w-[24px] h-[24px] object-contain cursor-pointer"
            />
          ))}
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
