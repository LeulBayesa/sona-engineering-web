"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ArrowUpRight, Calendar, MapPin, Tag } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Slider, { type Settings } from "react-slick";
import FALLBACK_SRC from "@/assets/images/s.svg";

interface ProjectCardProps {
  title: string;
  description: string;
  images: string[];
  location: string;
  year: number;
  category?: string;
  link?: string;
  index?: number;
}

function SlideImage({ src, alt }: { src: string; alt: string }) {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <Image
      src={currentSrc}
      alt={alt}
      fill
      onError={() => {
        if (currentSrc !== FALLBACK_SRC) setCurrentSrc(FALLBACK_SRC);
      }}
      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/..."
    />
  );
}

export default function ProjectCard({
  title,
  description,
  images,
  location,
  year,
  category,
  link,
  index = 0,
}: ProjectCardProps) {
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

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

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    lazyLoad: "ondemand" as const,
    appendDots: (dots) => (
      <div>
        <ul className="slick-dots">{dots}</ul>
      </div>
    ),
    customPaging: () => <button type="button" aria-label="Slide indicator"></button>,
  };

  const cardVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: custom * 0.1,
      },
    }),
    whileHover: {
      scale: 1.03,
      y: -10,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.3,
      },
    },
  };

  const imageVariants: Variants = {
    initial: { opacity: 0, scale: 1.1 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="whileHover"
      whileTap={{ scale: 0.98 }}
      className="group relative container rounded-3xl overflow-hidden bg-linear-to-br from-white to-gray-50/50 backdrop-blur-sm shadow-lg border border-white/20 hover:border-primary/30 duration-500 flex flex-col w-full sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto"
    >
      <div className="relative w-full h-48 sm:h-48 md:h-72 lg:h-80">
        <div className="relative w-full h-48 sm:h-48 md:h-64 lg:h-72">
          {images.length > 0 ? (
            <Slider ref={sliderRef} {...settings}>
              {images.map((src, idx) => (
                <motion.div
                  key={src}
                  variants={imageVariants}
                  initial="initial"
                  animate="animate"
                  className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80"
                >
                  <SlideImage src={src} alt={`${title} image ${idx + 1}`} />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
                </motion.div>
              ))}
            </Slider>
          ) : (
            <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80 bg-gray-100 flex items-center justify-center">
              <SlideImage src={FALLBACK_SRC} alt="No images available" />
            </div>
          )}
        </div>
        {category && (
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-white text-xs sm:text-sm px-3 py-1.5 rounded-full z-10 border border-white/20 shadow-lg flex items-center gap-1"
          >
            <Tag size={12} />
            {category}
          </motion.span>
        )}

        {link && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              whileTap={{ opacity: 1 }}
              whileFocus={{ opacity: 1 }}
              className="absolute inset-0 bg-black/20 flex items-center justify-center z-20 pointer-events-none"
            >
              <motion.a
                href={link}
                tabIndex={0}
                target="_blank"
                rel="noopener noreferrer"
                className=" focus-visible:ring-2 focus-visible:ring-primary pointer-events-auto bg-white/90 backdrop-blur-sm text-primary font-semibold px-6 py-3 rounded-full border border-white/20 shadow-xl flex items-center gap-2 hover:bg-white transition-all duration-300 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Project
                <ArrowUpRight size={16} />
              </motion.a>
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      <div className="p-4 sm:p-6 flex flex-col grow relative">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2"
        >
          {title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-3 mb-4 sm:mb-6 grow"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-full h-px bg-linear-to-r from-transparent via-gray-300 to-transparent mb-4"
        />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm sm:text-base gap-2 sm:gap-0">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-gray-600">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-1 sm:gap-2"
            >
              <MapPin size={14} className="text-primary/70" />
              <span className="font-medium">{location}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-1 sm:gap-2"
            >
              <Calendar size={14} className="text-primary/70" />
              <span className="font-medium">{year}</span>
            </motion.div>
          </div>

          {link ? (
            <motion.a
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ delay: 0.7 }}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-dark font-semibold inline-flex items-center gap-1.5 transition-all duration-300 group/link text-sm sm:text-base"
            >
              <span>Live Demo</span>
              <ArrowUpRight size={14} className="group-hover/link:translate-x-1 transition-transform duration-300" />
            </motion.a>
          ) : (
            <span className="text-gray-400 font-semibold text-sm sm:text-base">No Link Available</span>
          )}
        </div>
      </div>

      <motion.div
        initial={false}
        whileHover={{
          boxShadow: "0 0 0 1px rgba(133, 0, 1, 0.1), 0 25px 50px -12px rgba(133, 0, 1, 0.25)",
        }}
        className="absolute inset-0 rounded-3xl pointer-events-none"
      />
    </motion.div>
  );
}
