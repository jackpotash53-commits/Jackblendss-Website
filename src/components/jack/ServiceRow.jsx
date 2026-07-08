import React from "react";
import { Link } from "react-router-dom";

export default function ServiceRow({ name, meta, description, price, image }) {
  return (
    <div className="flex h-[150px] md:h-[170px] bg-white border border-black/10 rounded-[10px] overflow-hidden transition-all hover:border-black/20 hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
      <div className="w-[90px] md:w-[170px] h-full flex-shrink-0 bg-[#EBEBEB] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-[center_center]"
        />
      </div>
      <div className="p-3 md:p-5 flex-1 flex flex-col justify-center">
        <div className="flex items-baseline justify-between gap-2 mb-1">
          <div className="text-[14px] md:text-[17px] font-semibold">{name}</div>
          <span className="font-display text-[18px] md:hidden font-bold">{price}</span>
        </div>
        <div className="text-[11px] md:text-[12px] text-black/45 tracking-[0.04em] mb-[5px]">{meta}</div>
        <div className="text-[12px] md:text-[14px] text-black/55 leading-[1.4] md:leading-[1.5] mb-2">{description}</div>
        <div>
          <Link
            to="/booking"
            className="inline-flex items-center border border-black/22 text-black bg-transparent px-3 md:px-[22px] py-1.5 md:py-2.5 rounded-md text-[11px] md:text-[12px] font-semibold tracking-[0.08em] uppercase hover:border-[#990000] hover:bg-[#990000] hover:text-white transition-colors"
          >
            Book This
          </Link>
        </div>
      </div>
      <div className="p-5 pl-0 flex items-center flex-shrink-0 hidden md:flex">
        <span className="font-display text-[28px] font-bold">{price}</span>
      </div>
    </div>
  );
}