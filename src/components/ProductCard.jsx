import React from "react";

const ProductCard = ({ name, price, image, available }) => {
  return (
    <div className="group flex transform flex-col overflow-hidden rounded-lg bg-background-dark/50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-400/10">
      <div className="aspect-square w-full overflow-hidden bg-white/5 p-2">
        <img src={image} alt={name} className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-sm font-bold text-white">{name}</h3>
        <div className="mt-2 flex items-center gap-1.5 text-xs font-medium">
          <span className={`h-2 w-2 rounded-full ${available ? "bg-green-500 shadow-[0_0_8px_2px] shadow-green-400/50" : "bg-red-500"}`}></span>
          <span className={available ? "text-green-400" : "text-stone-400"}>
            {available ? "Available" : "Out of Stock"}
          </span>
        </div>
        <p className={`mt-1 text-base font-black ${available ? "text-primary" : "text-stone-500"}`}>GHC {price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
