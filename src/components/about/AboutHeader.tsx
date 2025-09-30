"use client"

import { motion } from "framer-motion";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import { Variants } from "framer-motion";

export default function AboutHeader() {


    const textVariants : Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: 0.9,
                ease: "easeOut"
            }
        }
    };

    const rectangleVariants : Variants = {
        hidden: { opacity: 0 },
        visible: (custom : number) => ({
            opacity: 1,
            transition: {
                duration: 0.4,
                delay: custom * 0.15,
                ease: "easeOut"
            }
        })
    };

    return (
        <section className="h-[100dvh] relative bg-[var(--about-header-bg)] flex items-center justify-center pt-[80px] sm:pt-[100px] px-4 sm:px-6 lg:px-8">
            <motion.div 
                className="flex flex-col gap-4 sm:gap-6 relative z-10 w-full max-w-4xl"
                variants={textVariants}
                initial="hidden"
                animate="visible"
            >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-[#215273] leading-[1.3] text-center px-4">
                    <span className="font-serif not-italic font-normal">More Than a Network - </span><br/>
                    <span className="font-serif italic">A Launchpad for Growth</span>
                </h1>
                <p className="text-[#506767] font-[300] max-w-[620px] mx-auto text-center text-sm sm:text-base px-4">
                    Born in the UAE with deep Kerala–GCC roots, TakeOff connects SMEs, founders, and professionals who want to think bigger and achieve more.
                </p>
                <button className="bg-[#215273] hover:bg-[var(--primary)] transition-all duration-300 cursor-pointer text-white px-4 sm:px-6 py-[10px] group rounded-full max-w-[253px] w-full flex items-center justify-between mx-auto mt-4 sm:mt-6 text-sm sm:text-base">
                    <span className="text-[#ffffff] font-[200] font-sans">Read more about us</span>
                    <ArrowRightIcon width={14} height={11} className="inline ml-2 group-hover:translate-x-2 transition-all duration-300" aria-hidden />
                </button>
            </motion.div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pt-[80px] sm:pt-[100px] w-full h-full max-h-[70dvh] max-w-[1200px] gap-[30px] sm:gap-[40px] lg:gap-[50px] grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 z-0 px-4">
                {
                    Array.from({ length: 5 }).map((_, index) => (
                        <motion.div 
                            key={index} 
                            className={`col-span-1 w-full h-full border border-[#D9D9D9] ${
                                index >= 4 ? 'hidden lg:block' : 
                                index >= 3 ? 'hidden sm:block' : ''
                            }`}
                            variants={rectangleVariants}
                            initial="hidden"
                            animate="visible"
                            custom={index}
                        >
                            
                        </motion.div>
                    ))
                }
            </div>
        </section>
    )


    
}