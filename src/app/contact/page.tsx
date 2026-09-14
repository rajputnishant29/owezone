"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { Mail, MessageSquare, ArrowLeft, Send, CheckCircle2, HelpCircle } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message.trim()) return;

    const emailSubject = subject.trim()
      ? `[OweZone Support] ${subject}`
      : `Message from ${name || "OweZone Website Visitor"}`;

    const body = `From: ${name || "Anonymous"} (${email || "No email provided"})\n\n${message}`;

    const mailtoUrl = `mailto:${siteConfig.links.contactEmail}?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
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

      {/* Header */}
      <div className="space-y-3 mb-10 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#E9E4FF] text-[#6957E8] border border-[#DDD6FE]">
          <MessageSquare size={14} />
          <span>GET IN TOUCH</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#201B3A] font-display">
          Contact Us
        </h1>
        <p className="text-sm sm:text-base text-[#716D7F]">
          Have questions, suggestions, or need assistance? We&apos;re always here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Side: Contact Form */}
        <div className="lg:col-span-7 bg-white border border-[#E8E4DD] rounded-3xl p-6 sm:p-8 shadow-xs">
          {submitted ? (
            <div className="py-12 text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-[#D9F3E8] text-[#047857] flex items-center justify-center mx-auto">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#201B3A] font-display">
                Message Ready to Send!
              </h3>
              <p className="text-xs text-[#716D7F] max-w-sm mx-auto">
                Your email client was opened. If you didn&apos;t see it, you can email us directly at{" "}
                <a href={`mailto:${siteConfig.links.contactEmail}`} className="text-[#6957E8] underline font-bold">
                  {siteConfig.links.contactEmail}
                </a>.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 text-xs font-bold text-[#6957E8] underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-extrabold uppercase text-[#716D7F] block mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Alex"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8E4DD] text-sm focus:outline-hidden focus:border-[#6957E8] focus:ring-2 focus:ring-[#6957E8]/10"
                />
              </div>

              <div>
                <label className="text-xs font-extrabold uppercase text-[#716D7F] block mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8E4DD] text-sm focus:outline-hidden focus:border-[#6957E8] focus:ring-2 focus:ring-[#6957E8]/10"
                />
              </div>

              <div>
                <label className="text-xs font-extrabold uppercase text-[#716D7F] block mb-1">
                  Topic / Subject
                </label>
                <input
                  type="text"
                  placeholder="Feedback, bug report, or partnership"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8E4DD] text-sm focus:outline-hidden focus:border-[#6957E8] focus:ring-2 focus:ring-[#6957E8]/10"
                />
              </div>

              <div>
                <label className="text-xs font-extrabold uppercase text-[#716D7F] block mb-1">
                  Message
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="Tell us how we can help you..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8E4DD] text-sm focus:outline-hidden focus:border-[#6957E8] focus:ring-2 focus:ring-[#6957E8]/10"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#6957E8] hover:bg-[#5846DC] text-white py-3 px-6 rounded-xl font-bold text-sm shadow-md transition"
              >
                <Send size={16} />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </div>

        {/* Right Side: Quick Contact & FAQ */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-[#E8E4DD] rounded-3xl p-6 space-y-3 shadow-xs">
            <h3 className="text-base font-bold text-[#201B3A] font-display">
              Direct Contact
            </h3>
            <p className="text-xs text-[#716D7F]">
              Prefer to email us directly? Write to us at:
            </p>
            <div className="flex items-center gap-2 bg-[#FAF8F2] border border-[#E8E4DD] rounded-xl p-3 text-xs font-bold text-[#201B3A]">
              <Mail size={16} className="text-[#6957E8]" />
              <a href={`mailto:${siteConfig.links.contactEmail}`} className="underline hover:text-[#6957E8]">
                {siteConfig.links.contactEmail}
              </a>
            </div>
            <p className="text-[11px] text-[#716D7F]">
              ⚡ Typical response time: within 24 hours.
            </p>
          </div>

          <div className="bg-[#FAF8FF] border border-[#DDD6FE] rounded-3xl p-6 space-y-3 text-xs">
            <div className="flex items-center gap-2 text-[#6957E8]">
              <HelpCircle size={18} />
              <h3 className="font-extrabold font-display">Common Questions</h3>
            </div>
            <div className="space-y-2 text-[#201B3A]">
              <p><strong>Is OweZone free to use?</strong><br /><span className="text-[#716D7F]">Yes, OweZone is completely free with no hidden fees or ads.</span></p>
              <p><strong>How do I invite roommates?</strong><br /><span className="text-[#716D7F]">Share your room&apos;s 6-character code directly from the room header.</span></p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
