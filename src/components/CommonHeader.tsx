"use client";

import Image, { type StaticImageData } from "next/image";
// import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import dots from "../assets/images/dots.png";
import oimg from "../assets/images/o.png";
import rimg from "../assets/images/r.png";
import timg from "../assets/images/t.png";
import ximg from "../assets/images/x.png";

interface CommonHeaderProps {
  title: string;
  subTitle?: string;
  children?: ReactNode;
  src?: StaticImageData | string;
  alt?: string;
  className?: string;
}

export default function CommonHeader({ title, subTitle, src, alt, children, className }: CommonHeaderProps) {
  // const pathname = usePathname();

  return (
    <header className={`w-full flex flex-col ${className ?? ""}`}>
      <div className="relative bg-primary py-40 overflow-hidden h-64 md:h-80 lg:h-96">
        <div className="container relative z-10 mx-auto px-4">
          <hgroup className="text-white text-center mb-8">
            <h1 className="font-bold font-heading text-4xl md:text-6xl mt-3 mb-5 capitalize">{title}</h1>
            {subTitle && (
              <h3 className="block bg-clip-text text-white text-sm md:text-2xl font-extrabold tracking-widest mt-4 uppercase mx-auto">
                {subTitle}
              </h3>
            )}
          </hgroup>
        </div>

        {/* Decorative Images */}
        <div className="w-full">
          {[
            { src: dots, pos: "top-1/2 left-1/4 animate-grow" },
            { src: timg, pos: "top-12 left-1/2 animate-spin-slow" },
            { src: ximg, pos: "bottom-0 right-1/3 animate-movearound" },
            { src: rimg, pos: "bottom-1/3 left-10 animate-spin-slow" },
            { src: oimg, pos: "bottom-20 left-1/3 animate-movearound" },
            { src: timg, pos: "top-1/2 right-20 animate-spin-slow" },
          ].map((img, _i) => (
            <div key={crypto.randomUUID()} className={`absolute ${img.pos} z-0`}>
              <Image src={img.src} alt="" aria-hidden="true" className="h-auto max-w-full" />
            </div>
          ))}

          {src && alt && (
            <Image
              width={120}
              height={120}
              src={src}
              alt={alt}
              className="absolute top-1/2 left-1/2 scale-250 -translate-x-1/2 -translate-y-1/2 opacity-10 w-4/5 md:w-1/5 max-h-96"
              priority
            />
          )}
        </div>
      </div>
      {children}
    </header>
  );
}
