'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import we_logo from '../../public/we_logo.png';

const LOGO_ALT_TEXT = 'Wee Invest Global Pvt. Ltd';
const APPLY_NOW_HREF = '/form';

interface NavLink {
  href: string;
  label: string;
}

const navLinks: ReadonlyArray<NavLink> = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/investment', label: 'Investment' },
  { href: '/market-overview', label: 'Market Overview' },
  { href: '/investment-programs', label: 'Investment Programs' },
  { href: '/contact', label: 'Contact' },
];

export default function Header({ }) { // Removed isExpanded and onToggleExpansion from function signature
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  return (
    <>
      {/* Desktop Header (Always Expanded) */}
      <aside
        className={`
          hidden lg:flex fixed top-0 left-0 w-full z-[10000]
          bg-white/80 backdrop-blur-md border-b border-brand_teal py-2 shadow-md
        `}
      >
        <div className="flex items-center justify-between max-w-7xl w-full mx-auto px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={we_logo}
              width={120}
              height={30}
              alt={LOGO_ALT_TEXT}
              className="object-contain w-full" // Added w-full to ensure it takes full width of parent Link
              priority
            />
          </Link>

          {/* Nav Links */}
          <nav
            id="sidebar-content"
            className="flex items-center gap-8" // Removed conditional opacity and pointer-events
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`
                  text-base font-medium transition-all duration-300
                  ${pathname === href ? 'text-brand_teal underline underline-offset-4' : 'text-gray-700 hover:text-brand_teal'}
                `}
              >
                {label}
              </Link>
            ))}
          </nav>

          <Link
            href={APPLY_NOW_HREF}
            className={`px-5 py-2.5 bg-brand_teal text-white text-sm font-semibold rounded-lg
            shadow hover:bg-brand_teal/90 transition duration-300`} // Removed conditional opacity and pointer-events
          >
            Apply Now
          </Link>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 bg-white z-50 shadow-md">
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center">
            <Image
              src={we_logo}
              width={100}
              height={25}
              alt={LOGO_ALT_TEXT}
              className="object-contain w-full" // Added w-full to ensure it takes full width of parent Link
              priority
            />
          </Link>

          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-md hover:bg-gray-100 focus:outline-none transition-colors"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          id="mobile-menu"
          className={`transition-all duration-500 overflow-hidden bg-white shadow-inner ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <nav className="flex flex-col gap-2 px-4 py-4">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`py-2 px-4 rounded-lg text-base font-medium transition-colors ${pathname === href ? 'bg-brand_teal/10 text-brand_teal font-semibold' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </Link>
            ))}

            <Link
              href={APPLY_NOW_HREF}
              className="mt-2 px-4 py-2 bg-brand_teal text-white rounded-md text-center font-semibold hover:bg-brand_teal/90 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Apply Now
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
