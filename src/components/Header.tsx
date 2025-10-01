"use client";
import "./header-animations.css";

import type { SVGProps } from "react";
import Image from "next/image";
import { useState } from "react";
import { socialIcons } from "./socialIcons";
import { navLinks } from "@/constants/navLinks";

const eventTitle = "Takeoff Business Conclave & Expedition to Explore Dubai";
const eventLocation = [
  "Dubai World Trade Centre",
  "Sheikh Zayed Rd, Dubai, UAE",
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="fixed top-0 left-0 w-full z-50 bg-background text-foreground px-0 sm:px-0 lg:px-0  ">
      {/* Top Event Bar */}
      <header className="w-full border-b border-border bg-white/80 backdrop-blur-md z-30 sticky top-0">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between px-4 sm:px-8 lg:px-20 py-2 gap-2">
          {/* Desktop: event title left, location right of title, icons far right. Mobile: icons centered. */}
          <div className="flex w-full items-center justify-between">
            {/* Left section: event title and location (desktop only) */}
            <div className="hidden md:flex items-center min-w-0">
              <h2 className="text-base  not-italic font-medium text-[#22302d] bg-white px-3 py-1">
                {eventTitle}
              </h2>
            </div>
            {/* Mobile: only show icons centered in top bar, no event title/location */}
            <div className="flex-1 flex md:hidden justify-center py-2">
              <div className="flex gap-2">
                {socialIcons.map(({ name, icon: Icon, href }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-white shadow hover:bg-[#178a86] hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
            {/* Desktop: icons on far right */}
            <div className="hidden md:flex gap-2 ml-4">
              {socialIcons.map(({ name, icon: Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-white shadow hover:bg-[#178a86] hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main Header: Logo, Nav, Contact */}
      <div className="border-b border-border bg-background w-full">
        <div className="mx-auto flex w-full items-center justify-between px-4 sm:px-8 lg:px-20 py-5">
          <div className="flex items-center gap-8">
            <Logo />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex flex-1 justify-center">
            <ul className="flex items-center gap-2 text-base">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <a
                    className="inline-flex items-center rounded-full border border-[#E6E6E6] px-6 py-2 text-base font-medium text-[#243533] bg-white hover:bg-[#F5F5F5] transition"
                    href={link.href}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {/* Contact Button */}
          <div className="hidden md:flex">
            <a
              className="inline-flex items-center gap-3 rounded-full px-8 py-3 text-base font-semibold text-white shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#359D9E] focus-visible:ring-offset-2 bg-[#359D9E] hover:brightness-105"
              href="#"
            >
              Contact
              <ArrowRightIcon className="h-5 w-5" aria-hidden />
            </a>
          </div>
          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex items-center justify-center rounded-full border border-[#E6E6E6] p-2 bg-white"
            aria-label="Open menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg
              width="28"
              height="28"
              fill="none"
              stroke="#243533"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-2 pt-2 pb-4 bg-white/95 shadow-lg rounded-b-xl animate-slide-fade-in">
            {/* No social icons here on mobile menu */}
            <nav>
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      className="block w-full rounded-full border border-[#E6E6E6] px-6 py-3 text-base font-medium text-[#243533] bg-white hover:bg-[#F5F5F5] transition"
                      href={link.href}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <a
              className="mt-4 block w-full text-center rounded-full px-8 py-3 text-base font-semibold text-white shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#359D9E] focus-visible:ring-offset-2 bg-[#359D9E] hover:brightness-105"
              href="#"
            >
              Contact{" "}
              <ArrowRightIcon className="inline h-5 w-5 ml-2" aria-hidden />
            </a>
          </div>
        )}
      </div>
    </main>
  );
}

function Logo() {
  return (
    <Image
      src="/logo.png"
      alt="Take Off Business Network Logo"
      height={48}
      width={160}
      className="h-8 sm:h-8 w-auto object-contain"
      priority
    />
  );
}

function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5.25c0-1.243 1.007-2.25 2.25-2.25h1.072c.98 0 1.833.66 2.072 1.607l.59 2.36a2.25 2.25 0 0 1-.567 2.132l-1 1a13.5 13.5 0 0 0 6.724 6.724l1-1a2.25 2.25 0 0 1 2.132-.567l2.36.59a2.25 2.25 0 0 1 1.607 2.072V18.75A2.25 2.25 0 0 1 19.5 21h-1.5C9.94 21 3 14.06 3 5.25Z"
      />
    </svg>
  );
}

function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 7.5c0-1.243 1.007-2.25 2.25-2.25h13.5c1.243 0 2.25 1.007 2.25 2.25v9c0 1.243-1.007 2.25-2.25 2.25h-13.5A2.25 2.25 0 0 1 3 16.5v-9Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 7.5 7.5 6 7.5-6"
      />
    </svg>
  );
}

function PinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21c-3.867-3.154-6-6.049-6-8.713A6 6 0 1 1 18 12.287C18 14.95 15.867 17.846 12 21Z"
      />
      <circle cx={12} cy={10.5} r={2.25} />
    </svg>
  );
}

function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12h14M13 6l6 6-6 6"
      />
    </svg>
  );
}
