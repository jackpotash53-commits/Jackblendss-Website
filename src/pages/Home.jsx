const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { Link } from "react-router-dom";
import ReviewsMarquee from "@/components/jack/ReviewsMarquee";
import ServiceRow from "@/components/jack/ServiceRow";
import FaqSection from "@/components/jack/FaqSection";

const IMG = (f) => `${import.meta.env.BASE_URL}images/${f}`;
const HERO_IMG = IMG("hero.jpg");
const SVC_IMGS = [
  IMG("service-taper.jpg"),
  IMG("service-mullet.jpg"),
  IMG("service-trim.jpg"),
];

const SERVICES = [
  {
    name: "Men's Taper Fade",
    meta: "30 min • $30",
    description: "Smooth taper fade with shape up all around. Option to taper the sides and/or the back.",
    price: "$30",
    image: SVC_IMGS[0],
  },
  {
    name: "Men's Modern Mullet",
    meta: "30 min • $30",
    description: "Tapered sideburns and shorter sides, keep the flow in the back. A true modern mullet look.",
    price: "$30",
    image: SVC_IMGS[1],
  },
  {
    name: "Men's Trim",
    meta: "30 min • $30",
    description: "Simple clean-up all around. A little off to keep your current style exactly how you like it.",
    price: "$30",
    image: SVC_IMGS[2],
  },
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative h-[80vh] min-h-[520px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMG}
            alt="Jack cutting hair with precision"
            className="w-full h-full object-cover object-center lg:object-[right_top] scale-105"
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/72 via-black/0 to-transparent" />
        <div className="absolute inset-0 z-[2] flex flex-col justify-center items-center text-center lg:justify-end lg:items-start lg:text-left p-[52px] max-[600px]:p-[32px_24px] text-white">
          <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-white/80 mb-3">
            OSU Campus Barber &bull; Columbus, OH
          </p>
          <h1 className="font-display font-bold uppercase leading-[0.92] tracking-[-0.01em] text-[clamp(64px,12vw,120px)] text-white mb-3.5">
            Jack<br />Blends
          </h1>
          <p className="text-[clamp(15px,2.2vw,20px)] text-white/90 mb-2">
            Clean cuts. 30 minutes. $30 flat.
          </p>
          <p className="text-[14px] text-white/75 max-w-[360px] leading-[1.6] mb-6">
            Reliable, crispy cuts on campus. Never too much off. Exactly what you ask for.
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center bg-[#990000] text-white px-8 py-3.5 rounded-[5px] text-[14px] font-semibold tracking-[0.09em] uppercase hover:bg-[#700000] transition-colors"
          >
            Book Now
          </Link>
          <div className="flex gap-7 mt-5 flex-wrap justify-center lg:justify-start">
            <div>
              <div className="font-display text-[32px] font-bold leading-none text-white">100+</div>
              <div className="text-[11px] font-medium tracking-[0.1em] uppercase text-white/55 mt-0.5">Clients</div>
            </div>
            <div>
              <div className="font-display text-[32px] font-bold leading-none text-white">5.0</div>
              <div className="text-[11px] font-medium tracking-[0.1em] uppercase text-white/55 mt-0.5">Stars</div>
            </div>
            <div>
              <div className="font-display text-[32px] font-bold leading-none text-white">80+</div>
              <div className="text-[11px] font-medium tracking-[0.1em] uppercase text-white/55 mt-0.5">Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS MARQUEE */}
      <ReviewsMarquee />

      {/* SERVICES */}
      <div className="py-16 px-7 max-w-[880px] mx-auto">
        <div className="mb-9">
          <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-black/45">What I Offer</p>
          <h2 className="font-display text-[clamp(34px,8vw,52px)] font-bold uppercase text-black mt-1.5">Services</h2>
          <div className="w-9 h-[3px] bg-[#990000] mt-3" />
        </div>
        <div className="flex flex-col gap-[3px]">
          {SERVICES.map((svc) => (
            <ServiceRow key={svc.name} {...svc} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 px-7 text-center border-t border-black/10">
        <h2 className="font-display text-[clamp(28px,7vw,52px)] font-bold uppercase mb-2.5">
          "Tired of leaving the chair disappointed?"
        </h2>
        <p className="text-black/45 text-[15px] mb-6">
          Crispy, reliable cuts on campus. $30. 30 minutes.
        </p>
        <Link
          to="/booking"
          className="inline-flex items-center bg-[#990000] text-white px-9 py-4 rounded-md text-[14px] font-semibold tracking-[0.09em] uppercase hover:bg-[#700000] transition-colors"
        >
          Book Now
        </Link>
      </div>

      {/* FAQ */}
      <FaqSection />
    </div>
  );
}