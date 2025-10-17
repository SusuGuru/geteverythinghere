import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-logo">
        <Link to="/">GetEverythingHere</Link>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product-details">Products</Link> {/* Will navigate once ProductDetails page exists */}
          </li>
          <li>
            <Link to="/#about-us">About</Link>
          </li>
          <li>
            <a
              href="mailto:sbrayka19@gmail.com"
              onClick={(e) => {
                const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                if (isMobile) {
                  window.location.href =
                    "https://wa.me/233547149360?text=Hello!%20I%20would%20like%20to%20inquire.";
                  e.preventDefault();
                }
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
