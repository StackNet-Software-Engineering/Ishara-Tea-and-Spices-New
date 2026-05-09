import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cdn = (url, opts = "w_1200,q_auto,f_auto") => {
  if (!url || !url.includes("res.cloudinary.com")) return url;
  return url.replace("/upload/", `/upload/${opts}/`);
};
const cdnThumb = (url) => cdn(url, "w_600,q_auto,f_auto");

const content = {
  en: {
    brandName: "Ishara Tea & Spices",
    title: "Authentic Ceylon Tea & Spices",
    desc: "Welcome to Ishara Tea & Spices Center. We bring you the finest selection of handpicked Ceylon tea and traditional Sri Lankan spices. Our products are sourced directly from local plantations and farmers, ensuring freshness, quality, and authentic island flavor.",
    exploreBtn: "Explore our Heritage",
    heritage: "For generations, Sri Lanka has been known as the home of the world's finest tea. At Ishara Tea & Spices Center, we proudly continue this tradition by offering premium products with warm Sri Lankan hospitality.",
    historyTitle: "The History of Sri Lanka Ceylon Tea",
    historyDesc: `Sri Lanka, formerly known as Ceylon, has a rich history of tea cultivation dating back to 1867 when James Taylor planted the first tea seedlings in the central highlands.\n\nCeylon Tea quickly became famous worldwide for its unique flavor, aroma, and high quality.\n\nOver generations, the tea industry has grown into a symbol of Sri Lankan culture and a major export product, offering varieties like Black, Green, White, and specialty blended teas.\n\nIshara Tea & Spices Center continues this proud heritage by delivering authentic Ceylon tea to visitors and tea lovers alike.`,
    galleryTitle: "Ishara Tea & Spices",
    features: [
      { title: "100% Ceylon Tea", desc: "Black, Green, White & Broken Tea selections" },
      { title: "Herbal Collection", desc: "Natural wellness teas for health and relaxation" },
      { title: "Premium Spices", desc: "Ceylon Cinnamon, Pepper, Cardamom, & more" },
      { title: "Tourist Trusted", desc: "Fixed prices • English speaking • Gift packs" },
    ],
  },
  de: {
    brandName: "Ishara Tee & Gewürze",
    title: "Authentischer Ceylon Tee & Gewürze",
    desc: "Willkommen im Ishara Tee & Gewürzezentrum. Wir bieten Ihnen die feinste Auswahl an handverlesenem Ceylon-Tee und traditionellen sri-lankischen Gewürzen, direkt von lokalen Plantagen und Bauern bezogen.",
    exploreBtn: "Unser Erbe entdecken",
    heritage: "Seit Generationen ist Sri Lanka als Heimat des weltbesten Tees bekannt. Im Ishara Tee & Gewürzezentrum setzen wir diese Tradition mit Stolz fort und bieten Premiumprodukte mit herzlicher sri-lankischer Gastfreundschaft.",
    historyTitle: "Die Geschichte des Ceylon-Tees in Sri Lanka",
    historyDesc: `Sri Lanka, früher als Ceylon bekannt, hat eine lange Geschichte des Teeanbaus, die 1867 begann, als James Taylor die ersten Teepflanzen in den zentralen Hochländern pflanzte.\n\nCeylon-Tee wurde schnell weltweit für seinen einzigartigen Geschmack, sein Aroma und seine hohe Qualität berühmt.\n\nÜber Generationen hinweg ist die Teeindustrie zu einem Symbol der sri-lankischen Kultur und einem wichtigen Exportprodukt geworden.\n\nIshara Tee & Gewürze setzt dieses stolze Erbe fort und liefert authentischen Ceylon-Tee an Besucher und Teeliebhaber gleichermaßen.`,
    galleryTitle: "Ishara Tee & Gewürze",
    features: [
      { title: "100% Ceylon Tee", desc: "Schwarz-, Grün-, Weiß- und gebrochener Tee" },
      { title: "Kräuterkollektion", desc: "Natürliche Wellnesstees für Gesundheit und Entspannung" },
      { title: "Premium Gewürze", desc: "Ceylon Zimt, Pfeffer, Kardamom und mehr" },
      { title: "Touristenvertrauen", desc: "Festpreise • Englischsprachig • Geschenkkörbe" },
    ],
  },
  ru: {
    brandName: "Ishara Чай и Специи",
    title: "Настоящий цейлонский чай и специи",
    desc: "Добро пожаловать в центр Ishara Tea & Spices. Мы предлагаем лучший выбор отборного цейлонского чая и традиционных шри-ланкийских специй, поступающих напрямую от местных плантаций и фермеров.",
    exploreBtn: "Исследовать наследие",
    heritage: "На протяжении поколений Шри-Ланка известна как родина лучшего чая в мире. В центре Ishara мы с гордостью продолжаем эту традицию, предлагая премиальные продукты с тёплым шри-ланкийским гостеприимством.",
    historyTitle: "История цейлонского чая в Шри-Ланке",
    historyDesc: `Шри-Ланка, ранее известная как Цейлон, имеет богатую историю выращивания чая, начавшуюся в 1867 году, когда Джеймс Тейлор посадил первые чайные кусты в центральном нагорье.\n\nЦейлонский чай быстро прославился во всём мире своим уникальным вкусом, ароматом и высоким качеством.\n\nНа протяжении поколений чайная промышленность стала символом шри-ланкийской культуры и важным экспортным продуктом.\n\nIshara Tea & Spices продолжает эту гордую традицию, доставляя настоящий цейлонский чай посетителям и любителям чая.`,
    galleryTitle: "Ishara Чай и Специи",
    features: [
      { title: "100% Цейлонский чай", desc: "Чёрный, зелёный, белый и ломаный чай" },
      { title: "Травяная коллекция", desc: "Натуральные велнес-чаи для здоровья и отдыха" },
      { title: "Премиум специи", desc: "Цейлонская корица, перец, кардамон и другое" },
      { title: "Доверие туристов", desc: "Фиксированные цены • Говорим по-английски • Подарочные наборы" },
    ],
  },
  zh: {
    brandName: "Ishara 茶叶与香料",
    title: "正宗的锡兰茶与香料",
    desc: "欢迎来到 Ishara 茶叶与香料中心。我们为您带来最精选的手工采摘锡兰茶和传统的斯里兰卡香料。我们的产品直接来自当地种植园和农民，确保新鲜、高品质和正宗的海岛风味。",
    exploreBtn: "探索我们的传承",
    heritage: "世世代代以来，斯里兰卡一直被誉为世界上最好茶叶的故乡。在 Ishara 茶叶与香料中心，我们以热情的斯里兰卡待客之道提供优质产品，自豪地延续这一传统。",
    historyTitle: "斯里兰卡锡兰茶的历史",
    historyDesc: "斯里兰卡（原名锡兰）拥有悠久的茶叶种植历史，可追溯至 1867 年詹姆斯·泰勒在中部高地种下第一批茶苗。\n\n锡兰茶很快以其独特的风味、香气和高品质闻名于世。\n\n经过几代人的努力，茶产业已发展成为斯里兰卡文化的象征和主要出口产品。\n\nIshara 茶叶与香料中心继续传承这一引以为豪的传统，向游客和茶叶爱好者提供正宗的锡兰茶。",
    galleryTitle: "Ishara 茶叶与香料",
    features: [
      { title: "100% 锡兰茶", desc: "红茶、绿茶、白茶及碎茶系列" },
      { title: "草本系列", desc: "有益健康和放松的天然养生茶" },
      { title: "优质香料", desc: "锡兰肉桂、胡椒、小豆蔻等" },
      { title: "游客信赖", desc: "明码标价 • 英语服务 • 礼品套装" },
    ],
  },
};

