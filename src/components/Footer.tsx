"use client";

import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Link from "next/link";

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
}

export default function Footer({
  companyName = "Sona Computer Engineering",
  description = "Delivering high-quality engineering and software solutions for global clients.",
  sections = [
    {
      title: "Services",
      links: [
        { label: "IT Support", href: "/services/it-support" },
        { label: "Network Engineering", href: "/services/network" },
        { label: "CCTV Installation", href: "/services/cloud" },
        { label: "Web Development", href: "/services/web" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Our Team", href: "/team" },
        { label: "Careers", href: "/careers" },
        { label: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "/docs" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Support", href: "/support" },
        { label: "FAQ", href: "/faq" },
      ],
    },
  ],
  socialLinks = {
    facebook: "https://sona-engineering.com",
    twitter: "https://sona-engineering.com",
    linkedin: "https://sona-engineering.com",
    instagram: "https://sona-engineering.com",
  },
  contactInfo = {
    email: "info@sona-engineering.com",
    phone: "+251 (910) 14-7670",
    address: "Addis Ababa, Ethiopia",
    addressLine: "Mexico KK, 4th floor",
  },
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-2xl font-bold mb-4">{companyName}</h3>
            <p className="text-gray-400 mb-6 max-w-md">{description}</p>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.email && (
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#850001] flex-shrink-0 mt-0.5" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-[#850001] transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
              )}
              {contactInfo.phone && (
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#850001] flex-shrink-0 mt-0.5" />
                  <a href={`tel:${contactInfo.phone}`} className="hover:text-[#850001] transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
              )}
              {contactInfo.address && (
                <div className="flex flex-col items-start gap-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-[#850001] flex-shrink-0 mt-0.5" />
                    <span>{contactInfo.address}</span>
                  </div>
                  <span className="ml-12">- {contactInfo.addressLine}</span>
                </div>
              )}
            </div>
          </div>

          {/* Footer Sections */}
          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold text-lg mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-[#850001] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-primary/40 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} {companyName}. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.facebook && (
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#850001] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            )}
            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#850001] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            )}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#850001] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}
            {socialLinks.instagram && (
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#850001] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            )}
          </div>

          {/* Legal Links */}
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="hover:text-[#850001] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#850001] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
