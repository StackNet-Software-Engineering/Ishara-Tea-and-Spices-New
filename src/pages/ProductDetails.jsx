import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { categories } from "../data/products";
import { motion } from "framer-motion";

const HERO_BANNER = "https://res.cloudinary.com/dp1jwsapk/image/upload/w_1400,q_auto,f_auto/v1777731478/DSC08417_xq4tb3.jpg";

const content = {
    en: {
        notFound: "Product Not Found",
        back: "Back to Products",
        pure: "Pure Ceylon",
        order: "Order Now",
        continue: "Continue Shopping",
        guide: "PRODUCT GUIDE",
        discover: "Discover",
        perPack: "per pack",
        desc1: "Experience the finest selection of hand-picked ingredients sourced directly from the lush, rich soils of Sri Lanka. Our",
        desc2: "is carefully cultivated and processed using traditional methods to preserve its natural aroma, authentic flavor profile, and inherent wellness properties.",
        desc3: "Every package guarantees uncompromised premium quality, bringing you the true essence of Ceylon heritage. Perfect for elevating your daily rituals, whether you are enjoying a calming warm beverage or enhancing a culinary masterpiece.",
        authenticDesc: "100% Authentic Sri Lankan"
    },
    de: {
        notFound: "Produkt nicht gefunden",
        back: "Zurück zu den Produkten",
        pure: "Reines Ceylon",
        order: "Jetzt bestellen",
        continue: "Einkauf fortsetzen",
        guide: "PRODUKTLEITFADEN",
        discover: "Entdecken Sie",
        perPack: "pro Packung",
        desc1: "Erleben Sie die feinste Auswahl handverlesener Zutaten, die direkt von den üppigen, reichen Böden Sri Lankas stammen. Unser",
        desc2: "wird sorgfältig angebaut und nach traditionellen Methoden verarbeitet, um sein natürliches Aroma und seinen authentischen Geschmack zu bewahren.",
        desc3: "Jede Packung garantiert kompromisslose Premiumqualität und bringt Ihnen die wahre Essenz des Ceylon-Erbes. Perfekt für Ihre täglichen Rituale.",
        authenticDesc: "100% Authentisch Sri Lankisch"
    },
    ru: {
        notFound: "Товар не найден",
        back: "Вернуться к товарам",
        pure: "Настоящий Цейлон",
        order: "Заказать сейчас",
        continue: "Продолжить покупки",
        guide: "РУКОВОДСТВО ПО ПРОДУКТУ",
        discover: "Откройте для себя",
        perPack: "за упаковку",
        desc1: "Оцените лучший выбор собранных вручную ингредиентов, полученных прямо с пышных и богатых почв Шри-Ланки. Наш",
        desc2: "тщательно выращивается и обрабатывается традиционными методами для сохранения природного аромата и аутентичного вкуса.",
        desc3: "Каждая упаковка гарантирует бескомпромиссное качество премиум-класса, донося до вас истинную суть цейлонского наследия.",
        authenticDesc: "100% Аутентичный Шри-Ланкийский"
    }
};

const categoryTitles = {
    tea: { en: "Ceylon Tea", de: "Ceylon Tee", ru: "Цейлонский чай" },
    spices: { en: "Sri Lankan Spices", de: "Sri-lankische Gewürze", ru: "Шри-ланкийские специи" },
    herbal: { en: "Herbal", de: "Kräuter", ru: "Травяные" },
    other: { en: "Other Products", de: "Andere Produkte", ru: "Другие товары" },
};

