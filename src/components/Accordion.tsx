"use client";

import { Award, Briefcase, Cpu, Star, Users } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface AccordionItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface AccordionProps {
  classes?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function Accordion({ classes, imageSrc = "/s.svg", imageAlt = "Project Showcase" }: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);

  const accordionItems: AccordionItem[] = [
    {
      id: 1,
      title: "Long-Term Commitment",
      description:
        "We focus on building lasting partnerships, ensuring projects are sustainable and aligned with your vision for long-term success.",
      icon: <Briefcase size={20} className="text-primary/70" />,
    },
    {
      id: 2,
      title: "Great Understanding",
      description:
        "Our team takes the time to deeply understand your needs, delivering tailored solutions that meet your specific goals.",
      icon: <Users size={20} className="text-primary/70" />,
    },
    {
      id: 3,
      title: "Cutting-Edge Technology",
      description:
        "We leverage the latest technologies to create innovative, high-performance solutions that keep you ahead of the curve.",
      icon: <Cpu size={20} className="text-primary/70" />,
    },
    {
      id: 4,
      title: "Experienced Team",
      description:
        "Our skilled professionals bring years of expertise to deliver robust and reliable project outcomes.",
      icon: <Award size={20} className="text-primary/70" />,
    },
    {
      id: 5,
      title: "Best Quality",
      description: "We prioritize quality in every aspect, ensuring top-notch deliverables that exceed expectations.",
      icon: <Star size={20} className="text-primary/70" />,
    },
  ];

  return (
    <section className={`acc-cont bg-gray-50 py-16 ${classes || ""}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-primary text-3xl md:text-5xl font-bold font-heading">Our Project Strengths</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-evenly items-start">
          {/* Image Holder */}
          <div className="relative group w-full md:w-2/5 rounded-3xl overflow-hidden bg-white shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-primary/50 rounded-tl-3xl z-10" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-primary/50 rounded-br-3xl z-10" />

            <div className="relative w-full aspect-[16/9]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            <div className="absolute bottom-4 left-4 bg-primary/90 text-white text-sm px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Star size={14} />
              Featured Project
            </div>
          </div>

          {/* Accordion */}
          <ul className="w-full md:w-2/5 space-y-4">
            {accordionItems.map((item) => (
              <li
                key={item.id}
                className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(activeIndex === item.id ? null : item.id)}
                  className={`flex justify-between items-center px-6 py-4 w-full focus:outline-none ${
                    activeIndex === item.id ? "bg-primary text-white" : "bg-white text-gray-800"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="p-1.5 bg-primary/10 rounded-sm">{item.icon}</span>
                    <h2 className="font-medium text-lg font-heading">{item.title}</h2>
                  </div>
                  <span
                    className={`text-2xl select-none transition-transform duration-300 ${
                      activeIndex === item.id ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-500 ${
                    activeIndex === item.id ? "max-h-96 py-4 opacity-100" : "max-h-0 py-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
