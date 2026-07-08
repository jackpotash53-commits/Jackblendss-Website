import React from "react";
import { Link } from "react-router-dom";

const POLICIES = [
  {
    title: "Cancellation Policy",
    text: "Need to reschedule or cancel? Let me know at least 12 hours ahead. Cancellations inside that window, or last-minute, may require prepayment to book again since that spot was being held for you.",
  },
  {
    title: "Late Policy",
    text: "If you're running late, shoot me a text. More than 10 minutes late may mean I have to push or cancel your cut to stay on schedule. You respect my time and I respect yours.",
  },
  {
    title: "No-Show Policy",
    text: "No-shows without notice may need to prepay to book again. Life happens, just communicate with me and we're good.",
  },
];

export default function Policies() {
  return (
    <div>
      <div className="pt-[calc(62px+52px)] px-7 max-w-[880px] mx-auto">
        <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-black/45">The Fine Print</p>
        <h1 className="font-display text-[clamp(34px,8vw,52px)] font-bold uppercase text-black mt-1.5">Policies</h1>
        <div className="w-9 h-[3px] bg-[#990000] mt-3" />
      </div>

      <div className="max-w-[680px] mx-auto px-7 pt-10 pb-16 flex flex-col gap-5">
        {POLICIES.map((pol) => (
          <div
            key={pol.title}
            className="bg-white border border-black/10 rounded-[10px] p-7 pl-6 border-l-[3px] border-l-[#990000] hover:border-black/20 hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-all"
          >
            <h2 className="font-display text-[22px] font-bold uppercase mb-2.5">{pol.title}</h2>
            <p className="text-[15px] text-black/65 leading-[1.7]">{pol.text}</p>
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