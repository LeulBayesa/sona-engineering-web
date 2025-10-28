"use client";

import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function ContactUs() {
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
    <section className="flex justify-center py-20 px-4 bg-gray-50">
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
    </section>
  );
}
