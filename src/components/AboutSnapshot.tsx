"use client";

import { motion } from "framer-motion";
import { CameraIcon, Wrench } from "lucide-react";
import Image from "next/image";
import Modern from "../assets/images/Group.svg";
import Modern2 from "../assets/images/Group2.svg";
import aboutImage from "../assets/images/Home.webp";
import Watermark from "./Watermark";

export default function AboutSnapshot() {
  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-gray-100 py-20 lg:py-32 overflow-hidden">
      {/* Top-left Watermark */}
      <Watermark position="top-left" size={{ base: 160, sm: 200, lg: 260 }} opacity={10} src={Modern2} />
      <Watermark src={Modern} position="center" size={{ base: 660, sm: 200, lg: 260 }} opacity={7} />
      <Watermark icon={CameraIcon} position="bottom-right" size={{ base: 160, sm: 200, lg: 260 }} opacity={10} />

      <div className="container mx-auto px-4 relative z-10">
        <div
          role="region"
          aria-roledescription="About section"
          className="flex flex-col md:flex-row items-center gap-10 md:gap-20"
        >
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={aboutImage}
              alt="About Sona Engineering"
              width={500}
              height={400}
              className="rounded-xl shadow-lg w-full h-auto"
              placeholder="blur"
              onError={() => (
                <div className="w-full h-[400px] bg-gray-200 rounded-xl flex items-center justify-center">
                  <p className="text-gray-500">Image failed to load</p>
                </div>
              )}
            />
          </motion.div>
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-primary text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">
              About Sona Engineering
            </h3>
            <p className="text-gray-700 text-base md:text-lg mb-4">
              Sona Engineering is a leading provider of IT solutions, networking, and security systems across Ethiopia.
              We empower businesses with modern technology, secure infrastructures, and professional support services.
            </p>
            <p className="text-gray-700 text-base md:text-lg mb-6">
              Our team of skilled engineers ensures that every project is executed with precision, safety, and
              efficiency.
            </p>
            <a
              href="/about"
              className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:opacity-90 hover:shadow-xl transition-all duration-300"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
