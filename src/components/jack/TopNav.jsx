import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Gallery", path: "/gallery" },
  { label: "Referral Program", path: "/referral" },
];

const MOBILE_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Gallery", path: "/gallery" },
  { label: "Referral", path: "/referral" },
  { label: "Book", path: "/booking" },
];

export default function TopNav() {
  const location = useLocation();
  const [atTop, setAtTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const transparent = atTop && isHome && !menuOpen;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[500] h-[62px] grid grid-cols-[1fr_auto_1fr] items-center px-5 lg:px-7 border-b transition-all duration-300 ${
          transparent
            ? "bg-transparent border-transparent"
            : "bg-white/95 border-black/10 backdrop-blur-[12px]"
        }`}
      >
        {/* Left – hamburger on mobile, nav links on desktop */}
        <div className="flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-1.5 -ml-1.5"
            aria-label="Open menu"
          >
            {menuOpen ? (
              <X className={`w-6 h-6 ${transparent ? "text-white" : "text-black"}`} strokeWidth={1.8} />
            ) : (
              <Menu className={`w-6 h-6 ${transparent ? "text-white" : "text-black"}`} strokeWidth={1.8} />
            )}
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[11px] font-medium tracking-[0.09em] uppercase px-2.5 py-1.5 transition-colors ${
                  transparent
                    ? location.pathname === link.path
                      ? "text-white"
                      : "text-white/65 hover:text-white"
                    : location.pathname === link.path
                    ? "text-black"
                    : "text-black/50 hover:text-black"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/booking"
              className={`text-[11px] font-semibold tracking-[0.09em] uppercase px-2.5 py-1.5 transition-colors ${
                transparent
                  ? "text-white hover:text-white/75"
                  : "text-[#990000] hover:text-[#700000]"
              }`}
            >
              Book Now
            </Link>
          </div>
        </div>

        {/* Center logo */}
        <div className="justify-self-center">
          <Link
            to="/"
            className={`font-display text-[22px] font-bold tracking-[0.07em] uppercase transition-colors ${
              transparent ? "text-white" : "text-black"
            }`}
          >
            Jack Blends
          </Link>
        </div>

        {/* Right – empty for balance */}
        <div className="hidden lg:flex justify-end items-center" />
      </nav>

      {/* Mobile slide-in menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[499] lg:hidden" onClick={() => setMenuOpen(false)}>
          <div className="absolute inset-0 bg-black/30" />
          <div
            className="absolute left-0 top-0 bottom-0 w-[240px] bg-white pt-[62px] px-5 pb-6 flex flex-col shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {MOBILE_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[15px] font-semibold tracking-[0.06em] uppercase py-3.5 border-b border-black/8 ${
                  location.pathname === link.path ? "text-[#990000]" : "text-black/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
