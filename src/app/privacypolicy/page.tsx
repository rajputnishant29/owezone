import Head from 'next/head';

const Privacy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | OweZone</title>
        <meta name="description" content="Privacy Policy for OweZone app" />
      </Head>

      <main className="min-h-screen bg-[#FFE3A9] pt-20 px-4 text-[#0B1D51]">
        <section className="max-w-4xl mx-auto py-12">
          <h1 className="text-4xl font-bold mb-4 border-b-4 border-[#8CCDEB] inline-block pb-2">
            Privacy Policy
          </h1>

          <p className="mb-6">
            This Privacy Policy explains how OweZone collects, uses, and protects your information
            when you use our app.
          </p>

          <h2 className="text-2xl font-semibold mb-2 mt-8">1. Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Personal Info:</strong> Phone number, username (required for authentication).</li>
            <li><strong>Room & Expense Data:</strong> Information you submit while creating or joining a room.</li>
            <li><strong>Device Info:</strong> We may collect anonymous analytics data (crash logs, device type).</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-2 mt-8">2. How We Use Your Data</h2>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>To enable and improve app functionality.</li>
            <li>To sync shared expenses and room data across devices.</li>
            <li>To ensure fair settlement and accountability.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-2 mt-8">3. Data Security</h2>
          <p className="mb-4">
            Your data is stored securely in our database. We do not share or sell your personal
            information to any third parties. All sensitive data is encrypted and stored securely.
          </p>

          <h2 className="text-2xl font-semibold mb-2 mt-8">4. Third-Party Services</h2>
          <p className="mb-4">
            We use Firebase Authentication and MongoDB Atlas to handle authentication and data
            storage. These services comply with global security standards.
          </p>

          <h2 className="text-2xl font-semibold mb-2 mt-8">5. Your Rights</h2>
          <p className="mb-4">
            You can request to delete your data by contacting us. For any account deletion or data
            removal request, email us at:
            <a
              href="mailto:contact@owezone.app"
              className="text-[#0B1D51] underline font-semibold ml-1 hover:text-[#8CCDEB]"
            >
              contact@owezone.app
            </a>
          </p>

          <h2 className="text-2xl font-semibold mb-2 mt-8">6. Updates to This Policy</h2>
          <p className="mb-4">
            We may update this policy from time to time. We’ll notify users about significant changes
            through the app or email.
          </p>

          <p className="mt-12 text-sm text-[#4A4A6A]">
            Last updated: July 10, 2025
          </p>
        </section>
      </main>
    </>
  );
};

export default Privacy;
