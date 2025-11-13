"use client";

import { Camera, Wifi, Wrench } from "lucide-react";
import { useEffect } from "react";
import Modern from "../assets/images/Vector.svg";
import ServiceCard from "./ServiceCard";
import Watermark from "./Watermark";

export default function ServicesSnapshot() {
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>(".service");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-moveup");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    cards.forEach((card) => {
      observer.observe(card);
    });
    return () => observer.disconnect();
  }, []);

  // --- Snapshot of main services ---
  const services = [
    {
      title: "Security Solutions",
      description: "Advanced CCTV, access control, and alarm systems to protect your property and assets.",
      Icon: Camera,
    },
    {
      title: "Networking & Infrastructure",
      description: "Design, setup, and optimization of wired and wireless networks for offices and enterprises.",
      Icon: Wifi,
    },
    {
      title: "Maintenance & IT Support",
      description: "Proactive system maintenance, hardware repair, and technical support for IT infrastructure.",
      Icon: Wrench,
    },
  ];

  return (
    <section className="relative bg-linear-to-b from-white via-gray-50 to-gray-100 py-20 lg:py-32 overflow-hidden">
      {/* Background Watermarks */}
      <Watermark src={Modern} position="top-left" size={{ base: 460, sm: 200, lg: 260 }} opacity={5} />
      <Watermark src={Modern} position="center" size={{ base: 860, sm: 300, lg: 320 }} opacity={7} />
      <Watermark src={Modern} position="bottom-right" size={{ base: 460, sm: 200, lg: 260 }} opacity={5} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 className="text-primary text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-3">
            Our Core Services
          </h3>
          <p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto">
            Professional solutions to secure, connect, and maintain your technology infrastructure.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8">
          {services.map((service, i) => (
            <ServiceCard
              key={crypto.randomUUID()}
              index={i + 1}
              Icon={service.Icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
