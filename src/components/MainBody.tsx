"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import homeImage from "../assets/bg/BGB.jpg";
import Button from "./ui/Button";

const animationClasses = ["animate-appearup", "animate-appearup-2", "animate-moveleft", "animate-appearup"];

export default function MainBody() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const homeId = useId();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClasses[i % animationClasses.length]);
            entry.target.classList.remove("opacity-0");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    document.querySelectorAll<HTMLElement>(".main-content, .main-img").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={homeId}
      className="relative top-0 bg-cover min-h-screen pb-20 md:pb-0 flex justify-center items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={homeImage}
          alt="Sona Computer Engineering background"
          placeholder="blur"
          fill
          priority
          className={`object-cover transition-opacity duration-700 ${isImageLoaded ? "opacity-100" : "opacity-80"}`}
          onLoad={() => setIsImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full px-6 text-white">
        <div className="container md:px-20">
          <div className="flex flex-col md:flex-row items-center">
            {/* Text Section */}
            <div className="flex-1 md:pr-12 main-content opacity-0">
              <h1 className="sr-only">Sona Computer Engineering</h1>

              <h2 className="font-bold text-3xl text-center md:text-left md:text-5xl lg:text-6xl mb-6 leading-tight">
                Innovative IT Solutions & Network Engineering Services
              </h2>

              <p className="font-light text-lg md:text-xl lg:text-2xl text-center md:text-left text-white/90 mb-8 max-w-2xl mx-auto md:mx-0">
                Empowering businesses with cutting-edge technology, infrastructure, and support.
              </p>

              <div className="flex justify-center md:justify-start">
                <Button variant="primary" size="lg">
                  <Link
                    href="/contact"
                    className="inline-block bg-gradient-to-r from-[#850001] to-[#e70002] hover:opacity-90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>

            {/* Placeholder for Image or Future Content */}
            <div className="mx-6 md:mx-0 mt-6 md:mt-0 flex-1 main-img opacity-0">
              {/* <Image
                src={home}
                alt="Sona Engineering"
                width={500}
                height={400}
                className="rounded-3xl shadow-lg object-cover"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
