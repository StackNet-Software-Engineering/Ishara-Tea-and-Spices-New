import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const content = {
  en: {
    brandName: "Ishara Tea & Spices",
    search: "Search ...",
    close: "Close",
    menu: "Menu",
    getInTouch: "Get in Touch",
    country: "Sri Lanka",
    email: "isharateashop@gmail.com",
  },
  de: {
    brandName: "Ishara Tee & Gewürze",
    search: "Suchen ...",
    close: "Schließen",
    menu: "Menü",
    getInTouch: "Kontakt",
    country: "Sri Lanka",
    email: "isharateashop@gmail.com",
  },
  ru: {
    brandName: "Ishara Чай и Специи",
    search: "Поиск ...",
    close: "Закрыть",
    menu: "Меню",
    getInTouch: "Связаться",
    country: "Шри-Ланка",
    email: "isharateashop@gmail.com",
  },
};

const navLinks = [
  { en: "Home",     de: "Startseite", ru: "Главная",  path: "/" },
  { en: "Products", de: "Produkte",   ru: "Товары",   path: "/products" },
  { en: "Contact",  de: "Kontakt",    ru: "Контакт",  path: "/contact" },
];

const languages = ["en", "de", "ru"];

function Navbar({ lang, setLang }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const t = content[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* ── NAVBAR BAR ── */}
      <nav
        className={`fixed w-full z-50 transition-all duration-400 ${
          scrolled
            ? "bg-[#1B4332]/95 backdrop-blur-md shadow-lg py-3"
            : "bg-[#1B4332]/40 backdrop-blur-sm py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

          {/* LEFT — Language switcher + Search */}
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-3 text-white/80 font-medium text-xs tracking-widest uppercase">
              {languages.map((l, idx) => (
                <React.Fragment key={l}>
                  <button
                    onClick={() => setLang(l)}
                    className={`transition-colors duration-200 ${
                      lang === l ? "text-[#D4A373] font-bold" : "hover:text-white"
                    }`}
                  >
                    {l}
                  </button>
                  {idx < languages.length - 1 && (
                    <span className="text-white/30">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Search bar */}
            <div className="hidden md:flex items-center bg-white/10 border border-white/20 rounded-full px-4 py-1.5 gap-2">
              <svg className="w-3.5 h-3.5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
              </svg>
              <input
                type="text"
                placeholder={t.search}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-white placeholder-white/50 text-xs w-24 focus:w-36 transition-all duration-300 outline-none"
              />
            </div>
          </div>

          {/* RIGHT — Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 flex items-center gap-3 group focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className="hidden md:block text-white/70 text-xs tracking-[0.2em] uppercase font-medium group-hover:text-white transition-colors duration-200">
              {isOpen ? t.close : t.menu}
            </span>
            <div className="flex flex-col justify-center items-end gap-[5px] w-7">
              <span className={`block h-[1.5px] bg-white transition-all duration-300 ${isOpen ? "w-7 rotate-45 translate-y-[6.5px]" : "w-7"}`} />
              <span className={`block h-[1.5px] bg-[#D4A373] transition-all duration-300 ${isOpen ? "w-0 opacity-0" : "w-5"}`} />
              <span className={`block h-[1.5px] bg-white transition-all duration-300 ${isOpen ? "w-7 -rotate-45 -translate-y-[6.5px]" : "w-7"}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* ── SIDE DRAWER MENU ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-[85vw] sm:w-[60vw] md:w-[35vw] lg:w-[28vw] bg-[#1B4332] z-50 flex flex-col shadow-2xl border-l border-[#D4A373]/20"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-8 pt-8 pb-6 border-b border-white/10">
                <img src="/logo.png" alt="Ishara Logo" className="w-10 h-10 object-contain opacity-90" />
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-200"
                >
                  <span className="text-xs tracking-[0.2em] uppercase font-medium">{t.close}</span>
                  <div className="relative w-5 h-5">
                    <span className="absolute top-1/2 left-0 w-5 h-[1.5px] bg-white rotate-45 -translate-y-1/2" />
                    <span className="absolute top-1/2 left-0 w-5 h-[1.5px] bg-white -rotate-45 -translate-y-1/2" />
                  </div>
                </button>
              </div>

              {/* Nav links */}
              <div className="flex flex-col px-8 pt-10 gap-2 flex-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.en}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ delay: i * 0.08 + 0.1, duration: 0.4, ease: "easeOut" }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between py-4 border-b border-white/10 text-white/80 hover:text-[#D4A373] transition-colors duration-300 group"
                    >
                      <span className="text-base font-medium uppercase tracking-[0.15em]">
                        {link[lang]}
                      </span>
                      <span className="text-[#D4A373] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">→</span>
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "50px" }}
                  transition={{ delay: 0.45, duration: 0.5 }}
                  className="h-[1px] bg-[#D4A373] mt-6 mb-6"
                />

                {/* Contact info */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="space-y-2"
                >
                  <p className="text-[#D4A373] text-xs tracking-[0.2em] uppercase font-semibold mb-3">{t.getInTouch}</p>
                  <p className="text-white/50 text-sm font-light">{t.country}</p>
                  <p className="text-white/50 text-sm font-light">{t.email}</p>
                </motion.div>

                {/* Language selector — mobile only */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.55, duration: 0.4 }}
                  className="md:hidden flex items-center gap-4 text-white/60 text-sm tracking-widest uppercase mt-8"
                >
                  {languages.map((l, idx) => (
                    <React.Fragment key={l}>
                      <button
                        onClick={() => { setLang(l); setIsOpen(false); }}
                        className={lang === l ? "text-[#D4A373] font-bold" : "hover:text-white"}
                      >
                        {l}
                      </button>
                      {idx < languages.length - 1 && <span className="text-white/30">|</span>}
                    </React.Fragment>
                  ))}
                </motion.div>
              </div>

              {/* Footer logo box */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="px-8 pb-8 pt-4 border-t border-white/10"
              >
                <div className="flex items-center gap-3">
                  <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain opacity-70" />
                  <p className="text-white/40 text-xs tracking-[0.2em] uppercase">{t.brandName}</p>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;