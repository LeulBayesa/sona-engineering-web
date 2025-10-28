"use client";

import { motion, type Variants } from "framer-motion";
import { Quote } from "lucide-react";
import Slider, { type Settings } from "react-slick";
import Watermark from "./Watermark";
import Modern from "../assets/images/Vector.svg";

interface Testimonial {
  name: string;
  role: string;
  message: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "Abebe Tadesse",
      role: "CEO, TechCorp",
      message:
        "Sona Engineering provided exceptional service in setting up our office network and CCTV system. Highly recommended!",
    },
    {
      name: "Mekdes Alem",
      role: "IT Manager, Addis Enterprises",
      message:
        "Professional, reliable, and skilled team. They completed our network installation ahead of schedule.",
    },
    {
      name: "Samuel Getachew",
      role: "Operations Director, SecureHome",
      message:
        "Excellent maintenance support. Our IT systems have never run smoother.",
    },
    {
      name: "Lily Tesfaye",
      role: "Founder, SecureHome",
      message:
        "Amazing team! They handle everything from networking to security installation seamlessly.",
    },
  ];

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    lazyLoad: "ondemand",
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
    appendDots: (dots) => (
      <div>
        <ul className="slick-dots mt-8 flex justify-center gap-3">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <button
        className="w-3 h-3 bg-primary/30 rounded-full hover:bg-primary transition-colors duration-300"
        aria-label="Slide indicator"
      />
    ),
  };

  const cardVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: custom * 0.1 },
    }),
    whileHover: {
      scale: 1.05,
      y: -5,
      boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        duration: 0.3,
      },
    },
  };

  if (!testimonials.length) {
    return (
      <section className="py-20 text-center bg-gradient-to-b from-white via-gray-50 to-gray-100">
        <p className="text-gray-600 text-lg">
          No testimonials available at this time.
        </p>
      </section>
    );
  }

  return (
    <section className="relative bg-gradient-to-t from-white via-gray-50 to-gray-100 py-20 lg:py-32 overflow-hidden">
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-primary text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-3">
            What Our Clients Say
          </h3>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Hear from businesses that trust{" "}
            <span className="font-semibold text-primary">Sona Engineering</span>{" "}
            for their IT solutions.
          </p>
        </motion.div>

        {/* Slider */}
        <div role="region" aria-roledescription="Testimonial carousel">
          <Slider {...settings}>
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                // whileHover="whileHover"
                viewport={{ once: true }}
                className="px-4 py-4 md:px-4 "
              >
                <div className="relative bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 p-8 flex flex-col justify-between min-h-[300px] transition-all duration-300">
                  <Quote
                    size={36}
                    className="text-primary/70 mb-4 mx-auto"
                    aria-hidden="true"
                  />

                  <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 flex-grow text-center">
                    “{t.message}”
                  </p>

                  <div className="mt-auto text-center">
                    <h4 className="text-gray-900 font-semibold text-lg">
                      {t.name}
                    </h4>
                    <span className="text-gray-500 text-sm">{t.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
