'use client';

import type { Metadata } from "next";
import { Lato, EB_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import React, { useState } from 'react'; // Removed useEffect and useCallback as scroll/toggle logic is removed
import Footer from "@/components/Footer";

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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const metadata: Metadata = {
  title: "Wee Invest Global Pvt. Ltd.",
  description: "Investment platform for Wee Invest Global Pvt. Ltd.",
  icons: "/w_logo.png",
  keywords: "investment, global, finance, wealth, management",
  openGraph: {
    title: "Wee Invest Global Pvt. Ltd.",
    description: "Investment platform for Wee Invest Global Pvt. Ltd.",
    url: "https://yourwebsite.com", // Replace with your actual website URL
    siteName: "Wee Invest Global Pvt. Ltd.",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg", // Replace with your actual Open Graph image URL
        width: 800,
        height: 600,
        alt: "Wee Invest Global Pvt. Ltd. Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle", // Replace with your Twitter handle
    creator: "@yourtwitterhandle", // Replace with your Twitter handle
    title: "Wee Invest Global Pvt. Ltd.",
    description: "Investment platform for Wee Invest Global Pvt. Ltd.",
    images: ["https://yourwebsite.com/twitter-image.jpg"], // Replace with your actual Twitter image URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // isSidebarExpanded state is kept but will always be true as collapse feature is removed
  const [isSidebarExpanded] = useState(true);

  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${ebGaramond.variable} font-sans antialiased`}
      >
        <Header />
        <main
          className={`transition-all duration-500 ease-in-out`}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
