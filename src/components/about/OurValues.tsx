"use client";

import { OurValue, values } from "@/constants/ourValues";
import React from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";

export default function OurValues() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const headingVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <section className=" py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headingVariants}
        >
          <h2 className=" text-3xl sm:text-4xl xl:text-5xl font-serif text-[var(--primary)] mb-2 sm:mb-6  font-normal">
            Our <span className="italic font-serif">Values</span>
          </h2>
          <p className=" text-base font-normal text-[#506767]">
            The principles that guide our community
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {values.map((value, index) => (
            <ValueCard
              key={value.number}
              number={value.number}
              icon={value.icon}
              title={value.title}
              description={value.description}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const ValueCard = ({
  number,
  icon: Icon,
  title,
  description,
  index,
}: OurValue & { index: number }) => {
  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
        delay: index * 0.1,
      },
    },
  };

  const badgeVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: 0.2 + index * 0.1,
      },
    },
  };

  return (
    <motion.div
      className="bg-white border border-[rgba(0,0,0,0.1)] p-8 sm:p-10 xl:p-12 relative flex flex-col"
      variants={cardVariants}
    >
      <motion.div
        className="text-sm text-[#506767] mb-6 absolute -top-4 left-8 w-24 py-[6px] bg-[#F6F6F6] flex items-center justify-center"
        variants={badgeVariants}
      >
        Values {number}
      </motion.div>

      <div className="flex justify-center mb-6 sm:mb-8">
        <div className="bg-[var(--primary)] w-24 h-24 flex items-center justify-center">
          <Icon className="w-[35px] h-[35px] text-white" />
        </div>
      </div>

      <h3 className="text-xl not-italic leading-7 lg:text-2xl whitespace-pre-line min-h-[3rem] lg:min-h-[3.5rem] font-medium font-sans text-[#1F3130] mb-4 text-center ">
        {title}
      </h3>

      <p className="text-[#354C4C] text-center leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};
