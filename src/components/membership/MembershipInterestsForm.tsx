import React from "react";

// Reuse the Field component from MembershipForm for consistent design
type FieldProps = {
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  id: string;
  as?: 'input' | 'textarea';
  className?: string;
  children?: React.ReactNode;
};

function Field({ label, placeholder = '', type = 'text', required = false, id, as = 'input', className = '', children }: FieldProps) {
  return (
    <label htmlFor={id} className={`flex flex-col gap-1.5 text-xs text-[#506767] ${className}`}>
      <span className="font-normal text-sm text-black">{label}</span>
      {children ? (
        children
      ) : as === 'textarea' ? (
        <textarea
          id={id}
          placeholder={placeholder}
          required={required}
          className="h-20 rounded-[2px] border border-gray-400 bg-white/95 px-3 py-2 focus:outline-none focus:ring-1 focus:border-[#506767] transition-all text-sm text-[#506767] placeholder:text-[#6B7280]"
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          required={required}
          className="h-12 rounded-[2px] border border-gray-400 bg-white/95 px-3 focus:outline-none focus:ring-1 focus:border-[#506767] transition-all text-sm text-[#506767] placeholder:text-[#6B7280]"
        />
      )}
    </label>
  );
}

export default function MembershipInterestsForm() {
  return (
    <div className="p-2 xs:p-3 sm:p-4 md:p-8 flex flex-col gap-6 xs:gap-8 transition-all duration-300">
      <div>
        <div className="text-black font-normal  text-sm mb-2 xs:mb-4">What TakeOff programs interest you most? *</div>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-2 xs:gap-3 md:gap-4">
          {/* ...checkboxes... */}
          <label className="flex items-center gap-2  text-sm font-normal">
            <input type="checkbox" className="accent-[#506767] w-4 h-4" /> TakeOff Connect - Networking Events
          </label>
          <label className="flex items-center gap-2  text-sm font-normal">
            <input type="checkbox" className="accent-[#506767] w-4 h-4" /> LaunchPad - Mentorship Program
          </label>
          <label className="flex items-center gap-2  text-sm font-normal">
            <input type="checkbox" className="accent-[#506767] w-4 h-4" /> Academy - Workshops & Certifications
          </label>
          <label className="flex items-center gap-2  text-sm font-normal">
            <input type="checkbox" className="accent-[#506767] w-4 h-4" /> Global Explore - Market Entry Tips
          </label>
          <label className="flex items-center gap-2  text-sm font-normal">
            <input type="checkbox" className="accent-[#506767] w-4 h-4" /> Capital Access - Investor Connects
          </label>
          <label className="flex items-center gap-2  text-sm font-normal">
            <input type="checkbox" className="accent-[#506767] w-4 h-4" /> Community - Digital Networking
          </label>
          <label className="flex items-center gap-2  text-sm font-normal">
            <input type="checkbox" className="accent-[#506767] w-4 h-4" /> Business and Brews
          </label>
          <label className="flex items-center gap-2  text-sm font-normal">
            <input type="checkbox" className="accent-[#506767] w-4 h-4" /> TakeOff Talks
          </label>
          <label className="flex items-center gap-2  text-sm font-normal">
            <input type="checkbox" className="accent-[#506767] w-4 h-4" /> Spotlight Saturdays
          </label>
          <label className="flex items-center gap-2  text-sm font-normal">
            <input type="checkbox" className="accent-[#506767] w-4 h-4" /> Pitch Club
          </label>
          <label className="flex items-center gap-2 text-sm font-normal">
            <input type="checkbox" className="accent-[#506767] w-4 h-4" /> Growth Circles
          </label>
          <label className="flex items-center gap-2 text-sm font-normal">
            <input type="checkbox" className="accent-[#506767] w-4 h-4" /> Public Speaking & Communication
          </label>
        </div>
      </div>
      <Field id="goals" label="What are your main business goals for the next 12 months? *" placeholder="Describe your key business objectives, challenges you want to overcome, or opportunities you want to explore..." />
      <Field id="referral" label="How did you hear about TakeOff? *" placeholder="Select referral source" />
      <Field
        id="volunteer"
        label="Would you be interested in volunteering for TakeOff events?"
        as="input"
        className="!mb-0"
      >
        <div className="flex gap-4 xs:gap-6 mt-1">
          <label className="flex items-center gap-2 text-xs font-normal">
            <input type="radio" name="volunteer" value="yes" className="accent-[#506767] w-4 h-4" /> Yes
          </label>
          <label className="flex items-center gap-2 text-xs font-normal">
            <input type="radio" name="volunteer" value="no" className="accent-[#506767] w-4 h-4" /> No
          </label>
        </div>
      </Field>
      <Field id="contribution" label="Do you have any suggestions or ideas on how you’d like to contribute to the TakeOff community?" as="textarea" placeholder="Share your ideas or suggestions..." />
    </div>
  );
}
