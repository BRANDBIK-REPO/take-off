import React, { useRef } from "react";

interface ReviewInfoProps {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    location: string;
  };
  businessInfo: {
    company: string;
    position: string;
    industry: string;
    companySize: string;
  };
  membership: {
    type: string;
    interests: string;
    heardAbout: string;
  };
  onEdit: (section: "personal" | "business" | "membership") => void;
  onSubmit: () => void;
  onPrevious: () => void;
}

const ReviewInfo: React.FC<ReviewInfoProps> = ({
  personalInfo,
  businessInfo,
  membership,
  onEdit,
  onSubmit,
  onPrevious,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePrevious = () => {
    // Scroll the window to the top for mobile and desktop
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    onPrevious();
  };
  return (
    <div ref={containerRef} className="p-2 xs:p-3 sm:p-4 md:p-8 transition-all duration-300">
      <div className="flex flex-col xs:flex-row items-start justify-between mb-5 md:mb-6 gap-2">
        <div>
          <div className="text-sm font-  text-black mb-1">Review Your Information</div>
          <p className="text-sm  text-[#506767]">Please review your information before submitting</p>
        </div>
      </div>
      {/* Personal Info */}
      <div className="mb-4 md:mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="font-  text-black text-sm">01 - Personal Info</span>
          <button className="text-[#506767] text-sm font-semibold hover:underline" onClick={() => onEdit("personal")}>Edit</button>
        </div>
  <div className="grid grid-cols-1 gap-x-4 gap-y-1 text-sm text-[#506767]">
          <div>Name : <span className="font-normal">{personalInfo.name}</span></div>
          <div>Email : <span className="font-normal">{personalInfo.email}</span></div>
          <div>Phone : <span className="font-normal">{personalInfo.phone}</span></div>
          <div>Location : <span className="font-normal">{personalInfo.location}</span></div>
        </div>
      </div>
      {/* Business Info */}
      <div className="mb-4 md:mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="font-  text-black text-sm">02 - Business Info</span>
          <button className="text-[#506767] text-sm font-semibold hover:underline" onClick={() => onEdit("business")}>Edit</button>
        </div>
  <div className="grid grid-cols-1 gap-x-4 gap-y-1 text-sm text-[#506767]">
          <div>Company : <span className="font-normal">{businessInfo.company}</span></div>
          <div>Position : <span className="font-normal">{businessInfo.position}</span></div>
          <div>Industry : <span className="font-normal">{businessInfo.industry}</span></div>
          <div>Company Size : <span className="font-normal">{businessInfo.companySize}</span></div>
        </div>
      </div>
      {/* Membership Interests */}
      <div className="mb-4 md:mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="font-  text-black text-sm">03 - Membership Interests</span>
          <button className="text-[#506767] text-sm font-semibold hover:underline" onClick={() => onEdit("membership")}>Edit</button>
        </div>
  <div className="grid grid-cols-1 gap-x-4 gap-y-1 text-sm text-[#506767]">
          <div>Membership Type : <span className="font-normal">{membership.type}</span></div>
          <div>Interests : <span className="font-normal">{membership.interests}</span></div>
          <div>How you heard about us : <span className="font-normal">{membership.heardAbout}</span></div>
        </div>
      </div>
      {/* Next Steps Box */}
      <div className="bg-[#E5EBEA] border border-[#E5E7EB] rounded-[6px] p-3 xs:p-4 mb-6 md:mb-8">
  <div className="font-  text-black mb-2 text-sm">Next Steps</div>
  <ul className="list-disc pl-4 text-xs text-[#506767] space-y-1">
          <li>Your application will be reviewed by our team within 48 hours</li>
          <li>You&#39;ll receive a confirmation email with further instructions</li>
          <li>Approved members will receive a secure payment link</li>
          <li>Welcome to the TakeOff community!</li>
        </ul>
      </div>
      {/* Actions */}
  <div className="flex flex-row items-center justify-between gap-3 xs:gap-4 w-full mt-2 xs:mt-4">
        <button
          onClick={handlePrevious}
          className="group inline-flex justify-between items-center gap-2 rounded-full border border-[#215273] px-3 h-10 text-[#215273] text-sm font-semibold bg-white hover:bg-[#f5f7fa] transition-all"
          style={{ minWidth: 90 }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#215273" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Previous
        </button>
        <button
          onClick={onSubmit}
          className="group inline-flex justify-between items-center gap-2 rounded-full bg-[#008373] px-3 h-10 text-white text-sm font-semibold shadow-[0_10px_20px_rgba(0,131,115,0.10)] hover:shadow-[0_12px_24px_rgba(0,131,115,0.18)] transition-all"
          style={{ minWidth: 120 }}
        >
          Submit  
          <span
            aria-hidden="true"
            className="inline-grid size-5 place-items-center rounded-full border border-white/25 bg-[#008373]"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              className="transition-transform duration-300"
            >
              <circle cx="12" cy="12" r="11" stroke="#fff" strokeWidth="2" fill="#008373" />
              <path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>
      </div>

    </div>
  );
}

export default ReviewInfo;
