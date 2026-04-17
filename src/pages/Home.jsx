import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const content = {
  en: {
    title: "Authentic Ceylon Tea & Spices",
    desc: "Welcome to Ishara Tea & Spices Center. We bring you the finest selection of handpicked Ceylon tea and traditional Sri Lankan spices. Our products are sourced directly from local plantations and farmers, ensuring freshness, quality, and authentic island flavor.",
    heritage: "For generations, Sri Lanka has been known as the home of the world's finest tea. At Ishara Tea & Spices Center, we proudly continue this tradition by offering premium products with warm Sri Lankan hospitality.",
    historyTitle: "The History of Sri Lanka Ceylon Tea",
    historyDesc: `Sri Lanka, formerly known as Ceylon, has a rich history of tea cultivation dating back to 1867 when James Taylor planted the first tea seedlings in the central highlands. 
      Ceylon Tea quickly became famous worldwide for its unique flavor, aroma, and high quality. 
      Over generations, the tea industry has grown into a symbol of Sri Lankan culture and a major export product, 
      offering varieties like Black, Green, White, and specialty blended teas. 
      Ishara Tea & Spices Center continues this proud heritage by delivering authentic Ceylon tea to visitors and tea lovers alike.`
  },
  de: {
    title: "Authentischer Ceylon Tee & Gewürze",
    desc: "Wir bieten hochwertigen Ceylon Tee und traditionelle Gewürze direkt von lokalen Plantagen.",
    heritage: "Sri Lanka ist weltweit bekannt für seinen hochwertigen Tee. Wir setzen diese Tradition mit Stolz fort.",
    historyTitle: "Die Geschichte des Ceylon-Tees in Sri Lanka",
    historyDesc: "Sri Lanka, früher Ceylon, hat eine lange Geschichte des Teeanbaus, die 1867 begann, als James Taylor die ersten Teepflanzen in den zentralen Hochländern pflanzte..."
  },
  ru: {
    title: "Настоящий цейлонский чай и специи",
    desc: "Мы предлагаем лучший цейлонский чай и традиционные специи напрямую от местных производителей.",
    heritage: "Шри-Ланка известна во всем мире своим чаем. Мы продолжаем эту традицию.",
    historyTitle: "История цейлонского чая в Шри-Ланке",
    historyDesc: "Шри-Ланка, ранее известная как Цейлон, имеет богатую историю выращивания чая, начавшуюся в 1867 году с посадки первых чайных кустов Джеймсом Тейлором..."
  },
};

