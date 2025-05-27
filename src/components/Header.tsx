'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import we_logo from '../../public/we_logo.png';
import w_logo from '../../public/w_logo.png';

const LOGO_ALT_TEXT = 'Wee Invest Global Pvt. Ltd';
const APPLY_NOW_HREF = '/form';

interface NavLink {
  href: string;
  label: string;
}

interface HeaderProps {
  isExpanded?: boolean;
  onToggleExpansion?: () => void;
}

const navLinks: ReadonlyArray<NavLink> = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

export default function Header({ isExpanded = true, onToggleExpansion }: HeaderProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={`
          hidden lg:flex lg:justify-center rounded-[2rem]
          fixed top-1/2 -translate-y-1/2 left-4 bg-transparent shadow-lg z-50
          border border-brand_teal
          transition-all duration-500 ease-in-out
          ${isExpanded ? 'w-30 py-2' : 'w-16 py-1 rounded-[10rem] border-2 border-brand_teal'}
        `}
      >
        <div className="flex flex-col h-full items-center">
          {/* Toggle Button */}
          <button
            onClick={onToggleExpansion}
            className={`flex items-center justify-center ${isExpanded ? 'p-4 mb-6' : 'p-2 mb-2'}`}
            aria-expanded={isExpanded}
            aria-controls="sidebar-content"
          >
            <Image
              src={isExpanded ? we_logo : w_logo}
              width={isExpanded ? 120 : 30}
              height={isExpanded ? 30 : 36}
              alt={LOGO_ALT_TEXT}
              className="transition-all duration-500 object-contain"
              priority
            />
          </button>

          {/* Nav Links */}
          <div
            id="sidebar-content"
            className={`
              flex flex-col flex-grow items-center w-full overflow-hidden
              transition-all duration-500 ease-in-out
              ${isExpanded ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0 pointer-events-none'}
            `}
          >
            <nav className="space-y-2 px-0 w-full">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`
                    block text-center py-1 rounded-lg transition text-base duration-500 ease-in-out
                    ${pathname === href ? 'py-2 rounded-r-none text-brand_teal font-semibold' : 'text-gray-600 hover:text-brand_teal'}
                  `}
                >
                  {label}
                </Link>
              ))}
            </nav>

            <Link
              href={APPLY_NOW_HREF}
              className="mt-auto mb-4 px-4 py-2 bg-brand_teal text-white rounded-lg text-sm font-semibold hover:bg-brand_teal/90 transition-colors duration-300"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
        <div className="flex items-center justify-between px-4 py-2">
          <Link href="/" className="flex items-center">
            <Image
              src={we_logo}
              width={100}
              height={25}
              alt={LOGO_ALT_TEXT}
              className="object-contain"
              priority
            />
          </Link>

          <button
            onClick={toggleMobileMenu}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`
            overflow-hidden transition-all duration-500 ease-in-out bg-white
            ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <nav className="flex flex-col px-4 py-2 space-y-2">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`
                  py-2 px-4 rounded-lg transition-colors duration-300
                  ${pathname === href ? 'text-brand_teal font-semibold bg-gray-50' : 'text-gray-600 hover:bg-gray-50'}
                `}
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              href={APPLY_NOW_HREF}
              className="mt-2 px-4 py-2 bg-brand_teal text-white rounded-lg text-center font-semibold hover:bg-brand_teal/90 transition-colors duration-300"
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
