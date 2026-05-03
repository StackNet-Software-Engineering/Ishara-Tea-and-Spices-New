import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Cloudinary optimizer ─────────────────────────────────────────────────────
const cdn = (url, opts = "w_1200,q_auto,f_auto") => {
  if (!url || !url.includes("res.cloudinary.com")) return url;
  return url.replace("/upload/", `/upload/${opts}/`);
};

// ─── Hero media — same pattern as Home page ───────────────────────────────────
const heroMedia = [
  {
    type: "video",
    src: "https://res.cloudinary.com/dp1jwsapk/video/upload/q_auto,f_auto/v1777812566/C3014_cfyw6q.mp4",
    poster: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777812633/DSC08466_ux4ofo.jpg", "w_800,q_30,f_auto"),
  },
  { type: "image", src: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777812633/DSC08466_ux4ofo.jpg") },
  { type: "image", src: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777812641/DSC08395_mconh7.jpg") },
  { type: "image", src: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777812632/DSC08408_nbdegd.jpg") },
];

// ─── Shop image (left side) ───────────────────────────────────────────────────
const SHOP_IMAGE = cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777812629/DSC08390_jccv3b.jpg");

// ─── Trilingual content ───────────────────────────────────────────────────────
const content = {
  en: {
    visit: "Visit Us",
    getInTouch: "Get in Touch",
    desc: "Experience friendly service, fluent English communication, and a welcoming environment perfect for tourists and tea lovers alike. Drop by our center in beautiful Sri Lanka, or send us a message below.",
    name: "Your Name",
    email: "Your Email",
    msg: "Your Message",
    send: "Send Message",
    address: "Sri Lanka",
    phone: "+94 77 000 0000",
    emailAddr: "isharateashop@gmail.com",
  },
  de: {
    visit: "Besuchen Sie Uns",
    getInTouch: "Kontakt Aufnehmen",
    desc: "Erleben Sie freundlichen Service, fließende englische Kommunikation und eine einladende Umgebung. Besuchen Sie unser Zentrum in Sri Lanka oder senden Sie uns eine Nachricht.",
    name: "Ihr Name",
    email: "Ihre E-Mail",
    msg: "Ihre Nachricht",
    send: "Nachricht Senden",
    address: "Sri Lanka",
    phone: "+94 77 000 0000",
    emailAddr: "isharateashop@gmail.com",
  },
  ru: {
    visit: "Посетите нас",
    getInTouch: "Связаться с нами",
    desc: "Оцените дружелюбное обслуживание, свободное общение на английском языке и гостеприимную атмосферу. Заходите в наш центр на Шри-Ланке или отправьте нам сообщение ниже.",
    name: "Ваше имя",
    email: "Ваш Email",
    msg: "Ваше сообщение",
    send: "Отправить сообщение",
    address: "Шри-Ланка",
    phone: "+94 77 000 0000",
    emailAddr: "isharateashop@gmail.com",
  },
};

function Contact({ lang = "en" }) {
  const [currentMedia, setCurrentMedia] = useState(0);
  const videoRef = useRef(null);
  const t = content[lang] || content.en;

  // Auto-advance images every 6 s (video advances via onEnded)
  useEffect(() => {
    const current = heroMedia[currentMedia];
    if (current.type === "image") {
      const timer = setTimeout(
        () => setCurrentMedia((p) => (p + 1) % heroMedia.length),
        6000
      );
      return () => clearTimeout(timer);
    }
  }, [currentMedia]);

  // Play / restart video when it becomes active
  useEffect(() => {
    if (heroMedia[currentMedia].type === "video" && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [currentMedia]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fdfaf5]">

      {/* BACKGROUND — CSS-only keyframe blobs, same as Home.jsx */}
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
      <div
        className="relative w-full h-[95vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden cursor-pointer"
        onClick={() => setCurrentMedia((p) => (p + 1) % heroMedia.length)}
      >
        {/* Media slides */}
        <AnimatePresence>
          {heroMedia.map((media, index) => {
            if (index !== currentMedia) return null;

            if (media.type === "video") {
              return (
                <motion.video
                  key="contact-video"
                  ref={videoRef}
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
                key={`contact-img-${index}`}
                src={media.src}
                alt={`Contact hero ${index}`}
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1.05 }}
                exit={{ opacity: 0 }}
                transition={{
                  opacity: { duration: 1 },
                  scale: { duration: 6, ease: "linear" },
                }}
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
            );
          })}
        </AnimatePresence>

        {/* Black overlay — same as Home */}
        <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none" />

        {/* Hero text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl px-6"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-[#D4A373] uppercase text-xs md:text-sm font-bold mb-4 tracking-[0.3em]"
          >
            Ishara Tea & Spices
          </motion.p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl text-white premium-title font-bold drop-shadow-xl mb-6">
            {t.visit}
          </h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="w-24 h-1 bg-[#D4A373] mx-auto"
          />
        </motion.div>

        {/* Slide dots */}
        <div className="absolute bottom-6 flex gap-2 z-10">
          {heroMedia.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setCurrentMedia(i); }}
              className={`rounded-full transition-all duration-300 ${
                i === currentMedia ? "w-6 h-2 bg-[#D4A373]" : "w-2 h-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ── CONTACT CONTENT ──────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

          {/* Shop image — replaced with Cloudinary URL */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative group"
          >
            <div className="absolute inset-0 bg-[#D4A373]/20 translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6" />
            <img
              src={SHOP_IMAGE}
              alt="Ishara Tea Local Shop"
              className="relative w-full h-[500px] md:h-[700px] object-cover shadow-2xl z-10"
            />
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex flex-col"
          >
            <h2 className="text-4xl text-[#1B4332] premium-title font-bold mb-8">
              {t.getInTouch}
            </h2>
            <p className="text-gray-600 text-lg md:text-xl mb-12 leading-relaxed">
              {t.desc}
            </p>

            <div className="flex flex-col gap-6 mb-12 text-gray-800 text-lg">
              <p className="flex items-center gap-4">
                <span className="text-3xl text-[#1B4332]">📍</span> {t.address}
              </p>
              <p className="flex items-center gap-4">
                <span className="text-3xl text-[#1B4332]">📞</span> {t.phone}
              </p>
              <p className="flex items-center gap-4">
                <span className="text-3xl text-[#1B4332]">📧</span> {t.emailAddr}
              </p>
            </div>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <input
                className="w-full border-b-2 border-gray-300 bg-transparent px-2 py-4 focus:outline-none focus:border-[#1B4332] transition-colors text-lg"
                placeholder={t.name}
              />
              <input
                type="email"
                className="w-full border-b-2 border-gray-300 bg-transparent px-2 py-4 focus:outline-none focus:border-[#1B4332] transition-colors text-lg"
                placeholder={t.email}
              />
              <textarea
                className="w-full border-b-2 border-gray-300 bg-transparent px-2 py-4 focus:outline-none focus:border-[#1B4332] transition-colors text-lg resize-none min-h-[120px]"
                placeholder={t.msg}
              />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#1B4332] text-white px-10 py-5 text-lg rounded-full font-bold shadow-lg hover:shadow-2xl hover:bg-[#D4A373] transition-all duration-300"
              >
                {t.send}
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
      </div>
    </div>
  );
}

export default Contact;