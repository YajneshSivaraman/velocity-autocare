// Import React state to store the visitor's selections.
import { useState } from "react";

// Import Motion for scroll reveal animations.
import { motion } from "motion/react";

// Import icons for the configurator interface.
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  MessageCircle,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";

// Build the interactive VELOCITY treatment configurator.
export default function Configurator() {
  // Store the selected vehicle type.
  const [vehicle, setVehicle] = useState("Luxury Sedan");

  // Store selected services as an array of service names.
  const [selectedServices, setSelectedServices] = useState([
    "Paint Correction",
  ]);

  // Store the visitor's preferred appointment date.
  const [preferredDate, setPreferredDate] = useState("");

  // Store optional notes about the visitor's vehicle.
  const [notes, setNotes] = useState("");

  // Replace this placeholder with the business's WhatsApp number.
  const whatsappNumber = "917010508392";

  // Available vehicle categories.
  const vehicles = [
    "Hatchback",
    "Luxury Sedan",
    "SUV",
    "Sports Car",
    "Luxury SUV",
  ];

  // Services visitors can combine into one enquiry.
  const services = [
    {
      name: "Paint Correction",
      description: "Refine paintwork and reduce visible imperfections.",
      priceLabel: "Assessment required",
    },
    {
      name: "Ceramic Coating",
      description: "Enhance gloss and add a protective coating.",
      priceLabel: "Assessment required",
    },
    {
      name: "Paint Protection Film",
      description: "Help protect vulnerable painted panels.",
      priceLabel: "Quote on request",
    },
    {
      name: "Interior Detailing",
      description: "Deep-clean and refresh interior surfaces.",
      priceLabel: "Assessment required",
    },
  ];

  // Add a service to the selection or remove it if already selected.
  const toggleService = (serviceName) => {
    setSelectedServices((currentServices) =>
      currentServices.includes(serviceName)
        ? currentServices.filter((service) => service !== serviceName)
        : [...currentServices, serviceName],
    );
  };

  // Reset all fields to their initial values.
  const resetConfigurator = () => {
    setVehicle("Luxury Sedan");
    setSelectedServices(["Paint Correction"]);
    setPreferredDate("");
    setNotes("");
  };

  // Prepare the selected information for a WhatsApp enquiry.
  const buildWhatsAppMessage = () => {
    const message = [
      "Hello VELOCITY AUTOCARE!",
      "",
      "I'd like to enquire about a detailing appointment.",
      "",
      `Vehicle: ${vehicle}`,
      `Services: ${selectedServices.join(", ")}`,
      `Preferred date: ${preferredDate || "Flexible"}`,
      `Additional details: ${notes.trim() || "Not specified"}`,
      "",
      "Please share the suitable package and quotation.",
    ].join("\n");

    // Encode the message so spaces and line breaks work in the URL.
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section
      id="configurator"
      className="relative overflow-hidden bg-[#17202B] py-20 text-white sm:py-28 lg:py-36"
    >
      {/* Subtle technical background grid. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.09]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #C7D0D9 1px, transparent 1px), linear-gradient(to bottom, #C7D0D9 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Decorative blue accent in the background. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#277BFF]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-14">
        {/* Section heading. */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-12 grid gap-7 lg:mb-16 lg:grid-cols-[1fr_0.7fr] lg:items-end"
        >
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#277BFF]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C7D0D9]">
                Personalise your treatment / 004
              </span>
            </div>

            <h2 className="text-[clamp(2.8rem,7vw,6.5rem)] font-black uppercase leading-[0.88] tracking-[-0.075em]">
              Your car.
              <span className="block text-[#277BFF]">Your standard.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#C7D0D9] sm:text-base lg:justify-self-end">
            Tell us what you drive and what you want to improve. We'll use
            your selections to prepare a personalised enquiry for our team.
          </p>
        </motion.div>

        {/* Two-column configurator and summary layout. */}
        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Left panel contains the interactive form. */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="border border-white/15 bg-white/[0.035] p-5 sm:p-8 lg:p-10"
          >
            {/* Vehicle category selection. */}
            <div>
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#277BFF]">
                    Step / 01
                  </span>
                  <h3 className="mt-2 text-xl font-bold tracking-tight sm:text-2xl">
                    Select your vehicle
                  </h3>
                </div>

                <span className="text-[10px] text-[#C7D0D9]">
                  {vehicle}
                </span>
              </div>

              {/* Vehicle options adapt to smaller screens. */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {vehicles.map((item) => {
                  const isSelected = vehicle === item;

                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setVehicle(item)}
                      aria-pressed={isSelected}
                      className={`flex min-h-14 items-center justify-between gap-2 border px-3 py-4 text-left text-[10px] font-semibold uppercase tracking-[0.08em] transition-colors duration-200 sm:px-4 ${
                        isSelected
                          ? "border-[#277BFF] bg-[#277BFF]/10 text-white"
                          : "border-white/15 text-[#C7D0D9] hover:border-white/40 hover:text-white"
                      }`}
                    >
                      <span>{item}</span>
                      {isSelected && (
                        <Check
                          size={15}
                          className="shrink-0 text-[#277BFF]"
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Service selection. Multiple services can be selected. */}
            <div className="mt-10 border-t border-white/15 pt-8">
              <div className="mb-5">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#277BFF]">
                  Step / 02
                </span>
                <h3 className="mt-2 text-xl font-bold tracking-tight sm:text-2xl">
                  Choose your treatments
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#C7D0D9]">
                  Select one or more services to discuss with our team.
                </p>
              </div>

              <div className="space-y-3">
                {services.map((service) => {
                  const isSelected = selectedServices.includes(service.name);

                  return (
                    <button
                      key={service.name}
                      type="button"
                      onClick={() => toggleService(service.name)}
                      aria-pressed={isSelected}
                      className={`flex w-full items-start gap-4 border p-4 text-left transition-colors duration-200 sm:p-5 ${
                        isSelected
                          ? "border-[#277BFF] bg-[#277BFF]/10"
                          : "border-white/15 hover:border-white/40"
                      }`}
                    >
                      {/* Custom checkbox indicator. */}
                      <span
                        className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center border ${
                          isSelected
                            ? "border-[#277BFF] bg-[#277BFF] text-white"
                            : "border-white/35 text-transparent"
                        }`}
                      >
                        <Check size={13} />
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                          <span className="text-sm font-bold text-white">
                            {service.name}
                          </span>

                          <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#277BFF]">
                            {service.priceLabel}
                          </span>
                        </span>

                        <span className="mt-2 block text-xs leading-6 text-[#C7D0D9]">
                          {service.description}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Preferred appointment date. */}
            <div className="mt-10 border-t border-white/15 pt-8">
              <label
                htmlFor="preferred-date"
                className="mb-4 block text-[9px] font-bold uppercase tracking-[0.2em] text-[#277BFF]"
              >
                Step / 03 — Preferred date
              </label>

              <div className="relative">
                <input
                  id="preferred-date"
                  type="date"
                  min={new Date().toLocaleDateString("en-CA")}
                  value={preferredDate}
                  onChange={(event) => setPreferredDate(event.target.value)}
                  className="w-full border border-white/15 bg-transparent px-4 py-4 text-sm text-white outline-none transition-colors focus:border-[#277BFF] [color-scheme:dark]"
                />
              </div>

              <p className="mt-2 text-[10px] leading-5 text-[#C7D0D9]">
                Leave this blank if your appointment date is flexible.
              </p>
            </div>

            {/* Optional vehicle details. */}
            <div className="mt-7">
              <label
                htmlFor="vehicle-notes"
                className="mb-3 block text-[9px] font-bold uppercase tracking-[0.2em] text-[#277BFF]"
              >
                Additional details (optional)
              </label>

              <textarea
                id="vehicle-notes"
                rows={3}
                maxLength={500}
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
                placeholder="Vehicle model, colour, areas of concern..."
                className="w-full resize-y border border-white/15 bg-transparent px-4 py-4 text-sm text-white outline-none placeholder:text-[#8B98A7] transition-colors focus:border-[#277BFF]"
              />

              <p className="mt-2 text-right text-[10px] text-[#8B98A7]">
                {notes.length}/500
              </p>
            </div>
          </motion.div>

          {/* Right panel summarises selections and creates the enquiry. */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col border border-white/15 bg-[#F5F7FA] p-6 text-[#17202B] sm:p-8 lg:p-9"
          >
            <div className="flex items-center justify-between border-b border-[#DCE2E9] pb-5">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#687786]">
                  Your specification
                </p>
                <h3 className="mt-2 text-2xl font-black uppercase tracking-tight">
                  Build summary
                </h3>
              </div>

              <div className="flex h-11 w-11 items-center justify-center border border-[#DCE2E9] bg-white text-[#277BFF]">
                <ShieldCheck size={21} />
              </div>
            </div>

            {/* Display the current vehicle selection. */}
            <div className="border-b border-[#DCE2E9] py-6">
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#687786]">
                Vehicle category
              </p>
              <p className="mt-2 text-lg font-bold">{vehicle}</p>
            </div>

            {/* Display selected services or a prompt if none are selected. */}
            <div className="flex-1 border-b border-[#DCE2E9] py-6">
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#687786]">
                Selected treatments
              </p>

              {selectedServices.length > 0 ? (
                <ul className="mt-4 space-y-4">
                  {selectedServices.map((service, index) => (
                    <li
                      key={service}
                      className="flex items-start gap-3 text-sm font-semibold"
                    >
                      <span className="mt-0.5 text-[10px] font-bold text-[#277BFF]">
                        0{index + 1}
                      </span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 text-sm leading-6 text-[#687786]">
                  No treatments selected. Choose at least one service to
                  create your enquiry.
                </p>
              )}
            </div>

            {/* Show appointment preference in the summary. */}
            <div className="border-b border-[#DCE2E9] py-6">
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#687786]">
                Preferred date
              </p>
              <p className="mt-2 text-sm font-semibold">
                {preferredDate || "Flexible"}
              </p>
            </div>

            {/* Clarify that the form requests a quote rather than calculating a price. */}
            <div className="mt-6 border border-[#DCE2E9] bg-white p-4">
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#687786]">
                Final quotation
              </p>
              <p className="mt-2 text-2xl font-black tracking-tight">
                Custom quote
              </p>
              <p className="mt-2 text-xs leading-6 text-[#687786]">
                Pricing depends on vehicle size, condition, and selected
                treatment. The team will confirm the cost.
              </p>
            </div>

            {/* Open WhatsApp with the completed enquiry. */}
            <a
              href={
                selectedServices.length > 0 ? buildWhatsAppMessage() : undefined
              }
              target="_blank"
              rel="noreferrer"
              aria-disabled={selectedServices.length === 0}
              onClick={(event) => {
                // Prevent an empty enquiry from opening WhatsApp.
                if (selectedServices.length === 0) {
                  event.preventDefault();
                }
              }}
              className={`mt-6 flex items-center justify-between gap-3 px-5 py-4 text-[10px] font-bold uppercase tracking-[0.12em] text-white transition-colors duration-300 ${
                selectedServices.length > 0
                  ? "bg-[#277BFF] hover:bg-[#17202B]"
                  : "cursor-not-allowed bg-[#8B98A7]"
              }`}
            >
              <span className="flex items-center gap-3">
                <MessageCircle size={17} />
                Send WhatsApp enquiry
              </span>
              <ArrowUpRight size={17} />
            </a>

            {/* Reset the configurator to its initial state. */}
            <button
              type="button"
              onClick={resetConfigurator}
              className="mt-4 inline-flex items-center justify-center gap-2 py-2 text-[9px] font-bold uppercase tracking-[0.16em] text-[#687786] transition-colors hover:text-[#277BFF]"
            >
              <RotateCcw size={13} />
              Reset selections
            </button>

            <p className="mt-5 text-center text-[9px] leading-5 text-[#687786]">
              Your selections will be included in the WhatsApp message. No
              booking is confirmed until the business responds.
            </p>
          </motion.aside>
        </div>

        {/* Section footer. */}
        <div className="mt-12 flex items-center justify-between border-t border-white/15 pt-5">
          <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#C7D0D9]">
            VELOCITY / Treatment Configurator
          </span>

          <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#277BFF]">
            Section 05 — 06
          </span>
        </div>
      </div>
    </section>
  );
}