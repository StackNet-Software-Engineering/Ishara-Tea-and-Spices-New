import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { categories } from "../data/products";

function Products() {

  const [activeCategory, setActiveCategory] = useState("tea");
  const navigate = useNavigate();

  const currentCategory = categories.find(
    (cat) => cat.id === activeCategory
  );

  return (

    <div className="relative min-h-screen overflow-hidden bg-[#fdfaf5]">
      {/* PROFESSIONAL MESH GRADIENT BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Static Base Texture */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1596040033229-a9821ebd058d")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'contrast(120%) brightness(100%) blur(2px)'
          }}
        />

        {/* Animated Mesh Blobs - Responsive with vw/vh */}
        <motion.div
          animate={{
            x: ['-10vw', '30vw', '-10vw'],
            y: ['-10vh', '40vh', '-10vh'],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] rounded-full bg-[#1B4332]/08 blur-[80px] md:blur-[120px]"
        />

        <motion.div
          animate={{
            x: ['50vw', '10vw', '50vw'],
            y: ['60vh', '10vh', '60vh'],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute w-[70vw] h-[70vw] md:w-[50vw] md:h-[50vw] rounded-full bg-[#E9C46A]/08 blur-[70px] md:blur-[100px]"
        />

        <motion.div
          animate={{
            x: ['10vw', '60vw', '10vw'],
            y: ['80vh', '30vh', '80vh'],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="absolute w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] rounded-full bg-[#2A9D8F]/08 blur-[60px] md:blur-[90px]"
        />
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 w-full">




        {/* HEADER */}
        <div className="text-center mb-20 max-w-4xl mx-auto">



          <h1 className="text-5xl md:text-6xl font-bold text-primary-green premium-title mb-6">
            Ceylon Tea, Spices & Herbal Products
          </h1>

          <div className="w-24 h-1 bg-accent-gold mx-auto mb-8" />

          <p className="text-gray-600 text-xl leading-relaxed">
            Discover authentic Sri Lankan tea, premium spices and herbal wellness
            products. High quality and perfect for tourists and gifts.
          </p>

        </div>

        {/* CATEGORY FILTER */}

        <div className="flex justify-center gap-6 mb-16 flex-wrap">

          {categories.map((cat) => (

            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-8 py-3 rounded-full font-medium transition duration-300 border-2
            ${activeCategory === cat.id
                  ? "bg-primary-green text-black border-primary-green shadow-lg scale-105"
                  : "bg-transparent border-primary-green/20 text-primary-green hover:border-primary-green hover:bg-primary-green/5"
                }`}
            >
              {cat.title}
            </button>

          ))}

        </div>

        {/* PRODUCTS GRID */}

        <AnimatePresence mode="wait">

          <motion.div
            key={activeCategory}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 w-full px-2 md:px-4 mb-20"
          >
            {currentCategory.items.map((item, i) => (
              <div
                key={i}
                className="relative overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-[#1B4332]/40 transition-all duration-300 h-[400px] md:h-[450px]"
                onClick={() => navigate(`/product/${item.id}`)}
              >
                {/* IMAGE */}
                <img
                  src={item.img}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover transition duration-1000 group-hover:scale-110"
                />

                {/* GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f15]/80 via-[#1B4332]/10 to-transparent transition duration-500 group-hover:from-[#0b1f15]/90 group-hover:via-[#1B4332]/20"></div>

                {/* CONTENT OVERLAY */}
                <div className="absolute bottom-0 left-0 w-full p-8 text-center flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition duration-500">
                  <h3 className="text-3xl font-medium text-white premium-title drop-shadow-lg">
                    {item.name}
                  </h3>
                </div>
              </div>
            ))}
          </motion.div>

        </AnimatePresence>

        {/* PRODUCT MODAL REMOVED */}
      </div>
    </div>
  );
}

export default Products;