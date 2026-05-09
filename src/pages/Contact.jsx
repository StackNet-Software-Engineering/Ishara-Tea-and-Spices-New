import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cdn = (url, opts = "w_1200,q_auto,f_auto") => {
  if (!url || !url.includes("res.cloudinary.com")) return url;
  return url.replace("/upload/", `/upload/${opts}/`);
};

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

const SHOP_IMAGE = cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777812629/DSC08390_jccv3b.jpg");

const content = {
  en: {
    brand: "Ishara Tea & Spices",
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
    findUs: "Find Us",
  },
  de: {
    brand: "Ishara Tee & Gewürze",
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
    findUs: "Finden Sie uns",
  },
  ru: {
    brand: "Ishara Чай и Специи",
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
    findUs: "Найти нас",
  },
  zh: {
    brand: "Ishara 茶叶与香料",
    visit: "欢迎访问",
    getInTouch: "联系我们",
    desc: "体验友好的服务、流利的英语交流和热情的环境，非常适合游客和茶叶爱好者。欢迎光临我们在美丽斯里兰卡的中心，或在下方给我们留言。",
    name: "您的姓名",
    email: "您的邮箱",
    msg: "您的留言",
    send: "发送留言",
    address: "斯里兰卡",
    phone: "+94 77 000 0000",
    emailAddr: "isharateashop@gmail.com",
    findUs: "找到我们",
  },
};

