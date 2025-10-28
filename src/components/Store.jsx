import React from "react";
import ProductCard from "./ProductCard";

export default function Store() {
  return (
    <section className="p-10 bg-background-dark text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Store</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <ProductCard
          name="iPhone 14 Pro Max"
          price="GHC 13,000"
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuCNLZJug1ucwo0fIJFx6W1oYpWFsJhrt0BPLzlnMUH2yFhR3TXkXWApDQki3HRqol2ogXY_-5ih4uxgDLp6nvVIV2b0ifS0sQ21iTMP3Nz6QpzSpqyB6aP0NjniXXuKQjELfeHSy2WWlB5BI9mLJgtvtWM2Akg-sfA_8zgsnalzX9jkZO06nF431yqZHF00Tu0b2UaAGh1vDadof_001NAw-YzgsJqPechhLVTvUKdi4390AxeoiPSSkuQ5eJb6OoVomcfMkM4VMiXT"
        />
        <ProductCard
          name="MacBook Pro 16-inch"
          price="GHC 25,000"
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuCnEuBF6DfIuGOcuDL9LTlxeXfFDHeWgKzxDJFLvq05iZfLxaAp5sXV3-3BnK1-YDzwK6M6QewWm7GWtZ8-LMy96JrZ2HxI4ttwpYYWFUavTun-cc0VqBAigxwANm6-qXS5kbcIdsLMSHHmaQOrAvL-MHWEBYxX_FDxUauoSsURHYl8mvvUD3H240r-vyVr2TL10ReJZW-qRZworXuPu672Lil7QTvPyN7r-6ku8tzcxbaWnATgqtCY46YWxEHoLA86fBOSA4Q-ftGM"
        />
      </div>
    </section>
  );
}
