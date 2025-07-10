'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#8CCDEB] text-[#0B1D51] fixed top-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <Link href="/" className="text-2xl font-bold tracking-wider">
          <img className="h-20" src="/OweZoneLogo.png" alt="" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 text-lg font-bold">
          <Link href="/" className="hover:underline transition">Home</Link>
          <Link href="/about" className="hover:underline transition">About</Link>
          <Link href="/contact" className="hover:underline transition">Contact</Link>
                    <Link href="/privacypolicy" className="block hover:underline">Privacy Policy</Link>
          {/* <a
            href="/apk/OweZone.apk"
            className="bg-[#FF6584] text-white px-4 py-1 rounded-full font-semibold hover:opacity-90 transition"
          >
            Download
          </a> */}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#8CCDEB] text-[#0B1D51] px-4 pb-4 pt-2 space-y-2">
          <Link href="/" className="block hover:underline">Home</Link>
          <Link href="/about" className="block hover:underline">About</Link>
          <Link href="/contact" className="block hover:underline">Contact</Link>
          <Link href="/privacypolicy" className="block hover:underline">Privacy Policy</Link>
          {/* <a
            href="/apk/OweZone.apk"
            className="inline-block bg-[#FF6584] text-white w-full text-center px-4 py-2 rounded-full font-semibold"
          >
            Download
          </a> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
