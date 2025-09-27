 

export default function HomeBanner() {
  return (
    <main className="bg-background w-full pt-[110px]">
      <section
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '60px 0',
          maxWidth: '1400px',
          margin: '0 auto',
        }}
        className=""
      >
        <div className="flex flex-1 flex-col gap-8">
          <div className="space-y-6">
            <h1
              style={{
                color: '#215273',
                fontSize: '3.2rem',
                fontWeight: 700,
                lineHeight: 1.1,
                marginBottom: '24px',
                 
              }}
            >
              Your Flight to Success is<br />
              Ready for <span style={{ fontStyle: 'italic', fontWeight: 500 }}>TakeOff</span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              TakeOff is more than a network — it’s a launchpad for entrepreneurial growth.<br />
              We connect SMEs, founders, and professionals to think bigger, achieve more, and scale globally.
            </p>
            <button
              style={{
                background: '#215273',
                color: '#fff',
                border: 'none',
                borderRadius: '32px',
                padding: '16px 40px',
                fontSize: '1.1rem',
                fontWeight: 500,
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(33,82,115,0.08)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '40px',
                transition: 'background 0.2s',
              }}
            >
              Join the Community
              <span style={{ fontSize: '1.3rem', fontWeight: 700 }}>&rarr;</span>
            </button>
          </div>
          <p className="text-sm text-muted-foreground md:text-base">
            Connections | Knowledge | Opportunities | Visibility | Support | Growth
          </p>
        </div>
        {/* Right Side: Image */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <img
            src="/banner.png"
            alt="TakeOff Banner"
            style={{
              width: '90%',
              maxWidth: '600px',
              borderRadius: '40px',
              boxShadow: '0 4px 32px rgba(33,82,115,0.10)',
              objectFit: 'cover',
            }}
          />
        </div>
      </section>
    </main>
  );
}
 