const productNames = {
    "ceylon-tea-1": { en: "Black Tea Mix Fruit", de: "Schwarztee Gemischte Früchte", ru: "Чёрный чай Миксфрукты" },
    "ceylon-tea-2": { en: "Lotus Flavour Tea", de: "Lotus Geschmack Tee", ru: "Чай со вкусом лотоса" },
    "ceylon-tea-3": { en: "Nuwaraeliya High Grown Tea", de: "Nuwaraeliya Hochland-Tee", ru: "Чай Нувараэлия Горный" },
    "ceylon-tea-4": { en: "Vanilla Tea", de: "Vanille Tee", ru: "Ванильный чай" },
    "ceylon-tea-5": { en: "Earl Grey", de: "Earl Grey", ru: "Эрл Грей" },
    "ceylon-tea-6": { en: "Lemon Grass", de: "Zitronengras", ru: "Лемонграсс" },
    "ceylon-tea-7": { en: "Green Tea Soursop", de: "Grüner Tee Soursop", ru: "Зелёный чай Саусеп" },
    "ceylon-tea-8": { en: "Mango Flavour", de: "Mango Geschmack", ru: "Манговый вкус" },
    "ceylon-tea-9": { en: "Black Tea Pineapple", de: "Schwarztee Ananas", ru: "Чёрный чай Ананас" },
    "ceylon-tea-10": { en: "Black Tea Lotus", de: "Schwarztee Lotus", ru: "Чёрный чай Лотос" },
    "ceylon-tea-11": { en: "Vanilla Flavour", de: "Vanille Geschmack", ru: "Ванильный вкус" },
    "ceylon-tea-12": { en: "Banana Flavour", de: "Bananen Geschmack", ru: "Банановый вкус" },
    "ceylon-tea-13": { en: "Black Tea Rose", de: "Schwarztee Rose", ru: "Чёрный чай Роза" },
    "ceylon-tea-14": { en: "Black Tea Jasmine", de: "Schwarztee Jasmin", ru: "Чёрный чай Жасмин" },
    "ceylon-tea-15": { en: "Chai Masala", de: "Chai Masala", ru: "Чай Масала" },
    "ceylon-tea-16": { en: "Passion Fruit", de: "Passionsfrucht", ru: "Маракуйя" },
    "ceylon-tea-17": { en: "Green Tea Mix Fruit", de: "Grüner Tee Gemischte Früchte", ru: "Зелёный чай Миксфрукты" },
    "ceylon-tea-18": { en: "Black Tea Mint", de: "Schwarztee Minze", ru: "Чёрный чай Мята" },
    "ceylon-tea-19": { en: "Ginger Flavour", de: "Ingwer Geschmack", ru: "Имбирный вкус" },
    "ceylon-tea-20": { en: "Black Tea 1001 Night", de: "Schwarztee 1001 Nacht", ru: "Чёрный чай 1001 ночь" },
    "ceylon-tea-21": { en: "Green Tea", de: "Grüner Tee", ru: "Зелёный чай" },
    "ceylon-tea-22": { en: "PEKOE-1", de: "PEKOE-1", ru: "ПЕКО-1" },
    "ceylon-tea-23": { en: "Black Tea FFEX-SP1", de: "Schwarztee FFEX-SP1", ru: "Чёрный чай FFEX-SP1" },
    "ceylon-tea-24": { en: "Black Tea BOP", de: "Schwarztee BOP", ru: "Чёрный чай BOP" },
    "ceylon-tea-25": { en: "Black Tea Pekoe", de: "Schwarztee Pekoe", ru: "Чёрный чай Пеко" },
    "ceylon-tea-26": { en: "Black Tea OP", de: "Schwarztee OP", ru: "Чёрный чай OP" },
    "ceylon-tea-27": { en: "Golden Tips Tea", de: "Golden Tips Tee", ru: "Чай Золотые типсы" },
    "ceylon-tea-28": { en: "BOP", de: "BOP", ru: "BOP" },
    "ceylon-tea-29": { en: "Silver Tips Tea", de: "Silver Tips Tee", ru: "Чай Серебряные типсы" },
    "ceylon-tea-30": { en: "White Tips Tea", de: "White Tips Tee", ru: "Чай Белые типсы" },
    "ceylon-tea-31": { en: "Purple Tea", de: "Lila Tee", ru: "Фиолетовый чай" },
    "ceylon-tea-32": { en: "BOPF SP-1", de: "BOPF SP-1", ru: "BOPF SP-1" },
    "ceylon-tea-33": { en: "OP", de: "OP", ru: "OP" },
    "ceylon-tea-34": { en: "Merry Gold", de: "Merry Gold", ru: "Мерри Голд" },
    "ceylon-tea-35": { en: "Water Lily", de: "Seerose", ru: "Водяная лилия" },
    "s-item-1": { en: "Cinnamon Powder", de: "Zimtpulver", ru: "Молотая корица" },
    "s-item-2": { en: "Cinnamon Pieces", de: "Zimtstücke", ru: "Кусочки корицы" },
    "s-item-3": { en: "White Pepper", de: "Weißer Pfeffer", ru: "Белый перец" },
    "s-item-4": { en: "Curry Leaves Powder", de: "Curryblätter Pulver", ru: "Порошок листьев карри" },
    "s-item-5": { en: "Curry Powder", de: "Curry Pulver", ru: "Порошок карри" },
    "s-item-6": { en: "Chilli Pieces", de: "Chillistücke", ru: "Кусочки чили" },
    "s-item-7": { en: "Roasted Curry Powder", de: "Geröstetes Curry Pulver", ru: "Жареный порошок карри" },
    "s-item-8": { en: "Turmeric Powder", de: "Kurkuma Pulver", ru: "Порошок куркумы" },
    "s-item-9": { en: "Clove", de: "Nelke", ru: "Гвоздика" },
    "s-item-10": { en: "Pepper Powder", de: "Pfefferpulver", ru: "Молотый перец" },
    "s-item-11": { en: "Rosemary", de: "Rosmarin", ru: "Розмарин" },
    "s-item-12": { en: "Cardamom", de: "Kardamom", ru: "Кардамон" },
    "s-item-13": { en: "Roasted Chilli Powder", de: "Geröstetes Chilipulver", ru: "Жареный порошок чили" },
    "s-item-14": { en: "Coriander", de: "Koriander", ru: "Кориандр" },
    "h-item-1": { en: "Vanilla Extract", de: "Vanilleextrakt", ru: "Экстракт ванили" },
    "h-item-2": { en: "Cinnamon Air Freshener", de: "Zimt Lufterfrischer", ru: "Освежитель воздуха корица" },
    "h-item-3": { en: "Cinnamon Oil", de: "Zimtöl", ru: "Масло корицы" },
    "op-item-1": { en: "Elephant", de: "Elefant", ru: "Слон" },
    "op-item-2": { en: "Elephant Trio", de: "Elefanten Trio", ru: "Трио слонов" },
    "op-item-3": { en: "Rabbit", de: "Hase", ru: "Кролик" },
    "op-item-4": { en: "Monkey", de: "Affe", ru: "Обезьяна" },
    "op-item-5": { en: "Monkey Face", de: "Affengesicht", ru: "Мордочка обезьяны" },
    "op-item-6": { en: "Mother Monkey", de: "Mutter Affe", ru: "Мама обезьяна" },
    "op-item-7":  { en: "Coconut Shell Wise Man",    de: "Kokosnuss Weiser Mann",       ru: "Мудрец из кокоса" },
    "op-item-8": { en: "Elephant & Monkey Carving", de: "Elefant & Affe Schnitzerei",  ru: "Слон и обезьяна" },
    "op-item-9": { en: "Royal Tusker Elephant",     de: "Königlicher Stoßzahn-Elefant",ru: "Королевский слон" },
    "op-item-10": { en: "Coconut Shell Old Man",     de: "Kokosnuss Alter Mann",        ru: "Старик из кокоса" },
    "op-item-11": { en: "Coconut Shell Turtle",      de: "Kokosnuss Schildkröte",       ru: "Черепаха из кокоса" },
    "op-item-12": { en: "Mother & Baby Elephant",    de: "Mutter und Baby Elefant",     ru: "Мама и детёныш слона" },
};

