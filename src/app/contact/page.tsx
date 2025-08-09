"use client";
import Head from "next/head";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!message.trim()) {
      alert("Please enter your message.");
      return;
    }

    const subject = `Message from ${name || "OweZone Website Visitor"}`;
    const body = `From: ${name || "Anonymous"} (${
      email || "No email provided"
    })\n\n${message}`;

    const mailtoUrl = `mailto:owezone.app@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <>
      <Head>
        <title>Contact | OweZone</title>
        <meta name="description" content="Contact the OweZone team" />
      </Head>

      <main className="min-h-screen bg-[#FFE3A9] flex items-center justify-center pt-20 px-4">
        <section className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-xl text-[#0B1D51] mb-5">
          <h1 className="text-3xl font-bold mb-2 text-center">Contact Us</h1>
          <p className="text-sm text-center text-[#4A4A6A] mb-6">
            Have a question, feedback, or bug to report? We’d love to hear from you!
          </p>

          <form onSubmit={handleSendEmail} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-[#8CCDEB] focus:outline-none focus:ring-2 focus:ring-[#8CCDEB]"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-[#8CCDEB] focus:outline-none focus:ring-2 focus:ring-[#8CCDEB]"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-lg border border-[#8CCDEB] focus:outline-none focus:ring-2 focus:ring-[#8CCDEB]"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-[#8CCDEB] text-[#0B1D51] font-semibold py-2 px-4 rounded-full hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-[#4A4A6A]">
            Or email us directly at:{" "}
            <a
              href="mailto:owezone.app@gmail.com"
              className="text-[#0B1D51] font-semibold underline hover:text-[#8CCDEB]"
            >
              owezone.app@gmail.com
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
