import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sona-engineering.com"),
  title: {
    default: "Sona Computer Engineering | IT Solutions & Network Engineering",
    template: "%s | Sona Computer Engineering",
  },
  description:
    "Sona Computer Engineering provides advanced IT solutions, including security systems, networking and infrastructure, IT maintenance, hardware supply, server setup, and consultancy services — delivering reliable technology solutions for businesses and offices.",
  keywords: [
    "Sona Computer Engineering",
    "Security Solutions",
    "CCTV Installation",
    "Access Control Systems",
    "Networking & Infrastructure",
    "LAN/WAN Setup",
    "Server Installation",
    "IT Support",
    "Maintenance Services",
    "Computer Assembly",
    "Server & Data Center Solutions",
    "Enterprise Networking Devices",
    "Office IT Setup",
    "IT Consultancy",
    "Project Management",
  ],
  openGraph: {
    type: "website",
    url: "https://sona-engineering.com",
    title: "Sona Computer Engineering | IT Solutions & Network Engineering",
    description:
      "Sona Computer Engineering provides advanced IT solutions, including security systems, networking, IT support, hardware supply, server optimization, and consultancy services for businesses and enterprises.",
    images: [
      {
        url: "https://sona-engineering.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Sona Computer Engineering - IT Solutions",
      },
    ],
    siteName: "Sona Computer Engineering",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sona Computer Engineering | IT Solutions & Network Engineering",
    description:
      "Providing security systems, networking, IT support, hardware supply, server solutions, and consultancy services for businesses.",
    images: ["https://sona-engineering.com/logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const Spinner = (
  <div className="flex justify-center items-center h-screen">
    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <Navbar />
        <main className="grow">
          <Suspense fallback={Spinner}>{children}</Suspense>
        </main>
        <Footer />
      </body>
    </html>
  );
}
