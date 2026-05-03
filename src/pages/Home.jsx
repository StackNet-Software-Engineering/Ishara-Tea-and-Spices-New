import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Cloudinary optimizer ───────────────────────────────────────────────────
const cdn = (url, opts = "w_1200,q_auto,f_auto") => {
  if (!url || !url.includes("res.cloudinary.com")) return url;
  return url.replace("/upload/", `/upload/${opts}/`);
};
const cdnThumb = (url) => cdn(url, "w_600,q_auto,f_auto");

// ─── Full trilingual content ─────────────────────────────────────────────────
const content = {
  en: {
    brandName: "Ishara Tea & Spices",
    title: "Authentic Ceylon Tea & Spices",
    desc: "Welcome to Ishara Tea & Spices Center. We bring you the finest selection of handpicked Ceylon tea and traditional Sri Lankan spices. Our products are sourced directly from local plantations and farmers, ensuring freshness, quality, and authentic island flavor.",
    exploreBtn: "Explore our Heritage",
    heritage: "For generations, Sri Lanka has been known as the home of the world's finest tea. At Ishara Tea & Spices Center, we proudly continue this tradition by offering premium products with warm Sri Lankan hospitality.",
    historyTitle: "The History of Sri Lanka Ceylon Tea",
    historyDesc: `Sri Lanka, formerly known as Ceylon, has a rich history of tea cultivation dating back to 1867 when James Taylor planted the first tea seedlings in the central highlands.\n\nCeylon Tea quickly became famous worldwide for its unique flavor, aroma, and high quality.\n\nOver generations, the tea industry has grown into a symbol of Sri Lankan culture and a major export product, offering varieties like Black, Green, White, and specialty blended teas.\n\nIshara Tea & Spices Center continues this proud heritage by delivering authentic Ceylon tea to visitors and tea lovers alike.`,
    galleryTitle: "Our Plantation Life",
    features: [
      { title: "100% Ceylon Tea",    desc: "Black, Green, White & Broken Tea selections" },
      { title: "Herbal Collection",  desc: "Natural wellness teas for health and relaxation" },
      { title: "Premium Spices",     desc: "Ceylon Cinnamon, Pepper, Cardamom, & more" },
      { title: "Tourist Trusted",    desc: "Fixed prices • English speaking • Gift packs" },
    ],
  },
  de: {
    brandName: "Ishara Tee & Gewürze",
    title: "Authentischer Ceylon Tee & Gewürze",
    desc: "Willkommen im Ishara Tee & Gewürzezentrum. Wir bieten Ihnen die feinste Auswahl an handverlesenem Ceylon-Tee und traditionellen sri-lankischen Gewürzen, direkt von lokalen Plantagen und Bauern bezogen.",
    exploreBtn: "Unser Erbe entdecken",
    heritage: "Seit Generationen ist Sri Lanka als Heimat des weltbesten Tees bekannt. Im Ishara Tee & Gewürzezentrum setzen wir diese Tradition mit Stolz fort und bieten Premiumprodukte mit herzlicher sri-lankischer Gastfreundschaft.",
    historyTitle: "Die Geschichte des Ceylon-Tees in Sri Lanka",
    historyDesc: `Sri Lanka, früher als Ceylon bekannt, hat eine lange Geschichte des Teeanbaus, die 1867 begann, als James Taylor die ersten Teepflanzen in den zentralen Hochländern pflanzte.\n\nCeylon-Tee wurde schnell weltweit für seinen einzigartigen Geschmack, sein Aroma und seine hohe Qualität berühmt.\n\nÜber Generationen hinweg ist die Teeindustrie zu einem Symbol der sri-lankischen Kultur und einem wichtigen Exportprodukt geworden, das Sorten wie Schwarz-, Grün-, Weiß- und Spezialmischungstees umfasst.\n\nIshara Tee & Gewürze setzt dieses stolze Erbe fort und liefert authentischen Ceylon-Tee an Besucher und Teeliebhaber gleichermaßen.`,
    galleryTitle: "Unser Plantagen-Leben",
    features: [
      { title: "100% Ceylon Tee",      desc: "Schwarz-, Grün-, Weiß- und gebrochener Tee" },
      { title: "Kräuterkollektion",     desc: "Natürliche Wellnesstees für Gesundheit und Entspannung" },
      { title: "Premium Gewürze",       desc: "Ceylon Zimt, Pfeffer, Kardamom und mehr" },
      { title: "Touristenvertrauen",    desc: "Festpreise • Englischsprachig • Geschenkkörbe" },
    ],
  },
  ru: {
    brandName: "Ishara Чай и Специи",
    title: "Настоящий цейлонский чай и специи",
    desc: "Добро пожаловать в центр Ishara Tea & Spices. Мы предлагаем лучший выбор отборного цейлонского чая и традиционных шри-ланкийских специй, поступающих напрямую от местных плантаций и фермеров.",
    exploreBtn: "Исследовать наследие",
    heritage: "На протяжении поколений Шри-Ланка известна как родина лучшего чая в мире. В центре Ishara мы с гордостью продолжаем эту традицию, предлагая премиальные продукты с тёплым шри-ланкийским гостеприимством.",
    historyTitle: "История цейлонского чая в Шри-Ланке",
    historyDesc: `Шри-Ланка, ранее известная как Цейлон, имеет богатую историю выращивания чая, начавшуюся в 1867 году, когда Джеймс Тейлор посадил первые чайные кусты в центральном нагорье.\n\nЦейлонский чай быстро прославился во всём мире своим уникальным вкусом, ароматом и высоким качеством.\n\nНа протяжении поколений чайная промышленность стала символом шри-ланкийской культуры и важным экспортным продуктом, предлагая такие сорта, как чёрный, зелёный, белый и специальные купажированные чаи.\n\nIshara Tea & Spices продолжает эту гордую традицию, доставляя настоящий цейлонский чай посетителям и любителям чая.`,
    galleryTitle: "Жизнь на плантации",
    features: [
      { title: "100% Цейлонский чай",  desc: "Чёрный, зелёный, белый и ломаный чай" },
      { title: "Травяная коллекция",   desc: "Натуральные велнес-чаи для здоровья и отдыха" },
      { title: "Премиум специи",       desc: "Цейлонская корица, перец, кардамон и другое" },
      { title: "Доверие туристов",     desc: "Фиксированные цены • Говорим по-английски • Подарочные наборы" },
    ],
  },
};

