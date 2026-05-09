import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cdnThumb = (url) => {
  if (!url || !url.includes("res.cloudinary.com")) return url;
  return url.replace("/upload/", "/upload/w_600,q_auto,f_auto/");
};

const cdnFull = (url) => {
  if (!url || !url.includes("res.cloudinary.com")) return url;
  return url.replace("/upload/", "/upload/w_1400,q_auto,f_auto/");
};

const content = {
  en: {
    title: "Our Gallery",
    subtitle: "Ishara Tea & Spices",
    desc: "Explore the beauty of our shop, premium products, and the stunning landscapes of Sri Lanka that inspire our heritage.",
    close: "Close",
  },
  de: {
    title: "Unsere Galerie",
    subtitle: "Ishara Tee & Gewürze",
    desc: "Erkunden Sie die Schönheit unseres Geschäfts, hochwertige Produkte und die wunderschönen Landschaften Sri Lankas.",
    close: "Schließen",
  },
  ru: {
    title: "Наша Галерея",
    subtitle: "Ishara Чай и Специи",
    desc: "Исследуйте красоту нашего магазина, премиальные продукты и потрясающие пейзажи Шри-Ланки.",
    close: "Закрыть",
  },
  zh: {
    title: "我们的画廊",
    subtitle: "Ishara 茶叶与香料",
    desc: "探索我们商店的美妙、优质产品和斯里兰卡的壮丽景观。",
    close: "关闭",
  },
};

const HERO_BANNER = "https://res.cloudinary.com/dp1jwsapk/image/upload/w_1400,q_auto,f_auto/v1777731476/DSC08425_dfnxkg.jpg";

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
];

function Gallery({ lang = "en" }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [copied, setCopied] = useState(false);
  const t = content[lang];

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const handleCopyLink = () => {
    if (selectedImageIndex !== null) {
      const imageUrl = cdnFull(galleryImages[selectedImageIndex]);
      navigator.clipboard.writeText(imageUrl).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fdfaf5]">

      {/* BACKGROUND BLOBS */}
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

        {/* ── HERO BANNER ── */}
        <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
          <img
            src={HERO_BANNER}
            alt="Ishara Tea & Spices Gallery"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center 55%", filter: "brightness(1.35) contrast(1.1)" }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(11,31,21,0.10) 0%, transparent 40%, rgba(11,31,21,0.40) 100%)" }} />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pb-10">
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              animate={{ opacity: 1, letterSpacing: "0.3em" }}
              transition={{ duration: 1, delay: 0.1 }}
              className="text-[#D4A373] uppercase text-xs md:text-sm font-bold mb-3 tracking-[0.3em]"
            >
              {t.subtitle}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white premium-title drop-shadow-xl mb-5 max-w-3xl leading-tight"
            >
              {t.title}
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="w-20 h-[2px] bg-[#D4A373] mx-auto mb-5"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="text-white/85 text-sm md:text-base max-w-lg leading-relaxed"
            >
              {t.desc}
            </motion.p>
          </div>
        </div>

        {/* ── GALLERY GRID ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative overflow-hidden group cursor-pointer h-[300px] sm:h-[350px] rounded-lg shadow-lg"
                onClick={() => setSelectedImageIndex(index)}
              >
                <img
                  src={cdnThumb(image)}
                  alt={`Ishara Tea & Spices ${index + 1}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ filter: "brightness(1.35) contrast(1.1)" }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

                {/* Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center">
                    <svg className="w-7 h-7 text-[#1B4332]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.894 2.553a.895.895 0 00-1.788 0l-.314 3.151a.895.895 0 01-.743.743l-3.151.315a.895.895 0 000 1.788l3.151.314a.895.895 0 01.743.743l.315 3.151a.895.895 0 001.788 0l.314-3.151a.895.895 0 01.743-.743l3.151-.315a.895.895 0 000-1.788l-3.151-.314a.895.895 0 01-.743-.743l-.315-3.151zm-2.854 5.175a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    </svg>
                  </div>
                </div>

                {/* Image number badge */}
                <div className="absolute top-3 right-3 bg-[#D4A373] text-white px-3 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {index + 1}/{galleryImages.length}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── LIGHTBOX MODAL ── */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
            onClick={() => setSelectedImageIndex(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-6 right-6 text-white hover:text-[#D4A373] transition-colors z-10"
              aria-label={t.close}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={cdnFull(galleryImages[selectedImageIndex])}
                alt={`Gallery full view ${selectedImageIndex + 1}`}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />

              {/* Navigation arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevImage();
                }}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 text-white hover:text-[#D4A373] transition-colors"
                aria-label="Previous image"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextImage();
                }}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 text-white hover:text-[#D4A373] transition-colors"
                aria-label="Next image"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {selectedImageIndex + 1} / {galleryImages.length}
              </div>

              {/* Copy link button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleCopyLink();
                }}
                className="absolute bottom-4 right-4 bg-[#D4A373] hover:bg-[#D4A373]/90 text-[#1B4332] px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2"
                title="Copy image link"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                {copied ? "Copied!" : "Copy Link"}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Gallery;
