import React from "react";

export default function Services() {
  return (
    <section className="p-10 bg-blue-50 dark:bg-slate-800 text-center">
      <h2 className="text-3xl font-bold">Our Services</h2>
      <div className="grid gap-6 mt-6 md:grid-cols-3">
        <div className="p-6 bg-white dark:bg-slate-900 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-bold text-xl mb-2">Gadgets</h3>
          <p>Latest phones, laptops, and accessories.</p>
        </div>
        <div className="p-6 bg-white dark:bg-slate-900 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-bold text-xl mb-2">Smart Home</h3>
          <p>Make your living space smarter with IoT devices.</p>
        </div>
        <div className="p-6 bg-white dark:bg-slate-900 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-bold text-xl mb-2">Support</h3>
          <p>Customer support for the best experience.</p>
        </div>
      </div>
    </section>
  );
}
