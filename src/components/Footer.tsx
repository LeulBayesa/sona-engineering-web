"use client";

import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import logo from "../assets/images/SonaLogo3.jpg";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  companyName?: string;
  brandLogo?: StaticImageData | string;
  description?: string;
  sections?: FooterSection[];
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
  contactInfo?: {
    email?: string;
    phone?: string;
    address?: string;
    addressLine?: string;
  };
  socials?: {
    icon: React.ComponentType<{ className?: string }>;
    url?: string;
    label: string;
  }[];
}

export default function Footer({
  companyName = "Sona Computer Engineering",
  brandLogo = logo,
  description = "Delivering high-quality engineering and software solutions for global clients.",
  sections = [
    {
      title: "Services",
      links: [
        { label: "IT Support", href: "#" },
        { label: "Network Engineering", href: "#" },
        { label: "CCTV Installation", href: "#" },
        { label: "IT Equipment Supply", href: "#" },
        { label: "Consultancy & Project Management", href: "#" },
        { label: "Office & IT Infrastructure Setup", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Our Portfolio", href: "/portfolio" },
        { label: "Careers", href: "/jobs" },
        { label: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#" },
        { label: "Case Studies", href: "#" },
        { label: "Support", href: "#" },
        { label: "FAQ", href: "#" },
      ],
    },
  ],
  socialLinks = {
    facebook: "#",
    twitter: "#",
    linkedin: "#",
    instagram: "#",
  },
  contactInfo = {
    email: "info@sona-engineering.com",
    phone: "+251 (910) 14-7670",
    address: "Addis Ababa, Ethiopia",
    addressLine: "Mexico KKare, 4th FL",
  },
  socials = [
    { icon: Facebook, url: socialLinks.facebook, label: "Facebook" },
    { icon: Twitter, url: socialLinks.twitter, label: "Twitter" },
    { icon: Linkedin, url: socialLinks.linkedin, label: "LinkedIn" },
    { icon: Instagram, url: socialLinks.instagram, label: "Instagram" },
  ],
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="lg:hidden space-y-12">
          {/* Logo */}
          <div className="flex justify-center">
            <Link href="/" className="inline-block">
              <Image
                src={brandLogo}
                height={140}
                width={140}
                alt={`${companyName} Logo`}
                className="object-contain hover:opacity-90 transition-opacity"
                priority
              />
            </Link>
          </div>

          {/* Company Name + Description */}
          <div className="text-center space-y-3">
            <h3 className="text-white text-2xl font-bold">{companyName}</h3>
            <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">{description}</p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center gap-3 text-sm">
            {contactInfo.email && (
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-primary transition-colors">
                  {contactInfo.email}
                </a>
              </div>
            )}
            {contactInfo.phone && (
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="hover:text-primary transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </div>
            )}
            {(contactInfo.address || contactInfo.addressLine) && (
              <div className="flex items-start gap-3 max-w-xs">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div className="text-left">
                  <p className="text-sm">{contactInfo.address}</p>
                  {contactInfo.addressLine && <p className="text-sm text-gray-400">{contactInfo.addressLine}</p>}
                </div>
              </div>
            )}
          </div>

          {/* Sections – 1 column on mobile, 3 on tablet */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
            {sections.map((section) => (
              <div key={section.title} className="flex flex-col">
                <h4 className="text-white font-semibold text-lg mb-3">{section.title}</h4>
                <ul className="space-y-2 text-sm flex-1">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-gray-400 hover:text-primary transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:grid lg:grid-cols-12 gap-10">
          {/* Logo – left side */}
          <div className="lg:col-span-3 flex items-start">
            <Link href="/" className="inline-block">
              <Image
                src={brandLogo}
                height={260}
                width={260}
                alt={`${companyName} Logo`}
                className="object-contain hover:opacity-90 transition-opacity"
                priority
              />
            </Link>
          </div>

          {/* Right side – 4 equal columns */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company block – same height as the others */}
            <div className="flex flex-col min-h-[220px]">
              <h3 className="text-white text-xl font-bold mb-3">{companyName}</h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-6">{description}</p>

              <div className="space-y-3 text-sm">
                {contactInfo.email && (
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <a href={`mailto:${contactInfo.email}`} className="hover:text-primary transition-colors break-all">
                      {contactInfo.email}
                    </a>
                  </div>
                )}
                {contactInfo.phone && (
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary shrink-0" />
                    <a
                      href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                      className="hover:text-primary transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                )}
                {(contactInfo.address || contactInfo.addressLine) && (
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm">{contactInfo.address}</p>
                      {contactInfo.addressLine && (
                        <p className="text-sm text-gray-400 mt-1">{contactInfo.addressLine}</p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Services / Company / Resources */}
            {sections.map((section) => (
              <div key={section.title} className="flex flex-col min-h-[220px]">
                <h4 className="text-white font-semibold text-lg mb-4">{section.title}</h4>
                <ul className="space-y-2.5 text-sm flex-1">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-primary transition-colors inline-block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-primary/35 my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray-500 text-center sm:text-left">
            © {currentYear} {companyName}. All rights reserved.
          </p>

          <div className="flex gap-3">
            {socials.map(
              ({ icon: Icon, url, label }) =>
                url && (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group"
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                ),
            )}
          </div>

          <div className="flex gap-5 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