function Home({ lang }) {
  const [currentMedia, setCurrentMedia] = useState(0);
  const [currentFeature, setCurrentFeature] = useState(0);

  const heroMedia = [
    { type: 'video', src: '/CL1.mp4' },
    { type: 'image', src: '/product img/Home1.JPG' },
    { type: 'image', src: '/product img/Home2.JPG' },
    { type: 'image', src: '/product img/Home3.JPG' },
    { type: 'image', src: '/product img/Home4.JPG' }
  ];

  const features = [
    { title: "100% Ceylon Tea", desc: "Black, Green, White & Broken Tea selections", },
    { title: "Herbal Collection", desc: "Natural wellness teas for health and relaxation", },
    { title: "Premium Spices", desc: "Ceylon Cinnamon, Pepper, Cardamom, & more", },
    { title: "Tourist Trusted", desc: "Fixed prices • English speaking • Gift packs", }
  ];

  const galleryImages = [
    '/product img/Home5.JPG',
    '/product img/Home6.JPG',
    '/product img/Home7.JPG',
    '/product img/Home8.JPG',
    '/product img/Home9.JPG',
    '/product img/Home10.JPG',
    '/product img/Home11.JPG',
    '/product img/Home12.JPG',
    '/product img/Home13.JPG',
    '/product img/Home14.JPG'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMedia((prev) => (prev + 1) % heroMedia.length);
    }, 6000);
    const featureTimer = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => {
      clearInterval(timer);
      clearInterval(featureTimer);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fdfaf5]">
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
        <motion.div animate={{ x: ['-10vw', '30vw', '-10vw'], y: ['-10vh', '40vh', '-10vh'], rotate: [0, 180, 360] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] rounded-full bg-[#1B4332]/[0.08] blur-[80px] md:blur-[120px]" />
        <motion.div animate={{ x: ['50vw', '10vw', '50vw'], y: ['60vh', '10vh', '60vh'], rotate: [360, 180, 0] }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }} className="absolute w-[70vw] h-[70vw] md:w-[50vw] md:h-[50vw] rounded-full bg-[#E9C46A]/[0.08] blur-[70px] md:blur-[100px]" />
        <motion.div animate={{ x: ['10vw', '60vw', '10vw'], y: ['80vh', '30vh', '80vh'] }} transition={{ duration: 28, repeat: Infinity, ease: "linear" }} className="absolute w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] rounded-full bg-[#2A9D8F]/[0.08] blur-[60px] md:blur-[90px]" />
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 w-full">
        {/* HERO SECTION */}
        <div className="relative w-full h-[95vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-[#fdfaf5]">
          {heroMedia.map((media, index) => {
            const isActive = index === currentMedia;
            if (media.type === 'video') {
              return (
                <video
                  key={index}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={`absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${isActive ? "opacity-100" : "opacity-0"}`}
                >
                  <source src={media.src} type="video/mp4" />
                </video>
              );
            } else {
              return (
                <img
                  key={index}
                  src={media.src}
                  alt={`Hero background ${index}`}
                  className={`absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${isActive ? "opacity-100" : "opacity-0"}`}
                />
              );
            }
          })}
          <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none"></div>

          {/* Aesthetic Brand Overlay - NO BLACK */}
          {/*  <div className="absolute inset-0 bg-[#1B4332]/45 backdrop-blur-[2px]"></div>*/}

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10 max-w-5xl p-10 md:p-20"
          >
            <motion.h1
              className="text-6xl md:text-8xl premium-title font-bold mb-6 text-white drop-shadow-xl"
            >
              Ishara Tea & Spices
            </motion.h1>
            <h2 className="text-2xl md:text-4xl font-medium mb-8 text-[#D4A373] tracking-wide uppercase drop-shadow-md">
              {content[lang].title}
            </h2>
            <div className="w-24 h-1 bg-[#D4A373] mx-auto mb-8" />
            <p className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed text-white/90 mb-10 font-medium drop-shadow-md">
              {content[lang].desc}
            </p>
            <button
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              className="bg-[#1B4332] text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition shadow-xl uppercase tracking-widest text-sm"
            >
              Explore our Heritage
            </button>
          </motion.div>
        </div>

        {/* FEATURES SLIDER */}
        <div className="py-12 px-6 max-w-4xl mx-auto overflow-hidden min-h-[250px] relative flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentFeature}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute w-full px-8 flex flex-col items-center text-center"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-[#1B4332] mb-6 premium-title">
                {features[currentFeature].title}
              </h3>
              <p className="text-gray-700 text-xl md:text-2xl font-medium leading-relaxed">
                {features[currentFeature].desc}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Timeline Indicators */}
          <div className="absolute bottom-4 flex gap-3">
            {features.map((_, idx) => (
              <div
                key={idx}
                className={`h-2 rounded-full transition-all duration-500 ${idx === currentFeature ? 'w-8 bg-[#D4A373]' : 'w-2 bg-gray-300'}`}
              />
            ))}
          </div>
        </div>

        {/* HISTORY SECTION */}
        <div className="relative pt-6 pb-12 px-6 mb-10 whitespace-pre-line">
          <div className="max-w-7xl mx-auto p-10 md:p-16 relative overflow-hidden backdrop-blur-sm">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/5 rounded-full blur-[100px] -mr-32 -mt-32"></div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl text-primary-green font-bold mb-10 premium-title">
                {content[lang].historyTitle}
              </h2>
              <div className="w-20 h-1 bg-accent-gold mb-10" />
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed whitespace-pre-line">
                {content[lang].historyDesc}
              </p>
              <p className="mt-12 text-primary-green/70 font-medium italic">
                {content[lang].heritage}
              </p>
            </motion.div>
          </div>
        </div>

        {/* PLANTATION GALLERY SECTION */}
        <div className="relative py-16 px-6 max-w-7xl mx-auto mb-20 z-10 block">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B4332] premium-title">Our Plantation Life</h2>
            <div className="w-16 h-1 bg-[#D4A373] mx-auto mt-6" />
          </motion.div>

          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
            {galleryImages.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="break-inside-avoid overflow-hidden shadow-xl relative group z-20 cursor-pointer"
              >
                <img
                  src={src}
                  alt={`Plantation Moment ${index + 1}`}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-[#1B4332]/20 transition-all duration-300 pointer-events-none" />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#D4A373]/60 rounded-[2rem] transition-all duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;