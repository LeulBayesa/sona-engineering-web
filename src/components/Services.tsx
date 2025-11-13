"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Modern from "@/assets/images/Vector.svg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Watermark from "@/components/Watermark";
import { additionalServices, mainServices, processSteps, whyChooseUs } from "./servicesList";
export default function ServicesPage() {
  return (
    <section className="relative bg-linear-to-b from-white via-gray-50 to-gray-100 overflow-hidden">
      <Watermark src={Modern} position="top-left" size={{ base: 460, lg: 300 }} opacity={6} rotate={-120} />
      <Watermark src={Modern} position="top-right" size={{ base: 460, lg: 300 }} opacity={6} />
      <Watermark src={Modern} position="bottom-right" size={{ base: 460, lg: 300 }} opacity={6} />

      <div className="container mx-auto px-4 py-20 lg:py-28 relative z-10">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-5 font-heading">Our Professional Services</h1>
          <p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto">
            At <span className="font-semibold text-primary">Sona Engineering</span>, we provide modern IT, networking,
            and hardware solutions — built to enhance performance and reliability.
          </p>
        </motion.div>

        {/* --- MAIN SERVICES --- */}
        <div className="space-y-28">
          {mainServices.map((service, index) => (
            <motion.div
              key={crypto.randomUUID()}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-center`}
            >
              {/* Text */}
              <div className="flex-1">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-6">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{service.title}</h2>
                <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                <p className="text-foreground mb-8">{service.detailedInfo}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, _i) => (
                    <div key={crypto.randomUUID()} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image / Icon Placeholder */}
              <div className="flex-1 w-full">
                <div className="bg-linear-to-br from-primary/5 to-primary/10 rounded-2xl h-[400px] flex items-center justify-center">
                  {/* <service.icon className="w-32 h-32 text-primary/20" /> */}
                  <div className="relative w-full aspect-video">
                    <Image
                      src={service.picture}
                      alt={"Services image"}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out rounded-2xl"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- ADDITIONAL SERVICES (Accordion) --- */}
        <section className="py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Additional Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our extended IT and computer technology solutions for offices, enterprises, and institutions.
            </p>
          </div>

          <Accordion type="single" collapsible className="max-w-4xl mx-auto space-y-4">
            {additionalServices.map((service, i) => (
              <AccordionItem
                key={crypto.randomUUID()}
                value={`service-${i}`}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
              >
                <AccordionTrigger className="px-6 py-5 hover:bg-gray-50 text-left">
                  <div className="flex items-center gap-3">
                    <service.Icon className="w-5 h-5 text-primary" />
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

        {/* --- WHY CHOOSE US, PROCESS, CTA --- */}
        {/* (same as your version, unchanged) */}
        {/* ... */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Sona Engineering</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Excellence in engineering — our work combines technical expertise, integrity, and customer focus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={crypto.randomUUID()}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg p-8 text-center transition-all border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- PROCESS SECTION --- */}
        <section className="py-20 lg:py-28">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow a clear and effective workflow to ensure excellence at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={crypto.randomUUID()}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary text-primary-foreground rounded-full text-2xl font-bold mb-6 text-white">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>

                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-border">
                    <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- CTA --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">Need a Custom Solution?</h3>
          <p className="text-gray-600 mb-6">Let’s design a tailored system that fits your goals perfectly.</p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white font-medium px-8 py-3 rounded-full shadow-md hover:bg-primary/90 transition"
          >
            Get a Free Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
