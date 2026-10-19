
/* Import React state for the mobile navigation menu. */
import { useState } from "react";

/* Import icons used by the navbar. */
import { ArrowUpRight, Menu, X } from "lucide-react";

/* Build the responsive VELOCITY navigation bar. */
export default function Navbar() {
  /* Track whether the mobile navigation menu is open. */
  const [menuOpen, setMenuOpen] = useState(false);

  /* Keep navigation links in one place for desktop and mobile. */
  const navLinks = [
    { label: "Surface Lab", href: "#surface-lab" },
    { label: "Services", href: "#services" },
    
    { label: "Our Work", href: "#transformation" },
  ];

  return (
    /* Fix the entire header, including its mobile menu, to the viewport. */
    <header className="fixed inset-x-0 top-0 z-[100] w-full border-b border-white/60 bg-[#E9EDF2]/70 shadow-sm backdrop-blur-2xl">
      {/* Center the navigation content within the maximum page width. */}
      <nav
        className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-5 py-4 sm:px-8 lg:px-14"
        aria-label="Main navigation"
      >
        {/* Brand identity and compact logo mark. */}
        <a href="#home" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center border border-[#C7D0D9] bg-white">
            <span className="text-lg font-black tracking-tighter text-[#277BFF]">
              V.
            </span>
          </div>

          <div className="leading-none">
            <span className="block text-[15px] font-black tracking-[0.2em] text-[#17202B]">
              VELOCITY
            </span>
            <span className="mt-1.5 block text-[9px] font-semibold tracking-[0.28em] text-[#687786]">
              AUTOCARE STUDIO
            </span>
          </div>
        </a>

        {/* Desktop navigation links. */}
        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#687786] transition-colors duration-200 hover:text-[#277BFF]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop call-to-action button. */}
        <a
          href="#configurator"
          className="hidden items-center gap-3 bg-[#17202B] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.15em] text-white transition-colors duration-200 hover:bg-[#277BFF] sm:flex"
        >
          Configure Your Detail
          <ArrowUpRight size={15} />
        </a>

        {/* Mobile menu toggle. */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center border border-[#C7D0D9] text-[#17202B] transition-colors hover:border-[#277BFF] hover:text-[#277BFF] sm:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Expandable mobile navigation stays attached to the fixed header. */}
      {menuOpen && (
        <div className="border-t border-[#17202B]/10 bg-[#E9EDF2] px-5 py-5 sm:hidden">
          <div className="flex flex-col">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center justify-between py-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#687786] transition-colors hover:text-[#277BFF] ${
                  index !== navLinks.length - 1
                    ? "border-b border-[#17202B]/10"
                    : ""
                }`}
              >
                {link.label}
                <ArrowUpRight size={15} />
              </a>
            ))}

            {/* Mobile call-to-action. */}
            <a
              href="#configurator"
              onClick={() => setMenuOpen(false)}
              className="mt-5 flex items-center justify-between bg-[#17202B] px-5 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#277BFF]"
            >
              Configure Your Detail
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
