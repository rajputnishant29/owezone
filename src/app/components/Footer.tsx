import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import GooglePlayBadge from "./GooglePlayBadge";
import { Mail, ShieldCheck } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#201B3A] text-white pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-[#362F56]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#362F56]">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-2xl overflow-hidden bg-white p-1">
                <Image
                  src="/images/illustrations/icon.png"
                  alt="OweZone Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-black text-white font-display tracking-tight">
                OweZone
              </span>
            </div>
            <p className="text-sm text-[#D9D4CC] max-w-sm leading-relaxed">
              Shared living, sorted. Keep expenses, groceries, room balances and everyday roommate stuff together — without the awkward math.
            </p>
            <div className="pt-2">
              <GooglePlayBadge variant="badge" showApkFallback={true} />
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-[#9B8AFB]">
              Product
            </h4>
            <ul className="space-y-2 text-sm font-semibold text-[#D9D4CC]">
              <li>
                <Link href="/#features" className="hover:text-white transition">
                  Features & Tools
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="hover:text-white transition">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/#screenshots" className="hover:text-white transition">
                  App Screenshots
                </Link>
              </li>
              <li>
                <Link href="/#why-owezone" className="hover:text-white transition">
                  Why Roommates Choose OweZone
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Our Mission
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Trust */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-[#9B8AFB]">
              Legal & Trust
            </h4>
            <ul className="space-y-2 text-sm font-semibold text-[#D9D4CC]">
              <li>
                <Link href="/privacy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/delete-account" className="hover:text-white transition text-[#FFE9A8]">
                  Delete Your Account (Google Play Policy)
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Help & Feedback
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Support */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-[#9B8AFB]">
              Support
            </h4>
            <div className="space-y-2 text-sm text-[#D9D4CC]">
              <p className="flex items-center gap-2">
                <Mail size={16} className="text-[#9B8AFB] flex-shrink-0" />
                <a
                  href={`mailto:${siteConfig.links.contactEmail}`}
                  className="hover:text-white transition underline break-all"
                >
                  {siteConfig.links.contactEmail}
                </a>
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 text-xs text-[#D9F3E8] bg-[#161228] px-2.5 py-1 rounded-lg border border-[#362F56]">
                  <ShieldCheck size={14} className="text-[#00E676]" />
                  <span>Google Play Verified</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#716D7F]">
          <p>© 2026 OweZone. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Built with care for harmonious flatmates everywhere</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
