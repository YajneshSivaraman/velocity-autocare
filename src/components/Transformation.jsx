// Import React state for controlling the comparison slider.
import { useState } from "react";

// Import Motion for smooth scroll reveal animations.
import { motion } from "motion/react";

// Import the slider handle icon.
import { ArrowLeftRight, ArrowUpRight } from "lucide-react";

// Show an interactive before-and-after paint transformation.
export default function Transformation() {
  // Store the slider position as a percentage from 0 to 100.
  const [position, setPosition] = useState(50);

  // Update the slider when the visitor clicks or drags across the image.
  const updatePosition = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();

    // Convert the pointer's horizontal position into a percentage.
    const percentage =
      ((event.clientX - bounds.left) / bounds.width) * 100;

    // Keep the slider within the image boundaries.
    setPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <section
      id="transformation"
      className="overflow-hidden bg-white py-20 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-14">
        {/* Section heading introduces the transformation showcase. */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col justify-between gap-6 lg:mb-16 lg:flex-row lg:items-end"
        >
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#277BFF]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#687786]">
                Visual inspection / 003
              </span>
            </div>

            <h2 className="text-[clamp(2.8rem,7vw,6.5rem)] font-black uppercase leading-[0.88] tracking-[-0.075em] text-[#17202B]">
              See the
              <span className="block text-[#277BFF]">difference.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#687786] lg:pb-2">
            Every detail matters. Drag across the image to explore the
            difference that careful preparation and professional detailing
            can make.
          </p>
        </motion.div>

        {/* Interactive before-and-after comparison. */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative select-none overflow-hidden bg-[#17202B]"
        >
          {/* The comparison images share exactly the same dimensions. */}
          <div
            className="relative h-[350px] cursor-ew-resize overflow-hidden sm:h-[500px] lg:h-[680px]"
            onPointerDown={(event) => {
              // Begin dragging only when the primary pointer button is used.
              if (event.button === 0) {
                event.currentTarget.setPointerCapture(event.pointerId);
                updatePosition(event);
              }
            }}
            onPointerMove={(event) => {
              // Update the reveal only while the pointer is actively dragging.
              if (event.buttons === 1) {
                updatePosition(event);
              }
            }}
            role="group"
            aria-label="Before and after detailing image comparison"
          >
            {/* BEFORE image: visible underneath the AFTER image. */}
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=90"
              alt="Vehicle before detailing treatment"
              draggable="false"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* AFTER image: clipped according to the slider position. */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
              <img
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1800&q=90"
                alt="Vehicle after detailing treatment"
                draggable="false"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            {/* Dark gradients keep the image labels readable. */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101923]/60 via-transparent to-[#101923]/15" />

            {/* BEFORE label. */}
            <div className="pointer-events-none absolute bottom-5 left-5 border border-white/50 bg-[#101923]/30 px-4 py-3 backdrop-blur-sm sm:bottom-8 sm:left-8">
              <span className="block text-[9px] font-bold uppercase tracking-[0.2em] text-white/70">
                Condition / 01
              </span>
              <span className="mt-1 block text-xs font-bold uppercase tracking-[0.15em] text-white">
                Before
              </span>
            </div>

            {/* AFTER label. */}
            <div className="pointer-events-none absolute bottom-5 right-5 border border-white/50 bg-[#101923]/30 px-4 py-3 backdrop-blur-sm sm:bottom-8 sm:right-8">
              <span className="block text-[9px] font-bold uppercase tracking-[0.2em] text-white/70">
                Condition / 02
              </span>
              <span className="mt-1 block text-xs font-bold uppercase tracking-[0.15em] text-white">
                After
              </span>
            </div>

            {/* Vertical divider and draggable handle. */}
            <div
              className="pointer-events-none absolute inset-y-0 z-10 w-[2px] bg-white"
              style={{ left: `${position}%` }}
            >
              <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-[#277BFF] text-white shadow-lg sm:h-14 sm:w-14">
                <ArrowLeftRight size={22} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Instructions and slider position indicator. */}
        <div className="flex flex-col justify-between gap-4 border-b border-[#DCE2E9] py-5 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#277BFF]" />
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#687786]">
              Drag horizontally to compare
            </p>
          </div>

          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#687786]">
            Reveal position:{" "}
            <span className="text-[#277BFF]">{Math.round(position)}%</span>
          </p>
        </div>

        {/* Supporting text and enquiry action. */}
        <div className="grid gap-8 py-10 sm:grid-cols-2 sm:items-end lg:py-14">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#277BFF]">
              The art of refinement
            </p>

            <h3 className="mt-3 max-w-xl text-2xl font-bold leading-tight tracking-tight text-[#17202B] sm:text-4xl">
              Restore the finish. Protect the investment.
            </h3>
          </div>

          <div className="sm:justify-self-end">
            <p className="mb-5 max-w-md text-sm leading-7 text-[#687786]">
              Every vehicle is different. Let our team assess your paintwork
              and recommend a treatment based on its condition and your goals.
            </p>

            <a
              href="#configurator"
              className="group inline-flex items-center gap-4 bg-[#17202B] px-5 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:bg-[#277BFF]"
            >
              Find your treatment
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        {/* Section identifier. */}
        <div className="flex items-center justify-between border-t border-[#DCE2E9] pt-5">
          <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#687786]">
            VELOCITY / Visual Inspection
          </span>

          <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#277BFF]">
            Section 04 — 06
          </span>
        </div>
      </div>
    </section>
  );
}