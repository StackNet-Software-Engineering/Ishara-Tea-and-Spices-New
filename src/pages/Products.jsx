import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { categories } from "../data/products";

const ITEMS_PER_PAGE = 8;

const HERO_BANNER =
  "https://res.cloudinary.com/dp1jwsapk/image/upload/w_1400,q_auto,f_auto/v1777731476/DSC08425_dfnxkg.jpg";

// ─── i18n ────────────────────────────────────────────────────────────────────

const content = {
  en: {
    subtitle: "Discover Our Collection",
    title: "Ceylon Tea, Spices & Herbal Products",
    desc: "Authentic Sri Lankan tea, premium spices and herbal wellness products — sourced directly from local plantations.",
    showing: "Showing",
    of: "of",
    products: "products",
    prev: "← Prev",
    next: "Next →",
    viewDetails: "View Details →",
    allTeas: "All Teas",
  },
  de: {
    subtitle: "Entdecken Sie unsere Kollektion",
    title: "Ceylon Tee, Gewürze & Kräuterprodukte",
    desc: "Authentischer srilankischer Tee, hochwertige Gewürze und Kräuter-Wellnessprodukte — direkt von lokalen Plantagen.",
    showing: "Zeige",
    of: "von",
    products: "Produkte",
    prev: "← Zurück",
    next: "Weiter →",
    viewDetails: "Details ansehen →",
    allTeas: "Alle Tees",
  },
  ru: {
    subtitle: "Откройте нашу коллекцию",
    title: "Цейлонский чай, специи и травяные продукты",
    desc: "Настоящий шри-ланкийский чай, специи и травяные продукты — напрямую от местных плантаций.",
    showing: "Показано",
    of: "из",
    products: "товаров",
    prev: "← Назад",
    next: "Далее →",
    viewDetails: "Подробнее →",
    allTeas: "Все чаи",
  },
};

const categoryTitles = {
  tea:    { en: "Ceylon Tea",          de: "Ceylon Tee",              ru: "Цейлонский чай" },
  spices: { en: "Sri Lankan Spices",   de: "Sri-lankische Gewürze",   ru: "Шри-ланкийские специи" },
  herbal: { en: "Herbal",              de: "Kräuter",                 ru: "Травяные" },
  other:  { en: "Other Products",      de: "Andere Produkte",         ru: "Другие товары" },
};

// Sub-category labels translated
const subCategoryTitles = {
  "flavoured-black":  { en: "Flavoured Black",    de: "Schwarztee Aromen",   ru: "Чёрный ароматизированный" },
  "flavoured-green":  { en: "Flavoured Green",    de: "Grüntee Aromen",      ru: "Зелёный ароматизированный" },
  "pure-green":       { en: "Pure Green",         de: "Reiner Grüntee",      ru: "Чистый зелёный" },
  "graded-black":     { en: "Graded Black",       de: "Klassifizierter Schwarztee", ru: "Сортовой чёрный" },
  "specialty-rare":   { en: "Specialty & Rare",   de: "Spezialitäten",       ru: "Редкие & Специальные" },
  "herbal-wellness":  { en: "Herbal & Wellness",  de: "Kräuter & Wellness",  ru: "Травяные & Велнес" },
};

