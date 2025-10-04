"use client";

import { FaqItem } from "@/constants/faqItems";
import { useState } from "react";

interface AccordionProps {
  items: FaqItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-10">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="border border-[#1F3130]/10 py-6 px-7 relative"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex items-center justify-between gap-6 text-left"
            >
              <div className="flex-1">
                <span className="text-sm text-[#506767] mb-6 absolute -top-4 left-8 w-24 py-[6px] bg-[#F6F6F6] flex items-center justify-center">
                  {isOpen ? "Answer" : "Question"}
                </span>
                <h3 className="font-sans text-base lg:text-lg not-italic text-[#1F3130] pr-4">
                  {item.question}
                </h3>
              </div>

              <div
                className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                  isOpen ? "bg-[#215273]" : "bg-[#C09755]"
                }`}
              >
                <span className="text-white text-xl font-light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="21"
                    className={`${
                      isOpen ? "rotate-180" : ""
                    } transition-transform duration-300 ease-in-out`}
                    viewBox="0 0 15 21"
                    fill="none"
                  >
                    <path
                      d="M14.1051 9.0625L8.32591 14.4995C8.12314 14.6769 7.90768 14.7656 7.67956 14.7656C7.45143 14.7656 7.24866 14.6769 7.07123 14.4995L1.29206 9.0625C0.911851 8.6316 0.899178 8.20069 1.25404 7.76979C1.65959 7.38958 2.0905 7.37691 2.54675 7.73177L7.67956 12.5984L12.8504 7.73177C13.2813 7.37691 13.6995 7.37691 14.1051 7.73177C14.4599 8.18802 14.4599 8.6316 14.1051 9.0625Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </div>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-32 opacity-100 mt-4" : "max-h-0 opacity-0"
              }`}
            >
              <p className="font-sans text-gray-600 text-sm leading-relaxed pl-0">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
