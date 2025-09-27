import React from "react";

// Reuse the Field component from MembershipForm for consistent design
type FieldOption = { value: string; label: string };
type FieldProps = {
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  id: string;
  as?: 'input' | 'select';
  options?: FieldOption[];
  className?: string;
};

function Field({
  label,
  placeholder = '',
  type = 'text',
  required = false,
  id,
  as = 'input',
  options = [],
  className = '',
}: FieldProps) {
  return (
    <label htmlFor={id} className={`flex flex-col gap-1.5 text-xs text-[#215273] ${className}`}>
      <span className="font-normal text-sm text-black">{label}</span>
      {as === 'select' ? (
        <div className="relative group">
          <select
            id={id}
            className="h-12 border border-gray-400 bg-white/95 px-3 pr-8 focus:outline-none focus:ring-2 focus:ring-[#215273]/20 focus:border-[#215273] transition-all appearance-none w-full text-sm not-italic font-normal rounded-[2px] shadow-none hover:border-[#215273] hover:bg-[#f5f7fa] text-sm text-[#215273] placeholder:text-[#6B7280]"
            required={required}
            style={{ WebkitAppearance: 'none', MozAppearance: 'none', appearance: 'none' }}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[#215273]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#215273" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
          </span>
        </div>
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          required={required}
          className="h-12 rounded-[2px] border border-gray-400 bg-white/95 px-3 focus:outline-none focus:ring-1 focus:border-[#215273] transition-all text-sm text-[#215273] placeholder:text-[#6B7280]"
        />
      )}
    </label>
  );
}

export default function BusinessInfoForm() {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 sm:gap-x-8 sm:gap-y-6 md:gap-x-12 md:gap-y-8 animate-fade-in transition-all duration-300">
      <Field id="companyName" label="Company Name *" required placeholder="Your company name" />
      <Field id="position" label="Your Position *" required placeholder="CEO, Founder, Director, etc." />
      <Field
        id="industry"
        label="Industry *"
        as="select"
        required
        options={[
          { value: "", label: "Select your industry" },
          { value: "tech", label: "Technology" },
          { value: "finance", label: "Finance" },
          { value: "health", label: "Healthcare" },
          { value: "other", label: "Other" },
        ]}
      />
      <Field
        id="companySize"
        label="Company Size *"
        as="select"
        required
        options={[
          { value: "", label: "Select company size" },
          { value: "1-10", label: "1-10" },
          { value: "11-50", label: "11-50" },
          { value: "51-200", label: "51-200" },
          { value: "201+", label: "201+" },
        ]}
      />
      <Field
        id="businessType"
        label="Business Type *"
        as="select"
        required
        options={[
          { value: "", label: "Select business type" },
          { value: "private", label: "Private" },
          { value: "public", label: "Public" },
          { value: "nonprofit", label: "Nonprofit" },
        ]}
      />
      <Field
        id="location"
        label="Primary Location *"
        as="select"
        required
        options={[
          { value: "", label: "Select location" },
          { value: "uae", label: "UAE" },
          { value: "ksa", label: "KSA" },
          { value: "other", label: "Other" },
        ]}
      />
      <Field id="website" label="Company Website" placeholder="www.yourcompany.com" className="sm:col-span-2" />
      <Field id="description" label="Company Description" placeholder="Brief description of your company and what you do..." className="sm:col-span-2" />
    </div>
  );
}
