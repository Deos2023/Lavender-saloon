'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[url('/navImg3.jpg')] bg-cover bg-center bg-no-repeat border-b border-lavender/30 py-4">
      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col items-center">
        {/* Logo (Always Centered) */}
        <div className="mb-2">
          <Image src="/logo.png" alt="Lavender Logo" width={140} height={40} />
        </div>

        {/* Mobile "Menu" Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-violet-800 uppercase tracking-wide font-medium text-2xl"
          >
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex flex-wrap justify-center gap-6 text-violet-800 mt-5 uppercase text-lavender-600 tracking-wide">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
          <div className="relative group cursor-pointer">
            <button className="flex items-center gap-1">Hair ▾</button>
          </div>
          <div className="relative group cursor-pointer">
            <button className="flex items-center gap-1">Beauty ▾</button>
          </div>
        </nav>

        {/* Mobile Menu Links (Toggle) */}
        {isOpen && (
          <nav className="md:hidden mt-4 flex flex-col items-center gap-4 text-violet-800 uppercase text-lavender-600 tracking-wide">
            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            <button className="flex items-center gap-1">Hair ▾</button>
            <button className="flex items-center gap-1">Beauty ▾</button>
          </nav>
        )}
      </div>
    </header>
  );
}
