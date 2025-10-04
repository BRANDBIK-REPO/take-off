import { faqItems } from "@/constants/faqItems";
import Accordion from "./ui/Accordion";
import Image from "next/image";
import Link from "next/link";

const FaqSection: React.FC = () => {
  return (
    <section className="bg-white border-b border-[#1F3130]/10">
      <div className="mx-auto  w-full  px-4 sm:px-6 lg:px-20  max-w-[1650px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          <div className="flex flex-col space-y-8 border-b md:border-b-0 md:border-r border-[#1F3130]/10 pt-[60px] lg:pt-[120px] pb-[60px] sm:pb-[100px] lg:pr-[60px]">
            <div>
              <p className="font-sans text-[#506767] text-sm mb-[10px]">
                Frequently asked questions
              </p>

              <h2 className="font-serif not-italic xl:leading-18 text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-black mb-10">
                Got Questions?
                <br />
                We&apos;ve Got You
              </h2>

              <p className="font-sans text-[#506767] text-base leading-relaxed ">
                At TakeOff, we understand the challenges businesses face and the
                questions that arise along the way. Whether you&apos;re
                launching a startup, scaling your operations, or seeking expert
                guidance, we have the answers.
              </p>
            </div>

            <div className="relative w-full   h-[350px]">
              <Image
                fill
                src="/faq.webp"
                alt="Team discussion"
                className="object-cover"
              />
              <Link
                href="/contact"
                className="absolute right-10 group top-1/2 -translate-y-1/2 w-[260px] rounded bg-white/20 backdrop-blur-2xl p-7 flex flex-col gap-24"
              >
                <div className="flex justify-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    className="group-hover:rotate-45 transition-all duration-300"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                  >
                    <path
                      d="M25.4703 0.959961H12.4783C12.1337 0.959961 11.8033 1.09684 11.5596 1.34049C11.316 1.58414 11.1791 1.91459 11.1791 2.25916C11.1791 2.60373 11.316 2.93419 11.5596 3.17784C11.8033 3.42148 12.1337 3.55836 12.4783 3.55836H22.334L1.16616 24.7263C1.04208 24.8461 0.943099 24.9895 0.875009 25.148C0.806919 25.3065 0.771079 25.477 0.76958 25.6495C0.768081 25.822 0.800953 25.9931 0.866278 26.1528C0.931603 26.3124 1.02807 26.4575 1.15006 26.5795C1.27204 26.7015 1.4171 26.7979 1.57677 26.8633C1.73644 26.9286 1.90751 26.9614 2.08002 26.96C2.25253 26.9585 2.42301 26.9226 2.58152 26.8545C2.74002 26.7864 2.88338 26.6875 3.00323 26.5634L24.1711 5.39543V15.2512C24.1711 15.5958 24.308 15.9262 24.5516 16.1699C24.7953 16.4135 25.1257 16.5504 25.4703 16.5504C25.8149 16.5504 26.1453 16.4135 26.389 16.1699C26.6326 15.9262 26.7695 15.5958 26.7695 15.2512V2.25916C26.7695 1.91459 26.6326 1.58414 26.389 1.34049C26.1453 1.09684 25.8149 0.959961 25.4703 0.959961Z"
                      fill="#C09755"
                    />
                  </svg>
                </div>
                <p className="font-sans text-white text-sm md:text-base lg:text-lg leading-relaxed">
                  Didn&apos;t find what you&apos;re looking for? Contact our
                  team.
                </p>
              </Link>
            </div>
          </div>

          <div className="pt-[40px] md:pt-[120px]  lg:pl-[60px]  pb-[40px] lg:pb-[100px]">
            <Accordion items={faqItems} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
