// Import Motion for smooth reveal animations.
import { motion } from "motion/react";

// Import icons for the technical feature cards.
import { ArrowUpRight, Check, ScanLine, ShieldCheck } from "lucide-react";

// Define the Surface Lab section of the VELOCITY website.
export default function SurfaceLab() {
  // Core detailing technologies showcased by the studio.
  const technologies = [
    {
      number: "01",
      title: "Paint Correction",
      description:
        "Refine the clear coat to reduce swirl marks, light scratches, and surface imperfections.",
    },
    {
      number: "02",
      title: "Ceramic Coating",
      description:
        "Add a durable protective layer that improves gloss and helps repel water and contaminants.",
    },
    {
      number: "03",
      title: "Paint Protection Film",
      description:
        "Protect vulnerable painted panels with a transparent film designed to absorb everyday impacts.",
    },
  ];

  return (
    <section
      id="surface-lab"
      className="relative overflow-hidden bg-white py-20 sm:py-28 lg:py-36"
    >
      {/* Fine background grid gives the section a technical character. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, #DCE2E9 1px, transparent 1px)",
          backgroundSize: "calc(100% / 12) 100%",
        }}
      />

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-14">
        {/* Section heading and introduction. */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-14 grid gap-7 lg:mb-20 lg:grid-cols-[1fr_0.65fr] lg:items-end"
        >
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#277BFF]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#687786]">
                The Surface Lab / 001
              </span>
            </div>

            <h2 className="max-w-4xl text-[clamp(2.8rem,7vw,6.5rem)] font-black uppercase leading-[0.88] tracking-[-0.075em] text-[#17202B]">
              Science behind
              <span className="block text-[#277BFF]">the shine.</span>
            </h2>
          </div>

          <div className="max-w-md lg:justify-self-end">
            <p className="text-sm leading-7 text-[#687786] sm:text-base">
              Every surface tells a story. We combine careful preparation,
              specialist techniques, and purpose-built protection to help
              preserve the finish of your vehicle.
            </p>

            <div className="mt-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#17202B]">
              <ScanLine size={17} className="text-[#277BFF]" />
              Precision at every layer
            </div>
          </div>
        </motion.div>

        {/* Main two-column layout: automotive imagery and technical details. */}
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* Left side: cinematic detailing photograph. */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="group relative min-h-[400px] overflow-hidden bg-[#DCE2E9] sm:min-h-[540px]"
          >
            <img
              src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1400&q=85"
              alt="Professional automotive detailing and paint finishing"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
            />

            {/* Subtle dark gradient improves text contrast. */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#101923]/75 via-transparent to-[#101923]/10" />

            {/* Technical corner labels. */}
            <div className="absolute left-5 top-5 border border-white/40 px-3 py-2 sm:left-7 sm:top-7">
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white">
                Process / 001
              </span>
            </div>

            <div className="absolute right-5 top-5 flex items-center gap-2 sm:right-7 sm:top-7">
              <span className="h-2 w-2 rounded-full bg-[#277BFF]" />
              <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-white">
                Surface analysis
              </span>
            </div>

            {/* Image caption anchored to the bottom. */}
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-9">
              <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/70">
                Preparation is everything
              </p>

              <h3 className="max-w-md text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                The perfect finish starts beneath the surface.
              </h3>

              <div className="mt-6 h-[2px] w-16 bg-[#277BFF] transition-all duration-500 group-hover:w-28" />
            </div>
          </motion.div>

          {/* Right side: technical approach and service technologies. */}
          <div className="flex flex-col justify-between">
            {/* Technical introduction panel. */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="border border-[#DCE2E9] bg-[#F5F7FA] p-6 sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#687786]">
                    Our methodology
                  </p>

                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#17202B] sm:text-3xl">
                    Inspect. Correct. Protect.
                  </h3>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#C7D0D9] bg-white text-[#277BFF]">
                  <ShieldCheck size={21} />
                </div>
              </div>

              <p className="mt-4 max-w-lg text-sm leading-7 text-[#687786]">
                We begin by assessing the vehicle's condition, selecting
                suitable treatments, and preparing the surface before applying
                the chosen protection.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Assessment", "Correction", "Protection"].map((step) => (
                  <span
                    key={step}
                    className="inline-flex items-center gap-2 border border-[#DCE2E9] bg-white px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.1em] text-[#687786]"
                  >
                    <Check size={12} className="text-[#277BFF]" />
                    {step}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Individual technology rows. */}
            <div className="mt-5">
              {technologies.map((technology, index) => (
                <motion.article
                  key={technology.number}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="group border-b border-[#DCE2E9] py-6 first:border-t sm:py-7"
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <span className="pt-1 text-[10px] font-bold tracking-[0.12em] text-[#277BFF]">
                      / {technology.number}
                    </span>

                    <div className="min-w-0 flex-1">
                      <h4 className="text-lg font-bold tracking-tight text-[#17202B] transition-colors group-hover:text-[#277BFF] sm:text-xl">
                        {technology.title}
                      </h4>

                      <p className="mt-2 max-w-lg text-sm leading-6 text-[#687786]">
                        {technology.description}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="mt-1 shrink-0 text-[#687786] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#277BFF]"
                    />
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Link to the complete services section. */}
            <a
              href="#services"
              className="group mt-7 inline-flex w-fit items-center gap-4 bg-[#17202B] px-5 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:bg-[#277BFF]"
            >
              Explore all services
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        {/* Bottom technical divider and section identifier. */}
        <div className="mt-16 flex items-center justify-between border-t border-[#DCE2E9] pt-5">
          <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#687786]">
            VELOCITY / Surface Engineering
          </span>

          <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#277BFF]">
            Section 02 — 06
          </span>
        </div>
      </div>
    </section>
  );
}