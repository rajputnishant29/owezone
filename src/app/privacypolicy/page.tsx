import Head from 'next/head';

const Privacy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | OweZone</title>
        <meta name="description" content="Privacy Policy for OweZone app" />
         {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="min-h-screen bg-[#FFE3A9] pt-24 px-4 sm:px-6 lg:px-8 text-[#0B1D51]">
        <section className="max-w-5xl mx-auto space-y-10">
          {/* Header */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center">Privacy Policy</h1>
            <p className="text-center text-lg text-[#0B1D51]/80 max-w-2xl mx-auto">
              Learn how OweZone collects, uses, and protects your personal information.
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-8">
            {/* 1. Info We Collect */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
              <ul className="list-disc pl-5 space-y-2 text-base text-[#0B1D51]/90">
                <li>
                  <strong>Personal Info:</strong> Phone number, username (required for authentication).
                </li>
                <li>
                  <strong>Room & Expense Data:</strong> Information you submit while creating or joining a room.
                </li>
                <li>
                  <strong>Device Info:</strong> We may collect anonymous analytics data (crash logs, device type).
                </li>
              </ul>
            </div>

            {/* 2. How We Use Your Data */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-4">2. How We Use Your Data</h2>
              <ul className="list-disc pl-5 space-y-2 text-base text-[#0B1D51]/90">
                <li>To enable and improve app functionality.</li>
                <li>To sync shared expenses and room data across devices.</li>
                <li>To ensure fair settlement and accountability.</li>
              </ul>
            </div>

            {/* 3. Data Security */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-4">3. Data Security</h2>
              <p className="text-base text-[#0B1D51]/90 leading-relaxed">
                Your data is stored securely in our database. We do not share or sell your personal
                information to any third parties. All sensitive data is encrypted and stored securely.
              </p>
            </div>

            {/* 4. Third-Party Services */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-4">4. Third-Party Services</h2>
              <p className="text-base text-[#0B1D51]/90 leading-relaxed">
                We use Firebase Authentication and MongoDB Atlas to handle authentication and data
                storage. These services comply with global security standards.
              </p>
            </div>

            {/* 5. Your Rights */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
              <p className="text-base text-[#0B1D51]/90 leading-relaxed">
                You can request to delete your data by contacting us. For any account deletion or data
                removal request, email us at:
                <a
                  href="mailto:contact@owezone.app"
                  className="text-[#0B1D51] underline font-semibold ml-1 hover:text-[#8CCDEB]"
                >
                  nishantrajput7017@gmail.com
                </a>
              </p>
            </div>

            {/* 6. Updates */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-4">6. Updates to This Policy</h2>
              <p className="text-base text-[#0B1D51]/90 leading-relaxed">
                We may update this policy from time to time. We’ll notify users about significant changes
                through the app or email.
              </p>
            </div>
          </div>

          {/* Last Updated */}
          <p className="text-sm text-[#4A4A6A] text-center pt-10">Last updated: July 10, 2025</p>
        </section>
      </main>
    </>
  );
};

export default Privacy;
