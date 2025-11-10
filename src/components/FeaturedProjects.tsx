"use client";

import { motion } from "framer-motion";
import { Code2, UsbIcon } from "lucide-react";
import Modern from "../assets/images/Vector.svg";
import ProjectCard from "./ProjectCard";
import Watermark from "./Watermark";

interface Project {
  title: string;
  description: string;
  images: string[];
  location: string;
  year: number;
  category: string;
}

export default function FeaturedProjects() {
  const projects: Project[] = [
    {
      title: "Office CCTV Installation",
      description: "Installed modern surveillance cameras and monitoring systems for corporate offices.",
      images: ["/projects/cctv1.jpg", "/projects/cctv2.jpg"],
      location: "Addis Ababa",
      year: 2023,
      category: "Security",
    },
    {
      title: "Enterprise Networking Setup",
      description: "Complete networking setup including routers, switches, and WiFi coverage.",
      images: ["/projects/network1.jpg", "/projects/network2.jpg"],
      location: "Bahir Dar",
      year: 2024,
      category: "Networking",
    },
    {
      title: "Maintenance Contract",
      description: "Ongoing IT system maintenance for multiple business branches.",
      images: ["/projects/maintenance1.jpg"],
      location: "Oromia",
      year: 2023,
      category: "Maintenance",
    },
  ];

  if (!projects.length) {
    return (
      <section className="py-20 text-center bg-linear-to-b from-white via-gray-50 to-gray-100">
        <p className="text-gray-600 text-lg">No projects available at this time.</p>
      </section>
    );
  }

  return (
    <section className="relative bg-linear-to-b from-white via-gray-50 to-gray-100 py-20 lg:py-32 overflow-hidden">
      <Watermark src={Modern} position="top-left" size={{ base: 460, sm: 200, lg: 260 }} opacity={5} />
      <Watermark src={Modern} position="center" size={{ base: 860, sm: 200, lg: 260 }} opacity={7} />
      <Watermark src={Modern} position="bottom-right" size={{ base: 460, sm: 200, lg: 260 }} opacity={5} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-primary text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-3">
            Featured Projects
          </h3>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Selected success stories from our project portfolio.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div
          role="region"
          aria-roledescription="Project gallery"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
