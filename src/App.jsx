import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Store from "./components/Store";

export default function App() {
  return (
    <div className="font-sans bg-background-light min-h-screen text-gray-900">
      <Hero />
      <About />
      <Services />
      <Store />
    </div>
  );
}
