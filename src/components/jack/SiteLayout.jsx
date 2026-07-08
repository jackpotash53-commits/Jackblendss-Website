import React from "react";
import { Outlet } from "react-router-dom";
import TopNav from "./TopNav";
import Footer from "./Footer";

export default function SiteLayout() {
  return (
    <div>
      <TopNav />
      <Outlet />
      <Footer />
    </div>
  );
}