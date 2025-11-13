"use client";

import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import Modern from "../assets/images/SonaLogo3.png";
import Watermark from "./Watermark";

export default function ContactUs() {
  const contactInfo = {
    email: "info@sona-engineering.com",
    phone: "+251 (910) 14-7670",
    address: "Addis Ababa, Ethiopia",
    addressLine: "Mexico KKare, 4th FL",
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message || !formData.subject) {
      setErrorMessage("Please fill out all fields.");
      setStatus("error");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey,
      );

      setFormData({ name: "", email: "", subject: "", message: "" });
      setStatus("success");
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setErrorMessage("Failed to send message. Please try again later.");
      setStatus("error");
    }
  };

  return (
    <section className="relative overflow-hidden flex flex-col-reverse md:flex-row justify-center md:gap-10 py-8 px-4 bg-gray-50">
      <Watermark src={Modern} position="top-left" size={{ base: 260, lg: 150, sm: 50 }} opacity={3} />
      <Watermark src={Modern} position="center" size={{ base: 460, lg: 150, sm: 50 }} opacity={3} />
      <Watermark src={Modern} position="top-right" size={{ base: 260, lg: 150, sm: 50 }} opacity={3} />

      <motion.div
        className="w-full max-w-2xl rounded-3xl border border-gray-200 bg-white shadow-lg p-8 relative"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-primary/50 rounded-tl-3xl" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-primary/50 rounded-br-3xl" />

        <h2 className="text-3xl font-semibold text-gray-900 mb-2">Contact Us</h2>
        <p className="text-gray-500 mb-6">We’d love to hear from you. Send us a message below.</p>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 z-10 relative">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            disabled={status === "sending"}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            disabled={status === "sending"}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:outline-none"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            disabled={status === "sending"}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            disabled={status === "sending"}
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:outline-none resize-none"
          />

          <motion.button
            type="submit"
            disabled={status === "sending"}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-primary text-white font-medium py-3 rounded-xl shadow-md hover:bg-primary/90 transition-all disabled:opacity-70"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </motion.button>
        </form>

        <AnimatePresence>
          {status === "success" && (
            <motion.p
              key="success"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              aria-live="polite"
              className="text-green-600 text-center mt-4"
            >
              Message sent successfully!
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              key="error"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              aria-live="polite"
              className="text-red-500 text-center mt-4"
            >
              {errorMessage}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
      <section className="py-2 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <div className="space-y-3 text-sm">
            {contactInfo.email && (
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-primary transition-colors break-all">
                  {contactInfo.email}
                </a>
              </div>
            )}
            {contactInfo.phone && (
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="hover:text-primary transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </div>
            )}
            {(contactInfo.address || contactInfo.addressLine) && (
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm">{contactInfo.address}</p>
                  {contactInfo.addressLine && <p className="text-sm text-gray-400 mt-1">{contactInfo.addressLine}</p>}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </section>
  );
}
