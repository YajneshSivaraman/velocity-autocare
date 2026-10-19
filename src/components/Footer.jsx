// Import Motion for the footer's entrance animation.
import { motion } from "motion/react";

// Import icons for links and contact actions.
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

// Build the VELOCITY AUTOCARE footer and final call to action.
export default function Footer() {
  // Replace these demo details with the real business information.
  const whatsappNumber = "917010508392";
  const phoneNumber = "+917010508392";

  // Create a prefilled WhatsApp message for prospective customers.
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hello VELOCITY AUTOCARE! I'd like to enquire about your detailing services.",
  )}`;

  // Keep the footer navigation links together for easy editing.
  const footerLinks = [
    { label: "Home", href: "#home" },
    { label: "Surface Lab", href: "#surface-lab" },
    { label: "Services", href: "#services" },
    { label: "Our Work", href: "#transformation" },
    { label: "Configure", href: "#configurator" },
  ];

  return (
    <footer className="overflow-hidden bg-[#F5F7FA] text-[#17202B]">
      {/* Final call-to-action section before the footer details. */}
      <section className="relative overflow-hidden border-t border-[#DCE2E9]">
        {/* Decorative technical grid. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "linear-gradient(to right, #DCE2E9 1px, transparent 1px)",
            backgroundSize: "calc(100% / 12) 100%",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-28 lg:px-14 lg:py-36"
        >
          {/* Small section identifier. */}
          <div className="mb-7 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#277BFF]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#687786]">
              Your next drive starts here
            </span>
          </div>

          {/* Oversized closing headline. */}
          <h2 className="max-w-6xl text-[clamp(3.3rem,10vw,9rem)] font-black uppercase leading-[0.82] tracking-[-0.085em]">
            Ready for
            <span className="block text-[#277BFF]">the next level?</span>
          </h2>

          {/* Supporting copy and enquiry button. */}
          <div className="mt-9 flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
            <p className="max-w-md text-sm leading-7 text-[#687786] sm:text-base">
              Tell us about your vehicle. We'll help you explore the right
              detailing and protection options for your needs.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit items-center gap-5 bg-[#277BFF] px-6 py-5 text-[10px] font-bold uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:bg-[#17202B]"
            >
              <MessageCircle size={17} />
              Start an enquiry
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Main footer information area. */}
      <div className="border-t border-[#DCE2E9] bg-white">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-14">
          <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10 lg:py-20">
            {/* Brand identity and short description. */}
            <div className="lg:col-span-5">
              <a href="#home" className="inline-flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center border border-[#C7D0D9] text-xl font-black tracking-tighter text-[#277BFF]">
                  V.
                </span>

                <span>
                  <span className="block text-base font-black tracking-[0.2em]">
                    VELOCITY
                  </span>
                  <span className="mt-1 block text-[9px] font-semibold tracking-[0.28em] text-[#687786]">
                    AUTOCARE STUDIO
                  </span>
                </span>
              </a>

              <p className="mt-6 max-w-sm text-sm leading-7 text-[#687786]">
                Automotive surface care with a focus on preparation,
                precision, and protection. Built around the details that
                matter.
              </p>

              {/* Brand positioning label. */}
              <div className="mt-7 flex items-center gap-3">
                <span className="h-2 w-2 bg-[#277BFF]" />
                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#687786]">
                  Precision in motion.
                </span>
              </div>
            </div>

            {/* Quick navigation links. */}
            <div className="lg:col-span-3">
              <h3 className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#687786]">
                Explore
              </h3>

              <ul className="space-y-4">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-sm font-semibold text-[#17202B] transition-colors hover:text-[#277BFF]"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={13}
                        className="opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact information. */}
            <div className="lg:col-span-4">
              <h3 className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#687786]">
                Contact
              </h3>

              <div className="space-y-5">
                <a
                  href={`tel:${phoneNumber}`}
                  className="group flex items-start gap-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#DCE2E9] text-[#277BFF] transition-colors group-hover:border-[#277BFF]">
                    <Phone size={16} />
                  </span>

                  <span>
                    <span className="block text-[9px] font-semibold uppercase tracking-[0.15em] text-[#687786]">
                      Call us
                    </span>
                    <span className="mt-1 block text-sm font-semibold transition-colors group-hover:text-[#277BFF]">
                      {phoneNumber}
                    </span>
                  </span>
                </a>

                {/* Update this link with the business's real location. */}
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#DCE2E9] text-[#277BFF] transition-colors group-hover:border-[#277BFF]">
                    <MapPin size={16} />
                  </span>

                  <span>
                    <span className="block text-[9px] font-semibold uppercase tracking-[0.15em] text-[#687786]">
                      Visit the studio
                    </span>
                    <span className="mt-1 block text-sm font-semibold transition-colors group-hover:text-[#277BFF]">
                      View location
                    </span>
                  </span>
                </a>

                {/* Social link is a placeholder until the account is known. */}
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-4"
                >
                

                  <span>
                    <span className="block text-[9px] font-semibold uppercase tracking-[0.15em] text-[#687786]">
                      Follow our work
                    </span>
                    <span className="mt-1 block text-sm font-semibold transition-colors group-hover:text-[#277BFF]">
                      Instagram
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom legal and copyright bar. */}
          <div className="flex flex-col justify-between gap-4 border-t border-[#DCE2E9] py-6 sm:flex-row sm:items-center">
            <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#687786]">
              © {new Date().getFullYear()} VELOCITY AUTOCARE. All rights reserved.
            </p>

            <a
              href="#home"
              className="group inline-flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.15em] text-[#687786] transition-colors hover:text-[#277BFF]"
            >
              Back to top
              <span className="flex h-7 w-7 items-center justify-center border border-[#DCE2E9] transition-colors group-hover:border-[#277BFF]">
                <ArrowRight size={13} className="-rotate-45" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}