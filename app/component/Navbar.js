import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="w-full bg-[url('/navImg3.jpg')] bg-cover bg-center bg-no-repeat border-b border-lavender/30 py-4">
      {/* Optional Overlay for readability */}
      {/* <div className="absolute inset-0 bg-white/70 ba z-0"></div> */}

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-center">
        {/* Logo */}
        <div className="mb-2">
          <Image src="/logo.png" alt="Lavender Logo" width={140} height={40} />
        </div>

        {/* Menu */}
        <nav className="flex flex-wrap justify-center gap-6 text-violet-800 mt-5 uppercase text-lavender-600 tracking-wide">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>

          {/* Dropdowns (Non-functional for now) */}
          <div className="relative group cursor-pointer">
            <button className="flex items-center gap-1">Hair ▾</button>
          </div>
          <div className="relative group cursor-pointer">
            <button className="flex items-center gap-1">Beauty ▾</button>
          </div>
        </nav>
      </div>
    </header>
  );
}
