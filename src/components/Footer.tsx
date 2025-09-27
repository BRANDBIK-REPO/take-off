"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer
      aria-label="Site footer"
      className="footer-custom text-white"
      style={{ backgroundColor: "#215273" }}
    >
      {/* Newsletter bar */}
      <div className="w-full px-4 py-6 md:py-8 flex flex-col md:flex-row md:items-center md:justify-between max-w-7xl mx-auto gap-4 border-b border-[#2e5e7c]">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded bg-white/10">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3a5 5 0 0 0-5 5v2.764c0 .54-.214 1.059-.595 1.44L5 13.61V15h14v-1.39l-1.405-1.406A2.036 2.036 0 0 1 17 10.764V8a5 5 0 0 0-5-5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10 17a2 2 0 1 0 4 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </span>
          <span className="text-base md:text-lg text-white/90">Subscribe to our newsletter for more consulting update!</span>
        </div>
        <form onSubmit={e => e.preventDefault()} className="flex w-full md:w-auto max-w-md md:max-w-lg">
          <div className="flex w-full items-stretch rounded overflow-hidden bg-white">
            <input type="email" aria-label="Your email address" placeholder="Your email address" className="w-full px-4 py-2.5 text-base text-[#215273] placeholder-[#7a8b95] outline-none" required />
            <button type="submit" aria-label="Subscribe" className="flex items-center justify-center px-4 bg-[#C09755] hover:bg-[#b18a4b] transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </form>
      </div>

      {/* Main footer content */}
      <div className="w-full px-4 py-10 md:py-14 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          {/* Brand column */}
          <div className="flex-1 min-w-[220px] max-w-md">
            <div className="mb-4">
              <Image src="/white-logo.png" alt="TakeOff Business Network" width={180} height={40} className="h-10 w-auto object-contain" />
            </div>
            <p className="text-base text-white/80 leading-relaxed mb-5">
              TakeOff empowers startups and businesses to transform bold ideas into sustainable growth. We connect visionaries, provide strategic guidance, and accelerate your journey from concept to execution.
            </p>
            <div className="flex gap-3">
              <SocialCircle href="#" label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M13 10h3V7h-3V6a1 1 0 0 1 1-1h2V2h-2a4 4 0 0 0-4 4v1H8v3h2v8h3v-8z" /></svg>
              </SocialCircle>
              <SocialCircle href="#" label="X">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5"><path d="M18 3h3l-7.5 8.6L22 21h-6l-4-5-4.6 5H2l8.3-9.2L2 3h6l3.7 4.6L18 3z" /></svg>
              </SocialCircle>
              <SocialCircle href="#" label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM18.5 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" /></svg>
              </SocialCircle>
            </div>
          </div>
          {/* Links columns */}
          <div className="flex-[2] grid grid-cols-1 sm:grid-cols-3 gap-8">
            <FooterLinks title="Company" links={[
              { label: "About TakeOff", href: "#" },
              { label: "Our Team", href: "#" },
              { label: "Careers", href: "#" },
              { label: "Case Studies", href: "#" },
              { label: "Contact us", href: "#" },
            ]} />
            <FooterLinks title="What We Do" links={[
              { label: "Startup Consulting", href: "#" },
              { label: "Fundraising Support", href: "#" },
              { label: "Business Strategy", href: "#" },
              { label: "Technology Solutions", href: "#" },
              { label: "Financial Advisory", href: "#" },
            ]} />
            <FooterLinks title="Resources" links={[
              { label: "Blog & Insights", href: "#" },
              { label: "FAQs", href: "#" },
              { label: "Privacy Policy", href: "#" },
              { label: "Terms & Conditions", href: "#" },
              { label: "Cookie Policy", href: "#" },
            ]} />
          </div>
        </div>
  <div className="mt-10 text-center text-sm text-white/60">
          © 2025 <span className="font-semibold">TakeOff Business Network</span>. All Rights Reserved.
        </div>
      </div>
      <style jsx global>{`
        .footer-custom {
          font-family: 'WantedSans-Regular', 'Inter', Arial, sans-serif;
        }
        @media (max-width: 768px) {
          .footer-custom .flex-row, .footer-custom .md\:flex-row {
            flex-direction: column !important;
            gap: 2rem !important;
          }
          .footer-custom .grid-cols-3, .footer-custom .sm\:grid-cols-3 {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .footer-custom .max-w-md, .footer-custom .min-w-40 {
            min-width: 0 !important;
            max-width: 100% !important;
          }
          .footer-custom .px-4 {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
        }
      `}</style>
    </footer>
  );
}

function FooterLinks(props: {
  title: string
  links: { label: string; href: string }[]
}) {
  return (
    <nav aria-label={props.title} className="min-w-40">
  <div className="mb-6 text-lg font-semibold text-white/90">{props.title}</div>
      <ul className="space-y-3">
        {props.links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="text-base leading-6 text-white/70 hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function SocialCircle({
  children,
  href,
  label,
}: {
  children: React.ReactNode
  href: string
  label: string
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
    >
      {children}
    </Link>
  )
}
