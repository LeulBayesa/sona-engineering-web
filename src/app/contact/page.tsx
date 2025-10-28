"use client";

import { useEffect } from "react";
import Image from "@/assets/images/s.svg";
import CommonHeader from "@/components/CommonHeader";
import ContactUs from "@/components/ContactUs";
import useNavbarEffect from "@/hooks/useNavbarEffect";

export default function Home() {
  useNavbarEffect(false, true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <CommonHeader title="Get In Touch" subTitle="Our company" src={Image} alt="Projects Image">
      <ContactUs />
    </CommonHeader>
  );
}
