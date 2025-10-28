import React from "react";

const ServicesSection = () => {
  const services = [
    { title: "Fast Delivery", desc: "Get your items delivered in record time." },
    { title: "Quality Assurance", desc: "Every product is tested and verified." },
    { title: "Customer Support", desc: "We’re here 24/7 to help you." },
  ];

  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-semibold mb-10">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
        {services.map((s, i) => (
          <div key={i} className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2 text-primary">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
