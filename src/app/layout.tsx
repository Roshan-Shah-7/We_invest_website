'use client';

import type { Metadata } from "next";
import { Lato, EB_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import React, { useState, useEffect, useCallback } from 'react';

const lato = Lato({
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: "--font-lato"
});

const ebGaramond = EB_Garamond({
  weight: ['400', '500'],
  subsets: ["latin"],
  variable: "--font-eb-garamond"
});


// export const metadata: Metadata = {
//   title: "Wee Invest Global Pvt. Ltd.",
//   description: "Investment platform for Wee Invest Global Pvt. Ltd.",
//   icons: "/w_logo.png"
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const [hasBeenManuallyToggled, setHasBeenManuallyToggled] = useState(false);

  const SCROLL_THRESHOLD = 50; // Pixels

  const handleScroll = useCallback(() => {
    const shouldBeExpandedBasedOnScroll = window.scrollY <= SCROLL_THRESHOLD;

    if (!hasBeenManuallyToggled) {
      setIsSidebarExpanded(shouldBeExpandedBasedOnScroll);
    } else {
      // If the scroll action would naturally lead to the current manually set state,
      // reset the manual toggle flag, allowing scroll to take over again.
      if (isSidebarExpanded === shouldBeExpandedBasedOnScroll) {
        setHasBeenManuallyToggled(false);
      }
    }
  }, [isSidebarExpanded, hasBeenManuallyToggled]);

  useEffect(() => {
    // Simple debounce
    let timeoutId: NodeJS.Timeout;
    const debouncedHandler = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        handleScroll();
      }, 100); // Debounce scroll events by 100ms
    };

    window.addEventListener('scroll', debouncedHandler);
    // Initial check in case page loads scrolled
    handleScroll();
    return () => {
      window.removeEventListener('scroll', debouncedHandler);
      clearTimeout(timeoutId);
    };
  }, [handleScroll]);

  const toggleSidebarExpansion = useCallback(() => {
    setIsSidebarExpanded(prev => !prev);
    setHasBeenManuallyToggled(true);
  }, []);

  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${ebGaramond.variable} font-sans antialiased`}
      >
        <Header isExpanded={isSidebarExpanded} onToggleExpansion={toggleSidebarExpansion} />
        <main
          className={`transition-all duration-500 ease-in-out`}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
