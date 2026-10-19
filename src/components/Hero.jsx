// Import Motion for smooth entrance animations.
import { motion } from "motion/react";

// Import icons for the hero section.
import { ArrowDownRight, ArrowUpRight, MoveRight } from "lucide-react";

// Hero section for the VELOCITY AUTOCARE website.
export default function Hero() {
  // WhatsApp enquiry link. Replace this number with the client's number.
  const whatsappLink =
    "https://wa.me/919876543210?text=Hello%20VELOCITY%20AUTOCARE%2C%20I%27d%20like%20to%20enquire%20about%20your%20detailing%20services.";

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#F5F7FA]"
    >
      {/* Subtle technical grid in the background. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, #DCE2E9 1px, transparent 1px)",
          backgroundSize: "calc(100% / 12) 100%",
        }}
      />

      {/* Main hero content container. */}
      <div className="relative mx-auto max-w-[1600px] px-5 pb-10 pt-12 sm:px-8 sm:pt-16 lg:px-14 lg:pt-20">
        {/* Small technical label above the headline. */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-7 flex items-center gap-3"
        >
          <span className="h-2 w-2 bg-[#277BFF]" />
          <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#687786] sm:text-[10px]">
            Automotive Surface Engineering / Est. 2020
          </span>
        </motion.div>

        {/* Oversized headline with contrasting typography. */}
        <div className="relative z-10 grid grid-cols-1 gap-7 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h1 className="max-w-4xl text-[clamp(3.5rem,10vw,9rem)] font-black uppercase leading-[0.82] tracking-[-0.085em] text-[#17202B]">
              Precision
              <span className="mt-2 block text-[#277BFF]">
                In Motion.
              </span>
            </h1>
          </motion.div>

          {/* Supporting copy and primary enquiry action. */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-md pb-1 lg:justify-self-end lg:pb-2"
          >
            <p className="max-w-sm text-sm leading-7 text-[#687786] sm:text-base">
              Advanced detailing. Engineered protection. A finish that
              commands attention long after the road ends.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-4 bg-[#277BFF] px-5 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:bg-[#17202B]"
              >
                Book a Consultation
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="#services"
                className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#17202B]"
              >
                Explore Services
                <MoveRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Cinematic automotive photograph. */}
        <motion.div
          initial={{ opacity: 0, scale: 1.035 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.25 }}
          className="group relative mt-12 overflow-hidden bg-[#C7D0D9] sm:mt-16 lg:mt-20"
        >
          {/* Main image with a restrained zoom on hover. */}
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2400&q=90"
            alt="Premium sports car photographed in dramatic lighting"
            className="h-[340px] w-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.035] sm:h-[460px] lg:h-[620px]"
          />

          {/* Light overlay preserves the cinematic look while keeping details visible. */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#101923]/70 via-transparent to-[#101923]/10" />

          {/* Thin electric-blue detail line. */}
          <div className="absolute left-0 top-0 h-[3px] w-1/3 bg-[#277BFF]" />

          {/* Image labels. */}
          <div className="absolute left-5 top-5 flex items-center gap-2 sm:left-8 sm:top-8">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#277BFF]" />
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white sm:text-[10px]">
              Surface / 001
            </span>
          </div>

          {/* Bottom image information. */}
          <div className="absolute inset-x-0 bottom-0 flex flex-col justify-between gap-6 p-5 sm:flex-row sm:items-end sm:p-8 lg:p-10">
            <div>
              <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/70">
                The VELOCITY Standard
              </p>
              <p className="max-w-xl text-2xl font-semibold tracking-tight text-white sm:text-4xl">
                More than a finish.
                <br />
                <span className="text-white/60">A layer of precision.</span>
              </p>
            </div>

            <a
              href="#surface-lab"
              className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/40 text-white transition-colors duration-300 hover:border-[#277BFF] hover:bg-[#277BFF]"
              aria-label="Explore the surface lab"
            >
              <ArrowDownRight size={21} />
            </a>
          </div>
        </motion.div>

        {/* Technical stats row below the image. */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 border-b border-[#DCE2E9] sm:grid-cols-4"
        >
          {[
            { value: "01", label: "Paint correction" },
            { value: "02", label: "Ceramic protection" },
            { value: "03", label: "Paint protection film" },
            { value: "04", label: "Interior restoration" },
          ].map((item) => (
            <div
              key={item.value}
              className="border-b border-[#DCE2E9] py-5 sm:border-b-0 sm:py-7"
            >
              <span className="block text-[10px] font-bold tracking-[0.15em] text-[#277BFF]">
                / {item.value}
              </span>
              <span className="mt-2 block text-[10px] font-semibold uppercase tracking-[0.08em] text-[#687786] sm:text-[11px]">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}