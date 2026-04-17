import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-col">
                    <h3>Pure Ceylon Tea</h3>
                    <p style={{ color: 'rgba(253, 250, 245, 0.8)', lineHeight: '1.6', fontWeight: '300', fontSize: '0.95rem' }}>
                        The legendary lion of the Sri Lankan flag signifies the symbol of quality. Experience the world's finest tea from Sri Lanka.
                    </p>
                    <div className="social-links">
                        <a href="#" className="social-icon"><span>f</span></a>
                        <a href="#" className="social-icon"><span>t</span></a>
                        <a href="#" className="social-icon"><span>in</span></a>
                        <a href="#" className="social-icon"><span>ig</span></a>
                    </div>
                </div>

                <div className="footer-col">
                    <h3>Discover</h3>
                    <ul>
                        <li><Link to="#">Story of Ceylon Tea</Link></li>
                        <li><Link to="#">From Dew to Brew</Link></li>
                        <li><Link to="#">Tea Diversity</Link></li>
                        <li><Link to="#">Perfect Cup of Tea</Link></li>
                        <li><Link to="#">Global Tea Fraternity</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h3>Explore</h3>
                    <ul>
                        <li><Link to="#">Rich in “Theaflavins”</Link></li>
                        <li><Link to="#">Symbol of Quality</Link></li>
                        <li><Link to="#">Flirt with New Recipes</Link></li>
                        <li><Link to="#">Gallery & Media</Link></li>
                        <li><Link to="#">Where to Buy</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h3>Contact Us</h3>
                    <div className="footer-contact">
                        <p><strong>A:</strong> 123 Tea Estate Road, Colombo, Sri Lanka</p>
                        <p><strong>P:</strong> +94 11 234 5678</p>
                        <p><strong>E:</strong> info@pureceylontea.com</p>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Ceylon Tea. All Rights Reserved.</p>
                <div className="footer-bottom-links">
                    <Link to="#">Privacy Policy</Link>
                    <Link to="#">Terms of Service</Link>
                    <Link to="#">Sitemap</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
