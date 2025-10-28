"use client";

import { useEffect } from "react";
import Image from "@/assets/images/s.svg";
import CommonHeader from "@/components/CommonHeader";
import Services from "@/components/Services";
import useNavbarEffect from "@/hooks/useNavbarEffect";

export default function Home() {
  useNavbarEffect(false, true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <CommonHeader title="Our Services" subTitle="Our company" src={Image} alt="Projects Image">
      <Services />
    </CommonHeader>
  );
}
