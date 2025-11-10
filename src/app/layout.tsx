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
  title: "Sona Computer Engineering | IT Solutions & Software Services",
  description:
    "Sona Computer Engineering provides innovative IT solutions and software development services for businesses. Partner with us for reliable technology solutions.",
  keywords: [
    "Sona Computer Engineering",
    "IT services",
    "software development",
    "technology solutions",
    "IT support",
    "network engineering",
  ],
  openGraph: {
    type: "website",
    url: "https://sona-engineering.com/",
    title: "Sona Computer Engineering | IT Solutions & Software Services",
    description:
      "Sona Computer Engineering provides innovative IT solutions and software development services for businesses. Partner with us for reliable technology solutions.",
    images: [
      {
        url: "https://sona-engineering.com/logo.png",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sona Computer Engineering | IT Solutions & Software Services",
    description:
      "Sona Computer Engineering provides innovative IT solutions and software development services for businesses. Partner with us for reliable technology solutions.",
    images: ["https://sona-engineering.com/logo.png"],
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
