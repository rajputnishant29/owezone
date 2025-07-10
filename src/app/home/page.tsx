import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>OweZone | Simplify Shared Expenses</title>
        <meta
          name="description"
          content="OweZone helps you manage shared expenses and groceries effortlessly."
        />
      </Head>

      <main className="bg-[#FFE3A9] text-[#0B1D51] mt-15">
        {/* Hero Section without overlay/text */}
        <section className="relative w-full aspect-[1919/1078] overflow-hidden">
          <Image
            src="/OweZonePoster.png"
            alt="OweZone Poster"
            fill
            className="object-cover"
            priority
          />

        </section>
        
        <section className="py-8 px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to simplify your room expenses?
          </h2>
          <a
            href="/apk/base.apk"
            className="inline-block mt-4 bg-[#8CCDEB] text-[#0B1D51] font-semibold px-8 py-3 rounded-full hover:opacity-90 transition"
          >
            Download OweZone APK
          </a>
        </section>

        {/* About Section */}
<section className="max-w-6xl mx-auto py-10 px-4 sm:px-8">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-extrabold mb-4 text-[#0B1D51]">Why OweZone?</h2>
    <p className="text-lg text-[#1a2a5c] max-w-2xl mx-auto">
      OweZone is your all-in-one solution to manage shared expenses and grocery lists with
      roommates, friends, or family.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {[
      {
        title: 'Track Expenses Clearly',
        desc: 'Know exactly who owes what in real-time with automated tracking.',
        icon: '💸',
      },
      {
        title: 'Collaborative Grocery Lists',
        desc: 'Create and manage shared grocery lists effortlessly.',
        icon: '🛒',
      },
      {
        title: 'Smart Settlements',
        desc: 'Easily settle up with intelligent suggestions and reminders.',
        icon: '🤝',
      },
      {
        title: 'Room Avatars & XP',
        desc: 'Make finances fun with levels and custom avatars for each room.',
        icon: '🎮',
      },
    ].map((item, idx) => (
      <div
        key={idx}
        className="flex items-start bg-white p-6 rounded-xl shadow-md border border-[#8CCDEB]/30 hover:shadow-lg transition"
      >
        <div className="text-3xl mr-4">{item.icon}</div>
        <div>
          <h3 className="text-xl font-semibold mb-1 text-[#0B1D51]">{item.title}</h3>
          <p className="text-[#1a2a5c] text-base">{item.desc}</p>
        </div>
      </div>
    ))}
  </div>
</section>


        {/* Screenshot Gallery with Horizontal Scroll */}
        <section className="bg-[#F1F2F7] py-16 px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            App Screenshots
          </h2>

          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex space-x-6 w-max px-2">
              {[
                  "Screen02.jpg",
                  "Screen03.jpg",
                  "Screen04.jpg",
                  "Screen05.jpg",
                  "Screen06.jpg",
                  "Screen01.jpg",
              ].map((src, idx) => (
                <Image
                  key={idx}
                  src={`/${src}`}
                  alt={`screen${idx + 1}`}
                  width={300}
                  height={600}
                  className="rounded-xl shadow-md flex-shrink-0"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
      </main>
    </>
  );
}
