"use client";

import { useEffect } from "react";
import AboutSnapshot from "@/components/AboutSnapshot";
import FeaturedProjects from "@/components/FeaturedProjects";
import MainBody from "@/components/MainBody";
import ServicesSnapshot from "@/components/ServicesSnapshot";
import Testimonials from "@/components/Testimonials";
import useNavbarEffect from "@/hooks/useNavbarEffect";

export default function Home() {
  useNavbarEffect(false, true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MainBody />
      <ServicesSnapshot />
      <AboutSnapshot />
      <FeaturedProjects />
      <Testimonials />
    </>
  );
}