function ProductDetails({ lang = 'en' }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    let product = null;
    let categoryId = null;
    for (const category of categories) {
        const found = category.items.find((item) => item.id === id);
        if (found) { product = found; categoryId = category.id; break; }
    }

    const translatedProductName = product ? (productNames[product.id]?.[lang] || product.name) : '';
    const translatedCategoryTitle = categoryId ? (categoryTitles[categoryId]?.[lang] || '') : '';

    useEffect(() => {
        if (!product?.images || product.images.length <= 1) return;
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [product]);

    const t = content[lang];

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h2 className="text-3xl font-bold mb-4" style={{ color: '#1B4332' }}>{t.notFound}</h2>
                <button
                    onClick={() => navigate('/products')}
                    className="text-white px-6 py-3 rounded-xl font-bold transition duration-300"
                    style={{ backgroundColor: '#1B4332' }}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = '#D4A373'}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = '#1B4332'}
                >
                    ← {t.back}
                </button>
            </div>
        );
    }

    return (
        <div className="relative min-h-screen overflow-hidden bg-[#fdfaf5]">

            {/* BACKGROUND — CSS-only keyframe blobs, GPU composited */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: `url("https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=40")`,
                    backgroundSize: 'cover', backgroundPosition: 'center', filter: 'blur(2px)'
                }} />
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
            </div>

            <div className="relative z-10 w-full">

                {/* ── HERO BANNER ── */}
                <div className="relative w-full h-[32vh] md:h-[40vh] overflow-hidden">
                    <img
                        src={HERO_BANNER}
                        alt="Ceylon Tea"
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ objectPosition: "center 40%" }}
                    />
                    <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.62)' }} />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(11,31,21,0.15) 0%, transparent 40%, rgba(11,31,21,0.85) 100%)' }} />

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pb-8">
                        <motion.p
                            initial={{ opacity: 0, letterSpacing: "0.1em" }}
                            animate={{ opacity: 1, letterSpacing: "0.3em" }}
                            transition={{ duration: 1 }}
                            className="text-[#D4A373] uppercase text-xs font-bold mb-2 tracking-[0.3em]"
                        >
                            {translatedCategoryTitle} · {t.pure}
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-3xl md:text-5xl font-bold text-white premium-title drop-shadow-xl mb-3"
                        >
                            {translatedProductName}
                        </motion.h1>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="w-16 h-[2px] bg-[#D4A373] mx-auto"
                        />
                    </div>
                </div>

                {/* ── PRODUCT CONTENT ── */}
                <div className="max-w-6xl mx-auto px-6 pt-6 pb-12">

                    {/* Back button */}
                    <button
                        onClick={() => navigate('/products')}
                        className="mb-10 font-semibold flex items-center gap-2 hover:gap-4 transition-all text-sm tracking-wide group"
                        style={{ color: '#2d5a3d' }}
                    >
                        <span className="group-hover:-translate-x-1 transition-transform duration-200">←</span>
                        {t.back}
                    </button>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col md:flex-row items-center gap-10 lg:gap-20"
                    >
                        {/* Product Image */}
                        <div
                            className="md:w-1/2 w-full h-[380px] md:h-[560px] overflow-hidden shadow-2xl relative"
                            style={{ backgroundColor: 'rgba(27,67,50,0.06)' }}
                        >
                            {product.images && product.images.length > 0 ? (
                                product.images.map((imgSrc, idx) => (
                                    <motion.img
                                        key={idx}
                                        src={imgSrc}
                                        alt={`${translatedProductName} - view ${idx + 1}`}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: idx === currentImageIndex ? 1 : 0 }}
                                        transition={{ duration: 1 }}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                ))
                            ) : (
                                <img
                                    src={product.img}
                                    alt={translatedProductName}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            )}
                        </div>

                        {/* Product Info */}
                        <div className="md:w-1/2 flex flex-col justify-center">
                            <span className="uppercase tracking-[0.25em] font-bold text-xs mb-2 block" style={{ color: '#b8860b' }}>
                                {t.pure}
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold premium-title mb-4" style={{ color: '#1a3828' }}>
                                {translatedProductName}
                            </h2>
                            <div className="w-12 h-[2px] mb-6" style={{ backgroundColor: '#D4A373' }} />

                            <p className="text-base md:text-lg mb-8 leading-relaxed" style={{ color: '#4a6558' }}>
                                {t.authenticDesc}
                            </p>

                            {/* <div className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3" style={{ color: '#1a3828' }}>
                                <span>{product.price}</span>
                                <span className="text-xs font-normal uppercase tracking-widest mt-2" style={{ color: '#8a9e92' }}>{t.perPack}</span>
                            </div> */}

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    className="px-8 py-4 font-bold text-sm tracking-widest uppercase flex-1 text-center shadow-lg transition-all duration-300 text-white"
                                    style={{ backgroundColor: '#1B4332' }}
                                    onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#D4A373'; e.currentTarget.style.transform = 'scale(1.04)'; }}
                                    onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#1B4332'; e.currentTarget.style.transform = 'scale(1)'; }}
                                >
                                    {t.order}
                                </button>
                                <button
                                    onClick={() => navigate('/products')}
                                    className="px-8 py-4 font-bold text-sm tracking-widest uppercase flex-1 text-center transition-all duration-300"
                                    style={{ border: '2px solid #1B4332', color: '#1B4332', backgroundColor: 'transparent' }}
                                    onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#1B4332'; e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.transform = 'scale(1.04)'; }}
                                    onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#1B4332'; e.currentTarget.style.transform = 'scale(1)'; }}
                                >
                                    {t.continue}
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* ── DETAILED DESCRIPTION ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mt-24 mb-16 max-w-4xl mx-auto"
                    >
                        <div className="flex items-center gap-6 mb-12">
                            <div className="flex-1 h-[1px]" style={{ backgroundColor: 'rgba(27,67,50,0.15)' }} />
                            <span className="uppercase tracking-[0.25em] font-bold text-xs" style={{ color: '#b8860b' }}>
                                {t.guide}
                            </span>
                            <div className="flex-1 h-[1px]" style={{ backgroundColor: 'rgba(27,67,50,0.15)' }} />
                        </div>

                        <div className="text-center">
                            <h3 className="text-3xl md:text-4xl premium-title mb-8 leading-tight" style={{ color: '#1a3828' }}>
                                {t.discover} <span style={{ color: '#b8860b' }}>{translatedProductName}</span>
                            </h3>

                            <p className="text-base md:text-lg leading-[2rem] max-w-3xl mx-auto" style={{ color: '#4a6558' }}>
                                {t.desc1} <strong style={{ color: '#1a3828' }}>{translatedProductName}</strong> {t.desc2}
                                <br /><br />
                                {t.desc3}
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}

export default ProductDetails;