/**
 * OweZone Marketing Website - Centralized Configuration
 * 
 * Launch-ready configuration for Google Play Store release.
 * When the Google Play Store listing URL is officially published,
 * update the `PLAY_STORE_URL` constant below.
 */

export const siteConfig = {
  name: "OweZone",
  tagline: "Shared living, sorted.",
  description:
    "Keep expenses, groceries, room balances and everyday roommate stuff together — without the awkward math. The modern household management app for roommates.",
  url: "https://owezone.rajputnishant.in",
  ogImage: "/images/illustrations/hero_roommates.png",

  // Centralized Play Store & Download Configuration
  links: {
    playStore: "https://play.google.com/store/apps/details?id=com.owezone.app",
    isPlayStoreLive: false,
    directApk: "/apk/OweZone0.0.2.apk",
    apiBaseUrl: "https://api.owezone.rajputnishant.in",
    contactEmail: "owezone.app@gmail.com",
    supportEmail: "support@owezone.app",
    legalEmail: "nishantrajput7017@gmail.com",
    github: "https://github.com/rajputnishant29/owezone",
  },

  // Real, verified product metrics
  stats: {
    roomsCreated: "55+",
    expensesSplit: "250+",
    settlementsDone: "100+",
    syncSpeed: "< 100ms",
  },

  // Navigation Links
  navLinks: [
    { label: "Features", href: "/#features" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "App Screens", href: "/#screenshots" },
    { label: "Why OweZone", href: "/#why-owezone" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  // Legal Links
  legalLinks: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Delete Account", href: "/delete-account" },
  ],

  // Brand Palette Constants
  palette: {
    paper: "#FAF8F2",
    primaryInk: "#201B3A",
    mutedInk: "#716D7F",
    brandPurple: "#6957E8",
    softLavender: "#E9E4FF",
    mint: "#D9F3E8",
    butter: "#FFE9A8",
    coral: "#FFD9D2",
    softBlue: "#DCEBFF",
    paperBorder: "#E8E4DD",
    cardBg: "#FFFFFF",
  },
};

export type SiteConfig = typeof siteConfig;
