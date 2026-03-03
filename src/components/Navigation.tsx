'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Team', path: '/team' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="bg-background-primary fixed w-full z-20 top-0 left-0 shadow-sm">
      <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 relative">
            <img src="/logoRoundedCorners.png" alt="Yazzo" className="object-contain w-10 h-10" />
          </div>
          <span className="self-center text-lg font-semibold text-text-primary">Yazzo</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link href="/about" className="text-text-primary hover:text-yazzo-500">Company</Link>
          <Link href="/team" className="text-text-primary hover:text-yazzo-500">Team</Link>
          <Link href="/contact" className="text-text-primary hover:text-yazzo-500">Contact</Link>
        </div>

        <div className="flex items-center">
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center rounded-md bg-yazzo-500 px-4 py-2 text-sm font-semibold text-white shadow-yazzo hover:bg-yazzo-600"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}