const productNames = {
  "ceylon-tea-1":  { en: "Black Tea Mix Fruit",       de: "Schwarztee Gemischte Früchte",       ru: "Чёрный чай Миксфрукты" },
  "ceylon-tea-2":  { en: "Lotus Flavour Tea",          de: "Lotus Geschmack Tee",                ru: "Чай со вкусом лотоса" },
  "ceylon-tea-3":  { en: "Nuwaraeliya High Grown Tea", de: "Nuwaraeliya Hochland-Tee",           ru: "Чай Нувараэлия Горный" },
  "ceylon-tea-4":  { en: "Vanilla Tea",                de: "Vanille Tee",                        ru: "Ванильный чай" },
  "ceylon-tea-5":  { en: "Earl Grey",                  de: "Earl Grey",                          ru: "Эрл Грей" },
  "ceylon-tea-6":  { en: "Lemon Grass",                de: "Zitronengras",                       ru: "Лемонграсс" },
  "ceylon-tea-7":  { en: "Green Tea Soursop",          de: "Grüner Tee Soursop",                 ru: "Зелёный чай Саусеп" },
  "ceylon-tea-8":  { en: "Mango Flavour",              de: "Mango Geschmack",                    ru: "Манговый вкус" },
  "ceylon-tea-9":  { en: "Black Tea Pineapple",        de: "Schwarztee Ananas",                  ru: "Чёрный чай Ананас" },
  "ceylon-tea-10": { en: "Black Tea Lotus",            de: "Schwarztee Lotus",                   ru: "Чёрный чай Лотос" },
  "ceylon-tea-11": { en: "Vanilla Flavour",            de: "Vanille Geschmack",                  ru: "Ванильный вкус" },
  "ceylon-tea-12": { en: "Banana Flavour",             de: "Bananen Geschmack",                  ru: "Банановый вкус" },
  "ceylon-tea-13": { en: "Black Tea Rose",             de: "Schwarztee Rose",                    ru: "Чёрный чай Роза" },
  "ceylon-tea-14": { en: "Black Tea Jasmine",          de: "Schwarztee Jasmin",                  ru: "Чёрный чай Жасмин" },
  "ceylon-tea-15": { en: "Chai Masala",                de: "Chai Masala",                        ru: "Чай Масала" },
  "ceylon-tea-16": { en: "Passion Fruit",              de: "Passionsfrucht",                     ru: "Маракуйя" },
  "ceylon-tea-17": { en: "Green Tea Mix Fruit",        de: "Grüner Tee Gemischte Früchte",       ru: "Зелёный чай Миксфрукты" },
  "ceylon-tea-18": { en: "Black Tea Mint",             de: "Schwarztee Minze",                   ru: "Чёрный чай Мята" },
  "ceylon-tea-19": { en: "Ginger Flavour",             de: "Ingwer Geschmack",                   ru: "Имбирный вкус" },
  "ceylon-tea-20": { en: "Black Tea 1001 Night",       de: "Schwarztee 1001 Nacht",              ru: "Чёрный чай 1001 ночь" },
  "ceylon-tea-21": { en: "Green Tea",                  de: "Grüner Tee",                         ru: "Зелёный чай" },
  "ceylon-tea-22": { en: "PEKOE-1",                    de: "PEKOE-1",                            ru: "ПЕКО-1" },
  "ceylon-tea-23": { en: "Black Tea FFEX-SP1",         de: "Schwarztee FFEX-SP1",                ru: "Чёрный чай FFEX-SP1" },
  "ceylon-tea-24": { en: "Black Tea BOP",              de: "Schwarztee BOP",                     ru: "Чёрный чай BOP" },
  "ceylon-tea-25": { en: "Black Tea Pekoe",            de: "Schwarztee Pekoe",                   ru: "Чёрный чай Пеко" },
  "ceylon-tea-26": { en: "Black Tea OP",               de: "Schwarztee OP",                      ru: "Чёрный чай OP" },
  "ceylon-tea-27": { en: "Golden Tips Tea",            de: "Golden Tips Tee",                    ru: "Чай Золотые типсы" },
  "ceylon-tea-28": { en: "BOP",                        de: "BOP",                                ru: "BOP" },
  "ceylon-tea-29": { en: "Silver Tips Tea",            de: "Silver Tips Tee",                    ru: "Чай Серебряные типсы" },
  "ceylon-tea-30": { en: "White Tips Tea",             de: "White Tips Tee",                     ru: "Чай Белые типсы" },
  "ceylon-tea-31": { en: "Purple Tea",                 de: "Lila Tee",                           ru: "Фиолетовый чай" },
  "ceylon-tea-32": { en: "BOPF SP-1",                  de: "BOPF SP-1",                          ru: "BOPF SP-1" },
  "ceylon-tea-33": { en: "OP",                         de: "OP",                                 ru: "OP" },
  "ceylon-tea-34": { en: "Merry Gold",                 de: "Merry Gold",                         ru: "Мерри Голд" },
  "ceylon-tea-35": { en: "Water Lily",                 de: "Seerose",                            ru: "Водяная лилия" },
  "ceylon-tea-36": { en: "Mint Tea",                   de: "Minztee",                            ru: "Мятный чай" },
  "ceylon-tea-37": { en: "Black Tea Chocolate",        de: "Schwarztee Schokolade",              ru: "Чёрный чай Шоколад" },
  "s-item-1":  { en: "Cinnamon Powder",        de: "Zimtpulver",                   ru: "Молотая корица" },
  "s-item-2":  { en: "Cinnamon Pieces",        de: "Zimtstücke",                   ru: "Кусочки корицы" },
  "s-item-3":  { en: "White Pepper",           de: "Weißer Pfeffer",               ru: "Белый перец" },
  "s-item-4":  { en: "Curry Leaves Powder",    de: "Curryblätter Pulver",          ru: "Порошок листьев карри" },
  "s-item-5":  { en: "Curry Powder",           de: "Curry Pulver",                 ru: "Порошок карри" },
  "s-item-6":  { en: "Chilli Pieces",          de: "Chillistücke",                 ru: "Кусочки чили" },
  "s-item-7":  { en: "Roasted Curry Powder",   de: "Geröstetes Curry Pulver",      ru: "Жареный порошок карри" },
  "s-item-8":  { en: "Turmeric Powder",        de: "Kurkuma Pulver",               ru: "Порошок куркумы" },
  "s-item-9":  { en: "Clove",                  de: "Nelke",                        ru: "Гвоздика" },
  "s-item-10": { en: "Pepper Powder",          de: "Pfefferpulver",                ru: "Молотый перец" },
  "s-item-11": { en: "Rosemary",               de: "Rosmarin",                     ru: "Розмарин" },
  "s-item-12": { en: "Cardamom",               de: "Kardamom",                     ru: "Кардамон" },
  "s-item-13": { en: "Roasted Chilli Powder",  de: "Geröstetes Chilipulver",       ru: "Жареный порошок чили" },
  "s-item-14": { en: "Coriander",              de: "Koriander",                    ru: "Кориандр" },
  "h-item-1":  { en: "Vanilla Extract",        de: "Vanilleextrakt",               ru: "Экстракт ванили" },
  "h-item-2":  { en: "Cinnamon Air Freshener", de: "Zimt Lufterfrischer",          ru: "Освежитель воздуха корица" },
  "h-item-3":  { en: "Cinnamon Oil",           de: "Zimtöl",                       ru: "Масло корицы" },
  "op-item-1":  { en: "Elephant",                    de: "Elefant",                          ru: "Слон" },
  "op-item-2":  { en: "Elephant Trio",               de: "Elefanten Trio",                   ru: "Трио слонов" },
  "op-item-3":  { en: "Coconut Shell Wise Man",      de: "Kokosnuss Weiser Mann",            ru: "Мудрец из кокоса" },
  "op-item-4":  { en: "Rabbit",                      de: "Hase",                             ru: "Кролик" },
  "op-item-5":  { en: "Monkey",                      de: "Affe",                             ru: "Обезьяна" },
  "op-item-6":  { en: "Monkey Face",                 de: "Affengesicht",                     ru: "Мордочка обезьяны" },
  "op-item-7":  { en: "Mother Monkey",               de: "Mutter Affe",                      ru: "Мама обезьяна" },
  "op-item-8":  { en: "Elephant & Monkey Carving",  de: "Elefant & Affe Schnitzerei",       ru: "Слон и обезьяна" },
  "op-item-9":  { en: "Royal Tusker Elephant",       de: "Königlicher Stoßzahn-Elefant",     ru: "Королевский слон" },
  "op-item-10": { en: "Coconut Shell Old Man",       de: "Kokosnuss Alter Mann",             ru: "Старик из кокоса" },
  "op-item-11": { en: "Coconut Shell Turtle",        de: "Kokosnuss Schildkröte",            ru: "Черепаха из кокоса" },
  "op-item-12": { en: "Mother & Baby Elephant",      de: "Mutter und Baby Elefant",          ru: "Мама и детёныш слона" },
};

