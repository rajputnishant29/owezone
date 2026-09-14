import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { siteConfig } from "@/config/siteConfig";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#FAF8F2",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "OweZone — Shared Living, Sorted.",
  description:
    "Keep expenses, groceries, room balances and everyday roommate stuff together — without the awkward math. The official roommate app launching on Google Play.",
  metadataBase: new URL(siteConfig.url),
  applicationName: "OweZone",
  authors: [{ name: "OweZone Team" }],
  keywords: [
    "roommate expense tracker",
    "split bills app",
    "shared living",
    "grocery list app",
    "room balances",
    "settlements",
    "flatmate expenses",
    "OweZone",
    "Google Play",
  ],
  openGraph: {
    title: "OweZone — Shared Living, Sorted.",
    description:
      "Manage shared expenses, groceries, room balances and settlements with OweZone.",
    url: siteConfig.url,
    siteName: "OweZone",
    images: [
      {
        url: "/images/illustrations/hero_roommates.png",
        width: 1200,
        height: 630,
        alt: "OweZone Roommates Management",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OweZone — Shared Living, Sorted.",
    description:
      "Manage shared expenses, groceries, room balances and settlements with OweZone.",
    images: ["/images/illustrations/hero_roommates.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/images/illustrations/icon.png", type: "image/png" },
    ],
    apple: "/images/illustrations/icon.png",
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolageGrotesque.variable} ${plusJakartaSans.variable}`}>
      <body className="antialiased min-h-screen flex flex-col paper-texture font-body">
        <Navbar />
        <div className="flex-1 w-full">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
