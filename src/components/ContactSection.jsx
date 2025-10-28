import React from "react";

const ContactSection = () => {
  return (
    <section className="py-16 text-center bg-white">
      <h2 className="text-3xl font-semibold mb-4 text-gray-800">Contact Us</h2>
      <p className="text-gray-600 mb-8">
        Have questions? We’d love to hear from you.
      </p>
      <form className="max-w-md mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          className="border border-gray-300 rounded-md w-full p-3 mb-4"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border border-gray-300 rounded-md w-full p-3 mb-4"
        />
        <textarea
          placeholder="Your Message"
          className="border border-gray-300 rounded-md w-full p-3 mb-4"
          rows="4"
        ></textarea>
        <button className="bg-primary text-black px-6 py-3 rounded-full font-semibold hover:opacity-80 transition">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
