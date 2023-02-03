"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import Logo from "../public/Logo.svg";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div
      className={`${styles.xPaddings} flex mx-auto justify-between gap-18 items-center `}
    >
      <Image src={Logo} width="10px" height="10px" />
      <Link href="/">Home</Link>
      <Link href="#About-Us">About Us</Link>
      <Link href="#Our-Services">Our Services</Link>
      <div className="flex md:order-2">
        <Link href="/contact">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  </motion.nav>
);

export default Navbar;
