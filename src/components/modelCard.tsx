"use client";

import { ClipboardList, Code2, Users } from "lucide-react";
import { useLayoutEffect } from "react";

const CardUI = () => {
  useLayoutEffect(() => {
    const cards = document.querySelectorAll(".model-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const models = [
    {
      title: "Extend Your Team",
      icon: <Users className="text-primary w-10 h-10" />,
      shortDescription: "Scale your existing development capacity by adding skilled professionals to your team.",
    },
    {
      title: "Managed Team",
      icon: <ClipboardList className="text-primary w-10 h-10" />,
      shortDescription: "Let us handle your project end-to-end with a fully managed and efficient team.",
    },
    {
      title: "Custom Solution",
      icon: <Code2 className="text-primary w-10 h-10" />,
      shortDescription: "We design and build custom software tailored to your unique business needs.",
    },
  ];

  return (
    <div className="bg-gradient-to-b my-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Our Models
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">What we offer to help your business grow and innovate.</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8">
          {models.map((model, index) => (
            <div
              key={index}
              className="model-card group relative bg-white rounded-2xl shadow-md p-8 opacity-0 translate-y-10 
              hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary hover:-translate-y-2 flex flex-col"
              style={{ animationDelay: `${index / 9}s` }}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative flex-grow">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {model.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-4">{model.title}</h3>

                <p className="text-gray-600 mb-8 leading-relaxed">{model.shortDescription}</p>
              </div>

              <button
                className="relative z-10 w-full bg-gradient-to-r from-primary to-primary/90 text-white py-3 rounded-xl font-semibold 
                hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-2 mt-auto cursor-pointer"
              >
                Learn More
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardUI;
