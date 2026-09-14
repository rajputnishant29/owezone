import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import GooglePlayBadge from "./components/GooglePlayBadge";
import PhoneMockup from "./components/PhoneMockup";
import AppScreenPreview from "./components/AppScreenPreview";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Receipt,
  Scale,
  HeartHandshake,
  MessageSquare,
  Smile,
  Bell,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="w-full">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Editorial Layout with Roommates Illustration + Real Phone Screenshot) */}
      {/* ========================================================================= */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden paper-grid">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Editorial Hero Copy */}
            <div className="lg:col-span-6 text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#E9E4FF] text-[#6957E8] border border-[#DDD6FE]">
                <Sparkles size={14} />
                <span>SHARED LIVING, WITHOUT THE MATH</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#201B3A] tracking-tight font-display leading-[1.08]">
                Shared living, <br />
                <span className="text-[#6957E8] italic font-normal">sorted.</span>
              </h1>

              <p className="text-lg sm:text-xl text-[#716D7F] max-w-xl leading-relaxed">
                Keep expenses, groceries, room balances and everyday roommate stuff together — without the awkward math.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <GooglePlayBadge variant="badge" showApkFallback={true} />
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold text-[#201B3A] bg-white border border-[#E8E4DD] hover:border-[#6957E8] hover:text-[#6957E8] transition-all shadow-xs"
                >
                  <span>See how it works</span>
                  <ArrowRight size={16} />
                </a>
              </div>

              {/* Trust Micro-Badges */}
              <div className="pt-4 flex flex-wrap items-center gap-5 text-xs font-bold text-[#716D7F]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={16} className="text-[#10B981]" />
                  <span>Free & No Ads</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={16} className="text-[#10B981]" />
                  <span>Real-time Room Sync</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={16} className="text-[#10B981]" />
                  <span>Built for Android</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Composition with Real App Home Screenshot */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full flex justify-center items-center py-4">
                {/* Background Roommate Illustration */}
                <div className="absolute -top-10 -left-6 sm:-left-12 w-56 sm:w-72 h-56 sm:h-72 opacity-30 pointer-events-none z-0">
                  <Image
                    src="/images/illustrations/hero_roommates.png"
                    alt="Roommates illustration"
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Main Phone Mockup rendering REAL Home Screen Screenshot */}
                <div className="relative z-10">
                  <PhoneMockup screen="home" priority={true} />
                </div>

                {/* Floating Highlight Pill 1: Monthly Settle */}
                <div className="absolute -bottom-4 -left-4 sm:left-2 z-20 bg-white/95 backdrop-blur-md border border-[#E8E4DD] rounded-2xl p-3 shadow-xl max-w-[210px] hidden sm:block">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#D9F3E8] text-[#047857] flex items-center justify-center font-bold text-sm flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-extrabold text-[#716D7F]">
                        Zero Awkward Math
                      </p>
                      <p className="text-xs font-black text-[#201B3A]">
                        One-tap IOU settle
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Highlight Pill 2: Living Space Sync */}
                <div className="absolute top-12 -right-4 sm:right-2 z-20 bg-white/95 backdrop-blur-md border border-[#E8E4DD] rounded-2xl p-3 shadow-xl max-w-[200px] hidden sm:block">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#FFE9A8] text-[#B45309] flex items-center justify-center font-bold text-sm flex-shrink-0">
                      🏡
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-extrabold text-[#716D7F]">
                        Living Spaces
                      </p>
                      <p className="text-xs font-black text-[#201B3A]">
                        Live ledger sync
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SOCIAL PROOF / PRODUCT TRACTION (Updated Real Values) */}
      {/* ========================================================================= */}
      <section className="py-12 bg-white border-y border-[#E8E4DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-xs font-black uppercase tracking-widest text-[#6957E8]">
              Product Traction
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#201B3A] font-display mt-1">
              Already helping roommates keep things simple.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            <div className="bg-[#FAF8F2] border border-[#E8E4DD] rounded-2xl p-5 text-center">
              <p className="text-3xl sm:text-4xl font-black text-[#6957E8] font-display">
                {siteConfig.stats.roomsCreated}
              </p>
              <p className="text-xs font-bold text-[#716D7F] mt-1 uppercase tracking-wider">
                Living Spaces Created
              </p>
            </div>
            <div className="bg-[#FAF8F2] border border-[#E8E4DD] rounded-2xl p-5 text-center">
              <p className="text-3xl sm:text-4xl font-black text-[#047857] font-display">
                {siteConfig.stats.expensesSplit}
              </p>
              <p className="text-xs font-bold text-[#716D7F] mt-1 uppercase tracking-wider">
                Expenses Split
              </p>
            </div>
            <div className="bg-[#FAF8F2] border border-[#E8E4DD] rounded-2xl p-5 text-center">
              <p className="text-3xl sm:text-4xl font-black text-[#C2410C] font-display">
                {siteConfig.stats.settlementsDone}
              </p>
              <p className="text-xs font-bold text-[#716D7F] mt-1 uppercase tracking-wider">
                Settlements Completed
              </p>
            </div>
            <div className="bg-[#FAF8F2] border border-[#E8E4DD] rounded-2xl p-5 text-center">
              <p className="text-3xl sm:text-4xl font-black text-[#1D4ED8] font-display">
                {siteConfig.stats.syncSpeed}
              </p>
              <p className="text-xs font-bold text-[#716D7F] mt-1 uppercase tracking-wider">
                Live Sync Latency
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CORE VALUE PROPOSITION */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#FFE9A8] text-[#B45309] border border-[#FDE68A]">
            <span>THE OWEZONE PHILOSOPHY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#201B3A] tracking-tight font-display">
            Less awkward math. <br />
            <span className="text-[#6957E8] italic font-normal">More room to live.</span>
          </h2>

          <p className="text-lg text-[#716D7F] max-w-2xl mx-auto leading-relaxed">
            Living with roommates should be fun, comfortable, and collaborative — not an endless debate over who paid for toilet paper or electricity. OweZone removes the financial tension from shared spaces.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 text-left">
            <div className="bg-white border border-[#E8E4DD] rounded-3xl p-6 sm:p-8 space-y-3 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#E9E4FF] text-[#6957E8] flex items-center justify-center font-bold text-xl">
                🧮
              </div>
              <h3 className="text-xl font-extrabold text-[#201B3A] font-display">
                Zero Spreadsheets
              </h3>
              <p className="text-sm text-[#716D7F] leading-relaxed">
                Forget maintaining complex Excel sheets. Add an expense in 5 seconds and let OweZone do the math automatically.
              </p>
            </div>

            <div className="bg-white border border-[#E8E4DD] rounded-3xl p-6 sm:p-8 space-y-3 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#D9F3E8] text-[#047857] flex items-center justify-center font-bold text-xl">
                🤝
              </div>
              <h3 className="text-xl font-extrabold text-[#201B3A] font-display">
                Transparent IOUs
              </h3>
              <p className="text-sm text-[#716D7F] leading-relaxed">
                Clear net balances mean no double counting. Everyone knows exactly what they get back or what they owe.
              </p>
            </div>

            <div className="bg-white border border-[#E8E4DD] rounded-3xl p-6 sm:p-8 space-y-3 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#FFD9D2] text-[#C2410C] flex items-center justify-center font-bold text-xl">
                🏡
              </div>
              <h3 className="text-xl font-extrabold text-[#201B3A] font-display">
                Household Sync
              </h3>
              <p className="text-sm text-[#716D7F] leading-relaxed">
                Expenses, grocery checklists, and roommate chat live together under one roof, keeping everyone synchronized.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. VARIED FEATURES SHOWCASE WITH REAL SCREENSHOTS (Expenses, Settlements, Chat, Notifications, Avatars, Ledger) */}
      {/* ========================================================================= */}
      <section id="features" className="py-20 bg-white border-y border-[#E8E4DD] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-[#6957E8]">
              Feature Suite
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#201B3A] tracking-tight font-display">
              Everything needed to manage a happy household.
            </h2>
            <p className="text-base sm:text-lg text-[#716D7F]">
              Designed specifically around the daily friction points roommates experience.
            </p>
          </div>

          {/* Feature 1: Shared Expenses (Featured Big Card with Real Add Expense Screenshot) */}
          <div className="bg-[#FAF8FF] border border-[#DDD6FE] rounded-3xl p-8 sm:p-12 lg:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-5 text-left">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white text-[#6957E8] border border-[#DDD6FE]">
                  <Receipt size={14} />
                  <span>01. SHARED EXPENSES</span>
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-[#201B3A] font-display">
                  Know who paid. <br />
                  <span className="text-[#6957E8]">Know who owes.</span>
                </h3>
                <p className="text-base text-[#716D7F] leading-relaxed">
                  Log rent, Wi-Fi, electricity, groceries, and dinner bills in seconds. Split equally, by exact amounts, or customize shares based on who participated.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-xs font-bold text-[#6957E8]">
                  <span className="bg-white border border-[#DDD6FE] px-3 py-1.5 rounded-xl">
                    ✓ Equal / Exact / Share splits
                  </span>
                  <span className="bg-white border border-[#DDD6FE] px-3 py-1.5 rounded-xl">
                    ✓ Payer assignment
                  </span>
                  <span className="bg-white border border-[#DDD6FE] px-3 py-1.5 rounded-xl">
                    ✓ Instant push alerts
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6 flex justify-center">
                <PhoneMockup screen="add-expense" badgeText="Split Expense Screen" />
              </div>
            </div>
          </div>

          {/* Feature 2: Smart Settlements (Big Card with Real Settlement Screenshot) */}
          <div className="bg-[#FFFDF4] border border-[#FDE68A] rounded-3xl p-8 sm:p-12 lg:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
                <PhoneMockup screen="settlements" badgeText="Smart Debt Engine" />
              </div>

              <div className="lg:col-span-6 space-y-5 text-left order-1 lg:order-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white text-[#B45309] border border-[#FDE68A]">
                  <Scale size={14} />
                  <span>02. SMART SETTLEMENTS</span>
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-[#201B3A] font-display">
                  Settle up without <br />
                  <span className="text-[#B45309]">the spreadsheet.</span>
                </h3>
                <p className="text-base text-[#716D7F] leading-relaxed">
                  Circular debts are automatically simplified into the smallest possible number of direct payments, eliminating circular IOUs and extra transfer fees.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-xs font-bold text-[#B45309]">
                  <span className="bg-white border border-[#FDE68A] px-3 py-1.5 rounded-xl">
                    ✓ Debt simplification
                  </span>
                  <span className="bg-white border border-[#FDE68A] px-3 py-1.5 rounded-xl">
                    ✓ Direct UPI settlement recording
                  </span>
                  <span className="bg-white border border-[#FDE68A] px-3 py-1.5 rounded-xl">
                    ✓ Timestamped payment history
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3 & 4: In-Room Chat & Push Notifications Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* In-Room Chat Card with Real Screenshot */}
            <div className="bg-[#F6FAFF] border border-[#BFDBFE] rounded-3xl p-8 space-y-6 text-left shadow-xs flex flex-col justify-between">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white text-[#1D4ED8] border border-[#BFDBFE]">
                  <MessageSquare size={14} />
                  <span>03. IN-ROOM CHAT</span>
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#201B3A] font-display">
                  Talk about the stuff that actually matters.
                </h3>
                <p className="text-sm text-[#716D7F] leading-relaxed">
                  Dedicated in-app group chat for each living space so bills, grocery updates, and house logistics don&apos;t get lost in personal chat apps.
                </p>
              </div>

              <div className="flex justify-center pt-2">
                <PhoneMockup screen="chat" badgeText="In-Room Chat" />
              </div>
            </div>

            {/* Push Notifications Card with Real Screenshot */}
            <div className="bg-[#FFF8F6] border border-[#FED7AA] rounded-3xl p-8 space-y-6 text-left shadow-xs flex flex-col justify-between">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white text-[#C2410C] border border-[#FED7AA]">
                  <Bell size={14} />
                  <span>04. PUSH NOTIFICATIONS</span>
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#201B3A] font-display">
                  Stay updated without checking yourself.
                </h3>
                <p className="text-sm text-[#716D7F] leading-relaxed">
                  Instant Google Play push alerts whenever a roommate logs a payment, clears an IOU, or sends a settlement request.
                </p>
              </div>

              <div className="flex justify-center pt-2">
                <PhoneMockup screen="notifications" badgeText="Push Alert Stream" />
              </div>
            </div>
          </div>

          {/* Feature 5 & 6: Playful Avatars & Room Details Ledger */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Playful Avatars Card with Real Screenshot */}
            <div className="bg-[#FAF8FF] border border-[#DDD6FE] rounded-3xl p-8 space-y-6 text-left shadow-xs flex flex-col justify-between">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white text-[#6957E8] border border-[#DDD6FE]">
                  <Smile size={14} />
                  <span>05. ROOMMATE AVATARS</span>
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#201B3A] font-display">
                  Playful social identity for every roommate.
                </h3>
                <p className="text-sm text-[#716D7F] leading-relaxed">
                  Choose from a delightful set of illustrated roommate and living space avatars that give every flatmate a unique personality.
                </p>
              </div>

              <div className="flex justify-center pt-2">
                <PhoneMockup screen="avatar" badgeText="Avatar Picker" />
              </div>
            </div>

            {/* Living Space Ledger Card with Real Screenshot */}
            <div className="bg-[#F4FBF8] border border-[#A7F3D0] rounded-3xl p-8 space-y-6 text-left shadow-xs flex flex-col justify-between">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white text-[#047857] border border-[#A7F3D0]">
                  <HeartHandshake size={14} />
                  <span>06. LIVING SPACE LEDGER</span>
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#201B3A] font-display">
                  One shared space for your household.
                </h3>
                <p className="text-sm text-[#716D7F] leading-relaxed">
                  Every flat, hostel room, or trip gets its own dedicated ledger, invite code, roommate balances, and spending history.
                </p>
              </div>

              <div className="flex justify-center pt-2">
                <PhoneMockup screen="room" badgeText="Living Space Ledger" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. APP SCREENSHOT SHOWCASE (Chronological App Walkthrough) */}
      {/* ========================================================================= */}
      <section id="screenshots" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-[#6957E8]">
              Product Showcase
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#201B3A] tracking-tight font-display">
              Real screenshots from the brand new app.
            </h2>
            <p className="text-base sm:text-lg text-[#716D7F]">
              Click any step below to inspect the authentic OweZone mobile app interface in detail.
            </p>
          </div>

          <AppScreenPreview />

          {/* Chronological Horizontal Gallery in Exact Requested Sequence */}
          <div className="pt-10">
            <div className="text-center mb-8">
              <h3 className="text-xl sm:text-2xl font-black text-[#201B3A] font-display">
                Complete App Experience Flow
              </h3>
              <p className="text-xs text-[#716D7F] mt-1">
                Scroll horizontally through the complete chronological app journey: from onboarding to settlements.
              </p>
            </div>

            {/* 12 Screenshots in the exact requested order:
                welcome -> login -> home -> notifications -> join room -> create room -> addexpense -> settlements -> settlement requests -> chat rooms -> profile -> change avatar */}
            <div className="flex gap-6 overflow-x-auto pb-6 pt-2 px-2 scrollbar-hide">
              {/* 1. Welcome */}
              <div className="flex-shrink-0 text-center space-y-2">
                <PhoneMockup screen="welcome" className="w-[240px] sm:w-[260px]" />
                <p className="text-xs font-bold text-[#201B3A]">01. Welcome</p>
              </div>

              {/* 2. Login */}
              <div className="flex-shrink-0 text-center space-y-2">
                <PhoneMockup screen="login" className="w-[240px] sm:w-[260px]" />
                <p className="text-xs font-bold text-[#201B3A]">02. Login</p>
              </div>

              {/* 3. Home */}
              <div className="flex-shrink-0 text-center space-y-2">
                <PhoneMockup screen="home" className="w-[240px] sm:w-[260px]" />
                <p className="text-xs font-bold text-[#201B3A]">03. Home Dashboard</p>
              </div>

              {/* 4. Notifications */}
              <div className="flex-shrink-0 text-center space-y-2">
                <PhoneMockup screen="notifications" className="w-[240px] sm:w-[260px]" />
                <p className="text-xs font-bold text-[#201B3A]">04. Notifications</p>
              </div>

              {/* 5. Join Room */}
              <div className="flex-shrink-0 text-center space-y-2">
                <PhoneMockup screen="join-room" className="w-[240px] sm:w-[260px]" />
                <p className="text-xs font-bold text-[#201B3A]">05. Join Room</p>
              </div>

              {/* 6. Create Room */}
              <div className="flex-shrink-0 text-center space-y-2">
                <PhoneMockup screen="create-room" className="w-[240px] sm:w-[260px]" />
                <p className="text-xs font-bold text-[#201B3A]">06. Create Room</p>
              </div>

              {/* 7. Add Expense */}
              <div className="flex-shrink-0 text-center space-y-2">
                <PhoneMockup screen="add-expense" className="w-[240px] sm:w-[260px]" />
                <p className="text-xs font-bold text-[#201B3A]">07. Add Expense</p>
              </div>

              {/* 8. Settlements */}
              <div className="flex-shrink-0 text-center space-y-2">
                <PhoneMockup screen="settlements" className="w-[240px] sm:w-[260px]" />
                <p className="text-xs font-bold text-[#201B3A]">08. Settlements</p>
              </div>

              {/* 9. Settlement Request */}
              <div className="flex-shrink-0 text-center space-y-2">
                <PhoneMockup screen="settlement-request" className="w-[240px] sm:w-[260px]" />
                <p className="text-xs font-bold text-[#201B3A]">09. Settlement Request</p>
              </div>

              {/* 10. Chat Rooms */}
              <div className="flex-shrink-0 text-center space-y-2">
                <PhoneMockup screen="chat" className="w-[240px] sm:w-[260px]" />
                <p className="text-xs font-bold text-[#201B3A]">10. Chat Rooms</p>
              </div>

              {/* 11. Profile */}
              <div className="flex-shrink-0 text-center space-y-2">
                <PhoneMockup screen="profile" className="w-[240px] sm:w-[260px]" />
                <p className="text-xs font-bold text-[#201B3A]">11. Profile</p>
              </div>

              {/* 12. Change Avatar */}
              <div className="flex-shrink-0 text-center space-y-2">
                <PhoneMockup screen="avatar" className="w-[240px] sm:w-[260px]" />
                <p className="text-xs font-bold text-[#201B3A]">12. Change Avatar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. HOW IT WORKS (4-Step Visual Flow) */}
      {/* ========================================================================= */}
      <section id="how-it-works" className="py-20 bg-white border-y border-[#E8E4DD] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-[#6957E8]">
              Simple 4-Step Flow
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#201B3A] tracking-tight font-display">
              How OweZone works in 4 easy steps.
            </h2>
            <p className="text-base sm:text-lg text-[#716D7F]">
              Set up in under 60 seconds. No complicated banking credentials required.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {/* Step 1 */}
            <div className="bg-[#FAF8F2] border border-[#E8E4DD] rounded-3xl p-6 sm:p-8 space-y-4 relative">
              <span className="text-4xl font-black text-[#6957E8] font-display">01</span>
              <h3 className="text-lg font-extrabold text-[#201B3A] font-display">
                Create or join a room
              </h3>
              <p className="text-xs text-[#716D7F] leading-relaxed">
                Create a space for your flat, house, or hostel and share your 6-digit code with your roommates.
              </p>
              <div className="pt-2 text-2xl">🚪</div>
            </div>

            {/* Step 2 */}
            <div className="bg-[#FAF8F2] border border-[#E8E4DD] rounded-3xl p-6 sm:p-8 space-y-4 relative">
              <span className="text-4xl font-black text-[#6957E8] font-display">02</span>
              <h3 className="text-lg font-extrabold text-[#201B3A] font-display">
                Add shared expenses
              </h3>
              <p className="text-xs text-[#716D7F] leading-relaxed">
                Whenever anyone buys groceries, pays rent, or orders food, add the bill with one tap.
              </p>
              <div className="pt-2 text-2xl">💸</div>
            </div>

            {/* Step 3 */}
            <div className="bg-[#FAF8F2] border border-[#E8E4DD] rounded-3xl p-6 sm:p-8 space-y-4 relative">
              <span className="text-4xl font-black text-[#6957E8] font-display">03</span>
              <h3 className="text-lg font-extrabold text-[#201B3A] font-display">
                Track who owes what
              </h3>
              <p className="text-xs text-[#716D7F] leading-relaxed">
                Real-time calculations keep your balances updated instantly. No manual calculation errors.
              </p>
              <div className="pt-2 text-2xl">📊</div>
            </div>

            {/* Step 4 */}
            <div className="bg-[#FAF8F2] border border-[#E8E4DD] rounded-3xl p-6 sm:p-8 space-y-4 relative">
              <span className="text-4xl font-black text-[#6957E8] font-display">04</span>
              <h3 className="text-lg font-extrabold text-[#201B3A] font-display">
                Settle up smoothly
              </h3>
              <p className="text-xs text-[#716D7F] leading-relaxed">
                Use simplified settlements to clear all debts via UPI or direct payment with complete audit records.
              </p>
              <div className="pt-2 text-2xl">🤝</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. WHY OWEZONE / LIVING SPACES & ROOMMATES SECTION */}
      {/* ========================================================================= */}
      <section id="why-owezone" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#E9E4FF] text-[#6957E8] border border-[#DDD6FE]">
                <HeartHandshake size={14} />
                <span>MADE FOR LIVING TOGETHER</span>
              </span>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#201B3A] tracking-tight font-display">
                Built for the people you actually live with.
              </h2>

              <p className="text-base sm:text-lg text-[#716D7F] leading-relaxed">
                Whether you’re sharing a flat, a house, a hostel room or just splitting everyday costs with friends, OweZone keeps everyone on the same page.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#D9F3E8] text-[#047857] flex items-center justify-center font-bold text-xs">
                    ✓
                  </div>
                  <span className="text-sm font-bold text-[#201B3A]">
                    Apartments & Flatmates sharing bills & groceries
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#D9F3E8] text-[#047857] flex items-center justify-center font-bold text-xs">
                    ✓
                  </div>
                  <span className="text-sm font-bold text-[#201B3A]">
                    College Students & Hostel dorm mates splitting daily food
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#D9F3E8] text-[#047857] flex items-center justify-center font-bold text-xs">
                    ✓
                  </div>
                  <span className="text-sm font-bold text-[#201B3A]">
                    Vacation Groups & Road Trips splitting hotel & fuel
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white border border-[#E8E4DD] rounded-2xl p-4 text-center shadow-xs">
                  <div className="relative w-full h-28 sm:h-36 mb-2">
                    <Image
                      src="/images/illustrations/room_house.png"
                      alt="Apartment Living"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-xs font-bold text-[#201B3A]">Apartments & Flats</p>
                </div>

                <div className="bg-white border border-[#E8E4DD] rounded-2xl p-4 text-center shadow-xs">
                  <div className="relative w-full h-28 sm:h-36 mb-2">
                    <Image
                      src="/images/illustrations/room_aesthetic.png"
                      alt="Co-living Studio"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-xs font-bold text-[#201B3A]">Co-living Studios</p>
                </div>

                <div className="bg-white border border-[#E8E4DD] rounded-2xl p-4 text-center shadow-xs">
                  <div className="relative w-full h-28 sm:h-36 mb-2">
                    <Image
                      src="/images/illustrations/room_school.png"
                      alt="College Hostel"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-xs font-bold text-[#201B3A]">College Hostels</p>
                </div>

                <div className="bg-white border border-[#E8E4DD] rounded-2xl p-4 text-center shadow-xs">
                  <div className="relative w-full h-28 sm:h-36 mb-2">
                    <Image
                      src="/images/illustrations/room_personal.png"
                      alt="Trip Groups"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-xs font-bold text-[#201B3A]">Trip Groups</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. TRUST & DATA PRIVACY PLEDGE */}
      {/* ========================================================================= */}
      <section className="py-16 bg-[#F4FBF8] border-y border-[#A7F3D0] px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-left space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#D9F3E8] text-[#047857] flex items-center justify-center flex-shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#047857] font-display">
                  Our Commitment to Roommate Privacy
                </h3>
                <p className="text-xs text-[#716D7F]">
                  Trust is the foundation of group living. We build with security from day one.
                </p>
              </div>
            </div>

            <a
              href="/privacy"
              className="text-xs font-bold text-[#047857] bg-white border border-[#A7F3D0] px-4 py-2 rounded-full hover:bg-[#D9F3E8] transition whitespace-nowrap"
            >
              Read Privacy Policy →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="bg-white border border-[#A7F3D0] rounded-2xl p-4 text-xs space-y-1">
              <p className="font-extrabold text-[#201B3A]">Zero Data Selling</p>
              <p className="text-[#716D7F]">We do not sell personal data or mine your financial transactions for ads.</p>
            </div>
            <div className="bg-white border border-[#A7F3D0] rounded-2xl p-4 text-xs space-y-1">
              <p className="font-extrabold text-[#201B3A]">Private Room Access</p>
              <p className="text-[#716D7F]">Expenses and chats are only visible to authenticated roommates with invite codes.</p>
            </div>
            <div className="bg-white border border-[#A7F3D0] rounded-2xl p-4 text-xs space-y-1">
              <p className="font-extrabold text-[#201B3A]">Self-Service Deletion</p>
              <p className="text-[#716D7F]">Easily delete your account and profile anytime via app settings or web form.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. FINAL CALL TO ACTION */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF8F2] text-center">
        <div className="max-w-4xl mx-auto space-y-8 bg-white border border-[#E8E4DD] rounded-3xl p-8 sm:p-14 shadow-sm relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E9E4FF]/40 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-4 relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#E9E4FF] text-[#6957E8]">
              Ready for Google Play Launch
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#201B3A] tracking-tight font-display">
              Make shared living <br />
              <span className="text-[#6957E8] italic font-normal">a little easier.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#716D7F] max-w-xl mx-auto leading-relaxed">
              Download OweZone and get the household stuff sorted. Available on Android.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <GooglePlayBadge variant="badge" showApkFallback={true} />
          </div>

          <p className="text-xs text-[#716D7F] relative z-10">
            Free forever for shared households • Fast setup with zero ads
          </p>
        </div>
      </section>
    </main>
  );
}