const heroMedia = [
  {
    type: "video",
    src: "https://res.cloudinary.com/dp1jwsapk/video/upload/q_auto,f_auto/v1777730496/C3067_ffeobb.mp4",
    poster: "https://res.cloudinary.com/dp1jwsapk/image/upload/w_800,q_30,f_auto/v1777731478/DSC08410_qmgcah.jpg"
  },
  { type: "image", src: cdn("https://res.cloudinary.com/dwf8ifbzs/image/upload/v1778322814/d74e872a-3c96-4858-b64f-91b1a5a97d98.png") },
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

function Home({ lang = "en" }) {
  const [currentMedia, setCurrentMedia] = useState(0);
  const [currentFeature, setCurrentFeature] = useState(0);
  const videoRef = useRef(null);

  const t = content[lang];
  const features = t.features;

  useEffect(() => {
    const current = heroMedia[currentMedia];
    if (current.type === "image") {
      const timer = setTimeout(() => setCurrentMedia((p) => (p + 1) % heroMedia.length), 6000);
      return () => clearTimeout(timer);
    }
  }, [currentMedia]);

  useEffect(() => {
    const timer = setInterval(() => setCurrentFeature((p) => (p + 1) % features.length), 4000);
    return () => clearInterval(timer);
  }, [features.length]);

  useEffect(() => {
    if (heroMedia[currentMedia].type === "video" && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => { });
    }
  }, [currentMedia]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fdfaf5]">

      {/* BACKGROUND blobs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=40")`,
          backgroundSize: "cover", backgroundPosition: "center", filter: "blur(2px)",
        }} />
        <div className="absolute rounded-full" style={{
          width: "60vw", height: "60vw",
          background: "rgba(27,67,50,0.06)", filter: "blur(80px)",
          willChange: "transform", animation: "homeBlob1 30s linear infinite",
        }} />
        <div className="absolute rounded-full" style={{
          width: "50vw", height: "50vw",
          background: "rgba(233,196,106,0.06)", filter: "blur(70px)",
          willChange: "transform", animation: "homeBlob2 35s linear infinite",
        }} />
        <style>{`
          @keyframes homeBlob1 { 0%,100%{transform:translate(-10vw,-10vh)} 50%{transform:translate(30vw,40vh)} }
          @keyframes homeBlob2 { 0%,100%{transform:translate(50vw,60vh)} 50%{transform:translate(10vw,10vh)} }
        `}</style>
      </div>

      <div className="relative z-10 w-full">

        {/* ── HERO ── */}
        <div
          className="relative w-full h-[100svh] flex flex-col items-center justify-center text-center px-4 sm:px-6 overflow-hidden cursor-pointer"
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
                    muted playsInline preload="metadata" poster={media.poster}
                    onEnded={() => setCurrentMedia((p) => (p + 1) % heroMedia.length)}
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    style={{ filter: "brightness(1.35) contrast(1.1)" }}
                  >
                    <source src={media.src} type="video/mp4" />
                  </motion.video>
                );
              }
              return (
                <motion.img
                  key={`hero-img-${index}`}
                  src={media.src} alt={`Hero ${index}`}
                  initial={{ opacity: 0, scale: 1 }}
                  animate={{ opacity: 1, scale: 1.05 }}
                  exit={{ opacity: 0 }}
                  transition={{ opacity: { duration: 1 }, scale: { duration: 6, ease: "linear" } }}
                  className="absolute inset-0 w-full h-full object-cover z-0"
                  style={{ filter: "brightness(1.35) contrast(1.1)" }}
                />
              );
            })}
          </AnimatePresence>

          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              background: "linear-gradient(to top, rgba(11,31,21,0.35) 0%, rgba(27,67,50,0.15) 40%, rgba(0,0,0,0.05) 100%)"
            }}
          />

          {/* FIX: Added pt-16 sm:pt-20 to push content below the navbar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10 max-w-5xl w-full px-4 pt-16 sm:pt-20 pb-10 sm:px-8 sm:pb-14 md:px-16 md:pb-20"
          >
            {/* Brand name — scales down gracefully on mobile */}
            <h1 className="old-english font-normal text-white drop-shadow-xl mb-4 sm:mb-6"
              style={{ fontSize: "clamp(2rem, 8vw, 5rem)", lineHeight: 1.15 }}>
              {t.brandName}
            </h1>
            <h2 className="font-medium text-[#D4A373] tracking-wide uppercase drop-shadow-md mb-6 sm:mb-8"
              style={{ fontSize: "clamp(0.9rem, 3vw, 2rem)" }}>
              {t.title}
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-[#D4A373] mx-auto mb-6 sm:mb-8" />
            <p className="max-w-2xl mx-auto leading-relaxed text-white/90 mb-8 sm:mb-10 font-medium drop-shadow-md"
              style={{ fontSize: "clamp(0.85rem, 2.2vw, 1.2rem)" }}>
              {t.desc}
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
              }}
              className="bg-[#1B4332] text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full font-bold hover:scale-105 transition shadow-xl uppercase tracking-widest text-xs sm:text-sm"
            >
              {t.exploreBtn}
            </button>
          </motion.div>

          {/* Slide dots */}
          <div className="absolute bottom-5 sm:bottom-6 flex gap-2 z-10">
            {heroMedia.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrentMedia(i); }}
                className={`rounded-full transition-all duration-300 ${i === currentMedia ? "w-6 h-2 bg-[#D4A373]" : "w-2 h-2 bg-white/50"}`}
              />
            ))}
          </div>
        </div>

        {/* ── FEATURES SLIDER ── */}
        <div className="py-10 sm:py-12 px-4 sm:px-6 max-w-4xl mx-auto min-h-[220px] sm:min-h-[250px] relative flex flex-col items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${lang}-${currentFeature}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute w-full px-4 sm:px-8 flex flex-col items-center text-center"
            >
              <h3 className="font-bold text-[#1B4332] mb-4 sm:mb-6 premium-title"
                style={{ fontSize: "clamp(1.5rem, 5vw, 3rem)" }}>
                {features[currentFeature].title}
              </h3>
              <p className="text-gray-700 font-medium leading-relaxed"
                style={{ fontSize: "clamp(0.95rem, 2.5vw, 1.5rem)" }}>
                {features[currentFeature].desc}
              </p>
            </motion.div>
          </AnimatePresence>
          <div className="absolute bottom-3 sm:bottom-4 flex gap-3">
            {features.map((_, idx) => (
              <div
                key={idx}
                onClick={() => setCurrentFeature(idx)}
                className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${idx === currentFeature ? "w-8 bg-[#D4A373]" : "w-2 bg-gray-300"}`}
              />
            ))}
          </div>
        </div>

        {/* ── HISTORY SECTION ── */}
        <div className="relative pt-2 pb-6 px-4 sm:px-6 mb-2">
          <div className="max-w-7xl mx-auto p-6 sm:p-10 md:p-16 relative overflow-hidden backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E9C46A]/5 rounded-full blur-[100px] -mr-32 -mt-32" />
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[#1B4332] font-bold mb-6 sm:mb-10 premium-title"
                style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}>
                {t.historyTitle}
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-[#D4A373] mb-6 sm:mb-10" />
              <p className="text-gray-700 leading-relaxed whitespace-pre-line"
                style={{ fontSize: "clamp(0.9rem, 2vw, 1.2rem)" }}>
                {t.historyDesc}
              </p>
              <p className="mt-8 sm:mt-12 text-[#1B4332]/70 font-medium italic"
                style={{ fontSize: "clamp(0.85rem, 1.8vw, 1.1rem)" }}>
                {t.heritage}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 sm:mt-16 w-full max-w-5xl mx-auto overflow-hidden relative group bg-[#1B4332]/10"
            >
              <video
                className="w-full h-auto max-h-[70vh] object-cover"
                autoPlay
                loop
                muted
                playsInline
                src="https://res.cloudinary.com/dwf8ifbzs/video/upload/v1778326124/C3060_1_uaykcq.mp4"
                style={{ filter: "brightness(1.1) contrast(1.05)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/30 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          </div>
        </div>

        {/* ── GALLERY ── */}
        <div className="relative pt-4 pb-12 sm:pb-16 px-4 sm:px-6 max-w-7xl mx-auto mb-10 sm:mb-20 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
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
                className="w-24 h-24 sm:w-36 sm:h-36 md:w-44 md:h-44 object-contain drop-shadow-xl"
              />
            </motion.div>

            <h2 className="font-bold text-[#1B4332] premium-title"
              style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}>
              {t.galleryTitle}
            </h2>
            <div className="w-12 sm:w-16 h-1 bg-[#D4A373] mx-auto mt-4 sm:mt-6" />
          </motion.div>

          {/* VIDEO BELOW TOPIC */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-5xl mx-auto overflow-hidden relative group bg-[#1B4332]/10 mb-12 sm:mb-16"
          >
            <video
              className="w-full h-auto max-h-[70vh] object-cover"
              autoPlay
              loop
              muted
              playsInline
              src="https://res.cloudinary.com/dwf8ifbzs/video/upload/v1778324897/C3060_uwkrmy.mp4"
              style={{ filter: "brightness(1.1) contrast(1.05)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/30 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </motion.div>

          {/* Responsive gallery: 1 col mobile, 2 col tablet, 3 col desktop */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 sm:gap-4 md:gap-6 space-y-3 sm:space-y-4 md:space-y-6">
            {galleryImages.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "0px 0px -80px 0px" }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.4) }}
                className="break-inside-avoid overflow-hidden shadow-lg sm:shadow-xl relative group cursor-pointer rounded-sm"
              >
                <LazyImage src={src} alt={`Plantation ${index + 1}`} className="w-full" />
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