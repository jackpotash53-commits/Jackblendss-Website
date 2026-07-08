import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, LayoutGrid, Users, CalendarDays } from "lucide-react";

const TABS = [
  { label: "Home", path: "/", icon: Home },
  { label: "Gallery", path: "/gallery", icon: LayoutGrid },
  { label: "Referral", path: "/referral", icon: Users },
  { label: "Book", path: "/booking", icon: CalendarDays },
];

export default function BottomNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[500] h-16 bg-white border-t border-black/10 flex md:hidden">
      {TABS.map((tab) => {
        const active = location.pathname === tab.path;
        const Icon = tab.icon;
        return (
          <Link
            key={tab.path}
            to={tab.path}
            className={`flex-1 flex flex-col items-center justify-center gap-[3px] text-[9px] font-semibold tracking-[0.07em] uppercase transition-colors ${
              active ? "text-black" : "text-black/40"
            }`}
          >
            <Icon className="w-5 h-5" strokeWidth={1.6} />
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}