// ─── Sub-category pill strip ─────────────────────────────────────────────────

function SubCategoryFilter({ subCategories, activeSub, onSelect, lang, t }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25 }}
      className="flex justify-center gap-2 flex-wrap px-4 mb-8"
    >
      {/* "All Teas" pill */}
      <button
        onClick={() => onSelect(null)}
        className="px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300"
        style={
          activeSub === null
            ? { backgroundColor: "#D4A373", color: "#fff", border: "2px solid #D4A373", transform: "scale(1.05)" }
            : { backgroundColor: "transparent", color: "#7a6040", border: "2px solid rgba(212,163,115,0.45)" }
        }
      >
        {t.allTeas}
      </button>

      {subCategories.map((sc) => (
        <button
          key={sc.id}
          onClick={() => onSelect(sc.id)}
          className="px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300"
          style={
            activeSub === sc.id
              ? { backgroundColor: "#D4A373", color: "#fff", border: "2px solid #D4A373", transform: "scale(1.05)" }
              : { backgroundColor: "transparent", color: "#7a6040", border: "2px solid rgba(212,163,115,0.45)" }
          }
        >
          {subCategoryTitles[sc.id]?.[lang] ?? sc.title}
          <span
            className="ml-1.5 text-[10px] opacity-70"
            style={{ fontWeight: 400 }}
          >
            {sc.items.length}
          </span>
        </button>
      ))}
    </motion.div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

