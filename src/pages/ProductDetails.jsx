import React from "react";
import "../styles.css";
export default function ProductDetails() {
  return (
    <div className="product-details">
      <div className="details-left">
        <img
          src="https://via.placeholder.com/400"
          alt="Smartphone"
          className="main-img"
        />
      </div>

      <div className="details-right">
        <h2>Smartphone X100</h2>
        <p className="price">$499</p>
        <ul>
          <li>6.7-inch edge-to-edge display</li>
          <li>128GB storage</li>
          <li>Triple-lens camera system</li>
          <li>All-day battery life</li>
        </ul>

        <div className="color-options">
          <span className="color black"></span>
          <span className="color blue"></span>
          <span className="color gold"></span>
        </div>

        <button className="add-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
}
