"use client"

import { useMemo, useState } from "react"

import dynamic from "next/dynamic"
const BusinessInfoForm = dynamic(() => import("./BusinessInfoForm"), { ssr: false })
const MembershipInterestsForm = dynamic(() => import("./MembershipInterestsForm"), { ssr: false })
import ReviewInfo from "./ReviewInfo";
 

// Local inline SVG for the top-right document icon
function DocIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      stroke="var(--brand)"
      strokeWidth="1.6"
    >
      <rect x="9" y="6" width="22" height="28" rx="2.5" />
      <path d="M14 12h12M14 17h12M14 22h12" />
      <path d="M24 29l4 0" />
      <path d="M24.5 26.5l3 5" />
    </svg>
  )
}

// Vertical/Horizontal stepper built manually with brand colors
function Stepper({
  current,
  onStepChange,
  className = "",
}: {
  current: number
  onStepChange?: (s: number) => void
  className?: string
}) {
  const steps = [1, 2, 3, 4]
  const progress = ((current - 1) / (steps.length - 1)) * 100

  return (
    <div
      className={`relative flex md:flex-col items-center md:items-start gap-2 md:gap-10 w-full ${className}`}
      aria-label="Progress"
      style={{ minHeight: 'auto' }}
    >
      {/* connecting line (desktop only) */}
      <div className="absolute left-1/2 -translate-x-1/2 md:left-[20px] md:translate-x-0 md:top-2 md:bottom-2 w-px md:h-[calc(100%-1rem)] bg-[#E5E7EB] md:block hidden" />
      {/* animated progress line (desktop only) */}
      <div
        className="absolute left-1/2 -translate-x-1/2 md:left-[20px] md:translate-x-0 top-0 w-px bg-[#C09755] transition-all duration-500 md:block hidden"
        style={{ height: `calc(${progress}% + 12px)` }}
      />
      {steps.map((s) => {
        const active = s === current
        const complete = s < current
        return (
          <button
            key={s}
            aria-current={active ? "step" : undefined}
            aria-label={`Step ${s}`}
            onClick={() => onStepChange?.(s)}
            className={[
              "relative z-10 size-10 rounded-full grid place-items-center",
              "transition-transform duration-300",
              active ? "scale-105" : "hover:scale-105",
            ].join(" ")}
            tabIndex={-1}
            style={{ cursor: "default" }}
          >
            <span
              className={[
                "size-10 rounded-full border-2 grid place-items-center font-medium",
                complete && (s === 1 || s === 2 || s === 3)
                  ? "bg-[#008373] border-[#008373] text-white animate-tick-in"
                  : active
                    ? "bg-[#C09755] border-[#C09755] text-white"
                    : "bg-white border-[#215273] text-[#215273]",
                "shadow-[0_1px_2px_rgba(0,0,0,0.06)]",
              ].join(" ")}
              style={{ fontWeight: 600, fontSize: 18, transition: 'background 0.4s, border 0.4s' }}
            >
              {(complete && (s === 1 || s === 2 || s === 3)) ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="animate-tick-check">
                  <circle cx="10" cy="10" r="9" fill="#008373" />
                  <path d="M6 10.5l2.5 2.5 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : s}
            </span>
          </button>
        )
      })}
    </div>
  )
}

function Field({
  label,
  placeholder,
  type = "text",
  required = false,
  id,
}: {
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  id: string;
}) {
  return (
    <label htmlFor={id} className="flex flex-col gap-1.5 text-xs text-[#215273]">
      <span className="font-normal text-sm text-black">{label}</span>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="h-12 rounded-[2px] border border-gray-400 bg-white/95 px-3 text-sm text-[#215273] placeholder:text-[#6B7280] focus:outline-none focus:ring-1 focus:border-[#215273] transition-all"
      />
    </label>
  );
}

export default function MembershipForm() {
  const [step, setStep] = useState(1)

  const title = useMemo(() => {
    switch (step) {
      case 1:
        return "01 - Personal Info"
      case 2:
        return "02 - Contact Details"
      case 3:
        return "03 - Background"
      case 4:
        return "04 - Review"
      default:
        return "01 - Personal Info"
    }
  }, [step])

  return (
    <section className="relative w-full overflow-visible min-h-[500px]   sm:px-4" style={{ color: "#215273" }}>
      {/* top-right floating document icon */}
      <DocIcon className="hidden md:block absolute top-2 right-8 opacity-60" />
      {/* Heading row */}
      <div className="flex flex-col sm:flex-row items-start justify-between mb-4 md:mb-14">
        <h2 className="text-balance w-full">
          <div className="flex flex-col xs:flex-row xs:items-end gap-0 xs:gap-2 w-full">
            <span className="block text-[#215273] text-[24px] xs:text-[26px] sm:text-[28px] md:text-[36px] leading-tight font-semibold not-italic">
              Become a
            </span>
            <span className="block text-[#215273] text-[24px] xs:text-[26px] sm:text-[28px] md:text-[44px] leading-tight mt-1 xs:mt-0">
              <span className="font-serif italic font-medium">TakeOff</span>{" "}
              <span className="font-serif font-medium not-italic">Member</span>
            </span>
          </div>
        </h2>
      </div>

      {/* Main layout: stepper + form card */}
      <div className="grid grid-cols-1 m md:grid-cols-[72px_minmax(0,1fr)] items-start gap-4 md:gap-16 w-full">
        {/* Mobile stepper on top (horizontal) */}
        <Stepper current={step} onStepChange={setStep} className="md:hidden justify-between w-full px-0 mb-4" />
        {/* Desktop stepper (vertical) */}
        <div className="hidden md:flex pt-2">
          <Stepper current={step} onStepChange={setStep} />
        </div>

        {/* Card */}
        <div
          className="bg-white border pt-8 border-[#E5E7EB] min-w-0 w-full max-w-3xl mx-auto rounded-[2px]  transition-all duration-300"
          role="region"
          aria-labelledby="apply-title"
        >
          {/* Floating title label at top left border */}
          <div className="relative">
            <div
              className="absolute -top-8 left-4 xs:left-6 bg-[#F8F8F8] px-4 xs:px-6 py-1 text-[#415A60] text-sm xs:text-base font-medium rounded-md shadow-sm"
              style={{ transform: 'translateY(-50%)', fontWeight: 500, letterSpacing: 0, zIndex: 10 }}
            >
              {title}
            </div>
          </div>

          {/* Form body */}
          <div className="p-2 xs:p-3 sm:p-4 md:p-8 transition-all duration-300">
            {step === 2 ? (
              <BusinessInfoForm />
            ) : step === 3 ? (
              <MembershipInterestsForm />
            ) : step === 4 ? (
              <ReviewInfo
                personalInfo={{
                  name: "David James",
                  email: "davidjames2001@gmail.com",
                  phone: "+971 123 456 7890",
                  location: "Saudi Arabia",
                }}
                businessInfo={{
                  company: "",
                  position: "",
                  industry: "",
                  companySize: "",
                }}
                membership={{
                  type: "",
                  interests: "",
                  heardAbout: "",
                }}
                onEdit={(section) => {
                  if (section === "personal") setStep(1);
                  else if (section === "business") setStep(2);
                  else if (section === "membership") setStep(3);
                }}
                onSubmit={() => alert("Application submitted!")}
                onPrevious={() => setStep(3)}
              />
            ) : (
              <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 sm:gap-x-8 sm:gap-y-6 md:gap-x-12 md:gap-y-8 animate-fade-in">
                <Field id="firstName" label="First Name *" required placeholder="Enter your first name" />
                <Field id="lastName" label="Last Name *" required placeholder="Enter your last name" />
                <Field id="email" label="Email Address" type="email" placeholder="youremail@company.com" />
                <Field id="phone" label="Phone Number" type="tel" placeholder="+971 50 123 4567" />
                <Field id="nationality" label="Nationality" placeholder="Your nationality" />
                <Field id="linkedin" label="LinkedIn Profile" placeholder="www.linkedin.com/in/yourprofile" />
              </div>
            )}

            {/* Actions */}
            {step !== 4 && (
              <div className="mt-8 flex flex-row items-center justify-between gap-4 transition-all duration-300 flex-nowrap w-full">
                {step > 1 && (
                  <button
                    onClick={() => {
                      if (typeof window !== "undefined") {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                      setStep((s) => Math.max(1, s - 1));
                    }}
                    className="cursor-pointer group inline-flex items-center gap-2 rounded-full border border-[#215273] px-4 h-10 text-[#215273] text-base font-semibold bg-white hover:bg-[#f5f7fa] transition-all"
                    style={{ minWidth: 90 }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#215273" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                    Previous
                  </button>
                )}
                <button
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                    setStep((s) => Math.min(4, s + 1));
                  }}
                  className="group cursor-pointer flex items-center justify-between rounded-full bg-[#215273] pl-4 pr-3 h-10 text-white text-base font-semibold shadow-[0_10px_20px_rgba(33,82,115,0.10)] hover:shadow-[0_12px_24px_rgba(33,82,115,0.18)] transition-all min-w-[120px]"
                  style={{ minWidth: 90 }}
                >
                  <span className="flex-1 text-left">Next</span>
                  <span
                    aria-hidden="true"
                    className="inline-grid size-6 place-items-center rounded-full border border-white/25 ml-6"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    >
                      <path d="M5 12h14M13 5l7 7-7 7" strokeWidth="2" />
                    </svg>
                  </span>
                </button>
                <div className="ml-4 text-xs text-[#215273] hidden md:block">Step {step} of 4</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}


