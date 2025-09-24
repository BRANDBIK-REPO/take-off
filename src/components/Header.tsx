import type { SVGProps } from "react"

const contactItems = [
  {
    label: "Call",
    lines: ["+91 914 564 4568", "+91 859 036 9978"],
    Icon: PhoneIcon,
  },
  {
    label: "Email",
    lines: ["info@takeoffbusinessnetwork.com"],
    Icon: MailIcon,
  },
  {
    label: "Location",
    lines: ["Dubai World Trade Centre", "Sheikh Zayed Rd, Dubai, UAE"],
    Icon: PinIcon,
  },
]

const navLinks = ["Home", "About", "Verticals", "Membership", "Events", "Community"]

export default function Header() {
  return (
    <main className="bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-3 md:flex-row md:items-center md:justify-between">
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
            {contactItems.map(({ label, lines, Icon }) => (
              <div key={label} className="flex items-start gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-muted text-foreground">
                  <Icon className="h-4 w-4" aria-hidden />
                </span>
                <div className="space-y-1">
                  <span className="text-[0.65rem] uppercase tracking-[0.35em] text-muted-foreground">{label}</span>
                  {lines.map((line) => (
                    <p key={line} className="text-sm font-medium text-foreground">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-end">
            <span className="text-xs font-semibold uppercase tracking-[0.45em] text-muted-foreground">ENG</span>
          </div>
        </div>
      </header>

      <div className="border-b border-border bg-background">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-5 md:flex-row md:items-center md:justify-between">
          <Logo />
          <nav className="w-full md:flex-1">
            <ul className="flex min-w-max flex-nowrap items-center gap-3 overflow-x-auto pb-1 md:justify-center md:pb-0">
              {navLinks.map((link, index) => (
                <li key={link} className="flex-shrink-0">
                  <a
                    className={[
                      "inline-flex items-center rounded-full border border-border px-6 py-2 text-sm font-medium transition-colors",
                      index === 0
                        ? "bg-muted text-foreground"
                        : "bg-background text-muted-foreground hover:border-accent hover:text-foreground",
                    ].join(" ")}
                    href="#"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex justify-start md:justify-end">
            <a
              className="inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-sm transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              href="#"
            >
              Contact
              <ArrowRightIcon className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

function Logo() {
  return (
    <div className="flex flex-col gap-1 text-foreground">
      <div className="flex items-center gap-2 text-lg font-semibold uppercase tracking-[0.55em]">
        <span>TAKE</span>
        <span className="inline-flex items-center gap-2">
          <span>-</span>
          <span>OFF</span>
          <span className="inline-block h-2 w-2 rotate-45 rounded-sm bg-[var(--color-highlight)]" aria-hidden />
        </span>
      </div>
      <span className="text-[0.65rem] uppercase tracking-[0.4em] text-muted-foreground">Business Network</span>
    </div>
  )
}

function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5.25c0-1.243 1.007-2.25 2.25-2.25h1.072c.98 0 1.833.66 2.072 1.607l.59 2.36a2.25 2.25 0 0 1-.567 2.132l-1 1a13.5 13.5 0 0 0 6.724 6.724l1-1a2.25 2.25 0 0 1 2.132-.567l2.36.59a2.25 2.25 0 0 1 1.607 2.072V18.75A2.25 2.25 0 0 1 19.5 21h-1.5C9.94 21 3 14.06 3 5.25Z"
      />
    </svg>
  )
}

function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 7.5c0-1.243 1.007-2.25 2.25-2.25h13.5c1.243 0 2.25 1.007 2.25 2.25v9c0 1.243-1.007 2.25-2.25 2.25h-13.5A2.25 2.25 0 0 1 3 16.5v-9Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 7.5 7.5 6 7.5-6" />
    </svg>
  )
}

function PinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21c-3.867-3.154-6-6.049-6-8.713A6 6 0 1 1 18 12.287C18 14.95 15.867 17.846 12 21Z"
      />
      <circle cx={12} cy={10.5} r={2.25} />
    </svg>
  )
}

function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}
