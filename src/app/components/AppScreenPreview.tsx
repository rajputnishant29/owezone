"use client";

import React, { useState } from "react";
import PhoneMockup, { ScreenType } from "./PhoneMockup";
import {
  Sparkles,
  CheckCircle2,
  LogIn,
  LayoutDashboard,
  Bell,
  DoorOpen,
  PlusCircle,
  Receipt,
  Scale,
  ArrowRightLeft,
  MessageSquare,
  User,
  Smile,
  Compass,
} from "lucide-react";

interface ScreenMeta {
  id: ScreenType;
  label: string;
  badge: string;
  icon: React.ReactNode;
  headline: string;
  description: string;
  features: string[];
  color: string;
  accentBg: string;
  accentBorder: string;
  accentText: string;
}

const SCREENS: ScreenMeta[] = [
  {
    id: "welcome",
    label: "01. Welcome",
    badge: "Step 01 • Get Started",
    icon: <Compass size={18} />,
    headline: "A warm, playful welcome to shared living.",
    description:
      "A friendly introduction designed to make flatmate finance and household coordination feel easy, approachable, and fun from the very first tap.",
    features: [
      "Vibrant vector illustrations introducing living spaces",
      "Seamless onboarding with zero financial jargon",
      "Quick start in under 30 seconds",
    ],
    color: "#6957E8",
    accentBg: "#FAF8FF",
    accentBorder: "#DDD6FE",
    accentText: "#6957E8",
  },
  {
    id: "login",
    label: "02. Login",
    badge: "Step 02 • Fast Authentication",
    icon: <LogIn size={18} />,
    headline: "Fast, secure access to your household.",
    description:
      "Log in instantly to access all your shared rooms, historical ledgers, and pending settlements with phone/email authentication.",
    features: [
      "Password or one-time verification access",
      "Encrypted session storage on Android",
      "Instant account recovery options",
    ],
    color: "#1D4ED8",
    accentBg: "#F6FAFF",
    accentBorder: "#BFDBFE",
    accentText: "#1D4ED8",
  },
  {
    id: "home",
    label: "03. Home",
    badge: "Step 03 • Central Dashboard",
    icon: <LayoutDashboard size={18} />,
    headline: "Everything your household needs, in one calm place.",
    description:
      "A warm paper-inspired dashboard displaying your current month expenditure, real-time 'You get back' vs 'You owe' balance sheet, active living spaces, and recent activity updates.",
    features: [
      "Instant real-time calculation of what you're owed and what you owe",
      "One-tap room switcher for multiple flats or trip groups",
      "Live activity stream showing latest expenses and settled items",
    ],
    color: "#6957E8",
    accentBg: "#FAF8FF",
    accentBorder: "#DDD6FE",
    accentText: "#6957E8",
  },
  {
    id: "notifications",
    label: "04. Notifications",
    badge: "Step 04 • Stay Updated",
    icon: <Bell size={18} />,
    headline: "Stay updated without checking everything yourself.",
    description:
      "Smart, non-intrusive alerts keep you notified in real-time when expenses are added, bills are settled, or room updates occur.",
    features: [
      "Real-time push alerts on Android via Google Play services",
      "Clear chronological history of all room changes",
      "Direct jump into expense details from notification",
    ],
    color: "#C2410C",
    accentBg: "#FFF8F6",
    accentBorder: "#FED7AA",
    accentText: "#C2410C",
  },
  {
    id: "join-room",
    label: "05. Join Room",
    badge: "Step 05 • Easy Invitations",
    icon: <DoorOpen size={18} />,
    headline: "Join your flatmates in 5 seconds.",
    description:
      "Enter the simple 6-character room code shared by your roommate to jump straight into your shared household ledger.",
    features: [
      "Simple 6-character room join code entry",
      "Instant sync of all active room members and history",
      "Support for multiple concurrent living spaces",
    ],
    color: "#047857",
    accentBg: "#F4FBF8",
    accentBorder: "#A7F3D0",
    accentText: "#047857",
  },
  {
    id: "create-room",
    label: "06. Create Room",
    badge: "Step 06 • Set Up Space",
    icon: <PlusCircle size={18} />,
    headline: "Create a living space tailored to your home.",
    description:
      "Set up your flat, hostel, or trip group in seconds with curated space presets, custom room names, and instant invite code generation.",
    features: [
      "Presets for Apartment, House, Hostel Dorm, or Trip",
      "Instant 6-letter room join code generation",
      "Designate room currency and split defaults",
    ],
    color: "#6957E8",
    accentBg: "#FAF8FF",
    accentBorder: "#DDD6FE",
    accentText: "#6957E8",
  },
  {
    id: "add-expense",
    label: "07. Add Expense",
    badge: "Step 07 • Fair Math",
    icon: <Receipt size={18} />,
    headline: "Add expenses in seconds with flexible splits.",
    description:
      "Whether splitting equally among roommates, specifying exact amounts per person, or assigning weighted shares, OweZone computes the balance instantly.",
    features: [
      "Equal, exact currency, or share-based splitting modes",
      "Assign payers and custom category tags",
      "Instant push notification dispatched to room members",
    ],
    color: "#6957E8",
    accentBg: "#FAF8FF",
    accentBorder: "#DDD6FE",
    accentText: "#6957E8",
  },
  {
    id: "settlements",
    label: "08. Settlements",
    badge: "Step 08 • Debt Simplifier",
    icon: <Scale size={18} />,
    headline: "Settle up without the spreadsheet.",
    description:
      "Our smart debt simplification algorithm condenses multi-party IOUs into the minimum possible direct payments, eliminating circular debts.",
    features: [
      "Optimized debt simplification with minimum transactions",
      "Direct settlement recording and status updates",
      "Clear audit history of who paid whom and when",
    ],
    color: "#B45309",
    accentBg: "#FFFCF4",
    accentBorder: "#FDE68A",
    accentText: "#B45309",
  },
  {
    id: "settlement-request",
    label: "09. Settlement Request",
    badge: "Step 09 • One-Tap Request",
    icon: <ArrowRightLeft size={18} />,
    headline: "Clear balances with gentle reminders.",
    description:
      "Send clear settlement requests with exact amounts and UPI payment details directly to housemates with one tap.",
    features: [
      "One-tap payment request dispatched to housemate",
      "Instant confirmation and automatic ledger balance update",
      "Detailed timestamped receipt for every settlement",
    ],
    color: "#047857",
    accentBg: "#F4FBF8",
    accentBorder: "#A7F3D0",
    accentText: "#047857",
  },
  {
    id: "chat",
    label: "10. Chat Rooms",
    badge: "Step 10 • In-Room Comms",
    icon: <MessageSquare size={18} />,
    headline: "Talk about the stuff that actually matters.",
    description:
      "Built-in chat dedicated specifically to your shared room so household bills, maintenance notices, and groceries don't get lost in cluttered WhatsApp chats.",
    features: [
      "Dedicated space for household discussions and receipts",
      "Expense notifications embedded directly into chat stream",
      "Fast socket-powered instant messaging",
    ],
    color: "#1D4ED8",
    accentBg: "#F6FAFF",
    accentBorder: "#BFDBFE",
    accentText: "#1D4ED8",
  },
  {
    id: "profile",
    label: "11. Profile",
    badge: "Step 11 • Account & Stats",
    icon: <User size={18} />,
    headline: "Your personal roommate profile & settings.",
    description:
      "Manage your personal info, view global lifetime expenditure, customize notifications, and manage account privacy and deletion.",
    features: [
      "Complete summary of your active memberships",
      "Easy avatar changing and personal preferences",
      "One-tap self-service account deletion",
    ],
    color: "#6957E8",
    accentBg: "#FAF8FF",
    accentBorder: "#DDD6FE",
    accentText: "#6957E8",
  },
  {
    id: "avatar",
    label: "12. Change Avatar",
    badge: "Step 12 • Playful Identity",
    icon: <Smile size={18} />,
    headline: "Personalize your living space avatar.",
    description:
      "Choose from a delightful collection of illustrated room and roommate avatars that give each member and space a unique, friendly personality.",
    features: [
      "Curated vector avatar selection for every housemate",
      "Custom space themes and personality badges",
      "Gamified roommate profile experience",
    ],
    color: "#6957E8",
    accentBg: "#FAF8FF",
    accentBorder: "#DDD6FE",
    accentText: "#6957E8",
  },
];

