// Import Motion for scroll reveals and hover animations.
import { motion } from "motion/react";

// Import icons for the service cards.
import {
  ArrowUpRight,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Layers3,
} from "lucide-react";

// Display the main services offered by VELOCITY AUTOCARE.
export default function Services() {
  // Keep service content in data so it's easy to edit later.
  const services = [
    {
      number: "01",
      title: "Paint Correction",
      category: "SURFACE REFINEMENT",
      description:
        "Reduce visible swirl marks and light imperfections to restore clarity, depth, and gloss to your vehicle's paintwork.",
      duration: "2–8 HOURS",
      icon: ScanLine,
      size: "lg:col-span-7",
      image:
        "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1400&q=85",
    },
    {
      number: "02",
      title: "Ceramic Coating",
      category: "LONG-TERM PROTECTION",
      description:
        "Enhance gloss and help protect your paintwork from everyday contaminants with a professionally applied coating.",
      duration: "1–2 DAYS",
      icon: ShieldCheck,
      size: "lg:col-span-5",
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=85",
    },
    {
      number: "03",
      title: "Paint Protection Film",
      category: "IMPACT DEFENCE",
      description:
        "A transparent protective film designed to help shield vulnerable painted panels from stone chips and road debris.",
      duration: "1–3 DAYS",
      icon: Layers3,
      size: "lg:col-span-5",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85",
    },
    {
      number: "04",
      title: "Interior Detailing",
      category: "CABIN RESTORATION",
      description:
        "Refresh interior surfaces with careful cleaning and detailing for a cleaner, more comfortable cabin.",
      duration: "3–6 HOURS",
      icon: Sparkles,
      size: "lg:col-span-7",
      image:
        "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1400&q=85",
    },
  ];

  return (
    <section id="services" className="bg-[#F5F7FA] py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-14">
        {/* Heading row introduces the service collection. */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col justify-between gap-7 lg:mb-16 lg:flex-row lg:items-end"
        >
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#277BFF]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#687786]">
                Treatment catalogue / 002
              </span>
            </div>

            <h2 className="text-[clamp(2.8rem,7vw,6.5rem)] font-black uppercase leading-[0.88] tracking-[-0.075em] text-[#17202B]">
              Engineered
              <span className="block text-[#277BFF]">for your drive.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#687786] lg:pb-2">
            From correcting paint imperfections to adding another layer of
            protection, find the treatment that suits your vehicle.
          </p>
        </motion.div>

        {/* Asymmetric service grid gives each treatment its own visual weight. */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          {services.map((service, index) => {
            // Use each service's icon as a reusable React component.
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: index * 0.1 }}
                className={`group relative overflow-hidden border border-[#DCE2E9] bg-white ${service.size}`}
              >
                {/* Image area with a restrained zoom on hover. */}
                <div className="relative h-[260px] overflow-hidden bg-[#C7D0D9] sm:h-[350px]">
                  <img
                    src={service.image}
                    alt={`${service.title} automotive service`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                  />

                  {/* Gradient keeps overlaid labels legible. */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101923]/60 via-transparent to-[#101923]/10" />

                  {/* Service number and category label. */}
                  <div className="absolute left-5 top-5 flex items-center gap-3 sm:left-7 sm:top-7">
                    <span className="border border-white/40 px-3 py-2 text-[9px] font-bold tracking-[0.15em] text-white">
                      / {service.number}
                    </span>

                    <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-white">
                      {service.category}
                    </span>
                  </div>

                  {/* Icon panel changes colour when the card is hovered. */}
                  <div className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center border border-white/50 bg-white/10 text-white backdrop-blur-sm transition-colors duration-300 group-hover:border-[#277BFF] group-hover:bg-[#277BFF] sm:bottom-7 sm:right-7">
                    <Icon size={21} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Service details and enquiry action. */}
                <div className="p-5 sm:p-7 lg:p-8">
                  <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
                    <div className="max-w-lg">
                      <h3 className="text-2xl font-bold tracking-tight text-[#17202B] transition-colors duration-300 group-hover:text-[#277BFF] sm:text-3xl">
                        {service.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-[#687786]">
                        {service.description}
                      </p>
                    </div>

                    {/* Quick enquiry link for the individual service. */}
                    <a
                      href={`https://wa.me/917010508392?text=${encodeURIComponent(
                        `Hello VELOCITY AUTOCARE, I would like to enquire about ${service.title}.`,
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Enquire about ${service.title}`}
                      className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#DCE2E9] text-[#17202B] transition-all duration-300 hover:border-[#277BFF] hover:bg-[#277BFF] hover:text-white"
                    >
                      <ArrowUpRight size={19} />
                    </a>
                  </div>

                  {/* Treatment duration metadata. */}
                  <div className="mt-7 flex items-center justify-between border-t border-[#DCE2E9] pt-5">
                    <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#687786]">
                      Estimated treatment time
                    </span>

                    <span className="text-[10px] font-bold tracking-[0.12em] text-[#277BFF]">
                      {service.duration}
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom call-to-action directs visitors to the configurator. */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-8 flex flex-col justify-between gap-5 border border-[#DCE2E9] bg-white p-6 sm:flex-row sm:items-center sm:p-8"
        >
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#277BFF]">
              Not sure what your car needs?
            </p>

            <h3 className="mt-2 text-xl font-bold tracking-tight text-[#17202B] sm:text-2xl">
              Build your own detailing package.
            </h3>
          </div>

          <a
            href="#configurator"
            className="group inline-flex w-fit items-center gap-4 bg-[#17202B] px-5 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:bg-[#277BFF]"
          >
            Configure a treatment
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </motion.div>

        {/* Technical section footer. */}
        <div className="mt-12 flex items-center justify-between border-t border-[#DCE2E9] pt-5">
          <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#687786]">
            VELOCITY / Treatment Catalogue
          </span>

          <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#277BFF]">
            Section 03 — 06
          </span>
        </div>
      </div>
    </section>
  );
}