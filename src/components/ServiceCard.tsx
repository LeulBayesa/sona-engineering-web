"use client";

import { motion, type Variants } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  index: number;
  Icon: LucideIcon;
  title: string;
  description: string;
}

const cardVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
  whileHover: {
    scale: 1.03,
    boxShadow: "0 12px 25px rgba(0,0,0,0.08)",
    transition: { type: "spring", stiffness: 300, damping: 25 },
  },
};

export default function ServiceCard({ index, Icon, title, description }: ServiceCardProps) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      whileHover="whileHover"
      viewport={{ once: true, amount: 0.2 }}
      className="relative group bg-white border border-gray-100 rounded-2xl shadow-sm p-8 flex flex-col items-center text-center transition-all duration-300"
    >
      <div className="flex items-center justify-center w-20 h-20 mb-5 bg-primary/10 rounded-full">
        <Icon className="text-primary w-10 h-10" />
      </div>
      <h4 className="text-gray-900 font-semibold text-lg mb-2">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </motion.div>
  );
}
