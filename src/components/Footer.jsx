import React from "react";

const Footer = () => (
  <footer className="border-t border-primary/20 dark:border-primary/30">
    <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row">
        <p className="text-sm text-stone-400">© 2024 Gadget Pro Ghana. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm">
          <a href="#" className="text-stone-400 hover:text-primary">Privacy Policy</a>
          <a href="#" className="text-stone-400 hover:text-primary">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
