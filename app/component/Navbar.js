import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-lavender/30 py-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
        {/* Logo */}
        <div className="mb-2">
          <Image src="/logo.png" alt="Lavender Logo" width={140} height={40} />
        </div>

        {/* Menu */}
        <nav className="flex flex-wrap justify-center gap-6 text-violet-800 mt-5 text-sm uppercase text-lavender-600 tracking-wide">
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>

          {/* Dropdowns (Non-functional for now) */}
          <div className="relative group cursor-pointer">
            <button className="flex items-center gap-1">
              Hair ▾
            </button>
          </div>
          <div className="relative group cursor-pointer">
            <button className="flex items-center gap-1">
              Beauty ▾
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
