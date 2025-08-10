import React, { useState, useEffect } from "react";
import hero from "../assets/hero-bg.jpg.avif";

const slides = [
  { title: "Access Anytime, Anywhere", subtitle: "Empowering You with Data on Demand Across Devices." },
  { title: "All Your Information in One Place", subtitle: "Simplify Management with a Unified Data Platform." },
  { title: "Lower Costs, Higher Value", subtitle: "Offering Premium features at a Fraction of the Price." },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="h-[80vh] sm:h-screen flex items-center justify-center relative overflow-hidden px-4"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 text-center max-w-2xl">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          {slides[currentSlide].title}
        </h1>
        <p className="mt-3 text-base sm:text-lg md:text-xl font-semibold">
          {slides[currentSlide].subtitle}
        </p>
      </div>

      {/* Circle indicators */}
      <div className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-1 sm:space-y-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-red-500 w-3.5 h-3.5" : "bg-white w-2.5 h-2.5"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

