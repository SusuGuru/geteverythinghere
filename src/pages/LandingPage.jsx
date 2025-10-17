import React from "react";
import "./styles.css";

export default function LandingPage() {
  return (
    <div className="landing">
      <header className="hero">
        <h1>Welcome to Our Digital Hub</h1>
        <p>
          Experience cutting-edge solutions designed to enhance your workspace,
          boost productivity, and connect you with innovation.
        </p>
      </header>

      <section className="featured">
        <div className="featured-item">
          <img src="https://via.placeholder.com/300x180" alt="Workspace" />
          <h3>Modern Workspace</h3>
          <p>
            Stylish and functional office setups to match your work style.
          </p>
        </div>
        <div className="featured-item">
          <img src="https://via.placeholder.com/300x180" alt="Technology" />
          <h3>Smart Technology</h3>
          <p>
            Devices that bring your creativity and efficiency to life.
          </p>
        </div>
      </section>

      <section className="services">
        <h2>Our Services</h2>
        <div className="service-grid">
          <div className="service-card">
            <img src="https://via.placeholder.com/80" alt="Icon" />
            <h4>Web Development</h4>
            <p>Building responsive and modern web experiences.</p>
          </div>
          <div className="service-card">
            <img src="https://via.placeholder.com/80" alt="Icon" />
            <h4>UI/UX Design</h4>
            <p>Crafting visually appealing and intuitive designs.</p>
          </div>
          <div className="service-card">
            <img src="https://via.placeholder.com/80" alt="Icon" />
            <h4>Brand Solutions</h4>
            <p>Helping brands communicate with confidence and clarity.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
