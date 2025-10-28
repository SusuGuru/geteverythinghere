import React from "react";

const Header = () => {
  return (
    <header className="border-b border-primary/20 dark:border-primary/30">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-2 text-xl font-bold text-white">
            <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z" fill="currentColor"></path>
            </svg>
            <span>Gadget Pro Ghana</span>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#" className="text-sm font-medium text-stone-300 hover:text-primary">Home</a>
            <a href="#" className="text-sm font-medium text-primary">Products</a>
            <a href="#" className="text-sm font-medium text-stone-300 hover:text-primary">About</a>
            <a href="#" className="text-sm font-medium text-stone-300 hover:text-primary">Contact</a>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <button className="rounded-full p-2 text-stone-300 hover:bg-stone-700/50 hover:text-primary">
            <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg">
              <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
