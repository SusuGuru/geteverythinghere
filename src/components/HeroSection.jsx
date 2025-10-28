import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-background-dark text-white py-20 text-center">
      <h1 className="text-5xl font-bold mb-4">Welcome to GetEverythingHere</h1>
      <p className="text-lg mb-6 max-w-xl mx-auto">
        Your one-stop online store for gadgets, accessories, and more.
      </p>
      <button className="bg-primary text-black px-6 py-3 rounded-full font-semibold hover:opacity-80 transition">
        Shop Now
      </button>
    </section>
  );
};

export default HeroSection;
