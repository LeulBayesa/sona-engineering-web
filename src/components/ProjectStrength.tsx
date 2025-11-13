"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, Cpu, Star, Users } from "lucide-react";
import Image from "next/image";
import imageSrc from "@/assets/images/s.svg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Modern from "../assets/images/Vector.svg";
import Watermark from "./Watermark";

export default function ProjectStrength() {
  const projectStrength = [
    {
      id: 1,
      title: "Long-Term Commitment",
      description:
        "We focus on building lasting partnerships, ensuring projects are sustainable and aligned with your vision for long-term success.",
      icon: Briefcase,
    },
    {
      id: 2,
      title: "Great Understanding",
      description:
        "Our team takes the time to deeply understand your needs, delivering tailored solutions that meet your specific goals.",
      icon: Users,
    },
    {
      id: 3,
      title: "Cutting-Edge Technology",
      description:
        "We leverage the latest technologies to create innovative, high-performance solutions that keep you ahead of the curve.",
      icon: Cpu,
    },
    {
      id: 4,
      title: "Experienced Team",
      description:
        "Our skilled professionals bring years of expertise to deliver robust and reliable project outcomes.",
      icon: Award,
    },
    {
      id: 5,
      title: "Best Quality",
      description: "We prioritize quality in every aspect, ensuring top-notch deliverables that exceed expectations.",
      icon: Star,
    },
  ];

  return (
    <section className="relative acc-cont bg-gray-50 py-16 overflow-hidden">
      <Watermark src={Modern} position="top-left" size={{ base: 460, sm: 200, lg: 260 }} opacity={8} rotate={90} />
      <Watermark src={Modern} position="bottom-right" size={{ base: 460, sm: 200, lg: 260 }} opacity={3} />
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-primary text-3xl md:text-5xl font-bold font-heading">Our Project Strengths</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-evenly items-start">
          {/* Image Holder with Motion */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group w-full md:w-2/5 rounded-3xl overflow-hidden bg-white shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-primary/50 rounded-tl-3xl z-10" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-primary/50 rounded-br-3xl z-10" />

            <div className="relative w-full aspect-video">
              <Image
                src={imageSrc}
                alt={"Project Strengths"}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
            </div>

            <div className="absolute bottom-4 left-4 bg-primary/90 text-white text-sm px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Star size={14} />
              Featured Project
            </div>
          </motion.div>

          {/* Accordion with Motion */}
          <motion.ul
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-2/5 space-y-4"
          >
            <Accordion type="single" collapsible className="max-w-4xl mx-auto space-y-2">
              {projectStrength.map((service, i) => (
                <AccordionItem
                  key={crypto.randomUUID()}
                  value={`service-${i}`}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-primary/5 text-left transition-colors duration-300">
                    <div className="flex items-center gap-3">
                      <service.icon className="w-6 h-6 text-primary shrink-0" />
                      <span className="font-medium text-gray-900">{service.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6">
                    <p className="text-foreground mb-6">{service.description}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
