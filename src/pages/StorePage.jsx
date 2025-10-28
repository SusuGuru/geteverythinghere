import React from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

const products = [
  { name: "iPhone 14 Pro Max", price: "13,000", available: true, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNLZJug1ucwo0fIJFx6W1oYpWFsJhrt0BPLzlnMUH2yFhR3TXkXWApDQki3HRqol2ogXY_-5ih4uxgDLp6nvVIV2b0ifS0sQ21iTMP3Nz6QpzSpqyB6aP0NjniXXuKQjELfeHSy2WWlB5BI9mLJgtvtWM2Akg-sfA_8zgsnalzX9jkZO06nF431yqZHF00Tu0b2UaAGh1vDadof_001NAw-YzgsJqPechhLVTvUKdi4390AxeoiPSSkuQ5eJb6OoVomcfMkM4VMiXT" },
  { name: "MacBook Pro 16-inch", price: "30,000", available: true, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnEuBF6DfIuGOcuDL9LTlxeXfFDHeWgKzxDJFLvq05iZfLxaAp5sXV3-3BnK1-YDzwK6M6QewWm7GWtZ8-LMy96JrZ2HxI4ttwpYYWFUavTun-cc0VqBAigxwANm6-qXS5kbcIdsLMSHHmaQOrAvL-MHWEBYxX_FDxUauoSsURHYl8mvvUD3H240r-vyVr2TL10ReJZW-qRZworXuPu672Lil7QTvPyN7r-6ku8tzcxbaWnATgqtCY46YWxEHoLA86fBOSA4Q-ftGM" },
  { name: "AirPods Pro", price: "2,500", available: true, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBaS23kBbyTOIWpOnIxfz3CE0WAFKVG17Fop5U5OjICz1SGxkpjLepeU_LtJG14tmhMnFh6O0TJA5pahmLnK-q9Pe6zqRbrj_lm9-tvPpKHODuA5_zR0WDGsL8CqdMfsoLnNuv4HWUzg30VBVvXqPmnQwvT3ptwCJp3S3RwDoFxvkYckP0lAfc2CZ8Glo2hPmisN6FfFQ-gE6jGOzEdldVg0WveWjuyjvU_fS-xRXgC9cwF7yCkQlr8U7-ScehhygQ_Jk1bhn6IvEc8" },
  // add others here as needed...
];

const StorePage = () => {
  return (
    <div className="bg-gradient-to-br from-[#0f172a] to-[#007bff] font-display text-stone-200 min-h-screen">
      <Header />

      <main className="container mx-auto flex-1 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex justify-center border-b border-stone-700/80">
            <div className="flex -mb-px space-x-6">
              <a href="#" className="inline-block border-b-2 border-primary px-2 py-3 text-sm font-bold text-white">iPhones</a>
              <a href="#" className="inline-block border-b-2 border-transparent px-2 py-3 text-sm font-medium text-stone-400 hover:border-primary/50 hover:text-white">Laptops</a>
              <a href="#" className="inline-block border-b-2 border-transparent px-2 py-3 text-sm font-medium text-stone-400 hover:border-primary/50 hover:text-white">Accessories</a>
              <a href="#" className="inline-block border-b-2 border-transparent px-2 py-3 text-sm font-medium text-stone-400 hover:border-primary/50 hover:text-white">Consoles</a>
              <a href="#" className="inline-block border-b-2 border-transparent px-2 py-3 text-sm font-medium text-stone-400 hover:border-primary/50 hover:text-white">TVs</a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StorePage;
