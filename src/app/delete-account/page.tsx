"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import {
  Trash2,
  CheckCircle2,
  ArrowLeft,
  Mail,
  AlertTriangle,
  Loader2,
  Eye,
  EyeOff,
  ShieldAlert,
} from "lucide-react";

export default function DeleteAccountPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleDeleteAccount = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError("Please enter both your email address and password.");
      return;
    }

    if (!confirmed) {
      setError("Please check the confirmation box to proceed with account deletion.");
      return;
    }

    setLoading(true);

    try {
      // Step 1: Authenticate with backend
      const loginRes = await fetch(`${siteConfig.links.apiBaseUrl}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          password,
        }),
      });

      const loginData = await loginRes.json().catch(() => ({}));

      if (!loginRes.ok) {
        if (loginRes.status === 400 || loginRes.status === 401) {
          throw new Error(loginData.message || "Invalid email or password. Please verify your credentials.");
        }
        throw new Error(loginData.message || "Authentication failed. Please try again.");
      }

      const token = loginData.token || (loginData.data && loginData.data.token);

      if (!token) {
        throw new Error("Authentication token was not returned. Please contact support.");
      }

      // Step 2: Call direct DELETE /api/auth/me
      const deleteRes = await fetch(`${siteConfig.links.apiBaseUrl}/api/auth/me`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const deleteData = await deleteRes.json().catch(() => ({}));

      if (!deleteRes.ok) {
        if (deleteRes.status === 404) {
          throw new Error("User account not found.");
        }
        throw new Error(deleteData.message || "Failed to delete account. Please try again.");
      }

      // Deletion successful
      setSuccess(true);
      setEmail("");
      setPassword("");
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "An unexpected error occurred. Please try again.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
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
          Instantly delete your account and personal data from our servers.
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
            <li>Tap on the <span className="text-[#6957E8]">Profile</span> tab in the bottom navigation.</li>
            <li>Scroll down to the bottom of the screen.</li>
            <li>Tap <span className="text-[#C2410C]">&ldquo;Delete Account&rdquo;</span> and confirm.</li>
          </ol>
          <p className="text-[11px] text-[#047857] font-bold bg-[#F4FBF8] p-2.5 rounded-xl border border-[#A7F3D0]">
            ✓ In-app deletion takes effect instantly.
          </p>
        </div>

        {/* Method 2: Direct Web API Deletion */}
        <div className="bg-white border border-[#E8E4DD] rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="w-10 h-10 rounded-2xl bg-[#FFD9D2] text-[#C2410C] flex items-center justify-center font-bold text-lg">
            🌐
          </div>
          <h2 className="text-xl font-bold text-[#201B3A] font-display">
            Method 2: Direct Web Deletion
          </h2>
          <p className="text-xs text-[#716D7F] leading-relaxed">
            Enter your credentials below to permanently delete your account directly from our database:
          </p>

          {success ? (
            <div className="bg-[#F4FBF8] border border-[#A7F3D0] rounded-2xl p-5 text-center space-y-3">
              <CheckCircle2 size={32} className="text-[#047857] mx-auto" />
              <div className="space-y-1">
                <p className="text-sm font-bold text-[#047857]">
                  Account Deleted Successfully
                </p>
                <p className="text-xs text-[#716D7F] leading-relaxed">
                  Your OweZone account, login credentials, and device notification tokens have been permanently removed.
                </p>
              </div>
              <div className="pt-2">
                <Link
                  href="/"
                  className="inline-block bg-[#047857] hover:bg-[#065F46] text-white text-xs font-bold px-4 py-2 rounded-xl transition"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleDeleteAccount} className="space-y-3.5">
              {error && (
                <div className="bg-[#FFF5F5] border border-[#FED7D7] rounded-xl p-3 flex items-start gap-2 text-xs text-[#C53030]">
                  <ShieldAlert size={16} className="shrink-0 mt-0.5" />
                  <span>{error}</span>
                </div>
              )}

              <div>
                <label className="text-[10px] font-extrabold uppercase text-[#716D7F] block mb-1">
                  Registered Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E4DD] text-xs text-[#201B3A] placeholder-[#A09CA8] focus:outline-hidden focus:border-[#6957E8] bg-[#FAF8F2]"
                />
              </div>

              <div>
                <label className="text-[10px] font-extrabold uppercase text-[#716D7F] block mb-1">
                  Account Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loading}
                    className="w-full pl-3.5 pr-10 py-2.5 rounded-xl border border-[#E8E4DD] text-xs text-[#201B3A] placeholder-[#A09CA8] focus:outline-hidden focus:border-[#6957E8] bg-[#FAF8F2]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#716D7F] hover:text-[#201B3A] p-0.5"
                    tabIndex={-1}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </div>

              <div className="pt-1">
                <label className="flex items-start gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={confirmed}
                    onChange={(e) => setConfirmed(e.target.checked)}
                    disabled={loading}
                    className="mt-0.5 rounded border-[#E8E4DD] text-[#C2410C] focus:ring-[#C2410C]"
                  />
                  <span className="text-[11px] text-[#716D7F] leading-tight">
                    I understand that this action is permanent and cannot be undone.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#C2410C] hover:bg-[#9A3412] disabled:opacity-60 text-white py-2.5 rounded-xl text-xs font-bold transition shadow-xs flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 size={14} className="animate-spin" />
                    <span>Processing Deletion...</span>
                  </>
                ) : (
                  <>
                    <Trash2 size={14} />
                    <span>Permanently Delete My Account</span>
                  </>
                )}
              </button>

              <div className="pt-1 text-center">
                <p className="text-[11px] text-[#716D7F]">
                  Forgot your password?{" "}
                  <a
                    href={`mailto:${siteConfig.links.contactEmail}?subject=${encodeURIComponent(
                      "OweZone Manual Account Deletion Request"
                    )}&body=${encodeURIComponent(
                      "Please manually delete my OweZone account.\n\nRegistered Email: \nReason (optional): "
                    )}`}
                    className="text-[#6957E8] font-semibold underline"
                  >
                    Request manual deletion via email
                  </a>
                </p>
              </div>
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
              <li>Active session tokens and Pushy device notification keys.</li>
              <li>Direct room memberships and admin ownership.</li>
            </ul>
          </div>

          <div className="bg-[#FFFDF4] border border-[#FDE68A] rounded-2xl p-4 space-y-2">
            <span className="font-extrabold text-[#B45309] flex items-center gap-1.5">
              <AlertTriangle size={16} /> Shared Historical Records
            </span>
            <p className="text-[#201B3A] leading-relaxed">
              Past shared expenses and settlements remain in the room so roommates&apos; balance calculations continue to function. Your identity on those historical records is represented as &ldquo;Deleted User&rdquo;.
            </p>
          </div>
        </div>

        <div className="pt-2 text-xs text-[#716D7F] flex items-center gap-2">
          <Mail size={16} className="text-[#6957E8]" />
          <span>
            Need help or have questions? Contact our data team at{" "}
            <a href={`mailto:${siteConfig.links.contactEmail}`} className="text-[#6957E8] font-bold underline">
              {siteConfig.links.contactEmail}
            </a>
          </span>
        </div>
      </div>
    </main>
  );
}
