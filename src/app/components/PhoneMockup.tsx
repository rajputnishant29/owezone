"use client";

import React from "react";
import Image from "next/image";

export type ScreenType =
  | "home"
  | "room"
  | "add-expense"
  | "settlements"
  | "settlement-request"
  | "chat"
  | "notifications"
  | "profile"
  | "avatar"
  | "create-room"
  | "join-room"
  | "welcome"
  | "login";

const SCREEN_IMAGE_MAP: Record<ScreenType, { src: string; alt: string }> = {
  home: {
    src: "/images/screenshots/home-screen.png",
    alt: "OweZone Home Screen",
  },
  room: {
    src: "/images/screenshots/room-details.png",
    alt: "OweZone Room Details Screen",
  },
  "add-expense": {
    src: "/images/screenshots/add-expense.png",
    alt: "OweZone Add Expense Screen",
  },
  settlements: {
    src: "/images/screenshots/settlement.png",
    alt: "OweZone Settlements Screen",
  },
  "settlement-request": {
    src: "/images/screenshots/settlement-request.png",
    alt: "OweZone Settlement Request Screen",
  },
  chat: {
    src: "/images/screenshots/chat-room.png",
    alt: "OweZone In-Room Chat Screen",
  },
  notifications: {
    src: "/images/screenshots/notification.png",
    alt: "OweZone Notifications Screen",
  },
  profile: {
    src: "/images/screenshots/profile.png",
    alt: "OweZone Profile Screen",
  },
  avatar: {
    src: "/images/screenshots/choose-avatar.png",
    alt: "OweZone Choose Avatar Screen",
  },
  "create-room": {
    src: "/images/screenshots/create-rrom.png",
    alt: "OweZone Create Room Screen",
  },
  "join-room": {
    src: "/images/screenshots/join-room.png",
    alt: "OweZone Join Room Screen",
  },
  welcome: {
    src: "/images/screenshots/welcome.png",
    alt: "OweZone Welcome Screen",
  },
  login: {
    src: "/images/screenshots/login.png",
    alt: "OweZone Login Screen",
  },
};

interface PhoneMockupProps {
  screen?: ScreenType;
  customSrc?: string;
  alt?: string;
  className?: string;
  badgeText?: string;
  priority?: boolean;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  screen = "home",
  customSrc,
  alt,
  className = "",
  badgeText,
  priority = false,
}) => {
  const currentImage = customSrc
    ? { src: customSrc, alt: alt || "OweZone App Screen" }
    : SCREEN_IMAGE_MAP[screen] || SCREEN_IMAGE_MAP.home;

  return (
    <div
      className={`relative mx-auto w-[280px] sm:w-[310px] rounded-[48px] p-3 bg-[#201B3A] shadow-2xl border-[4px] border-[#362F56] text-[#201B3A] select-none ${className}`}
      style={{
        boxShadow:
          "0 25px 60px -15px rgba(32, 27, 58, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.12) inset",
      }}
    >
      {/* Phone hardware frame top speaker & camera punch */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-[#161228] rounded-full z-30 flex items-center justify-center pointer-events-none">
        <div className="w-8 h-1 bg-[#362F56] rounded-full mr-2" />
        <div className="w-2 h-2 rounded-full bg-[#201B3A] border border-[#453C6E]" />
      </div>

      {/* Screen container with explicit dimensions */}
      <div className="relative rounded-[38px] bg-[#FAF8F2] overflow-hidden w-full h-[580px] sm:h-[640px] border border-[#E8E4DD] shadow-inner">
        <Image
          src={currentImage.src}
          alt={alt || currentImage.alt}
          fill
          sizes="(max-width: 640px) 280px, 310px"
          className="object-cover object-top"
          priority={priority || screen === "home"}
        />
      </div>

      {/* Floating badge if provided */}
      {badgeText && (
        <div className="absolute -top-3 -right-2 bg-[#FFE9A8] text-[#B45309] border border-[#FDE68A] text-xs font-extrabold px-3 py-1 rounded-full shadow-lg z-30">
          {badgeText}
        </div>
      )}
    </div>
  );
};

export default PhoneMockup;
