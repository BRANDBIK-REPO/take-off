"use client";

import Image from "next/image";
import { Event } from "@/types/events";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";

interface EventCardProps {
  event: Event;
  onRegister?: (eventId: string) => void;
}

export default function EventCard({ event, onRegister }: EventCardProps) {
  const handleRegister = () => {
    if (onRegister) {
      onRegister(event.id);
    }
  };

  return (
    <div className="bg-white border border-border overflow-hidden rounded  transition-all duration-300 group p-6">
      <div className="relative overflow-hidden">
        <div className="relative">
          <Image
            src="/event-dummy.png"
            alt={event.title}
            width={475}
            height={317}
            className="object-cover group-hover:scale-105 w-full transition-transform duration-300"
          />
        </div>

        <div className="absolute bottom-4 left-4 z-10 ">
          <div>
            <div className="flex gap-2 items-center h-[57px] w-[124px] px-5 py-4 bg-[#D9D9D9]/50 rounded">
              <div className="text-2xl font-bold text-white">
                {event.date.split(" ")[0]}
              </div>
              <div className="text-2xl text-white font-bold">
                {event.date.split(" ")[1]}
              </div>
            </div>
          </div>
          <div className="mt-7 space-y-1">
            <p className="text-lg lg:text-xl font-medium text-white">
              {event.title}
            </p>
            <p className="text-sm text-white">{event.category}</p>
          </div>
        </div>

        <div className="absolute top-4 right-4 z-10">
          <span
            className={`px-6 py-1 rounded text-xs font-normal bg-[#C09755] text-white`}
          >
            {event.featured ? "Featured" : event.category}
          </span>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#359D9E] to-transparent" />
      </div>

      <div className="gap-4 pt-7 pb-3 flex flex-wrap items-center">
        <div className="flex items-center gap-2 text-sm text-[#354C4C]/50">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12,6 12,12 16,14" />
          </svg>
          <span>{event.time}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-[#354C4C]/50">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span className="line-clamp-1">{event.location}</span>
        </div>
      </div>

      <p className="text-sm lg:text-base text-[#506767] mb-auto line-clamp-3 leading-relaxed">
        {event.description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between mt-10">
        <div className="text-lg lg:text-2xl font-medium text-black">
          {event.currency} {event.price}
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={handleRegister}
            className="bg-[#215273] hover:bg-[#215273]/90 text-white px-6 py-2  rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 group/btn"
          >
            Register Now
            <ArrowRightIcon
              width={7}
              height={7}
              className="fill-white group-hover/btn:translate-x-2 transition-all duration-300"
            />
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            className=""
            height="22"
            viewBox="0 0 27 27"
            fill="none"
          >
            <path
              d="M25.4703 0.959961H12.4783C12.1337 0.959961 11.8033 1.09684 11.5596 1.34049C11.316 1.58414 11.1791 1.91459 11.1791 2.25916C11.1791 2.60373 11.316 2.93419 11.5596 3.17784C11.8033 3.42148 12.1337 3.55836 12.4783 3.55836H22.334L1.16616 24.7263C1.04208 24.8461 0.943099 24.9895 0.875009 25.148C0.806919 25.3065 0.771079 25.477 0.76958 25.6495C0.768081 25.822 0.800953 25.9931 0.866278 26.1528C0.931603 26.3124 1.02807 26.4575 1.15006 26.5795C1.27204 26.7015 1.4171 26.7979 1.57677 26.8633C1.73644 26.9286 1.90751 26.9614 2.08002 26.96C2.25253 26.9585 2.42301 26.9226 2.58152 26.8545C2.74002 26.7864 2.88338 26.6875 3.00323 26.5634L24.1711 5.39543V15.2512C24.1711 15.5958 24.308 15.9262 24.5516 16.1699C24.7953 16.4135 25.1257 16.5504 25.4703 16.5504C25.8149 16.5504 26.1453 16.4135 26.389 16.1699C26.6326 15.9262 26.7695 15.5958 26.7695 15.2512V2.25916C26.7695 1.91459 26.6326 1.58414 26.389 1.34049C26.1453 1.09684 25.8149 0.959961 25.4703 0.959961Z"
              fill="#354C4C"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
