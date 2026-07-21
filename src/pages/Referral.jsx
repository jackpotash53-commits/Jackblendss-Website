import React from "react";
import { Link } from "react-router-dom";

const STEPS = [
  {
    num: 1,
    title: "Sign Up & Get Your Cards",
    desc: "Text, DM, or tell me you want to join. I'll give you 5–10 business cards for you to sign your name on. These are your referral cards — don't lose them.",
  },
  {
    num: 2,
    title: "Hand Them Out",
    desc: "Give cards to people who have never gotten a cut from me before. New clients only. When they book, they bring the card to their appointment.",
  },
  {
    num: 3,
    title: "Rack Up Referrals, Get Rewarded",
    desc: "Refer 1 new client = <strong>$10 off your next cut and $10 off your friend's first</strong>. Refer 3 and your next cut is free.",
  },
];

export default function Referral() {
  return (
    <div>
      <div className="pt-[calc(62px+52px)] px-7 max-w-[880px] mx-auto">
        <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-black/45">Earn Rewards</p>
        <h1 className="font-display text-[clamp(34px,8vw,52px)] font-bold uppercase text-black mt-1.5">Referral Program</h1>
        <div className="w-9 h-[3px] bg-[#990000] mt-3" />
      </div>

      <div className="max-w-[680px] mx-auto px-7 pb-[60px]">
        <p className="text-[16px] font-bold text-center mt-7 mb-0 leading-[1.4]">
          New Customer? Come in and get $5 off your first Cut.
        </p>
        <p className="text-[16px] font-bold text-center mt-0 mb-7 leading-[1.4]">
          Already come to me? Want free cuts? Simple, refer your friends.
        </p>

        {/* Steps */}
        <div className="flex flex-col gap-4 my-9">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="bg-white border border-black/10 rounded-[10px] p-[22px_24px] flex gap-5 items-start shadow-[0_1px_4px_rgba(0,0,0,0.05)]"
            >
              <div className="w-9 h-9 rounded-full bg-[#990000] text-white font-display text-[20px] font-bold flex items-center justify-center flex-shrink-0">
                {step.num}
              </div>
              <div>
                <div className="text-[16px] font-semibold mb-1">{step.title}</div>
                <div className="text-[14px] text-black/45 leading-[1.6]" dangerouslySetInnerHTML={{ __html: step.desc }} />
              </div>
            </div>
          ))}
        </div>

        {/* Rule */}
        <div className="bg-[#F5F5F5] border-l-[3px] border-[#990000] rounded-r-[10px] p-[16px_20px] text-[14px] text-black/60 leading-[1.6] mt-3">
          <strong className="text-black">One rule:</strong> Referrals only count for brand-new clients — people I have never cut before. If someone's already in my books, their card doesn't count. For new clients, referral discounts dont stack. You either get $5 or $10 off your first cut, not both.
        </div>

        {/* Banner */}
        <div className="bg-[#990000] rounded-[10px] p-[36px_28px] text-center my-9">
          <h3 className="font-display text-[clamp(28px,6vw,48px)] font-bold uppercase mb-2 text-white">
            Refer 3 → Free Cut
          </h3>
          <p className="text-[15px] text-white/80 mb-5">
            Refer 1 new client and you both get $10 off. Refer 3 and your next cut is on me.
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center bg-white text-[#990000] px-7 py-3 rounded-md text-[13px] font-semibold tracking-[0.09em] uppercase hover:opacity-90 transition-opacity"
          >
            Book Your Next Cut
          </Link>
        </div>

        <p className="text-[13px] text-black/45 text-center">
          Questions? Text{" "}
          <a href="tel:3018919010" className="text-[#990000]">
            (301) 891-9010
          </a>
        </p>
      </div>
    </div>
  );
}