export const AppScreenPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ScreenType>("welcome");

  const currentScreen = SCREENS.find((s) => s.id === activeTab) || SCREENS[0];

  return (
    <div className="w-full">
      {/* Top Navigation Tabs in exact requested order */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-hide mb-8 sm:justify-start lg:justify-center">
        {SCREENS.map((s) => {
          const isActive = activeTab === s.id;
          return (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold transition-all whitespace-nowrap border cursor-pointer ${
                isActive
                  ? "bg-[#6957E8] text-white border-[#6957E8] shadow-md shadow-[#6957E8]/20 scale-[1.02]"
                  : "bg-white text-[#716D7F] border-[#E8E4DD] hover:border-[#6957E8] hover:text-[#201B3A]"
              }`}
            >
              <span>{s.icon}</span>
              <span>{s.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Feature Showcase Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white border border-[#E8E4DD] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm">
        {/* Left Side: Editorial Explanation */}
        <div className="lg:col-span-6 space-y-6 text-left">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold border"
            style={{
              backgroundColor: currentScreen.accentBg,
              borderColor: currentScreen.accentBorder,
              color: currentScreen.accentText,
            }}
          >
            <Sparkles size={14} />
            <span>{currentScreen.badge}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#201B3A] tracking-tight font-display leading-tight">
            {currentScreen.headline}
          </h3>

          <p className="text-base text-[#716D7F] leading-relaxed">
            {currentScreen.description}
          </p>

          <div className="space-y-3 pt-2">
            {currentScreen.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#D9F3E8] text-[#047857] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 size={14} />
                </div>
                <span className="text-sm font-semibold text-[#201B3A] leading-snug">
                  {feat}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-4 flex flex-wrap gap-2 text-xs font-bold text-[#716D7F]">
            <span className="bg-[#FAF8F2] border border-[#E8E4DD] px-3 py-1.5 rounded-lg">
              ✨ Real App Screenshot
            </span>
            <span className="bg-[#FAF8F2] border border-[#E8E4DD] px-3 py-1.5 rounded-lg">
              ⚡ Real-time Sync
            </span>
            <span className="bg-[#FAF8F2] border border-[#E8E4DD] px-3 py-1.5 rounded-lg">
              🔒 Privacy First
            </span>
          </div>
        </div>

        {/* Right Side: Interactive Phone Mockup with Real Screenshot */}
        <div className="lg:col-span-6 flex justify-center items-center">
          <div className="relative">
            {/* Soft decorative glow */}
            <div
              className="absolute -inset-4 rounded-full blur-2xl opacity-20 transition-all duration-500 pointer-events-none"
              style={{ backgroundColor: currentScreen.color }}
            />
            <PhoneMockup
              screen={activeTab}
              badgeText={currentScreen.label}
              className="scale-[0.95] sm:scale-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppScreenPreview;
