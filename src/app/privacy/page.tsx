import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ArrowLeft, Mail, ExternalLink, Trash2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | OweZone",
  description:
    "Learn what information OweZone collects, how it is used, shared, protected, and how you can request deletion of your account and personal information.",
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
          Last updated: September 2026
        </p>
      </div>

      {/* Intro Statement Card */}
      <div className="bg-[#F4FBF8] border border-[#A7F3D0] rounded-3xl p-6 sm:p-8 mb-10 space-y-3">
        <p className="text-sm sm:text-base text-[#201B3A] leading-relaxed">
          <strong>OweZone</strong> is operated by <strong>Nishant Rajput</strong>. This Privacy Policy explains what information OweZone collects, how it is used, how it is shared, how it is protected, and how you can request deletion of your account and applicable personal information.
        </p>
        <p className="text-sm sm:text-base text-[#201B3A] leading-relaxed">
          OweZone is designed to help people manage shared expenses, groceries, settlements, rooms, and communication.
        </p>
      </div>

      {/* Policy Sections */}
      <div className="space-y-10 bg-white border border-[#E8E4DD] rounded-3xl p-6 sm:p-10 shadow-xs">
        {/* Section 01 */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black text-[#6957E8] bg-[#E9E4FF] px-2.5 py-1 rounded-md uppercase tracking-wider">
              01
            </span>
            <h2 className="text-xl font-bold text-[#201B3A] font-display">
              Information We Collect
            </h2>
          </div>
          <p className="text-sm text-[#716D7F] leading-relaxed">
            When you create and use an OweZone account, we collect information necessary to provide the service.
          </p>

          <div className="space-y-4 pt-2">
            <div>
              <h3 className="text-base font-bold text-[#201B3A] mb-1.5">
                Account Information
              </h3>
              <p className="text-sm text-[#716D7F] mb-2">We collect:</p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-[#716D7F]">
                <li>Name</li>
                <li>Email address</li>
                <li>Password information in the form of a securely hashed password</li>
                <li>Selected avatar</li>
              </ul>
              <p className="text-xs font-semibold text-[#047857] mt-2 bg-[#F4FBF8] p-2 rounded-lg inline-block border border-[#A7F3D0]">
                ✓ OweZone does not store passwords in plain text.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-[#201B3A] mb-1.5">
                Room and Shared-Living Data
              </h3>
              <p className="text-sm text-[#716D7F] mb-2">
                When you create or join a room, OweZone may store:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-[#716D7F]">
                <li>Room name</li>
                <li>Room invitation/code information</li>
                <li>Room membership information</li>
                <li>Expenses and expense amounts</li>
                <li>Expense descriptions</li>
                <li>Grocery items</li>
                <li>Settlement records</li>
                <li>Chat messages</li>
              </ul>
              <p className="text-sm text-[#716D7F] mt-2 leading-relaxed">
                This information is necessary to provide shared expense tracking, grocery management, settlement calculations, and room communication.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-[#201B3A] mb-1.5">
                Push Notification Information
              </h3>
              <p className="text-sm text-[#716D7F] leading-relaxed mb-2">
                If push notifications are enabled, OweZone uses Pushy to deliver notifications to your device. OweZone stores the Pushy device token associated with your account so that notifications can be delivered.
              </p>
              <p className="text-sm text-[#716D7F] mb-2">
                OweZone currently uses push notifications for:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-[#716D7F]">
                <li>New expenses</li>
                <li>Room membership updates</li>
                <li>Settlement requests</li>
                <li>Settlement approvals</li>
              </ul>
              <p className="text-xs text-[#716D7F] italic mt-2">
                No other push notification categories are currently used.
              </p>
            </div>

            <div className="bg-[#FAF8F2] border border-[#E8E4DD] rounded-2xl p-4">
              <h3 className="text-base font-bold text-[#201B3A] mb-1.5">
                Information We Do Not Collect
              </h3>
              <p className="text-sm text-[#716D7F] mb-2">
                OweZone does not intentionally collect:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-[#716D7F]">
                <li>Phone numbers</li>
                <li>Precise location information</li>
                <li>Contacts</li>
                <li>User-uploaded photos or files</li>
                <li>IP addresses as part of your OweZone account data</li>
              </ul>
              <p className="text-xs text-[#716D7F] mt-2 font-medium">
                OweZone currently does not use analytics or crash-reporting services.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-[#E8E4DD]" />

        {/* Section 02 */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black text-[#6957E8] bg-[#E9E4FF] px-2.5 py-1 rounded-md uppercase tracking-wider">
              02
            </span>
            <h2 className="text-xl font-bold text-[#201B3A] font-display">
              How We Use Your Information
            </h2>
          </div>
          <p className="text-sm text-[#716D7F] leading-relaxed">
            We use your information to provide and operate OweZone, including to:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm text-[#716D7F]">
            <li>Create and maintain your account</li>
            <li>Authenticate your identity</li>
            <li>Maintain room membership</li>
            <li>Record and manage shared expenses</li>
            <li>Calculate balances and settlements</li>
            <li>Manage grocery lists</li>
            <li>Provide room chat functionality</li>
            <li>Deliver relevant push notifications</li>
            <li>Send account-related emails, including welcome and password-reset emails</li>
            <li>Maintain the security and functionality of the service</li>
            <li>Process account deletion requests</li>
          </ul>

          <div className="bg-[#F4FBF8] border border-[#A7F3D0] rounded-2xl p-4 space-y-1 text-xs sm:text-sm text-[#047857] font-semibold">
            <p>• OweZone does not sell your personal information.</p>
            <p>• OweZone does not use your expense or settlement information for advertising.</p>
            <p>• OweZone is currently provided free of charge and does not currently offer subscriptions or premium plans.</p>
          </div>
        </section>

        <hr className="border-[#E8E4DD]" />

        {/* Section 03 */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black text-[#6957E8] bg-[#E9E4FF] px-2.5 py-1 rounded-md uppercase tracking-wider">
              03
            </span>
            <h2 className="text-xl font-bold text-[#201B3A] font-display">
              How Your Information Is Shared
            </h2>
          </div>
          <p className="text-sm text-[#716D7F] leading-relaxed">
            OweZone does not sell your personal information. Some information is processed by third-party service providers that help us operate the service.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl border border-[#E8E4DD] bg-[#FAF8F2] space-y-1.5">
              <h3 className="font-bold text-sm text-[#201B3A]">Oracle Cloud</h3>
              <p className="text-xs text-[#716D7F] leading-relaxed">
                OweZone&apos;s backend is hosted on Oracle Cloud. Information may be processed on this infrastructure as necessary to operate the OweZone backend.
              </p>
            </div>

            <div className="p-4 rounded-2xl border border-[#E8E4DD] bg-[#FAF8F2] space-y-1.5">
              <h3 className="font-bold text-sm text-[#201B3A]">MongoDB Atlas</h3>
              <p className="text-xs text-[#716D7F] leading-relaxed">
                OweZone uses MongoDB Atlas to store application data, including account, room, expense, grocery, settlement, notification, and chat information.
              </p>
            </div>

            <div className="p-4 rounded-2xl border border-[#E8E4DD] bg-[#FAF8F2] space-y-1.5">
              <h3 className="font-bold text-sm text-[#201B3A]">Pushy</h3>
              <p className="text-xs text-[#716D7F] leading-relaxed">
                OweZone uses Pushy to deliver push notifications. The Pushy device token and information necessary to deliver an OweZone notification may be processed by Pushy.
              </p>
            </div>

            <div className="p-4 rounded-2xl border border-[#E8E4DD] bg-[#FAF8F2] space-y-1.5">
              <h3 className="font-bold text-sm text-[#201B3A]">Gmail SMTP</h3>
              <p className="text-xs text-[#716D7F] leading-relaxed">
                OweZone uses Gmail SMTP to send account-related emails, including welcome and password-reset emails. Your email address and information necessary to send these emails may therefore be processed by Google&apos;s email infrastructure.
              </p>
            </div>
          </div>

          <div className="pt-3 space-y-2">
            <h3 className="text-base font-bold text-[#201B3A]">Other OweZone Users</h3>
            <p className="text-sm text-[#716D7F] leading-relaxed">
              Information intentionally shared within a room is accessible to authenticated members of that room according to OweZone&apos;s functionality. Depending on the feature, room members may see:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-[#716D7F]">
              <li>Expenses</li>
              <li>Expense descriptions</li>
              <li>Grocery items</li>
              <li>Settlement information</li>
              <li>Chat messages</li>
              <li>Room membership information</li>
            </ul>
            <p className="text-xs font-semibold text-[#6957E8] pt-1">
              OweZone does not make room information publicly searchable.
            </p>
          </div>
        </section>

        <hr className="border-[#E8E4DD]" />

        {/* Section 04 */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black text-[#6957E8] bg-[#E9E4FF] px-2.5 py-1 rounded-md uppercase tracking-wider">
              04
            </span>
            <h2 className="text-xl font-bold text-[#201B3A] font-display">
              Room Privacy
            </h2>
          </div>
          <p className="text-sm text-[#716D7F] leading-relaxed">
            OweZone is designed around private shared rooms. Room information is accessible to authenticated members of the relevant room.
          </p>
          <p className="text-sm text-[#716D7F] leading-relaxed">
            Expenses, grocery items, settlements, and chat messages are intended to be visible only to members of the corresponding room through the OweZone application.
          </p>
          <p className="text-xs font-medium text-[#201B3A] bg-[#FFFDF4] border border-[#FDE68A] p-3 rounded-xl">
            You should only share information in a room that you are comfortable sharing with its members.
          </p>
        </section>

        <hr className="border-[#E8E4DD]" />

        {/* Section 05 */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black text-[#6957E8] bg-[#E9E4FF] px-2.5 py-1 rounded-md uppercase tracking-wider">
              05
            </span>
            <h2 className="text-xl font-bold text-[#201B3A] font-display">
              Security
            </h2>
          </div>
          <p className="text-sm text-[#716D7F] leading-relaxed">
            We take reasonable measures to protect the information processed by OweZone.
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm text-[#716D7F]">
            <li>Data transmitted between the OweZone application and its backend is transmitted over encrypted HTTPS/TLS connections.</li>
            <li>Passwords are stored using cryptographic password hashing rather than plain-text passwords.</li>
            <li>Authenticated OweZone functionality is protected through authentication and authorization mechanisms.</li>
          </ul>
          <p className="text-xs text-[#716D7F] italic leading-relaxed pt-1">
            However, no internet-based service can guarantee absolute security, and we cannot guarantee that information will always remain completely secure against every possible threat.
          </p>
        </section>

        <hr className="border-[#E8E4DD]" />

        {/* Section 06 */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black text-[#6957E8] bg-[#E9E4FF] px-2.5 py-1 rounded-md uppercase tracking-wider">
              06
            </span>
            <h2 className="text-xl font-bold text-[#201B3A] font-display">
              Account Deletion and Your Data
            </h2>
          </div>
          <p className="text-sm text-[#716D7F] leading-relaxed">
            You can request deletion of your OweZone account from within the application. You can also request account deletion through our external account deletion page:
          </p>
          <div className="py-1">
            <Link
              href="/delete-account"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6957E8] hover:underline bg-[#E9E4FF] px-3 py-1.5 rounded-lg border border-[#DDD6FE]"
            >
              <Trash2 size={14} />
              <span>https://owezone.rajputnishant.in/delete-account</span>
            </Link>
          </div>
          <p className="text-sm text-[#716D7F] leading-relaxed">
            When an account deletion request is processed, OweZone deletes the user&apos;s personal account information and applicable account-associated data, including account credentials and Pushy device tokens.
          </p>
          <p className="text-sm text-[#716D7F] leading-relaxed">
            Information that is part of a shared room may need to remain available to other room members so that their shared records continue to function.
          </p>
          <p className="text-sm text-[#716D7F] leading-relaxed">
            For example, shared expenses, shared settlements, and existing chat messages may remain available to the other members of a room. When the deleted user&apos;s identity is retained as part of such shared historical records, it is represented as &ldquo;Deleted User&rdquo; rather than their previous name.
          </p>
          <p className="text-sm text-[#716D7F] leading-relaxed">
            The deleted user is removed from the relevant room membership and their personal account is deleted.
          </p>
        </section>

        <hr className="border-[#E8E4DD]" />

        {/* Section 07 */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black text-[#6957E8] bg-[#E9E4FF] px-2.5 py-1 rounded-md uppercase tracking-wider">
              07
            </span>
            <h2 className="text-xl font-bold text-[#201B3A] font-display">
              Data Retention
            </h2>
          </div>
          <p className="text-sm text-[#716D7F] leading-relaxed">
            OweZone does not currently define a fixed retention period for every category of information. Information is retained as necessary to provide the OweZone service and maintain relevant shared-room functionality.
          </p>
          <p className="text-sm text-[#716D7F] leading-relaxed">
            When an account is deleted, the user&apos;s personal account information is deleted as described in the Account Deletion section.
          </p>
          <p className="text-sm text-[#716D7F] leading-relaxed">
            Shared historical information may remain where necessary for the other members of a room. Deleted users are represented as &ldquo;Deleted User&rdquo; in applicable shared records rather than retaining their previous identity.
          </p>
        </section>

        <hr className="border-[#E8E4DD]" />

        {/* Section 08 */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black text-[#6957E8] bg-[#E9E4FF] px-2.5 py-1 rounded-md uppercase tracking-wider">
              08
            </span>
            <h2 className="text-xl font-bold text-[#201B3A] font-display">
              Your Choices and Rights
            </h2>
          </div>
          <p className="text-sm text-[#716D7F] leading-relaxed">
            Depending on your location and applicable law, you may have rights concerning your personal information, including the ability to:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm text-[#716D7F]">
            <li>Access information associated with your account</li>
            <li>Correct inaccurate account information</li>
            <li>Request deletion of your account</li>
            <li>Request deletion of applicable personal information</li>
            <li>Contact us with questions about how your information is handled</li>
          </ul>
          <p className="text-sm text-[#716D7F] leading-relaxed pt-1">
            You can request account deletion directly through the OweZone application or through our{" "}
            <Link href="/delete-account" className="text-[#6957E8] font-bold underline">
              external account deletion page
            </Link>
            .
          </p>
        </section>

        <hr className="border-[#E8E4DD]" />

        {/* Section 09 */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black text-[#6957E8] bg-[#E9E4FF] px-2.5 py-1 rounded-md uppercase tracking-wider">
              09
            </span>
            <h2 className="text-xl font-bold text-[#201B3A] font-display">
              Age and Use of OweZone
            </h2>
          </div>
          <p className="text-sm text-[#716D7F] leading-relaxed">
            OweZone is a general-purpose application for managing shared expenses, groceries, settlements, rooms, and communication.
          </p>
          <p className="text-sm text-[#716D7F] leading-relaxed">
            OweZone is not specifically directed toward any particular age group.
          </p>
          <p className="text-sm text-[#716D7F] leading-relaxed">
            We do not intentionally collect age information because age is not required to create or use an OweZone account.
          </p>
          <p className="text-sm text-[#716D7F] leading-relaxed">
            If you have questions or concerns regarding the use of OweZone by a child or the handling of personal information, you can contact us using the information below.
          </p>
        </section>

        <hr className="border-[#E8E4DD]" />

        {/* Section 10 */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black text-[#6957E8] bg-[#E9E4FF] px-2.5 py-1 rounded-md uppercase tracking-wider">
              10
            </span>
            <h2 className="text-xl font-bold text-[#201B3A] font-display">
              Changes to This Privacy Policy
            </h2>
          </div>
          <p className="text-sm text-[#716D7F] leading-relaxed">
            We may update this Privacy Policy from time to time to reflect changes to OweZone, our data practices, or applicable requirements.
          </p>
          <p className="text-sm text-[#716D7F] leading-relaxed">
            When material changes are made, we will update the &ldquo;Last updated&rdquo; date at the top of this policy.
          </p>
          <p className="text-sm text-[#716D7F] leading-relaxed">
            We encourage you to periodically review this Privacy Policy.
          </p>
        </section>

        <hr className="border-[#E8E4DD]" />

        {/* Section 11 */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black text-[#6957E8] bg-[#E9E4FF] px-2.5 py-1 rounded-md uppercase tracking-wider">
              11
            </span>
            <h2 className="text-xl font-bold text-[#201B3A] font-display">
              Contact Us
            </h2>
          </div>
          <p className="text-sm text-[#716D7F] leading-relaxed">
            If you have questions about this Privacy Policy, your personal information, or account deletion, contact:
          </p>
          <div className="bg-[#FAF8F2] border border-[#E8E4DD] rounded-2xl p-5 space-y-2 text-sm text-[#201B3A]">
            <p className="font-bold text-base">Nishant Rajput</p>
            <p className="flex items-center gap-2">
              <span className="text-[#716D7F]">Email:</span>
              <a
                href="mailto:owezone.app@gmail.com"
                className="text-[#6957E8] font-semibold underline inline-flex items-center gap-1"
              >
                <Mail size={14} /> owezone.app@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-[#716D7F]">OweZone:</span>
              <a
                href="https://owezone.rajputnishant.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6957E8] font-semibold underline inline-flex items-center gap-1"
              >
                https://owezone.rajputnishant.in/ <ExternalLink size={12} />
              </a>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-[#716D7F]">Account deletion:</span>
              <Link
                href="/delete-account"
                className="text-[#6957E8] font-semibold underline inline-flex items-center gap-1"
              >
                https://owezone.rajputnishant.in/delete-account <ExternalLink size={12} />
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
