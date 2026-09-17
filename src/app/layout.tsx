import type { Metadata } from "next";
import { Manrope, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import SiteFrame from "@/components/layout/SiteFrame";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Belmont Group",
    template: "%s | Belmont Group",
  },
  description:
    "Belmont Group — thoughtfully designed residences and real estate developments in Pune.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${dmSerif.variable}`}>
        <SiteFrame>
          <Navbar />
          {children}
          <Footer />
        </SiteFrame>
      </body>
    </html>
  );
}
