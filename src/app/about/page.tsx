"use client";

import { useEffect } from "react";
import Image from "@/assets/images/s.svg";
import AboutSnapshot from "@/components/AboutSnapshot";
import CommonHeader from "@/components/CommonHeader";
import useNavbarEffect from "@/hooks/useNavbarEffect";

export default function Home() {
  useNavbarEffect(false, true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <CommonHeader title="About Us" subTitle="Our company" src={Image} alt="Projects Image">
      <AboutSnapshot />
    </CommonHeader>
  );
}
