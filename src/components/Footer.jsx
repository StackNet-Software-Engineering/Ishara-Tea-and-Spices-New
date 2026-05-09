import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const content = {
  en: {
    brandName: "Ishara Tea & Spices",
    tagline: "The legendary symbol of quality. Experience the world's finest tea and spices from Sri Lanka.",
    discover: "Discover",
    explore: "Explore",
    contact: "Contact Us",
    discoverLinks: ["Story of Ceylon Tea", "From Dew to Brew", "Tea Diversity", "Perfect Cup of Tea", "Global Tea Fraternity"],
    exploreLinks: ['Rich in "Theaflavins"', "Symbol of Quality", "Flirt with New Recipes", "Gallery & Media", "Where to Buy"],
    address: "Sri Lanka",
    rights: "All Rights Reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    sitemap: "Sitemap",
  },
  de: {
    brandName: "Ishara Tee & Gewürze",
    tagline: "Das legendäre Symbol der Qualität. Erleben Sie den feinsten Tee und die besten Gewürze aus Sri Lanka.",
    discover: "Entdecken",
    explore: "Erkunden",
    contact: "Kontaktieren Sie uns",
    discoverLinks: ["Geschichte des Ceylon-Tees", "Vom Tau zum Aufguss", "Teevielfalt", "Die perfekte Tasse Tee", "Globale Teegemeinschaft"],
    exploreLinks: ['Reich an „Theaflavinen"', "Symbol der Qualität", "Neue Rezepte ausprobieren", "Galerie & Medien", "Wo kaufen"],
    address: "Sri Lanka",
    rights: "Alle Rechte vorbehalten.",
    privacy: "Datenschutzrichtlinie",
    terms: "Nutzungsbedingungen",
    sitemap: "Sitemap",
  },
  ru: {
    brandName: "Ishara Чай и Специи",
    tagline: "Легендарный символ качества. Откройте для себя лучший чай и специи из Шри-Ланки.",
    discover: "Открыть",
    explore: "Исследовать",
    contact: "Свяжитесь с нами",
    discoverLinks: ["История цейлонского чая", "От росы до чашки", "Разнообразие чаёв", "Идеальная чашка чая", "Мировое чайное братство"],
    exploreLinks: ["Богат теафлавинами", "Символ качества", "Новые рецепты", "Галерея и медиа", "Где купить"],
    address: "Шри-Ланка",
    rights: "Все права защищены.",
    privacy: "Политика конфиденциальности",
    terms: "Условия использования",
    sitemap: "Карта сайта",
  },
  zh: {
    brandName: "Ishara 茶叶与香料",
    tagline: "品质的传奇象征。体验斯里兰卡最好的茶和香料。",
    discover: "发现",
    explore: "探索",
    contact: "联系我们",
    discoverLinks: ["锡兰茶的故事", "从露水到冲泡", "茶的多样性", "完美的一杯茶", "全球茶友会"],
    exploreLinks: ["富含茶黄素", "品质的象征", "尝试新食谱", "画廊与媒体", "哪里购买"],
    address: "斯里兰卡",
    rights: "版权所有。",
    privacy: "隐私政策",
    terms: "服务条款",
    sitemap: "网站地图",
  },
};

const Footer = ({ lang = 'en' }) => {
  const t = content[lang];

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-col">
          <h3>{t.brandName}</h3>
          <p style={{ color: 'rgba(253,250,245,0.8)', lineHeight: '1.6', fontWeight: '300', fontSize: '0.95rem' }}>
            {t.tagline}
          </p>
          <div className="social-links">
            <Link to="/" className="social-icon"><span>f</span></Link>
            <Link to="/" className="social-icon"><span>t</span></Link>
            <Link to="/" className="social-icon"><span>in</span></Link>
            <Link to="/" className="social-icon"><span>ig</span></Link>
          </div>
        </div>

        <div className="footer-col">
          <h3>{t.discover}</h3>
          <ul>
            {t.discoverLinks.map((item, i) => (
              <li key={i}><Link to="/">{item}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h3>{t.explore}</h3>
          <ul>
            {t.exploreLinks.map((item, i) => (
              <li key={i}><Link to="/">{item}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h3>{t.contact}</h3>
          <div className="footer-contact">
            <p><strong>A:</strong> {t.address}</p>
            <p><strong>P:</strong> +94 77 000 0000</p>
            <p><strong>E:</strong> isharateashop@gmail.com</p>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} {t.brandName}. {t.rights}</p>
        <div className="footer-bottom-links">
          <Link to="/">{t.privacy}</Link>
          <Link to="/">{t.terms}</Link>
          <Link to="/">{t.sitemap}</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;