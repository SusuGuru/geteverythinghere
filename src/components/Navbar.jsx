import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">TechStore</Link>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/store">Store</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
