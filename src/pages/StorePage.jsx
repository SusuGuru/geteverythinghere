import React from "react";
import "./styles.css";

export default function StorePage() {
  const products = [
    { id: 1, name: "Smartphone X100", price: "$499", img: "https://via.placeholder.com/220" },
    { id: 2, name: "Noise Cancelling Headphones", price: "$199", img: "https://via.placeholder.com/220" },
    { id: 3, name: "Smart Watch Pro", price: "$299", img: "https://via.placeholder.com/220" },
    { id: 4, name: "4K Monitor", price: "$349", img: "https://via.placeholder.com/220" },
  ];

  return (
    <div className="store">
      <h2>Shop Our Products</h2>
      <div className="product-grid">
        {products.map((p) => (
          <div className="product-card" key={p.id}>
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <p className="price">{p.price}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}
