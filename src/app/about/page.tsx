import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GooglePlayBadge from "../components/GooglePlayBadge";
import { Sparkles, Code2, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "About OweZone | Shared Living, Sorted",
  description:
    "Learn about OweZone's mission to eliminate awkward roommate math and simplify shared living.",
};

export default function AboutPage() {
  return (
    <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-left">
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#716D7F] hover:text-[#6957E8] transition"
        >
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4 mb-12 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#E9E4FF] text-[#6957E8] border border-[#DDD6FE]">
          <Sparkles size={14} />
          <span>THE OWEZONE STORY</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#201B3A] font-display">
          About OweZone
        </h1>
        <p className="text-base sm:text-lg text-[#716D7F] leading-relaxed">
          The all-in-one companion for flatmates, roommates, and shared households to manage bills, groceries, and daily living without friction.
        </p>
      </div>

      {/* Story & Philosophy Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-center">
        <div className="lg:col-span-7 space-y-4 text-left">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#201B3A] font-display">
            Built from real roommate frustration.
          </h2>
          <p className="text-sm sm:text-base text-[#716D7F] leading-relaxed">
            Anyone who has ever shared a flat knows the feeling: endless WhatsApp messages asking &ldquo;who paid for the Wi-Fi?&rdquo;, lost receipts, multiple bottles of milk bought on the same day, and that awkward end-of-the-month calculation session.
          </p>
          <p className="text-sm sm:text-base text-[#716D7F] leading-relaxed">
            We built OweZone to replace messy spreadsheets with a cheerful, warm, and intuitive experience that treats roommate finances as a collaborative team effort.
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="relative w-full h-64 sm:h-72 bg-white border border-[#E8E4DD] rounded-3xl p-4 flex items-center justify-center shadow-xs">
            <Image
              src="/images/illustrations/hero_roommates.png"
              alt="Roommates sharing home"
              fill
              className="object-contain p-4"
            />
          </div>
        </div>
      </div>

      {/* 3 Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white border border-[#E8E4DD] rounded-3xl p-6 sm:p-8 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#E9E4FF] text-[#6957E8] flex items-center justify-center font-bold text-lg">
            💸
          </div>
          <h3 className="text-lg font-bold text-[#201B3A] font-display">
            Fair & Transparent
          </h3>
          <p className="text-xs text-[#716D7F] leading-relaxed">
            Automatic real-time debt calculation means zero confusion over who owes whom.
          </p>
        </div>

        <div className="bg-white border border-[#E8E4DD] rounded-3xl p-6 sm:p-8 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#D9F3E8] text-[#047857] flex items-center justify-center font-bold text-lg">
            🛒
          </div>
          <h3 className="text-lg font-bold text-[#201B3A] font-display">
            Household Sync
          </h3>
          <p className="text-xs text-[#716D7F] leading-relaxed">
            Shared grocery lists and in-room chat keep everyone aligned on supplies and logistics.
          </p>
        </div>

        <div className="bg-white border border-[#E8E4DD] rounded-3xl p-6 sm:p-8 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#FFE9A8] text-[#B45309] flex items-center justify-center font-bold text-lg">
            🎮
          </div>
          <h3 className="text-lg font-bold text-[#201B3A] font-display">
            Playful & Social
          </h3>
          <p className="text-xs text-[#716D7F] leading-relaxed">
            Warm stationery aesthetics and custom avatars make handling household chores delightful.
          </p>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="bg-white border border-[#E8E4DD] rounded-3xl p-6 sm:p-10 space-y-6 shadow-xs mb-12">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#E9E4FF] text-[#6957E8] flex items-center justify-center font-bold">
            <Code2 size={20} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#201B3A] font-display">
              Built with Modern Engineering
            </h3>
            <p className="text-xs text-[#716D7F]">
              Robust, lightweight, and engineered for sub-second synchronization.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-bold text-[#201B3A]">
          <div className="bg-[#FAF8F2] border border-[#E8E4DD] rounded-xl p-3.5 text-center">
            <p className="text-sm font-extrabold text-[#6957E8]">React Native</p>
            <p className="text-[10px] text-[#716D7F] mt-0.5">Mobile App</p>
          </div>
          <div className="bg-[#FAF8F2] border border-[#E8E4DD] rounded-xl p-3.5 text-center">
            <p className="text-sm font-extrabold text-[#047857]">Node.js / Express</p>
            <p className="text-[10px] text-[#716D7F] mt-0.5">API Engine</p>
          </div>
          <div className="bg-[#FAF8F2] border border-[#E8E4DD] rounded-xl p-3.5 text-center">
            <p className="text-sm font-extrabold text-[#C2410C]">WebSockets</p>
            <p className="text-[10px] text-[#716D7F] mt-0.5">Real-time Events</p>
          </div>
          <div className="bg-[#FAF8F2] border border-[#E8E4DD] rounded-xl p-3.5 text-center">
            <p className="text-sm font-extrabold text-[#1D4ED8]">MongoDB Atlas</p>
            <p className="text-[10px] text-[#716D7F] mt-0.5">Encrypted Database</p>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="bg-[#FAF8FF] border border-[#DDD6FE] rounded-3xl p-8 sm:p-12 text-center space-y-4">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#201B3A] font-display">
          Ready to simplify your room living?
        </h3>
        <p className="text-sm text-[#716D7F] max-w-md mx-auto">
          Get OweZone on Android and start living with less awkward math today.
        </p>
        <div className="pt-2 flex justify-center">
          <GooglePlayBadge variant="badge" showApkFallback={true} />
        </div>
      </div>
    </main>
  );
}
