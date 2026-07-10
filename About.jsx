import React from "react";
import { Link } from "react-router-dom";

const IMG = (f) => `${import.meta.env.BASE_URL}images/${f}`;
const ABOUT_OLD = IMG("about-old.jpg");
const ABOUT_CURRENT = IMG("about-now.jpg");

const PARAGRAPHS = [
  "I'm Jack, a 19-year-old barber who's been cutting hair for over four years. I used to be the insecure kid with a bull cut, the kid who dreaded the chair because I never knew what I'd walk out with. Sitting down already knowing I'd walk out not looking like myself and not feeling confident. So I picked up the clippers and decided something needed to change.",
  "I started cutting my own hair, then my friends', trims and mullets on a bucket in my bathroom. I became obsessed. I offered free cuts in the school bathrooms just to practice. Every head was a chance to get better. Since then I've cut well over 500 people: friends, family, and fellow OSU students.",
  "Now I run my own studio, giving crispy, reliable cuts that match exactly what you ask for. My regulars keep coming back because they always know exactly what they're getting.",
  "This was never just about me. No one else has to go through what I did, what so many guys still deal with every time they sit down for a cut. You should leave the chair feeling like the best, most confident version of yourself.",
  "If you're tired of leaving the chair disappointed, book your cut with me now.",
];

const STAT_LINE = (
  <>80+ Five-Star Reviews &nbsp;&middot;&nbsp; 500+ Haircuts &nbsp;&middot;&nbsp; A College Kid Who Knows What a College Kid Wants.</>
);

function Photos() {
  return (
    <div className="flex gap-4">
      <div className="w-1/2 rounded-[10px] overflow-hidden">
        <img src={ABOUT_OLD} alt="Jack in his early barbering days" className="w-full h-full object-cover object-[65%_30%]" />
      </div>
      <div className="w-1/2 rounded-[10px] overflow-hidden">
        <img src={ABOUT_CURRENT} alt="Jack cutting hair in his studio today" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

function BookButton({ centered = false }) {
  return (
    <div className={centered ? "flex justify-center" : ""}>
      <Link
        to="/booking"
        className="inline-flex items-center bg-[#990000] text-white px-9 py-3.5 rounded-md text-[13px] font-semibold tracking-[0.09em] uppercase hover:bg-[#700000] transition-colors"
      >
        Book Now
      </Link>
    </div>
  );
}

export default function About() {
  return (
    <div>
      <div className="max-w-[1180px] mx-auto">
        {/* Header */}
        <div className="pt-[calc(62px+52px)] px-7">
          <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-black/45">The Story</p>
          <h1 className="font-display text-[clamp(34px,8vw,52px)] font-bold uppercase text-black mt-1.5">About Jack</h1>
          <div className="w-9 h-[3px] bg-[#990000] mt-3" />
        </div>

        {/* ===== Mobile & tablet layout ===== */}
        <div className="lg:hidden py-10 px-7 text-[16px] leading-[1.75] text-black/72">
          <p>{PARAGRAPHS[0]}</p>
          <div className="mt-7">
            <Photos />
          </div>
          <div className="mt-7 space-y-[16px]">
            {PARAGRAPHS.slice(1).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <p className="font-display text-[clamp(18px,3vw,24px)] font-bold uppercase text-black tracking-wide leading-snug mt-9">
            {STAT_LINE}
          </p>
          <div className="mt-9">
            <BookButton centered />
          </div>
        </div>

        {/* ===== Desktop layout (unchanged): photos left, text right ===== */}
        <div className="hidden lg:grid grid-cols-2 gap-12 py-10 px-7 items-stretch">
          {/* Photos column */}
          <div className="flex flex-col">
            <div className="flex gap-4 flex-1 min-h-0">
              <div className="w-1/2 rounded-[10px] overflow-hidden">
                <img src={ABOUT_OLD} alt="Jack in his early barbering days" className="w-full h-full object-cover object-[65%_30%]" />
              </div>
              <div className="w-1/2 rounded-[10px] overflow-hidden">
                <img src={ABOUT_CURRENT} alt="Jack cutting hair in his studio today" className="w-full h-full object-cover" />
              </div>
            </div>
            <p className="font-display text-[clamp(18px,3vw,24px)] font-bold uppercase text-black tracking-wide mt-auto pt-6">
              {STAT_LINE}
            </p>
          </div>

          {/* Text column */}
          <div className="flex flex-col text-[16px] leading-[1.75] text-black/72 space-y-[16px]">
            {PARAGRAPHS.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="mt-auto pt-6">
              <BookButton />
            </div>
          </div>
        </div>
      </div>

      <div className="pb-10" />
    </div>
  );
}
