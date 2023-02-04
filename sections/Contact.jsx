"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import ExploreContact from "../components/ExploreContact";

const Contact = () => (
  <section className={`${styles.paddings}`} id="Contact-Us">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Contact Us" textStyles="text-center" />

      <div className="mt-[50px]  min-h-[70vh] gap-5 ">
        <ExploreContact />
      </div>
    </motion.div>
  </section>
);

export default Contact;
