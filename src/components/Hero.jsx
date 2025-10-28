import React from "react";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen bg-gradient-to-b from-background-dark to-blue-900 text-white">
      <h1 className="text-5xl font-bold">GetEverythingHere</h1>
      <p className="mt-4 text-lg text-primary">
        Just what you need.
      </p>
      <button className="mt-6 px-6 py-3 rounded-lg bg-primary text-background-dark font-bold hover:scale-105 transition">
        Explore Store
      </button>
    </section>
  );
}
