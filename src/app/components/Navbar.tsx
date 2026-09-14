"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import { Menu, X, ArrowUpRight } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF8F2]/90 backdrop-blur-md border-b border-[#E8E4DD] shadow-xs py-3"
          : "bg-[#FAF8F2] border-b border-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-3 group focus:outline-hidden focus:ring-2 focus:ring-[#6957E8] rounded-xl"
            aria-label="OweZone Home"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-2xl overflow-hidden shadow-xs border border-[#E8E4DD] bg-white p-1">
              <Image
                src="/images/illustrations/icon.png"
                alt="OweZone Logo"
                fill
                className="object-contain p-0.5 group-hover:scale-105 transition-transform"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black text-[#201B3A] tracking-tight font-display leading-none">
                OweZone
              </span>
              <span className="text-[10px] font-bold text-[#6957E8] uppercase tracking-wider">
                Shared Living, Sorted
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-bold text-[#716D7F]">
            <Link
              href="/#features"
              className="hover:text-[#6957E8] transition-colors"
            >
              Features
            </Link>
            <Link
              href="/#how-it-works"
              className="hover:text-[#6957E8] transition-colors"
            >
              How it works
            </Link>
            <Link
              href="/#screenshots"
              className="hover:text-[#6957E8] transition-colors"
            >
              Screenshots
            </Link>
            <Link
              href="/#why-owezone"
              className="hover:text-[#6957E8] transition-colors"
            >
              Why OweZone
            </Link>
            <Link
              href="/about"
              className="hover:text-[#6957E8] transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#6957E8] transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Right Action: Get OweZone CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={siteConfig.links.isPlayStoreLive ? siteConfig.links.playStore : siteConfig.links.directApk}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#6957E8] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-md shadow-[#6957E8]/25 hover:bg-[#5846DC] hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.608 1.614C3.266 1.986 3.067 2.585 3.067 3.376V20.624C3.067 21.415 3.266 22.014 3.608 22.386L3.69 22.463L13.14 13.013V12.784L3.69 1.537L3.608 1.614ZM16.29 16.163L13.14 13.013V12.784L16.29 9.634L16.36 9.674L20.089 11.794C21.152 12.398 21.152 13.399 20.089 14.004L16.36 16.123L16.29 16.163ZM16.36 16.123L13.14 12.903L3.608 22.435C4.015 22.868 4.72 22.923 5.535 22.46L16.36 16.123ZM16.36 9.674L5.535 3.337C4.72 2.874 4.015 2.929 3.608 3.362L13.14 12.894L16.36 9.674Z" />
              </svg>
              <span>Get OweZone</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-white border border-[#E8E4DD] text-[#201B3A] hover:text-[#6957E8] focus:outline-hidden focus:ring-2 focus:ring-[#6957E8]"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#FAF8F2] border-b border-[#E8E4DD] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 text-base font-bold text-[#201B3A]">
            <Link
              href="/#features"
              onClick={closeMenu}
              className="p-2.5 rounded-xl hover:bg-[#E9E4FF] hover:text-[#6957E8] transition-colors"
            >
              Features
            </Link>
            <Link
              href="/#how-it-works"
              onClick={closeMenu}
              className="p-2.5 rounded-xl hover:bg-[#E9E4FF] hover:text-[#6957E8] transition-colors"
            >
              How it works
            </Link>
            <Link
              href="/#screenshots"
              onClick={closeMenu}
              className="p-2.5 rounded-xl hover:bg-[#E9E4FF] hover:text-[#6957E8] transition-colors"
            >
              App Screenshots
            </Link>
            <Link
              href="/#why-owezone"
              onClick={closeMenu}
              className="p-2.5 rounded-xl hover:bg-[#E9E4FF] hover:text-[#6957E8] transition-colors"
            >
              Why OweZone
            </Link>
            <Link
              href="/about"
              onClick={closeMenu}
              className="p-2.5 rounded-xl hover:bg-[#E9E4FF] hover:text-[#6957E8] transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="p-2.5 rounded-xl hover:bg-[#E9E4FF] hover:text-[#6957E8] transition-colors"
            >
              Contact
            </Link>

            <div className="pt-3 border-t border-[#E8E4DD] space-y-2">
              <a
                href={siteConfig.links.isPlayStoreLive ? siteConfig.links.playStore : siteConfig.links.directApk}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="w-full flex items-center justify-center gap-2 bg-[#6957E8] text-white py-3 rounded-xl font-bold shadow-md"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.608 1.614C3.266 1.986 3.067 2.585 3.067 3.376V20.624C3.067 21.415 3.266 22.014 3.608 22.386L3.69 22.463L13.14 13.013V12.784L3.69 1.537L3.608 1.614ZM16.29 16.163L13.14 13.013V12.784L16.29 9.634L16.36 9.674L20.089 11.794C21.152 12.398 21.152 13.399 20.089 14.004L16.36 16.123L16.29 16.163ZM16.36 16.123L13.14 12.903L3.608 22.435C4.015 22.868 4.72 22.923 5.535 22.46L16.36 16.123ZM16.36 9.674L5.535 3.337C4.72 2.874 4.015 2.929 3.608 3.362L13.14 12.894L16.36 9.674Z" />
                </svg>
                <span>Get OweZone on Google Play</span>
              </a>

              <a
                href={siteConfig.links.directApk}
                onClick={closeMenu}
                className="w-full flex items-center justify-center gap-1 text-xs font-bold text-[#716D7F] py-2"
              >
                <span>Download direct Android APK</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
