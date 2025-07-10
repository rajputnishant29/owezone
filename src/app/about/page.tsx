import Head from 'next/head';

const About = () => {
  return (
    <>
      <Head>
        <title>OweZone</title>
        <meta
          name="description"
          content="OweZone helps you manage shared expenses and groceries effortlessly."
        />
         <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-[#FFE3A9] text-[#0B1D51] pt-24 px-4 sm:px-6 lg:px-8">
        <section className="max-w-5xl mx-auto space-y-10">
          {/* Header */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center">About OweZone</h1>
            <p className="text-center text-lg text-[#0B1D51]/80 max-w-2xl mx-auto">
              The ultimate app for roommates and shared households to split bills, manage groceries,
              and level up your budgeting game.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Why OweZone Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-[#0B1D51]">✨ Why OweZone?</h2>
              <ul className="list-disc pl-5 space-y-2 text-base leading-relaxed text-[#0B1D51]/90">
                <li>Track and split expenses fairly</li>
                <li>Collaborative grocery list for your room</li>
                <li>Settle up with transparency and history</li>
                <li>Choose avatars for yourself and your room</li>
              </ul>
            </div>

            {/* Tech Stack Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-[#0B1D51]">🛠 Built With</h2>
              <ul className="list-disc pl-5 space-y-2 text-base leading-relaxed text-[#0B1D51]/90">
                <li><strong>App:</strong> React Native</li>
                <li><strong>Backend:</strong> Node.js, Express</li>
                <li><strong>Realtime Chat:</strong> Socket.IO</li>
                <li><strong>DataBase:</strong> MongoDB</li>
              </ul>
            </div>

            {/* Description Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg md:col-span-2">
              <h2 className="text-2xl font-bold mb-4 text-[#0B1D51]">💡 How It Works</h2>
              <p className="text-base leading-relaxed text-[#0B1D51]/90">
                OweZone helps you and your housemates stay organized. Each room acts as a hub
                where members can add expenses, split bills automatically, maintain shared grocery
                lists, and keep a record of past transactions. Fun elements like avatars and room
                levels add a gamified experience to make managing boring tasks a bit more fun!
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-6 pb-10">
            <a
              href="/apk/base.apk"
              className="inline-block bg-[#8CCDEB] text-[#0B1D51] font-semibold text-lg px-8 py-3 rounded-full shadow-md hover:opacity-90 transition"
            >
              Download OweZone
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
