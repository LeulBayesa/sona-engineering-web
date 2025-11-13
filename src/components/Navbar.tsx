"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logoLight from "../assets/images/SonaLogo1.png";
import logoDark from "../assets/images/SonaLogo2.png";

interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  brandName?: string;
  brandLogoLight?: StaticImageData | string;
  brandLogoDark?: StaticImageData | string;
  navItems?: NavItem[];
}

export default function Navbar({
  brandName = "Sona Computer Engineering",
  brandLogoLight = logoLight,
  brandLogoDark = logoDark,
  navItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/portfolio" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Careers", href: "/jobs" },
    { label: "Contact", href: "/contact" },
  ],
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isDesktop = (windowWidth ?? 1024) >= 768;

  const navBgClass = isDesktop
    ? isScrolled
      ? "bg-primary/95 shadow-lg backdrop-blur-md"
      : "bg-transparent"
    : "bg-primary border-b border-primary/30";

  const textColorClass = "text-white";
  const linkHoverClass = "hover:text-gray-300";
  // const currentLogo = isScrolled ? brandLogoDark : brandLogoLight;

  return (
    <nav className={`${navBgClass} fixed w-full top-0 z-50 transition-all duration-300 ease-in-out`}>
      {/* Top Bar (Logo + Menu Button) */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand */}
          <Image
            src={brandLogoDark}
            height={160}
            width={160}
            alt="logo"
            aria-hidden="true"
            className="hover:text-gray-300 transition-colors cursor-pointer"
          />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`${textColorClass} ${linkHoverClass} font-medium transition-colors duration-200`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              <div className={`hamburger ${isOpen ? "open" : ""}`}>
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-primary border-t border-primary/30 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-white hover:bg-red-100 hover:text-primary rounded-lg transition-colors font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
