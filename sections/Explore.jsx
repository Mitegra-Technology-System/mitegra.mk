"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ExploreCard, TitleText, TypingText } from "../components";
import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { exploreServices } from "../constants/index";

const Explore = () => {
  const [active, setActive] = useState("service-1");

  return (
    <section className={`${styles.paddings}`} id="Our-Services">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Our Services" textStyles="text-center" />
        <TitleText
          title={
            <>
              We have several services for <br className="md:block hidden" />{" "}
              you
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5 ">
          {exploreServices.map((services, index) => (
            <ExploreCard
              key={services.id}
              {...services}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
