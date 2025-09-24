export default function MembershipPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Desktop and Tablet Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Section - Menu */}
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-light text-gray-300 mb-8">01</h2>

              <div className="space-y-3">
                {/* Active Item - Events & Webinars */}
                <div className="bg-amber-600 text-white px-4 py-3 rounded">
                  <span className="font-medium">Events & Webinars</span>
                </div>

                {/* Menu Items */}
                <div className="px-4 py-3 text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors">
                  <span>Business Referrals</span>
                </div>

                <div className="px-4 py-3 text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors">
                  <span>Speaking Opportunities</span>
                </div>

                <div className="px-4 py-3 text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors">
                  <span>Mentorship Access</span>
                </div>

                <div className="px-4 py-3 text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors">
                  <span>Spotlight Saturday</span>
                </div>
              </div>

              {/* View More Button */}
              <div className="mt-8">
                <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full font-medium transition-colors inline-flex items-center gap-2">
                  View more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-6">
            {/* Why Become a Member Section */}
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-4">Why Become a Member?</h3>

              <div className="bg-slate-700 text-white p-6 md:p-8 rounded-lg relative">
                {/* Quote marks */}
                <div className="absolute top-4 left-4 text-4xl text-slate-500 font-serif">&#34;</div>
                <div className="absolute bottom-4 right-4 text-4xl text-slate-500 font-serif">&rdquo;</div>

                <div className="relative z-10">
                  <p className="text-xl md:text-2xl font-light italic leading-relaxed text-balance">
                    The more I give to this Network, the more I grow with this network.
                  </p>
                </div>
              </div>
            </div>

            {/* Events & Webinars Detail Section */}
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                {/* Image with overlay */}
                <div className="relative flex-shrink-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden">
                    <img
                      src="/images/business-meeting.png"
                      alt="Business networking meeting"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* 01 Overlay */}
                  <div className="absolute -bottom-2 -right-2 bg-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center shadow-lg border">
                    <span className="text-xs md:text-sm font-bold text-gray-600">01</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">Events & Webinars</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Join the TakeOff community and start building meaningful relationships with entrepreneurs, SMEs, and
                    professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Optimized Layout - Stacked */}
        <div className="block sm:hidden mt-8">
          {/* Mobile: Events & Webinars Detail comes first for better UX */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="text-center">
              <div className="relative inline-block mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto">
                  <img
                    src="/images/business-meeting.png"
                    alt="Business networking meeting"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-white rounded-full w-6 h-6 flex items-center justify-center shadow-lg border">
                  <span className="text-xs font-bold text-gray-600">01</span>
                </div>
              </div>

              <h4 className="text-lg font-semibold text-gray-900 mb-2">Events & Webinars</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Join the TakeOff community and start building meaningful relationships with entrepreneurs, SMEs, and
                professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
