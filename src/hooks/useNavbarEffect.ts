"use client";

import { useEffect } from "react";

const useNavbarEffect = (initialBg = false, toggleOnScroll = true) => {
  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    const nav = document.querySelector(".navbar");
    if (!nav) {
      console.warn("Navbar element not found.");
      return;
    }

    // Set initial background
    if (initialBg) {
      nav.classList.add("bg-primary");
    } else {
      nav.classList.remove("bg-primary");
    }

    // Scroll handler
    const handleScroll = () => {
      const top = 70;
      if (window.scrollY >= top) {
        nav.classList.add("bg-primary");
        nav.classList.add("shadow-md");
        nav.classList.add("backdrop-blur-md");
      } else if (toggleOnScroll) {
        nav.classList.remove("bg-primary");
        nav.classList.remove("shadow-md");
        nav.classList.remove("backdrop-blur-md");
      }
    };

    // Setup scroll listener
    if (toggleOnScroll) {
      window.addEventListener("scroll", handleScroll);
    }

    // Cleanup on unmount
    return () => {
      if (toggleOnScroll) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [initialBg, toggleOnScroll]);
};

export default useNavbarEffect;