function Products({ lang = "en" }) {
  const [activeCategory, setActiveCategory] = useState("tea");
  // activeSub: null = all teas, string = sub-category id
  const [activeSub, setActiveSub] = useState(null);
  const [pages, setPages] = useState(
    Object.fromEntries(categories.map((c) => [c.id, 1]))
  );
  const navigate = useNavigate();

  const currentCategory = categories.find((cat) => cat.id === activeCategory);
  const isTea = activeCategory === "tea" && currentCategory.subCategories;

  // Resolve the item list depending on active sub-category
  const resolvedItems = (() => {
    if (!isTea || activeSub === null) return currentCategory.items;
    const sc = currentCategory.subCategories.find((s) => s.id === activeSub);
    return sc ? sc.items : currentCategory.items;
  })();

  const currentPage = pages[activeCategory];
  const totalPages = Math.ceil(resolvedItems.length / ITEMS_PER_PAGE);
  const paginatedItems = resolvedItems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCategoryChange = (id) => {
    setActiveCategory(id);
    setActiveSub(null);
    setPages((prev) => ({ ...prev, [id]: 1 }));
  };

  const handleSubChange = (subId) => {
    setActiveSub(subId);
    setPages((prev) => ({ ...prev, [activeCategory]: 1 }));
    document
      .getElementById("product-grid-top")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handlePageChange = (page) => {
    setPages((prev) => ({ ...prev, [activeCategory]: page }));
    document
      .getElementById("product-grid-top")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const t = content[lang];

  // Sub-category label for the page count line
  const activeSubLabel =
    isTea && activeSub
      ? ` · ${subCategoryTitles[activeSub]?.[lang] ?? activeSub}`
      : "";

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fdfaf5]">

      {/* ── BACKGROUND BLOBS ── */}
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
        <div
          className="absolute rounded-full"
          style={{
            width: "60vw", height: "60vw",
            background: "rgba(27,67,50,0.06)", filter: "blur(80px)",
            willChange: "transform", animation: "homeBlob1 30s linear infinite",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: "50vw", height: "50vw",
            background: "rgba(233,196,106,0.06)", filter: "blur(70px)",
            willChange: "transform", animation: "homeBlob2 35s linear infinite",
          }}
        />
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
            alt="Sri Lankan Tea Plantation"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center 55%" }}
          />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.62)" }} />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, rgba(11,31,21,0.15) 0%, transparent 40%, rgba(11,31,21,0.85) 100%)" }}
          />

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

        {/* ── MAIN CATEGORY TABS ── */}
        <div className="flex justify-center gap-3 md:gap-5 mb-6 flex-wrap px-4 mt-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className="px-6 md:px-8 py-2.5 rounded-full font-semibold transition-all duration-300 text-sm md:text-base"
              style={
                activeCategory === cat.id
                  ? {
                      backgroundColor: "#1B4332",
                      color: "#ffffff",
                      border: "2px solid #1B4332",
                      boxShadow: "0 4px 14px rgba(27,67,50,0.25)",
                      transform: "scale(1.05)",
                    }
                  : {
                      backgroundColor: "transparent",
                      color: "#3a5a47",
                      border: "2px solid rgba(27,67,50,0.3)",
                    }
              }
            >
              {categoryTitles[cat.id][lang]}
            </button>
          ))}
        </div>

        {/* ── SUB-CATEGORY PILLS (tea only) ── */}
        <AnimatePresence>
          {isTea && (
            <SubCategoryFilter
              subCategories={currentCategory.subCategories}
              activeSub={activeSub}
              onSelect={handleSubChange}
              lang={lang}
              t={t}
            />
          )}
        </AnimatePresence>

        {/* ── DIVIDER when tea sub is active ── */}
        {isTea && activeSub && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-3 mx-4 md:mx-8 mb-6"
          >
            <div className="flex-1 h-px bg-[#D4A373]/30" />
            <span className="text-[#D4A373] text-xs font-bold tracking-widest uppercase">
              {subCategoryTitles[activeSub]?.[lang]}
            </span>
            <div className="flex-1 h-px bg-[#D4A373]/30" />
          </motion.div>
        )}

        {/* ── SCROLL ANCHOR ── */}
        <div id="product-grid-top" className="scroll-mt-8" />

        {/* ── PAGE COUNT ── */}
        <div
          className="text-center mb-6 text-xs font-semibold tracking-widest uppercase"
          style={{ color: "#8a7a60" }}
        >
          {t.showing} {(currentPage - 1) * ITEMS_PER_PAGE + 1}–
          {Math.min(currentPage * ITEMS_PER_PAGE, resolvedItems.length)}{" "}
          {t.of} {resolvedItems.length} {t.products}
          {activeSubLabel}
        </div>

        {/* ── PRODUCTS GRID ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-${activeSub ?? "all"}-${currentPage}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 w-full px-2 md:px-4 mb-12"
          >
            {paginatedItems.map((item) => (
              <div
                key={item.id}
                className="relative overflow-hidden group cursor-pointer transition-all duration-500 h-[380px] md:h-[440px]"
                style={{ boxShadow: "0 2px 12px rgba(27,67,50,0.10)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow = "0 8px 32px rgba(27,67,50,0.22)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow = "0 2px 12px rgba(27,67,50,0.10)")
                }
                onClick={() => navigate(`/product/${item.id}`)}
              >
                <img
                  src={item.img}
                  alt={productNames[item.id]?.[lang] ?? item.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 transition duration-500"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(11,31,21,0.85) 0%, rgba(27,67,50,0.12) 50%, transparent 100%)",
                  }}
                />

                {/* Hover tint */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "rgba(11,31,21,0.08)" }}
                />

                {/* Gold top accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#D4A373] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 text-center">
                  <h3 className="text-xl md:text-2xl font-semibold text-white premium-title drop-shadow-lg mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    {productNames[item.id]?.[lang] ?? item.name}
                  </h3>
                  <p className="text-[#D4A373] text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 tracking-[0.15em] uppercase">
                    {t.viewDetails}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ── PAGINATION ── */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mb-20 flex-wrap px-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-5 py-2.5 rounded-full font-semibold transition duration-200 text-sm disabled:opacity-30 disabled:cursor-not-allowed"
              style={{
                border: "2px solid rgba(27,67,50,0.3)",
                color: "#2d5a3d",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                if (currentPage !== 1) {
                  e.currentTarget.style.backgroundColor = "rgba(27,67,50,0.08)";
                  e.currentTarget.style.borderColor = "#1B4332";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.borderColor = "rgba(27,67,50,0.3)";
              }}
            >
              {t.prev}
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
              const showPage =
                page === 1 ||
                page === totalPages ||
                Math.abs(page - currentPage) <= 1;
              const showEllipsisBefore =
                page === currentPage - 2 && currentPage - 2 > 1;
              const showEllipsisAfter =
                page === currentPage + 2 && currentPage + 2 < totalPages;

              if (showEllipsisBefore || showEllipsisAfter)
                return (
                  <span key={`e-${page}`} style={{ color: "#a09070" }} className="px-1">
                    …
                  </span>
                );
              if (!showPage) return null;

              return (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className="w-10 h-10 rounded-full font-semibold text-sm transition duration-200"
                  style={
                    currentPage === page
                      ? {
                          backgroundColor: "#1B4332",
                          color: "#ffffff",
                          border: "2px solid #1B4332",
                          transform: "scale(1.1)",
                          boxShadow: "0 2px 10px rgba(27,67,50,0.3)",
                        }
                      : {
                          border: "2px solid rgba(27,67,50,0.25)",
                          color: "#2d5a3d",
                          backgroundColor: "transparent",
                        }
                  }
                >
                  {page}
                </button>
              );
            })}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-5 py-2.5 rounded-full font-semibold transition duration-200 text-sm disabled:opacity-30 disabled:cursor-not-allowed"
              style={{
                border: "2px solid rgba(27,67,50,0.3)",
                color: "#2d5a3d",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                if (currentPage !== totalPages) {
                  e.currentTarget.style.backgroundColor = "rgba(27,67,50,0.08)";
                  e.currentTarget.style.borderColor = "#1B4332";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.borderColor = "rgba(27,67,50,0.3)";
              }}
            >
              {t.next}
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default Products;