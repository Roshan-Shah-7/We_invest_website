import type { Metadata } from "next";
import { Lato, EB_Garamond } from "next/font/google";
import "./globals.css";
import RootLayoutClientContent from "@/components/RootLayoutClientContent";
// Removed: import { SessionProvider } from 'next-auth/react';

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

export const metadata: Metadata = {
  title: "Wee Invest Global Pvt. Ltd.",
  description: "Investment platform for Wee Invest Global Pvt. Ltd.",
  icons: "/w_logo.png", // Ensure this path is correct in your `public` folder
  keywords: "investment, global, finance, wealth, management",
  openGraph: {
    title: "Wee Invest Global Pvt. Ltd.",
    description: "Investment platform for Wee Invest Global Pvt. Ltd.",
    url: "https://yourwebsite.com", // FIXME: Replace with your actual website URL
    siteName: "Wee Invest Global Pvt. Ltd.",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg", // FIXME: Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: "Wee Invest Global Pvt. Ltd. Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle", // FIXME: Replace with your actual Twitter handle
    creator: "@yourtwitterhandle", // FIXME: Replace with your actual Twitter handle
    title: "Wee Invest Global Pvt. Ltd.",
    description: "Investment platform for Wee Invest Global Pvt. Ltd.",
    images: ["https://yourwebsite.com/twitter-image.jpg"], // FIXME: Replace with your actual Twitter image URL
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${ebGaramond.variable} font-sans antialiased`}>
          <RootLayoutClientContent>
            {children}
          </RootLayoutClientContent>
      </body>
    </html>
  );
}
