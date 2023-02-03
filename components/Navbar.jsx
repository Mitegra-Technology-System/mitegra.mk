"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import Logo from "../public/Logo.svg";

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
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
        <div
          className={`${styles.xPaddings} hidden md:flex  mx-auto  gap-10 items-center justify-center `}
        >
          <Link href="/">Home</Link>
          <a href="#About-Us">About Us</a>
          <a href="#Our-Services">Our Services</a>
        </div>
        <div className="flex md:order-2">
          <Link href="/contact">
            <button
              type="button"
              className=" hidden md:flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Contact Us
            </button>
          </Link>
          <button
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={() => setActive(!active)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`${
          active ? "block" : "hidden"
        }  w-full flex items-center lg:w-auto`}
      >
        <div className="flex flex-col justify-between border  w-full  items-center ">
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
      </div>
    </motion.nav>
  );
};
export default Navbar;
