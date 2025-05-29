import type { Metadata } from "next";
import { Lato, EB_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
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

export const metadata: Metadata = {
  title: "Wee Invest Global Pvt. Ltd.",
  description: "Investment platform for Wee Invest Global Pvt. Ltd.",
  icons: "/w_logo.png",
  keywords: "investment, global, finance, wealth, management",
  openGraph: {
    title: "Wee Invest Global Pvt. Ltd.",
    description: "Investment platform for Wee Invest Global Pvt. Ltd.",
    url: "https://yourwebsite.com",
    siteName: "Wee Invest Global Pvt. Ltd.",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
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
    site: "@yourtwitterhandle",
    creator: "@yourtwitterhandle",
    title: "Wee Invest Global Pvt. Ltd.",
    description: "Investment platform for Wee Invest Global Pvt. Ltd.",
    images: ["https://yourwebsite.com/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${ebGaramond.variable} font-sans antialiased`}>
        <Header />
        <main className="transition-all duration-500 ease-in-out">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