// ─── Hero media ───────────────────────────────────────────────────────────────
const heroMedia = [
  {
    type: "video",
    src: "https://res.cloudinary.com/dp1jwsapk/video/upload/q_auto,f_auto/v1777730496/C3067_ffeobb.mp4",
    poster: "https://res.cloudinary.com/dp1jwsapk/image/upload/w_800,q_30,f_auto/v1777731478/DSC08410_qmgcah.jpg"
  },
  { type: "image", src: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777731478/DSC08410_qmgcah.jpg") },
  { type: "image", src: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777731478/DSC08417_xq4tb3.jpg") },
  { type: "image", src: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777731476/DSC08425_dfnxkg.jpg") },
  { type: "image", src: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777731476/DSC08422_xhs0th.jpg") },
  { type: "image", src: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777731475/DSC08419_x1x2gg.jpg") },
  {
    type: "video",
    src: "https://res.cloudinary.com/dp1jwsapk/video/upload/q_auto,f_auto/v1777812596/C3022_bbmjxc.mp4",
    poster: "https://res.cloudinary.com/dp1jwsapk/image/upload/w_800,q_30,f_auto/v1777731476/DSC08422_xhs0th.jpg"
  },
];

// ─── Gallery ──────────────────────────────────────────────────────────────────
const galleryImages = [
  "https://res.cloudinary.com/dp1jwsapk/image/upload/v1777731478/DSC08410_qmgcah.jpg",
  "https://res.cloudinary.com/dp1jwsapk/image/upload/v1777731478/DSC08417_xq4tb3.jpg",
  "https://res.cloudinary.com/dp1jwsapk/image/upload/v1777731476/DSC08425_dfnxkg.jpg",
  "https://res.cloudinary.com/dp1jwsapk/image/upload/v1777731476/DSC08422_xhs0th.jpg",
  "https://res.cloudinary.com/dp1jwsapk/image/upload/v1777731475/DSC08419_x1x2gg.jpg",
  "https://res.cloudinary.com/dp1jwsapk/image/upload/v1777750948/DSC08295_ige8wt.jpg",
  "https://res.cloudinary.com/dp1jwsapk/image/upload/v1777750949/DSC08219_npsh1p.jpg",
  "https://res.cloudinary.com/dp1jwsapk/image/upload/v1777750950/DSC08222_icbovq.jpg",
  "https://res.cloudinary.com/dp1jwsapk/image/upload/v1777750950/DSC08227_vggqjo.jpg",
  "https://res.cloudinary.com/dp1jwsapk/image/upload/v1777744881/DSC08052_igwyhb.jpg",
].map(cdnThumb);

// ─── Lazy Image ───────────────────────────────────────────────────────────────
function LazyImage({ src, alt, className }) {
  const ref = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${className} bg-gray-100`}>
      {inView && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        />
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
function Home({ lang = "en" }) {
  const [currentMedia, setCurrentMedia] = useState(0);
  const [currentFeature, setCurrentFeature] = useState(0);
  const videoRef = useRef(null);

  const t = content[lang];
  const features = t.features;

  // Hero slideshow
  useEffect(() => {
    const current = heroMedia[currentMedia];
    if (current.type === "image") {
      const timer = setTimeout(() => setCurrentMedia((p) => (p + 1) % heroMedia.length), 6000);
      return () => clearTimeout(timer);
    }
  }, [currentMedia]);

  // Feature slider
  useEffect(() => {
    const timer = setInterval(() => setCurrentFeature((p) => (p + 1) % features.length), 4000);
    return () => clearInterval(timer);
  }, [features.length]);

  // Play video when active
  useEffect(() => {
    if (heroMedia[currentMedia].type === "video" && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [currentMedia]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fdfaf5]">

      {/* BACKGROUND — CSS-only keyframe blobs, GPU composited, zero JS overhead */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=40")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(2px)",
          }}
        />
        <div className="absolute rounded-full" style={{
          width:"60vw", height:"60vw",
          background:"rgba(27,67,50,0.06)", filter:"blur(80px)",
          willChange:"transform", animation:"homeBlob1 30s linear infinite",
        }} />
        <div className="absolute rounded-full" style={{
          width:"50vw", height:"50vw",
          background:"rgba(233,196,106,0.06)", filter:"blur(70px)",
          willChange:"transform", animation:"homeBlob2 35s linear infinite",
        }} />
        <style>{`
          @keyframes homeBlob1 {
            0%,100% { transform: translate(-10vw,-10vh); }
            50%      { transform: translate(30vw,40vh); }
          }
          @keyframes homeBlob2 {
            0%,100% { transform: translate(50vw,60vh); }
            50%      { transform: translate(10vw,10vh); }
          }
        `}</style>
      </div>

      <div className="relative z-10 w-full">

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <div
          className="relative w-full h-[95vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden cursor-pointer"
          onClick={() => setCurrentMedia((p) => (p + 1) % heroMedia.length)}
        >
          <AnimatePresence>
            {heroMedia.map((media, index) => {
              if (index !== currentMedia) return null;
              if (media.type === "video") {
                return (
                  <motion.video
                    key={`hero-video-${media.src}`}
                    ref={index === currentMedia ? videoRef : null}
                    muted
                    playsInline
                    preload="metadata"
                    poster={media.poster}
                    onEnded={() => setCurrentMedia((p) => (p + 1) % heroMedia.length)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 w-full h-full object-cover z-0"
                  >
                    <source src={media.src} type="video/mp4" />
                  </motion.video>
                );
              }
              return (
                <motion.img
                  key={`hero-img-${index}`}
                  src={media.src}
                  alt={`Hero ${index}`}
                  initial={{ opacity: 0, scale: 1 }}
                  animate={{ opacity: 1, scale: 1.05 }}
                  exit={{ opacity: 0 }}
                  transition={{ opacity: { duration: 1 }, scale: { duration: 6, ease: "linear" } }}
                  className="absolute inset-0 w-full h-full object-cover z-0"
                />
              );
            })}
          </AnimatePresence>

          <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10 max-w-5xl p-10 md:p-20"
          >
            <h1 className="text-6xl md:text-8xl old-english font-normal mb-6 text-white drop-shadow-xl">
              {t.brandName}
            </h1>
            <h2 className="text-2xl md:text-4xl font-medium mb-8 text-[#D4A373] tracking-wide uppercase drop-shadow-md">
              {t.title}
            </h2>
            <div className="w-24 h-1 bg-[#D4A373] mx-auto mb-8" />
            <p className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed text-white/90 mb-10 font-medium drop-shadow-md">
              {t.desc}
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
              }}
              className="bg-[#1B4332] text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition shadow-xl uppercase tracking-widest text-sm"
            >
              {t.exploreBtn}
            </button>
          </motion.div>

          {/* Slide dots */}
          <div className="absolute bottom-6 flex gap-2 z-10">
            {heroMedia.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrentMedia(i); }}
                className={`rounded-full transition-all duration-300 ${i === currentMedia ? "w-6 h-2 bg-[#D4A373]" : "w-2 h-2 bg-white/50"}`}
              />
            ))}
          </div>
        </div>

        {/* ── FEATURES SLIDER ──────────────────────────────────────────────── */}
        <div className="py-12 px-6 max-w-4xl mx-auto min-h-[250px] relative flex flex-col items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${lang}-${currentFeature}`}
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
          <div className="absolute bottom-4 flex gap-3">
            {features.map((_, idx) => (
              <div
                key={idx}
                onClick={() => setCurrentFeature(idx)}
                className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${idx === currentFeature ? "w-8 bg-[#D4A373]" : "w-2 bg-gray-300"}`}
              />
            ))}
          </div>
        </div>

        {/* ── HISTORY SECTION ──────────────────────────────────────────────── */}
        <div className="relative pt-2 pb-6 px-6 mb-2">
          <div className="max-w-7xl mx-auto p-10 md:p-16 relative overflow-hidden backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E9C46A]/5 rounded-full blur-[100px] -mr-32 -mt-32" />
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl text-[#1B4332] font-bold mb-10 premium-title">
                {t.historyTitle}
              </h2>
              <div className="w-20 h-1 bg-[#D4A373] mb-10" />
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed whitespace-pre-line">
                {t.historyDesc}
              </p>
              <p className="mt-12 text-[#1B4332]/70 font-medium italic">
                {t.heritage}
              </p>
            </motion.div>
          </div>
        </div>

        {/* ── GALLERY ──────────────────────────────────────────────────────── */}
        <div className="relative pt-4 pb-16 px-6 max-w-7xl mx-auto mb-20 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, ease: "easeOut" }}
              className="flex justify-center mb-4"
            >
              <img
                src="/logo.png"
                alt="Ishara Tea & Spices Logo"
                className="w-36 h-36 md:w-44 md:h-44 object-contain drop-shadow-xl"
              />
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#1B4332] premium-title">
              {t.galleryTitle}
            </h2>
            <div className="w-16 h-1 bg-[#D4A373] mx-auto mt-6" />
          </motion.div>

          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
            {galleryImages.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.4) }}
                className="break-inside-avoid overflow-hidden shadow-xl relative group cursor-pointer"
              >
                <LazyImage
                  src={src}
                  alt={`Plantation ${index + 1}`}
                  className="w-full"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-[#1B4332]/20 transition-all duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;