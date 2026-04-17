import React from "react";
import { Link } from "react-router-dom";

function Navbar({ lang, setLang }) {
  return (
    <nav className="bg-green-900 text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-1">
        <img src="/logo.webp" alt="Ishara Logo" className="h-8 w-8 object-contain rounded-full bg-white border border-yellow-400 p-0" />
        <h1 className="text-2xl md:text-3xl text-white premium-title font-bold drop-shadow-md tracking-wide">
          Ishara Tea & Spices Center
        </h1>
      </div>

      <div className="ml-auto flex items-center space-x-8 mr-6">
        <Link to="/" className="font-semibold uppercase tracking-wider text-sm hover:text-[#d68e27] transition-colors">Home</Link>
        <Link to="/products" className="font-semibold uppercase tracking-wider text-sm hover:text-[#d68e27] transition-colors">Products</Link>
        <Link to="/contact" className="font-semibold uppercase tracking-wider text-sm hover:text-[#d68e27] transition-colors">Contact</Link>
      </div>

      <select
        className="text-black px-3 py-1 font-medium rounded-sm border-none shadow-sm focus:ring-2 focus:ring-[#d68e27] outline-none"
        value={lang}
        onChange={(e) => setLang(e.target.value)}
      >
        <option value="en">EN</option>
        <option value="de">DE</option>
        <option value="ru">RU</option>
      </select>
    </nav>
  );
}

export default Navbar;