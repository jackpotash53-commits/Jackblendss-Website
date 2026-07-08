import React from "react";
import { Link } from "react-router-dom";

const SECTIONS = [
  {
    title: "What I Collect",
    text: "When you book through Setmore, my scheduling provider, I collect your name, phone number, email, and appointment details. Setmore stores this booking information under its own privacy policy. Payments made through third-party apps (credit card processor, Venmo, Zelle) are handled by those services and are not stored by me.",
  },
  {
    title: "How I Use It",
    text: "I use your info only to schedule appointments, send reminders or updates, and contact you about your cut. That's it.",
  },
  {
    title: "Sharing",
    text: "I don't sell, rent, or share your personal information with anyone. The only third parties involved are the booking and payment tools that make appointments work. Booking data is processed through Setmore, which has its own privacy practices you can review on their site.",
  },
  {
    title: "Your Choices",
    text: "You can ask me to update or delete your information at any time by texting (301) 891-9010.",
  },
  {
    title: "Updates",
    text: "I may update this policy as the business grows. The current version posted here applies.",
  },
];

export default function PrivacyPolicy() {
  return (
    <div>
      <div className="pt-[calc(62px+52px)] px-7 max-w-[880px] mx-auto">
        <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-black/45">The Fine Print</p>
        <h1 className="font-display text-[clamp(34px,8vw,52px)] font-bold uppercase text-black mt-1.5">Privacy Policy</h1>
        <div className="w-9 h-[3px] bg-[#990000] mt-3" />
        <p className="text-[13px] text-black/45 mt-3">Last updated: June 29, 2026</p>
      </div>

      <div className="max-w-[680px] mx-auto px-7 pt-10 pb-16 flex flex-col gap-5">
        <p className="text-[15px] text-black/65 leading-[1.7]">Your privacy matters. Here's how Jack Blends handles your information.</p>

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