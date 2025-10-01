import React from "react";
import Image from "next/image";
import { Director, directors, Founder, founders } from "@/constants/ourTeam";

export default function MeetTeam() {
  return (
    <section className="py-8 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white from-[30%] to-[#E8EDED] to-[30%]">
      <div className="max-[1700px] mx-auto">
        <div className="text-center mb-16">
          <h2 className=" text-3xl sm:text-4xl xl:text-5xl font-serif text-[var(--primary)] mb-2 sm:mb-6 not-italic font-normal">
            Meet Our <span className="italic font-serif">team</span>
          </h2>
          <p className=" text-base font-medium text-[#506767]">
            The principles that guide our community
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {founders.map((founder, index) => (
            <div key={index} className="flex justify-center">
              <FounderCard {...founder} />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
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
    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-md">
      <div className="relative h-80">
        <Image src={image} alt={name} fill className="object-cover" />
        <div className="absolute bottom-4 left-4">
          <span className="bg-amber-600 text-white px-4 py-1 rounded text-sm font-medium">
            {badge}
          </span>
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white text-2xl font-bold mb-1">{name}</h3>
          <p className="text-white text-sm">{title}</p>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-700 text-sm leading-relaxed mb-6">
          {description}
        </p>

        <div className="mb-6">
          <h4 className="text-gray-800 font-semibold mb-3">Key Achievements</h4>
          <div className="flex flex-wrap gap-2">
            {achievements.map((achievement: string, index: number) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-xs"
              >
                {achievement}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <button className="p-2 hover:bg-gray-100 rounded transition-colors"></button>
          <button className="p-2 hover:bg-gray-100 rounded transition-colors"></button>
          <button className="p-2 hover:bg-gray-100 rounded transition-colors"></button>
        </div>
      </div>
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
