import React from "react";

export default function ProductCard({ name, price, image }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-lg bg-slate-800 shadow hover:shadow-lg transition">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold">{name}</h3>
        <p className="text-primary font-black">{price}</p>
      </div>
    </div>
  );
}
