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
            <a href="#" className="social-icon"><span>f</span></a>
            <a href="#" className="social-icon"><span>t</span></a>
            <a href="#" className="social-icon"><span>in</span></a>
            <a href="#" className="social-icon"><span>ig</span></a>
          </div>
        </div>

        <div className="footer-col">
          <h3>{t.discover}</h3>
          <ul>
            {t.discoverLinks.map((item, i) => (
              <li key={i}><Link to="#">{item}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h3>{t.explore}</h3>
          <ul>
            {t.exploreLinks.map((item, i) => (
              <li key={i}><Link to="#">{item}</Link></li>
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
          <Link to="#">{t.privacy}</Link>
          <Link to="#">{t.terms}</Link>
          <Link to="#">{t.sitemap}</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;