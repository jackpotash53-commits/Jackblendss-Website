import React from "react";
import { Link } from "react-router-dom";

const SECTIONS = [
  {
    title: "Booking & Payment",
    text: "Appointments are booked through Setmore. When you book, you agree to the service, date, and time selected. Payment is due at the time of your appointment unless prepayment is required. I accept tap-to-pay credit card, cash, Venmo, and Zelle.",
  },
  {
    title: "Cancellations, Late Arrivals & No-Shows",
    text: "These are covered in my posted policies. Cancellations inside the 12-hour window, late arrivals over 10 minutes, and no-shows may require prepayment to book again.",
  },
  {
    title: "Service",
    text: "I do my best to deliver the cut you ask for and to match your expectations. I reserve the right to refuse or stop service for any reason, including disrespectful behavior. Results can vary based on hair type, length, and condition.",
  },
  {
    title: "Liability",
    text: "You book and attend appointments at your own discretion. Jack Blends is not liable for any allergic reactions, skin sensitivities, or dissatisfaction outside of reasonable touch-ups.",
  },
  {
    title: "Changes",
    text: "I may update these terms or my pricing and policies at any time. The current version posted on this site applies.",
  },
];

export default function TermsOfService() {
  return (
    <div>
      <div className="pt-[calc(62px+52px)] px-7 max-w-[880px] mx-auto">
        <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-black/45">The Fine Print</p>
        <h1 className="font-display text-[clamp(34px,8vw,52px)] font-bold uppercase text-black mt-1.5">Terms of Service</h1>
        <div className="w-9 h-[3px] bg-[#990000] mt-3" />
        <p className="text-[13px] text-black/45 mt-3">Last updated: June 29, 2026</p>
      </div>

      <div className="max-w-[680px] mx-auto px-7 pt-10 pb-16 flex flex-col gap-5">
        <p className="text-[15px] text-black/65 leading-[1.7]">Welcome to Jack Blends. By booking an appointment or using this website, you agree to the following terms.</p>

        {SECTIONS.map((sec) => (
          <div
            key={sec.title}
            className="bg-white border border-black/10 rounded-[10px] p-7 pl-6 border-l-[3px] border-l-[#990000]"
          >
            <h2 className="font-display text-[22px] font-bold uppercase mb-2.5">{sec.title}</h2>
            <p className="text-[15px] text-black/65 leading-[1.7]">{sec.text}</p>
          </div>
        ))}

        <p className="text-[13px] text-black/45 text-center mt-2">
          Questions? Text{" "}
          <a href="tel:3018919010" className="text-[#990000]">
            (301) 891-9010
          </a>
        </p>
        <div className="text-center">
          <Link
            to="/booking"
            className="inline-flex items-center bg-[#990000] text-white px-9 py-3.5 rounded-md text-[13px] font-semibold tracking-[0.09em] uppercase hover:bg-[#700000] transition-colors"
          >
            Book a Cut
          </Link>
        </div>
      </div>
    </div>
  );
}