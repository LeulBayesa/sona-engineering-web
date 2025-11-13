"use client";

import { motion } from "framer-motion";
import { CheckCircle, Cpu, MapPin, ShieldCheck, Target, Users } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import Modern from "@/assets/images/Group.svg";
import aboutHero from "@/assets/images/Home.webp";
import headerImage from "@/assets/images/s.svg";
import Modern2 from "@/assets/images/Vector.svg";
import CommonHeader from "@/components/CommonHeader";
import { mainServices } from "@/components/servicesList";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Watermark from "@/components/Watermark";
import useNavbarEffect from "@/hooks/useNavbarEffect";

export default function AboutPage() {
  useNavbarEffect(false, true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <CommonHeader title="About Sona Engineering" subTitle="get to know us" src={headerImage} alt="Projects Image">
      <main className="relative bg-linear-to-b from-white via-gray-50 to-gray-100 overflow-hidden">
        {/* Decorative Watermarks */}
        <Watermark position="top-left" src={Modern2} size={{ base: 360, sm: 200, lg: 280 }} opacity={15} rotate={90} />
        <Watermark
          position="top-right"
          src={Modern2}
          size={{ base: 360, sm: 200, lg: 280 }}
          opacity={15}
          rotate={-120}
        />
        <Watermark position="center" src={Modern} size={{ base: 760, sm: 200, lg: 300 }} opacity={2} />
        <Watermark position="bottom-right" src={Modern} size={{ base: 360, sm: 200, lg: 300 }} opacity={20} />
        <Watermark position="bottom-left" src={Modern} size={{ base: 360, sm: 200, lg: 300 }} opacity={20} />

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 lg:py-32 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                About <span className="text-primary">Sona Engineering</span>
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We are an Ethiopian-based technology solutions company specializing in IT infrastructure, security
                systems, and networking services. Our mission is to empower organizations with reliable, future-ready
                technology that drives productivity and growth.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From concept to completion, we deliver integrated engineering solutions tailored to your unique business
                needs.
              </p>
            </motion.div>

            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Image
                src={aboutHero}
                alt="About Sona Engineering"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl w-full object-cover"
                placeholder="blur"
              />
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="bg-white py-6">
          <div className="container mx-auto px-6 text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Mission, Vision & Values
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-10 max-w-8xl mx-auto">
              <motion.div
                className="p-8 rounded-xl bg-primary/10 border border-primary/20 shadow-md hover:shadow-lg transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Target className="mx-auto text-primary mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p className="text-gray-700">
                  To deliver cutting-edge IT and engineering solutions that empower businesses, enhance security, and
                  drive sustainable innovation across Ethiopia and beyond.
                </p>
              </motion.div>

              <motion.div
                className="p-8 rounded-xl bg-purple-50 border border-purple-200 shadow-md hover:shadow-lg transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <ShieldCheck className="mx-auto text-purple-600 mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                <p className="text-gray-700">
                  To become Ethiopia’s most trusted name in integrated IT solutions and engineering excellence fostering
                  a secure, connected, and innovative digital future.
                </p>
              </motion.div>
              <motion.div
                className="p-8 rounded-xl bg-cyan-50 border border-cyan-200 shadow-md hover:shadow-lg transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <ShieldCheck className="mx-auto text-cyan-600 mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                <p className="text-gray-700">
                  To become Ethiopia’s most trusted name in integrated IT solutions and engineering excellence fostering
                  a secure, connected, and innovative digital future.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Goals Section */}
        <section className="bg-linear-to-b from-white via-gray-50 to-purple-50 py-4">
          <div className="container mx-auto px-6 text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Goals
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-10 max-w-8xl mx-auto">
              <motion.div
                className="p-8 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <MapPin className="mx-auto text-primary mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2">Nationwide Reach</h3>
                <p className="text-gray-700">
                  Expand our services across Ethiopia, ensuring that every region benefits from reliable and secure
                  technology solutions.
                </p>
              </motion.div>

              <motion.div
                className="p-8 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Cpu className="mx-auto text-primary mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2">Technological Excellence</h3>
                <p className="text-gray-700">
                  Continuously adopt the latest innovations in IT and engineering to deliver world-class infrastructure
                  and digital transformation projects.
                </p>
              </motion.div>
              <motion.div
                className="p-8 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Users className="mx-auto text-primary mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2">Customer Empowerment</h3>
                <p className="text-gray-700">
                  Build long-term partnerships with clients through transparency, professionalism, and dedicated
                  technical support.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-4">
          <div className="container mx-auto px-6">
            <motion.h2
              className="text-center text-3xl md:text-4xl font-bold mb-12 text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              What We Do
            </motion.h2>
          </div>
          <Accordion type="single" collapsible className="max-w-4xl mx-auto space-y-4">
            {mainServices.map((service, i) => (
              <AccordionItem
                key={crypto.randomUUID()}
                value={`service-${i}`}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
              >
                <AccordionTrigger className="px-6 py-5 hover:bg-gray-50 text-left">
                  <div className="flex items-center gap-3">
                    <service.icon className="w-5 h-5 text-primary" />
                    <span className="font-medium text-gray-900">{service.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6">
                  <p className="text-foreground mb-6">{service.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature, _fIndex) => (
                      <div key={crypto.randomUUID()} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Visit Our Office
            </motion.h2>
            <p className="text-gray-700 mb-8">
              We’re based in Addis Ababa, Ethiopia. Come meet our team or get in touch for collaboration opportunities.
            </p>
            <motion.div
              className="rounded-xl overflow-hidden shadow-xl border border-gray-200"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <iframe
                title="Sona Engineering Location"
                src="https://maps.google.com/maps?width=702&height=401&hl=en&q=KKare%20Building%20%7C%20Mexico%20%7C%20%E1%8A%AC%E1%8A%AC%E1%88%AD%20%E1%88%85%E1%8A%95%E1%8D%83%20%7C%20%E1%88%9C%E1%8A%AD%E1%88%B2%E1%8A%AE&t=h&z=14&ie=UTF8&iwloc=B&output=embed"
                width="100%"
                height="450"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-white py-16 text-center">
          <motion.div
            className="container mx-auto px-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let’s Build the Future Together</h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Partner with Sona Engineering to implement secure, scalable, and efficient technology solutions tailored
              to your needs.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
            >
              Contact Us
            </a>
          </motion.div>
        </section>
      </main>
    </CommonHeader>
  );
}
