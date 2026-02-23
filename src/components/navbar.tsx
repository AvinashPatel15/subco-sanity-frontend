"use client";

import Link from "next/link";
import { useState } from "react";
import SubcoLogo from "./icons/subco-logo";
import { Button } from "./ui/button";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E5E7EB] bg-[rgba(245,247,248,0.90)] backdrop-blur-md">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <SubcoLogo />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Capabilities", href: "#capabilities" },
            { label: "Process", href: "#process" },
            { label: "Technical Papers", href: "#" },
            { label: "Contact", href: "#contact" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[#4B5563] font-medium text-sm hover:text-[#1B69AC] transition-colors font-sans"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <Button variant="outline" size="sm" className="hidden sm:inline-flex">
            Client Portal
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-[#4B5563]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {mobileOpen ? (
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M3 12h18M3 6h18M3 18h18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#E5E7EB] bg-[#F5F7F8] px-6 py-4 flex flex-col gap-4">
          {[
            { label: "Capabilities", href: "#capabilities" },
            { label: "Process", href: "#process" },
            { label: "Technical Papers", href: "#" },
            { label: "Contact", href: "#contact" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[#4B5563] font-medium text-sm hover:text-[#1B69AC] transition-colors font-sans"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button variant="outline" size="sm" className="hidden sm:inline-flex">
            Client Portal
          </Button>
        </div>
      )}
    </header>
  );
}
