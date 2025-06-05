import type { Metadata } from "next";
import { Lato, EB_Garamond } from "next/font/google";
import "./globals.css";
import RootLayoutClientContent from "@/components/RootLayoutClientContent";

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
  title: "We Invest Global Pvt. Ltd. - Empowering Your Financial Future",
  description: "We Invest Global Pvt. Ltd. is a leading investment platform offering strategic financial solutions, wealth management, and opportunities in high-growth sectors like technology, real estate, and renewable energy. Partner with us for sustainable growth and expert guidance.",
  icons: "/w_logo.png", // Ensure this path is correct in your `public` folder
  keywords: "investment, global finance, wealth management, financial growth, strategic investment, technology investment, real estate investment, renewable energy, startup funding, capital gains, portfolio diversification, financial planning, Nepal investment",
  openGraph: {
    title: "We Invest Global Pvt. Ltd. - Empowering Your Financial Future",
    description: "We Invest Global Pvt. Ltd. is a leading investment platform offering strategic financial solutions, wealth management, and opportunities in high-growth sectors like technology, real estate, and renewable energy. Partner with us for sustainable growth and expert guidance.",
    url: "https://www.weeinvestglobal.com.np", // FIXME: Replace with your actual website URL
    siteName: "We Invest Global Pvt. Ltd.",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg", // FIXME: Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: "We Invest Global Pvt. Ltd. Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
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
