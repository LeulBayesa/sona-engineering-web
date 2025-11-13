"use client";

import { useEffect } from "react";
import Modern from "@/assets/images/Vector.svg";
import CommonHeader from "@/components/CommonHeader";
import ProjectCard from "@/components/ProjectCard";
import ProjectStrength from "@/components/ProjectStrength";
import Watermark from "@/components/Watermark";
import useNavbarEffect from "@/hooks/useNavbarEffect";

// Use string path for static image asset
const HeaderImage = "/s.svg";

export default function ProjectPage() {
  useNavbarEffect(false, true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      title: "Hydroelectric Plant Construction",
      description:
        "Design and construction of a modern hydroelectric plant delivering renewable power to local communities.",
      images: [
        "https://images.unsplash.com/photo-1602524811315-7be5fda0ef0b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1581093588401-6038f6b9c5c5?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1616628182035-fb472c26a8e4?auto=format&fit=crop&w=800&q=80",
      ],
      location: "Blue Nile, Ethiopia",
      year: 2023,
      category: "Energy",
      link: "https://sona-engineering.com/projects/hydroelectric-plant",
    },
    {
      title: "Addis Industrial Park Expansion",
      description:
        "A multi-phase project to expand industrial park capacity, improve logistics, and integrate renewable systems.",
      images: [
        "https://images.unsplash.com/photo-1591375277476-3eb5f5a0b6b5?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1581091012184-6fbd46941df4?auto=format&fit=crop&w=800&q=80",
      ],
      location: "Addis Ababa, Ethiopia",
      year: 2024,
      category: "Infrastructure",
    },
    {
      title: "Road Rehabilitation Project",
      description: "Rehabilitation and expansion of a key transportation corridor improving regional connectivity.",
      images: [
        "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1526662091272-8ccad5811e53?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1553531384-98d3d74f4851?auto=format&fit=crop&w=800&q=80",
      ],
      location: "Oromia, Ethiopia",
      year: 2022,
      category: "Transport",
    },
    {
      title: "Urban Bridge Expansion",
      description: "Expansion of urban bridges to improve traffic flow and enhance city infrastructure.",
      images: [
        "https://images.unsplash.com/photo-1533929736458-ca588d00744d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1517705008129-3eb5f3f8a47?auto=format&fit=crop&w=800&q=80",
      ],
      location: "Addis Ababa, Ethiopia",
      year: 2023,
      category: "Transport",
    },
    {
      title: "Renewable Energy Park",
      description: "Implementation of a solar and wind energy park providing sustainable energy solutions.",
      images: [
        "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
      ],
      location: "Bahir Dar, Ethiopia",
      year: 2024,
      category: "Energy",
    },
  ];

  return (
    <CommonHeader
      title="Projects"
      subTitle="Selected Success Stories from Our Project Portfolio"
      src={HeaderImage}
      alt="Projects Image"
    >
      {/* Projects Section */}
      <section className="relative overflow-hidden mx-auto px-4 py-12 min-h-screen" aria-labelledby="projects-heading">
        <Watermark src={Modern} position="center" size={{ base: 860, sm: 200, lg: 260 }} opacity={5} rotate={90} />
        <Watermark src={Modern} position="bottom-right" size={{ base: 460, sm: 200, lg: 260 }} opacity={5} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </section>
      <ProjectStrength />
    </CommonHeader>
  );
}
