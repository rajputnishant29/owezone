import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { FileText, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | OweZone",
  description: "Terms and conditions governing the use of OweZone.",
};

export default function TermsPage() {
  return (
    <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-left">
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#716D7F] hover:text-[#6957E8] transition"
        >
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="space-y-3 mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#E9E4FF] text-[#6957E8] border border-[#DDD6FE]">
          <FileText size={14} />
          <span>USER AGREEMENT</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#201B3A] font-display">
          Terms of Service
        </h1>
        <p className="text-sm text-[#716D7F]">
          Last updated: September 2026 • OweZone Mobile Application
        </p>
      </div>

      <div className="space-y-8 bg-white border border-[#E8E4DD] rounded-3xl p-6 sm:p-10 shadow-xs">
        <section className="space-y-2">
          <h2 className="text-xl font-bold text-[#201B3A] font-display">
            1. Acceptance of Terms
          </h2>
          <p className="text-sm text-[#716D7F] leading-relaxed">
            By downloading, installing, or using the OweZone mobile application or website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the application.
          </p>
        </section>

        <hr className="border-[#E8E4DD]" />

        <section className="space-y-2">
          <h2 className="text-xl font-bold text-[#201B3A] font-display">
            2. Purpose of OweZone
          </h2>
          <p className="text-sm text-[#716D7F] leading-relaxed">
            OweZone is a collaborative household management and expense-tracking tool designed to help roommates and living groups record shared costs, grocery needs, and informal settlements. OweZone is not a bank, financial institution, or licensed money transmitter. Actual monetary settlements occur outside the app via third-party UPI or peer-to-peer payment methods.
          </p>
        </section>

        <hr className="border-[#E8E4DD]" />

        <section className="space-y-2">
          <h2 className="text-xl font-bold text-[#201B3A] font-display">
            3. User Accounts & Responsibilities
          </h2>
          <p className="text-sm text-[#716D7F] leading-relaxed">
            You are responsible for maintaining the confidentiality of your account credentials. You agree to provide accurate information and to notify us immediately of any unauthorized use of your account.
          </p>
        </section>

        <hr className="border-[#E8E4DD]" />

        <section className="space-y-2">
          <h2 className="text-xl font-bold text-[#201B3A] font-display">
            4. Fair Usage & Living Space Ethics
          </h2>
          <p className="text-sm text-[#716D7F] leading-relaxed">
            Users agree not to use OweZone for fraudulent, unlawful, or abusive behavior. We reserve the right to suspend or terminate accounts that violate community safety or system integrity.
          </p>
        </section>

        <hr className="border-[#E8E4DD]" />

        <section className="space-y-2">
          <h2 className="text-xl font-bold text-[#201B3A] font-display">
            5. Termination & Account Deletion
          </h2>
          <p className="text-sm text-[#716D7F] leading-relaxed">
            You may terminate your account at any time via the in-app deletion feature or by submitting a request on our <Link href="/delete-account" className="text-[#6957E8] font-bold underline">Delete Account</Link> page.
          </p>
        </section>

        <hr className="border-[#E8E4DD]" />

        <section className="space-y-2">
          <h2 className="text-xl font-bold text-[#201B3A] font-display">
            6. Contact Information
          </h2>
          <p className="text-sm text-[#716D7F] leading-relaxed">
            For inquiries regarding these terms, please contact:{" "}
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
