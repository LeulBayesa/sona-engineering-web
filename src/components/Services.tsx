"use client";

import { Camera, Wifi, Wrench } from "lucide-react";
import { useEffect } from "react";
import ServiceCard from "./ServiceCard";
import Watermark from "./Watermark";
import Modern from "../assets/images/Vector.svg";

export default function Services() {
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
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Camera Installation",
      description:
        "Professional CCTV and security camera installation for homes and businesses.",
      Icon: Camera,
    },
    {
      title: "Networking Installation",
      description:
        "Setup wired and wireless networks for offices, data centers, and enterprises.",
      Icon: Wifi,
    },
    {
      title: "Maintenance & Support",
      description:
        "Reliable ongoing maintenance and technical support for IT and network systems.",
      Icon: Wrench,
    },
  ];

  return (
    <section className="relative bg-linear-to-b from-white via-gray-50 to-gray-100 py-20 lg:py-32 overflow-hidden">
      {/* Top-left Watermark */}
      <Watermark
        src={Modern}
        position="top-left"
        size={{ base: 460, sm: 200, lg: 260 }}
        opacity={25}
      />
      <Watermark
        src={Modern}
        position="center"
        size={{ base: 860, sm: 200, lg: 260 }}
        opacity={8}
      />
      <Watermark
        src={Modern}
        position="bottom-right"
        size={{ base: 460, sm: 200, lg: 260 }}
        opacity={25}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 className="text-primary text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-3">
            Our Services
          </h3>
          <p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto">
            Quality solutions to secure and optimize your business operations.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8">
          {services.map((service, i) => (
            <ServiceCard
              key={i}
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
