import Head from 'next/head';

const About = () => {
  return (
    <>
      <Head>
        <title>About | OweZone</title>
        <meta name="description" content="Learn more about the OweZone app" />
      </Head>

      <main className="min-h-screen bg-[#FFE3A9] text-[#0B1D51] pt-20 px-6">
        <section className="max-w-4xl mx-auto py-12">
          <h1 className="text-4xl font-bold mb-6 border-b-4 border-[#8CCDEB] inline-block pb-2">
            About OweZone
          </h1>

          <p className="text-lg leading-relaxed mb-6">
            <strong>OweZone</strong> is your all-in-one solution to effortlessly manage shared expenses and grocery tracking — perfect for roommates, friends, or shared households. With an intuitive design and a touch of gamification, OweZone keeps everyone in sync and stress-free.
          </p>

          <h2 className="text-2xl font-semibold mb-4">✨ Why OweZone?</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-base">
            <li>Track and split expenses fairly</li>
            <li>Collaborative grocery list for your room</li>
            <li>Settle up with transparency and history</li>
            <li>Choose avatars and level up your room</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">🛠 Built With</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-base">
            <li><strong>App:</strong> React Native + NativeWind</li>
            <li><strong>Backend:</strong> Node.js, Express, MongoDB</li>
            <li><strong>Realtime Chat:</strong> Socket.IO</li>
            <li><strong>Authentication:</strong> Firebase Auth (Phone OTP)</li>
          </ul>

          <div className="mt-10">
            <a
              href="/apk/OweZone.apk"
              className="inline-block bg-[#8CCDEB] text-[#0B1D51] font-semibold px-6 py-2 rounded-full hover:opacity-90 transition"
            >
              Download APK
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
