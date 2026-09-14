"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { Trash2, CheckCircle2, ArrowLeft, Mail, AlertTriangle } from "lucide-react";

export default function DeleteAccountPage() {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Compose mailto fallback
    const subject = encodeURIComponent(`OweZone Account Deletion Request - ${email}`);
    const body = encodeURIComponent(
      `Please permanently delete my OweZone account and associated personal data.\n\nAccount Email: ${email}\nReason (optional): ${reason}\n\nI understand that my personal profile and authentication records will be erased.`
    );
    window.location.href = `mailto:${siteConfig.links.contactEmail}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#FFD9D2] text-[#C2410C] border border-[#FED7AA]">
          <Trash2 size={14} />
          <span>GOOGLE PLAY DATA SAFETY & ACCOUNT DELETION</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#201B3A] font-display">
          Delete Your OweZone Account
        </h1>
        <p className="text-sm text-[#716D7F]">
          Learn how to delete your account or submit a direct removal request.
        </p>
      </div>

      {/* Two Ways to Delete Account */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Method 1: In App */}
        <div className="bg-white border border-[#E8E4DD] rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="w-10 h-10 rounded-2xl bg-[#E9E4FF] text-[#6957E8] flex items-center justify-center font-bold text-lg">
            📱
          </div>
          <h2 className="text-xl font-bold text-[#201B3A] font-display">
            Method 1: Inside the App
          </h2>
          <p className="text-xs text-[#716D7F] leading-relaxed">
            The quickest way to delete your account is directly inside the OweZone mobile application:
          </p>
          <ol className="list-decimal pl-5 space-y-1.5 text-xs font-semibold text-[#201B3A]">
            <li>Open the OweZone App on your device.</li>
            <li>Tap on the <span className="text-[#6957E8]">Profile</span> tab in the bottom bar.</li>
            <li>Scroll down to the bottom of the screen.</li>
            <li>Tap <span className="text-[#C2410C]">&ldquo;Delete Account&rdquo;</span> and confirm.</li>
          </ol>
          <p className="text-[11px] text-[#047857] font-bold bg-[#F4FBF8] p-2.5 rounded-xl border border-[#A7F3D0]">
            ✓ In-app deletion takes effect instantly.
          </p>
        </div>

        {/* Method 2: Web / Email Request */}
        <div className="bg-white border border-[#E8E4DD] rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="w-10 h-10 rounded-2xl bg-[#FFD9D2] text-[#C2410C] flex items-center justify-center font-bold text-lg">
            🌐
          </div>
          <h2 className="text-xl font-bold text-[#201B3A] font-display">
            Method 2: Web Request Form
          </h2>
          <p className="text-xs text-[#716D7F] leading-relaxed">
            If you have uninstalled the app or lost access, submit a deletion request below:
          </p>

          {submitted ? (
            <div className="bg-[#F4FBF8] border border-[#A7F3D0] rounded-2xl p-4 text-center space-y-2">
              <CheckCircle2 size={24} className="text-[#047857] mx-auto" />
              <p className="text-xs font-bold text-[#047857]">
                Deletion Request Dispatched
              </p>
              <p className="text-[11px] text-[#716D7F]">
                Our team will verify and process your account removal within 48 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="text-[10px] font-extrabold uppercase text-[#716D7F] block mb-1">
                  Registered Account Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-[#E8E4DD] text-xs focus:outline-hidden focus:border-[#6957E8]"
                />
              </div>
              <div>
                <label className="text-[10px] font-extrabold uppercase text-[#716D7F] block mb-1">
                  Reason for Deletion (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g., Moving out, no longer needed"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-[#E8E4DD] text-xs focus:outline-hidden focus:border-[#6957E8]"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#C2410C] hover:bg-[#9A3412] text-white py-2.5 rounded-xl text-xs font-bold transition shadow-xs"
              >
                Submit Deletion Request
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Data Retention & Deletion Details */}
      <div className="bg-white border border-[#E8E4DD] rounded-3xl p-6 sm:p-10 space-y-6 shadow-xs">
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-[#201B3A] font-display">
            What Happens to Your Data
          </h2>
          <p className="text-sm text-[#716D7F] leading-relaxed">
            We believe in complete transparency regarding your data lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="bg-[#F4FBF8] border border-[#A7F3D0] rounded-2xl p-4 space-y-2">
            <span className="font-extrabold text-[#047857] flex items-center gap-1.5">
              <CheckCircle2 size={16} /> Permanently Deleted
            </span>
            <ul className="list-disc pl-4 space-y-1 text-[#201B3A]">
              <li>Your name, email, and authentication credentials.</li>
              <li>Custom avatar selection and profile preferences.</li>
              <li>Active session tokens and device push notification keys.</li>
              <li>Direct room memberships and admin ownership.</li>
            </ul>
          </div>

          <div className="bg-[#FFFDF4] border border-[#FDE68A] rounded-2xl p-4 space-y-2">
            <span className="font-extrabold text-[#B45309] flex items-center gap-1.5">
              <AlertTriangle size={16} /> Shared Historical Balance Sheet
            </span>
            <p className="text-[#201B3A] leading-relaxed">
              Past expenses that were recorded in a shared room remain in that room&apos;s ledger so remaining roommates&apos; balance calculations do not break. Your name on those historical line items is anonymized as &ldquo;Former Member&rdquo;.
            </p>
          </div>
        </div>

        <div className="pt-2 text-xs text-[#716D7F] flex items-center gap-2">
          <Mail size={16} className="text-[#6957E8]" />
          <span>Need manual assistance? Contact our data team at <a href={`mailto:${siteConfig.links.contactEmail}`} className="text-[#6957E8] font-bold underline">{siteConfig.links.contactEmail}</a></span>
        </div>
      </div>
    </main>
  );
}
