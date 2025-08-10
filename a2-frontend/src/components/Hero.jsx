import React, { useState, useEffect } from "react";
import hero from "../assets/hero-bg.jpg.avif";

const slides = [
  {
    title: "Access Anytime, Anywhere",
    subtitle: "Empowering You with Data on Demand Across Devices.",
  },
  {
    title: "All Your Information in One Place",
    subtitle: "Simplify Management with a Unified Data Platform.",
  },
  {
    title: "Lower Costs, Higher Value",
    subtitle: "Offering Premium features at a Fraction of the Price.",
  },
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
      className="h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight transition-opacity duration-700">
          {slides[currentSlide].title}
        </h1>

        <p className="mt-3 text-lg md:text-xl font-semibold transition-opacity duration-700">
          {slides[currentSlide].subtitle}
        </p>
      </div>
<div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-2 z-10">
  {slides.map((_, index) => (
    <button
      key={index}
      onClick={() => setCurrentSlide(index)}
      className={`rounded-full transition-all duration-300 ${
        currentSlide === index
          ? "bg-red-500 w-4 h-4"
          : "bg-white w-3 h-3"
      }`}
    />
  ))}
</div>

    </section>
  );
}

