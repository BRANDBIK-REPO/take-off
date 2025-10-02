import React from "react";
import Image from "next/image";
import { Director, directors, Founder, founders } from "@/constants/ourTeam";
import ShareIcon from "../icons/ShareIcon";
import FounderIcon from "../icons/FounderIcon";
import LinkedInIcon from "../icons/LinkedInIcon";
import MailIcon from "../icons/MailIcon";

export default function MeetTeam() {
  return (
    <section className="py-8 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white from-[30%] to-[#E8EDED] to-[30%]">
      <div className="max-w-[1700px] mx-auto">
        <div className="text-center mb-16">
          <h2 className=" text-3xl sm:text-4xl xl:text-5xl font-serif text-[var(--primary)] mb-2 sm:mb-6 not-italic font-normal">
            Meet Our <span className="italic font-serif">team</span>
          </h2>
          <p className=" text-base font-medium text-[#506767]">
            The principles that guide our community
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-[146px] mb-20 max-w-7xl mx-auto">
          {founders.map((founder, index) => (
            <div key={index} className="flex justify-center">
              <FounderCard {...founder} />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-10">
          {directors.map((director, index) => (
            <DirectorCard key={index} {...director} />
          ))}
        </div>
      </div>
    </section>
  );
}

const FounderCard = ({
  name,
  title,
  badge,
  description,
  achievements,
  image,
}: Founder) => {
  return (
    <div className="relative max-w-[572px] w-full">
      <div className="relative z-20 pl-6 xl:pl-[12%]  pr-6 xl:pr-[4%] ">
        <div className="flex justify-center sm:justify-normal">
          <div className="relative">
            <Image
              src={image}
              alt={name}
              width={407}
              height={500}
              className=""
            />
            <div className="absolute bottom-8 left-8">
              <span className="bg-[#C09755] w-[109px] py-1.5 items-center justify-center text-white mb-3 rounded text-sm font-normal flex flex-row gap-1.5">
                <FounderIcon />
                {badge}
              </span>
              <h3 className="text-white text-2xl font-sans not-italic font-normal mb-1">
                {name}
              </h3>
              <p className="text-white text-sm">{title}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-30 pl-6 xl:pl-[12%] py-8 pr-6 xl:pr-[4%] w-full">
        <p className="text-[#506767] max-w-md w-full not-italic font-sans text-base leading-relaxed mb-[18px]">
          {description}
        </p>

        <div className="mb-6">
          <h4 className="text-black not-italic font-sans font-medium text-base mb-2">
            Key Achievements
          </h4>
          <div className="flex flex-wrap gap-2">
            {achievements.map((achievement: string, index: number) => (
              <span
                key={index}
                className="bg-[#F6F6F6] text-[#506767] px-4 py-1 rounded text-[13px] w-fit"
              >
                {achievement}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <button className="w-[34px] group h-[34px] flex items-center justify-center bg-[#E5EBEA] hover:bg-primary rounded-full transition-colors cursor-pointer">
            <ShareIcon className="group-hover:fill-white transition-all duration-300 fill-black" />
          </button>
          <button className="w-[34px] group h-[34px] flex items-center justify-center bg-[#E5EBEA] hover:bg-primary rounded-full transition-colors cursor-pointer">
            <LinkedInIcon className="group-hover:stroke-white group-hover:fill-white transition-all duration-300 stroke-black fill-black" />
          </button>
          <button className="w-[34px] group h-[34px] flex items-center justify-center bg-[#E5EBEA] hover:bg-primary rounded-full transition-colors cursor-pointer">
            <MailIcon className="group-hover:fill-white transition-all duration-300 fill-black" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[50%] bg-white rounded shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] z-10"></div>
    </div>
  );
};

const DirectorCard = ({ name, title, image }: Director) => {
  return (
    <div className="text-center bg-white rounded-sm">
      <div className="relative w-full h-[350px] mx-auto mb-4  overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-t-sm"
        />
      </div>
      <h4 className="font-sans not-italic font-base text-lg sm:text-xl  text-black mb-[11px]">
        {name}
      </h4>
      <p className="font-sans not-italic font-base text-sm   text-[rgba(0,0,0,0.6)] mb-4">
        {title}
      </p>
    </div>
  );
};
