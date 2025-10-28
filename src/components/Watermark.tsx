"use client";

import Image, { StaticImageData } from "next/image";
import { Computer, LucideIcon } from "lucide-react";
import React from "react";

interface WatermarkProps {
  src?: string | StaticImageData;
  alt?: string;
  size?: { base?: number; sm?: number; lg?: number };
  opacity?: number;
  position?:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "center";
  rotate?: number;
  zIndex?: number;
  icon?: LucideIcon;
}

export default function Watermark({
  src,
  alt = "Watermark",
  size = { base: 160, sm: 200, lg: 260 },
  opacity = 10,
  position = "top-left",
  rotate = 12,
  zIndex = 0,
  icon,
}: WatermarkProps) {
  // Tailwind + transform classes for position
  const positionClass = {
    "top-left": "top-5 left-5 -translate-x-1/4 -translate-y-1/4",
    "bottom-right": "bottom-5 right-5 translate-x-1/4 translate-y-1/4",
    center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    "top-right": "top-5 right-5 translate-x-1/4 -translate-y-1/4",
    "bottom-left": "bottom-5 left-5 -translate-x-1/4 translate-y-1/4",
  }[position];

  return (
    <div
      className={`${positionClass} pointer-events-none select-none`}
      style={{
        width: size.base,
        height: size.base,
        zIndex,
        opacity: opacity / 100,
        transform: `rotate(${rotate}deg)`,
        position: "absolute",
      }}
    >
      {src ? (
        <Image src={src} alt={alt} style={{ objectFit: "contain" }} fill />
      ) : icon ? (
        React.createElement(icon, {
          strokeWidth: 1,
          className: "w-full h-full text-primary/15",
        })
      ) : (
        <Computer strokeWidth={1} className="w-full h-full text-primary/15" />
      )}
    </div>
  );
}
