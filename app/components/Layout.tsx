"use client"
import React from "react";
import TopNavbar from "./TopNavbar";
import SideNavbar from "./SideNavbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen grid grid-rows-[auto_1fr] grid-cols-[250px_1fr]">
      {/* Top Navbar */}
      <div className="row-start-1 row-end-2 col-span-2">
        <TopNavbar />
      </div>

      {/* Sidebar */}
      <div className="row-start-2 row-end-3 col-start-1 col-end-2">
        <SideNavbar />
      </div>

      {/* Main Content */}
      <div
        className="w-[970px] mb-5 rounded-xl bg-[#F2F5F9] p-6 overflow-auto"
        style={{
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE & Edge
        }}
      >
        {/* Hide Scrollbar for WebKit Browsers (Chrome, Safari) */}
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        {children}
      </div>
    </div>
  );
};

export default Layout;
