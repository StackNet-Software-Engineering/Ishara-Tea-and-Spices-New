import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { categories } from "../data/products";
import { motion } from "framer-motion";

function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    // Find the product across all categories
    let product = null;
    for (const category of categories) {
        const found = category.items.find((item) => item.id === id);
        if (found) {
            product = found;
            break;
        }
    }

    if (!product) {
        return (
            <div className="min-h-screen bg-[#fdfaf5] flex flex-col items-center justify-center">
                <h2 className="text-3xl font-bold text-primary-green mb-4">Product Not Found</h2>
                <button
                    onClick={() => navigate('/products')}
                    className="bg-primary-green text-white px-6 py-3 rounded-xl hover:bg-secondary-green transition duration-300 font-bold"
                >
                    Back to Products
                </button>
            </div>
        );
    }

    return (
        <div className="relative min-h-screen bg-[#fdfaf5] pt-24 pb-12 px-6 overflow-hidden">
            {/* PROFESSIONAL MESH GRADIENT BACKGROUND */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `url("https://images.unsplash.com/photo-1596040033229-a9821ebd058d")`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'contrast(120%) brightness(100%) blur(2px)'
                    }}
                />
                <motion.div animate={{ x: ['-10vw', '30vw', '-10vw'], y: ['-10vh', '40vh', '-10vh'], rotate: [0, 180, 360] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] rounded-full bg-[#1B4332]/[0.05] blur-[80px] md:blur-[120px]" />
                <motion.div animate={{ x: ['50vw', '10vw', '50vw'], y: ['60vh', '10vh', '60vh'], rotate: [360, 180, 0] }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }} className="absolute w-[70vw] h-[70vw] md:w-[50vw] md:h-[50vw] rounded-full bg-[#E9C46A]/[0.05] blur-[70px] md:blur-[100px]" />
                <motion.div animate={{ x: ['10vw', '60vw', '10vw'], y: ['80vh', '30vh', '80vh'] }} transition={{ duration: 28, repeat: Infinity, ease: "linear" }} className="absolute w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] rounded-full bg-[#2A9D8F]/[0.05] blur-[60px] md:blur-[90px]" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                <button
                    onClick={() => navigate('/products')}
                    className="mb-8 text-primary-green font-bold flex items-center gap-2 hover:gap-4 transition-all"
                >
                    &larr; Back to Products
                </button>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row items-center gap-12 lg:gap-20"
                >
                    <div className="md:w-1/2 w-full h-[400px] md:h-[600px] overflow-hidden shadow-2xl">
                        <img
                            src={product.img}
                            alt={product.name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="md:w-1/2 flex flex-col justify-center">
                        <span className="text-accent-gold uppercase tracking-widest font-bold text-sm mb-4 block">
                            Pure Ceylon
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-primary-green premium-title mb-6">
                            {product.name}
                        </h1>

                        <p className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed">
                            {product.desc}
                        </p>

                        <div className="text-4xl text-primary-green font-bold mb-10">
                            {product.price}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="border-2 border-primary-green text-primary-green px-8 py-4 rounded-xl hover:bg-primary-green hover:text-black hover:scale-105 transition duration-300 font-bold text-lg flex-1 text-center">
                                Order Now
                            </button>
                            <button
                                onClick={() => navigate('/products')}
                                className="border-2 border-primary-green text-primary-green px-8 py-4 rounded-xl hover:bg-primary-green hover:text-black hover:scale-105 transition duration-300 font-bold text-lg flex-1 text-center"
                            >
                                Continue Shopping
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* DETAILED DESCRIPTION SECTION */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-32 mb-20 max-w-4xl mx-auto text-center px-4"
                >
                    <span className="text-[#8B9A46] uppercase tracking-[0.2em] font-bold text-xs mb-6 block">
                        PRODUCT GUIDE
                    </span>
                    <h2 className="text-4xl md:text-[2.75rem] text-[#1B4332] premium-title mb-10 leading-tight">
                        Discover {product.name}
                    </h2>

                    <p className="text-gray-800 text-lg md:text-[1.1rem] leading-[2rem] max-w-3xl mx-auto">
                        Experience the finest selection of hand-picked ingredients sourced directly from the lush, rich soils of Sri Lanka.
                        Our <strong>{product.name}</strong> is carefully cultivated and processed using traditional methods to preserve its natural aroma,
                        authentic flavor profile, and inherent wellness properties.
                        <br /><br />
                        Every package guarantees uncompromised premium quality, bringing you the true essence of Ceylon heritage.
                        Perfect for elevating your daily rituals, whether you are enjoying a calming warm beverage or enhancing a culinary masterpiece.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}

export default ProductDetails;
