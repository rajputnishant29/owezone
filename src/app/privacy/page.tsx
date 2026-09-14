import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { ShieldCheck, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | OweZone",
  description:
    "Learn how OweZone collects, uses, and protects your personal and shared room information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-left">
      {/* Back button */}
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
      <div className="space-y-3 mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#E9E4FF] text-[#6957E8] border border-[#DDD6FE]">
          <ShieldCheck size={14} />
          <span>PRIVACY & DATA PROTECTION</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#201B3A] font-display">
          Privacy Policy
        </h1>
        <p className="text-sm text-[#716D7F]">
          Last updated: September 2026 • Official policy for OweZone on Google Play
        </p>
      </div>

      {/* Trust Pledge Callout */}
      <div className="bg-[#F4FBF8] border border-[#A7F3D0] rounded-3xl p-6 sm:p-8 mb-10 space-y-3">
        <div className="flex items-center gap-2.5 text-[#047857]">
          <ShieldCheck size={22} />
          <h2 className="text-base sm:text-lg font-black font-display">
            Our Commitment to Privacy
          </h2>
        </div>
        <p className="text-sm sm:text-base text-[#201B3A] leading-relaxed">
          At OweZone, trust is the foundation of group living. We do not sell your personal data, we do not mine your financial transactions for advertising, and your room data remains strictly private to your room members.
        </p>
      </div>

      {/* Policy Articles */}
      <div className="space-y-8 bg-white border border-[#E8E4DD] rounded-3xl p-6 sm:p-10 shadow-xs">
        {/* Article 1 */}
        <section className="space-y-2">
          <span className="text-xs font-black text-[#6957E8] uppercase tracking-wider">
            01
          </span>
          <h2 className="text-xl font-bold text-[#201B3A] font-display">
            Information We Collect
          </h2>
          <p className="text-sm text-[#716D7F] leading-relaxed">
            When you create an OweZone account, we collect your name, email address, and chosen avatar. Within living spaces, we record the expense titles, amounts, payers, and dates you intentionally add to maintain an accurate group balance sheet.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-[#716D7F] pt-2">
            <li><strong>Account Information:</strong> Name, email, and authentication credentials.</li>
            <li><strong>Shared Space Data:</strong> Room titles, expense line items, grocery items, and chat messages.</li>
            <li><strong>Technical Diagnostics:</strong> Anonymized crash logs and device type used exclusively for stability improvements.</li>
          </ul>
        </section>

        <hr className="border-[#E8E4DD]" />

        {/* Article 2 */}
        <section className="space-y-2">
          <span className="text-xs font-black text-[#6957E8] uppercase tracking-wider">
            02
          </span>
          <h2 className="text-xl font-bold text-[#201B3A] font-display">
            How We Use Your Data
          </h2>
          <p className="text-sm text-[#716D7F] leading-relaxed">
            Your information is exclusively used to provide the OweZone service:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-[#716D7F]">
            <li>Calculating group debts, shares, and real-time net balances.</li>
            <li>Delivering real-time chat messages and notifications via secure sockets and push services.</li>
            <li>Authenticating your identity and maintaining session safety.</li>
          </ul>
        </section>

        <hr className="border-[#E8E4DD]" />

        {/* Article 3 */}
        <section className="space-y-2">
          <span className="text-xs font-black text-[#6957E8] uppercase tracking-wider">
            03
          </span>
          <h2 className="text-xl font-bold text-[#201B3A] font-display">
            Living Space Privacy & Sharing
          </h2>
          <p className="text-sm text-[#716D7F] leading-relaxed">
            All expenses, balances, and chat conversations within a space are only accessible to authenticated members who have joined that specific room via invite code. OweZone does not share room data across groups or make your records publicly searchable.
          </p>
        </section>

        <hr className="border-[#E8E4DD]" />

        {/* Article 4 */}
        <section className="space-y-2">
          <span className="text-xs font-black text-[#6957E8] uppercase tracking-wider">
            04
          </span>
          <h2 className="text-xl font-bold text-[#201B3A] font-display">
            Security & Encryption
          </h2>
          <p className="text-sm text-[#716D7F] leading-relaxed">
            All data transmitted between your device and OweZone servers is encrypted using modern TLS 1.3 encryption. Passwords are cryptographically salted and hashed. We never store plaintext credentials or sensitive banking login information.
          </p>
        </section>

        <hr className="border-[#E8E4DD]" />

        {/* Article 5 */}
        <section className="space-y-2">
          <span className="text-xs font-black text-[#6957E8] uppercase tracking-wider">
            05
          </span>
          <h2 className="text-xl font-bold text-[#201B3A] font-display">
            Your Rights & Account Deletion
          </h2>
          <p className="text-sm text-[#716D7F] leading-relaxed">
            You have full control over your personal data. You may update your profile or request complete deletion of your account and associated records directly from within the app under Profile Settings or by visiting our dedicated <Link href="/delete-account" className="text-[#6957E8] font-bold underline">Account Deletion Page</Link>.
          </p>
        </section>

        <hr className="border-[#E8E4DD]" />

        {/* Article 6 */}
        <section className="space-y-2">
          <span className="text-xs font-black text-[#6957E8] uppercase tracking-wider">
            06
          </span>
          <h2 className="text-xl font-bold text-[#201B3A] font-display">
            Contact Us Regarding Privacy
          </h2>
          <p className="text-sm text-[#716D7F] leading-relaxed">
            If you have any questions or data removal requests, reach out to our privacy officer directly at:{" "}
            <a
              href={`mailto:${siteConfig.links.contactEmail}`}
              className="text-[#6957E8] font-bold underline"
            >
              {siteConfig.links.contactEmail}
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
