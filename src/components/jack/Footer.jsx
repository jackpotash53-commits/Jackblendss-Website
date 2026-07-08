import React from "react";
import { Link } from "react-router-dom";

const FOOTER_NAV = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Gallery", path: "/gallery" },
  { label: "Referral Program", path: "/referral" },
  { label: "Book Now", path: "/booking" },
];

export default function Footer() {
  return (
    <footer className="bg-[#F5F5F5] border-t border-black/10 pt-12 pb-7 px-7">
      <div className="max-w-[1000px] mx-auto flex flex-col sm:flex-row gap-10 sm:gap-0 items-start justify-start">
        {/* Col 1 – Brand & Contact */}
        <div className="flex-shrink-0 mr-12">
          <div className="font-display text-[22px] font-bold tracking-[0.06em] uppercase mb-1.5">
            Jack Blends
          </div>
          <div className="text-[13px] text-black/45 leading-[1.8]">
            73 E 15th Ave
            <br />
            Columbus, Ohio 43210
            <br />
            <a href="tel:3018919010" className="text-black/45 hover:text-black transition-colors">
              (301) 891-9010
            </a>
          </div>
        </div>

        {/* Col 2 – Policies */}
        <div className="flex-shrink-0 mr-12">
          <p className="text-[10px] font-semibold tracking-[0.14em] uppercase text-black/45 mb-2.5">
            Policies
          </p>
          <div className="flex flex-col">
            <Link to="/policies" className="text-[13px] text-black/50 py-1 hover:text-black transition-colors">
              Cancellation Policy
            </Link>
            <Link to="/policies" className="text-[13px] text-black/50 py-1 hover:text-black transition-colors">
              Late Policy
            </Link>
            <Link to="/policies" className="text-[13px] text-black/50 py-1 hover:text-black transition-colors">
              No-Show Policy
            </Link>
            <Link to="/privacy" className="text-[13px] text-black/50 py-1 hover:text-black transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-[13px] text-black/50 py-1 hover:text-black transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Col 3 – Explore */}
        <div className="flex-shrink-0 mr-auto">
          <p className="text-[10px] font-semibold tracking-[0.14em] uppercase text-black/45 mb-2.5">
            Explore
          </p>
          <div className="flex flex-col">
            {FOOTER_NAV.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-[13px] text-black/50 py-1 hover:text-black transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Col 4 – Follow */}
        <div className="flex-shrink-0">
          <p className="text-[10px] font-semibold tracking-[0.14em] uppercase text-black/45 mb-2.5">
            Follow
          </p>
          <div className="flex gap-3.5 mt-1">
            <SocialIcon href="https://www.instagram.com/jackblendss/" label="Instagram">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </SocialIcon>
            <SocialIcon href="https://www.tiktok.com/@jackblendss" label="TikTok">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
            </SocialIcon>
            <SocialIcon href="https://www.youtube.com/@cutsandstuff" label="YouTube">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </SocialIcon>
            <SocialIcon href="https://www.linkedin.com/in/jack-potash-b50b48314/" label="LinkedIn">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </SocialIcon>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1000px] mx-auto mt-7 pt-5 border-t border-black/10 flex justify-between items-center">
        <p className="text-[12px] text-black/45">&copy; 2026 Jack Blends</p>
      </div>
    </footer>
  );
}

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center justify-center w-[38px] h-[38px] rounded-lg bg-[#EBEBEB] text-black/55 hover:bg-black hover:text-white transition-colors"
    >
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current">
        {children}
      </svg>
    </a>
  );
}