function Contact({ lang = "en" }) {
  const [currentMedia, setCurrentMedia] = useState(0);
  const videoRef = useRef(null);
  const t = content[lang] || content.en;

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

  useEffect(() => {
    if (heroMedia[currentMedia].type === "video" && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
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
                    key="contact-video"
                    ref={videoRef}
                    muted playsInline preload="metadata" poster={media.poster}
                    onEnded={() => setCurrentMedia((p) => (p + 1) % heroMedia.length)}
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
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
                  src={media.src} alt={`Contact hero ${index}`}
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

          {/* FIX: Added pt-16 sm:pt-20 so brand label + heading are not hidden behind navbar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10 max-w-4xl w-full px-4 sm:px-6 pt-16 sm:pt-20"
          >
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              animate={{ opacity: 1, letterSpacing: "0.3em" }}
              transition={{ duration: 1, delay: 0.1 }}
              className="text-[#D4A373] uppercase font-bold mb-3 sm:mb-4 tracking-[0.3em]"
              style={{ fontSize: "clamp(0.65rem, 2vw, 0.875rem)" }}
            >
              {t.brand}
            </motion.p>

            <h1
              className="text-white premium-title font-bold drop-shadow-xl mb-4 sm:mb-6"
              style={{ fontSize: "clamp(2.2rem, 8vw, 5rem)" }}
            >
              {t.visit}
            </h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="w-16 sm:w-24 h-1 bg-[#D4A373] mx-auto"
            />
          </motion.div>

          {/* Slide dots */}
          <div className="absolute bottom-5 sm:bottom-6 flex gap-2 z-10">
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

        {/* ── CONTACT CONTENT ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-10 sm:gap-16 lg:gap-24 items-start lg:items-center">

            {/* Shop image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 relative group"
            >
              <div className="absolute inset-0 bg-[#D4A373]/20 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 transition-transform duration-500 group-hover:translate-x-5 group-hover:translate-y-5 sm:group-hover:translate-x-6 sm:group-hover:translate-y-6" />
              <img
                src={SHOP_IMAGE}
                alt="Ishara Tea Local Shop"
                className="relative w-full object-cover shadow-2xl z-10"
                style={{ height: "clamp(280px, 50vw, 700px)" }}
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
              <h2
                className="text-[#1B4332] premium-title font-bold mb-5 sm:mb-8"
                style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)" }}
              >
                {t.getInTouch}
              </h2>
              <p
                className="text-gray-600 mb-8 sm:mb-12 leading-relaxed"
                style={{ fontSize: "clamp(0.9rem, 2vw, 1.2rem)" }}
              >
                {t.desc}
              </p>

              {/* Contact info */}
              <div className="flex flex-col gap-4 sm:gap-6 mb-8 sm:mb-12 text-gray-800">
                <p className="flex items-center gap-3 sm:gap-4"
                  style={{ fontSize: "clamp(0.9rem, 2vw, 1.1rem)" }}>
                  <span className="text-2xl sm:text-3xl text-[#1B4332] flex-shrink-0">📍</span>
                  {t.address}
                </p>
                <p className="flex items-center gap-3 sm:gap-4"
                  style={{ fontSize: "clamp(0.9rem, 2vw, 1.1rem)" }}>
                  <span className="text-2xl sm:text-3xl text-[#1B4332] flex-shrink-0">📞</span>
                  {t.phone}
                </p>
                <p className="flex items-center gap-3 sm:gap-4"
                  style={{ fontSize: "clamp(0.9rem, 2vw, 1.1rem)" }}>
                  <span className="text-2xl sm:text-3xl text-[#1B4332] flex-shrink-0">📧</span>
                  <span className="break-all">{t.emailAddr}</span>
                </p>
              </div>

              {/* Form */}
              <form className="space-y-5 sm:space-y-8" onSubmit={(e) => e.preventDefault()}>
                <input
                  className="w-full border-b-2 border-gray-300 bg-transparent px-2 py-3 sm:py-4 focus:outline-none focus:border-[#1B4332] transition-colors"
                  style={{ fontSize: "clamp(0.9rem, 2vw, 1.1rem)" }}
                  placeholder={t.name}
                />
                <input
                  type="email"
                  className="w-full border-b-2 border-gray-300 bg-transparent px-2 py-3 sm:py-4 focus:outline-none focus:border-[#1B4332] transition-colors"
                  style={{ fontSize: "clamp(0.9rem, 2vw, 1.1rem)" }}
                  placeholder={t.email}
                />
                <textarea
                  className="w-full border-b-2 border-gray-300 bg-transparent px-2 py-3 sm:py-4 focus:outline-none focus:border-[#1B4332] transition-colors resize-none min-h-[100px] sm:min-h-[120px]"
                  style={{ fontSize: "clamp(0.9rem, 2vw, 1.1rem)" }}
                  placeholder={t.msg}
                />

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-[#1B4332] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold shadow-lg hover:shadow-2xl hover:bg-[#D4A373] transition-all duration-300 uppercase tracking-widest"
                  style={{ fontSize: "clamp(0.8rem, 1.5vw, 1rem)" }}
                >
                  {t.send}
                </motion.button>
              </form>
            </motion.div>

          </div>
        </div>

        {/* ── MAP SECTION ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <h2
              className="text-[#1B4332] premium-title font-bold mb-5 sm:mb-8 text-center"
              style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)" }}
            >
              {t.findUs}
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-[#D4A373] mx-auto mb-10 sm:mb-12" />
            
            <div className="w-full h-[350px] sm:h-[450px] lg:h-[550px] rounded-2xl overflow-hidden relative border-4 border-white/60 backdrop-blur-sm group">
              <div className="absolute inset-0 bg-[#D4A373]/10 pointer-events-none z-10 group-hover:bg-transparent transition-colors duration-500" />
              <iframe
                title="Map showing Ishara Tea & Spice location in Sri Lanka"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.619403757814!2d79.9895317765503!3d6.442891924091613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae22f132f0ab959%3A0x6c50b5d7f10ec2a9!2sIshara%20Tea%20%26%20Spice!5e0!3m2!1sen!2slk!4v1778315970245!5m2!1sen!2slk"
                className="absolute inset-0 w-full h-full grayscale-[20%] contrast-125 group-hover:grayscale-0 transition-all duration-500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}

export default Contact;