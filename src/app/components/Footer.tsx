const Footer = () => {
  return (
    <footer className="bg-[#0B1D51] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo + Tagline */}
        <div>
        <img className="h-20" src="/OweZoneLogo.png" alt="" />
          <p className="text-sm text-[#CCE1FF]">
            Simplify shared expenses, split bills, and manage groceries with ease.
          </p>
        </div>


        {/* App Download */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#8CCDEB]">Get the App</h3>
          <a
            href="/apk/base.apk"
            className="inline-block mt-2 bg-[#8CCDEB] text-[#0B1D51] font-semibold px-5 py-2 rounded-full hover:opacity-90 transition"
          >
            Download APK
          </a>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#8CCDEB]">Contact Us</h3>
          <p className="text-sm">
            Email: <a href="mailto:owe.zone.app@gmail.com" className="underline">nishantrajput7017@gmail.com</a>
          </p>
        </div>
      </div>

      <div className="text-center mt-10 text-sm text-[#8CCDEB]">
        © {new Date().getFullYear()} OweZone. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
