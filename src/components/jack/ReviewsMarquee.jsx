import React from "react";

const REVIEWS = [
  { name: "Brian Haut", text: "Haircut was done on campus in a timely manner and affordable. Does a very good job with layering, fading, and blending. Makes great conversation and has phenomenal customer service." },
  { name: "Benjamin Guttenplan", text: "The haircut was quick, easy, and great!!! 10/10 recommend!" },
  { name: "Caden Eblin", text: "Very convenient, quick and sweet haircut. 10/10 recommend!" },
  { name: "Jake Potosky", text: "Fast and quality cut." },
  { name: "Ty Rogerson", text: "Great haircut, would recommend." },
  { name: "Kenny Peterson", text: "Goat." },
];

export default function ReviewsMarquee() {
  const doubled = [...REVIEWS, ...REVIEWS];

  return (
    <div className="bg-[#F5F5F5] border-t border-b border-black/10 py-7 md:py-[52px] overflow-hidden">
      <div className="px-7 max-w-[880px] mx-auto mb-4 md:mb-7 flex items-end justify-between gap-4 flex-wrap">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-black/45">
            What Clients Say
          </p>
          <h2 className="font-display text-[28px] md:text-[clamp(34px,8vw,52px)] font-bold uppercase text-black mt-1.5">
            80+ Five-Star Reviews
          </h2>
        </div>
        <div className="flex gap-2.5 flex-wrap pb-1">
          <a
            href="https://jackblendss.setmore.com/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center border border-black/22 text-black bg-transparent px-[22px] py-2.5 rounded-md text-[12px] font-semibold tracking-[0.08em] uppercase hover:border-[#990000] hover:bg-[#990000] hover:text-white transition-colors"
          >
            See All Reviews
          </a>
          <a
            href="https://jackblendss.setmore.com/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#990000] text-white border-none px-9 py-3.5 rounded-md text-[13px] font-semibold tracking-[0.09em] uppercase hover:bg-[#700000] transition-colors"
          >
            Write a Review
          </a>
        </div>
      </div>

      <div className="marquee-mask overflow-hidden">
        <div className="flex gap-3.5 w-max animate-marquee">
          {doubled.map((r, i) => (
            <div
              key={i}
              className="bg-white border border-black/10 rounded-[10px] p-4 md:p-5 w-60 md:w-72 flex-shrink-0 shadow-[0_1px_4px_rgba(0,0,0,0.06)]"
            >
              <div className="text-[13px] text-[#990000] mb-2 tracking-[2px]">★★★★★</div>
              <p className="text-[14px] leading-[1.55] text-black/70 mb-2.5">"{r.text}"</p>
              <span className="text-[12px] font-semibold text-black/45">— {r.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}