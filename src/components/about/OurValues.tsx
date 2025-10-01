import { OurValue, values } from '@/constants/ourValues';
import React from 'react';



export default function OurValues() {
  

  return (
    <section className=" py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
       
        <div className="text-center mb-16">
          <h2 className=" text-3xl sm:text-4xl xl:text-5xl font-serif text-[var(--primary)] mb-2 sm:mb-6  font-normal">
            Our <span className="italic font-serif">Values</span>
          </h2>
          <p className=" text-base font-normal text-[#506767]">
            The principles that guide our community
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-12">
          {values.map((value) => (
            <ValueCard
              key={value.number}
              number={value.number}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


const ValueCard = ({ number, icon: Icon, title, description }: OurValue) => {
    return (
      <div className="bg-white  border border-[rgba(0,0,0,0.1)] p-8 sm:p-10 xl:p-12 relative flex flex-col">
        <div className="text-sm text-[#506767] mb-6 absolute -top-4 left-8 w-24 py-[6px] bg-[#F6F6F6] flex items-center justify-center">Values {number}</div>
        
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="bg-[var(--primary)] w-24 h-24 flex items-center justify-center">
            <Icon className="w-[35px] h-[35px] text-white"  />
          </div>
        </div>
        
        <h3 className="text-xl not-italic leading-7 lg:text-2xl whitespace-pre-line min-h-[3rem] lg:min-h-[3.5rem] font-medium font-sans text-[#1F3130] mb-4 text-center ">
          {title}
        </h3>
        
        <p className="text-gray-600 text-center leading-relaxed">
          {description}
        </p>
      </div>
    );
  };