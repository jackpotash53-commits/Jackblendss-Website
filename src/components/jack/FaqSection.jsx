import React, { useState } from "react";

const FAQS = [
  {
    q: "How do I book?",
    a: 'Hit "Book Now," pick your service, choose a date and time, drop your info, and you\'re locked in. See you on cut day.',
  },
  {
    q: "Where exactly are you located?",
    a: "73 E 15th Ave — my frat house. It's busy with people coming and going, so when you're here I'll grab you at the door, or someone inside will point you my way.",
  },
  {
    q: "What forms of payment do you accept?",
    a: "Tap-to-pay credit card, cash, Venmo, or Zelle. Whatever's easiest, pay at the end of your appointment.",
  },
  {
    q: "What is the referral program?",
    a: "I'll give you 5–10 business cards for you to sign your name on. Hand them out to people who have never gotten a cut from me. When they come in and bring the card, I log it under your name. Refer 1 new client = $10 off your next cut. Refer 3 = your next cut is free.",
  },
  {
    q: "Do you do house calls?",
    a: "Yes. House calls are a flat $40 on top of the regular cut price, and that fee gets split across the group, so the more people getting cuts, the cheaper it is for everyone. Hit me up and we'll set it up.",
  },
  {
    q: "Do you take after-hours cuts?",
    a: "Yes! Text me at (301) 891-9010 to set one up. After-hours cuts are $40.",
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(-1);

  return (
    <div className="border-t border-black/10 py-16 px-7 max-w-[780px] mx-auto">
      <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-black/45">FAQ</p>
      <h2 className="font-display text-[clamp(34px,8vw,52px)] font-bold uppercase text-black mt-1.5">
        Frequently Asked Questions
      </h2>
      <div className="mt-8">
        {FAQS.map((faq, i) => (
          <div key={i} className="border-b border-black/10">
            <button
              onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
              className="w-full bg-transparent border-none flex justify-between items-center py-5 text-left text-[16px] font-medium text-black cursor-pointer gap-4 hover:text-black/45 transition-colors"
            >
              {faq.q}
              <span
                className={`text-[20px] text-[#990000] flex-shrink-0 transition-transform duration-200 ${
                  openIdx === i ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            {openIdx === i && (
              <div className="text-[15px] text-black/45 leading-[1.7] pb-5">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}