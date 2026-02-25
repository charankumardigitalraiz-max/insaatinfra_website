import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail, Send, Home, Building, Users, MessageCircle, ArrowRight, CheckCircle, Image, FileText, Briefcase, Handshake } from 'lucide-react';
import '../styles/footer.css';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const quickLinks = [
        { name: 'Home', path: '/', icon: Home },
        { name: 'About Us', path: '/about', icon: Users },
        { name: 'Projects', path: '/projects', icon: Building },
        { name: 'Gallery', path: '/gallery', icon: Image },
        { name: 'News', path: '/news', icon: FileText },
        { name: 'Careers', path: '/careers', icon: Briefcase },
        { name: 'Partner with Us', path: '/partner', icon: Handshake },
        { name: 'Contact Us', path: '/contact', icon: MessageCircle },
    ];

    const services = [
        'Residential Projects',
        'Commercial Spaces',
        'Investment Opportunities',
        'Property Management',
    ];

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email.trim()) {
            setIsSubscribed(true);
            setEmail('');
            setTimeout(() => setIsSubscribed(false), 3000);
        }
    };

    return (
        <footer className="footer">
            {/* Main Footer */}
            <div className="footer-main">
                <div className="container">
                    <div className="footer-grid">
                        {/* Brand Section */}
                        <div className="footer-brand">
                            <div className="footer-logo">
                                <div className="footer-logo-icon">
                                    <span>II</span>
                                </div>
                                <div className="footer-logo-text">
                                    <span className="footer-logo-name">Insaat Infra</span>
                                    <span className="footer-logo-sub">Projects Pvt Ltd</span>
                                </div>
                            </div>
                            <p className="footer-desc">
                                Top Real Estate Developer in Sangareddy. Crafting exceptional living spaces with uncompromising quality,
                                innovative design, and unwavering commitment to excellence.
                            </p>
                            <div className="footer-socials">
                                <a href="#" className="footer-social-btn" title="Facebook" aria-label="Facebook">
                                    <Facebook size={18} />
                                </a>
                                <a href="#" className="footer-social-btn" title="Instagram" aria-label="Instagram">
                                    <Instagram size={18} />
                                </a>
                                <a href="#" className="footer-social-btn" title="LinkedIn" aria-label="LinkedIn">
                                    <Linkedin size={18} />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="footer-section">
                            <h3 className="footer-section-title">Quick Links</h3>
                            <ul className="footer-links">
                                {quickLinks.map((link) => {
                                    const IconComponent = link.icon;
                                    return (
                                        <li key={link.name}>
                                            <Link to={link.path} className="footer-link">
                                                <IconComponent size={16} />
                                                <span>{link.name}</span>
                                                <ArrowRight size={14} />
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="footer-section">
                            <h3 className="footer-section-title">Our Services</h3>
                            <ul className="footer-services">
                                {services.map((service) => (
                                    <li key={service} className="footer-service-item">
                                        <CheckCircle size={14} />
                                        <span>{service}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact & Newsletter */}
                        <div className="footer-section">
                            <h3 className="footer-section-title">Get In Touch</h3>
                            <div className="footer-contact-items">
                                <div className="footer-contact-item">
                                    <div className="footer-contact-icon">
                                        <MapPin size={16} />
                                    </div>
                                    <div className="footer-contact-info">
                                        <span>Address</span>
                                        <p>Plot No. 35, Shaikpet, Hyderabad, Telangana, India - 500008</p>
                                    </div>
                                </div>
                                <div className="footer-contact-item">
                                    <div className="footer-contact-icon">
                                        <Phone size={16} />
                                    </div>
                                    <div className="footer-contact-info">
                                        <span>Phone</span>
                                        <a href="tel:+919154491915">+91 91544 91915</a>
                                    </div>
                                </div>
                                <div className="footer-contact-item">
                                    <div className="footer-contact-icon">
                                        <Mail size={16} />
                                    </div>
                                    <div className="footer-contact-info">
                                        <span>Email</span>
                                        <a href="mailto:info@insaatinfra.in">info@insaatinfra.in</a>
                                    </div>
                                </div>
                            </div>

                            {/* Newsletter */}
                            <div className="footer-newsletter">
                                <h4 className="newsletter-title">Stay Updated</h4>
                                <p className="newsletter-desc">
                                    Get the latest updates on our projects and exclusive offers.
                                </p>
                                <form onSubmit={handleSubscribe} className="newsletter-form">
                                    <div className="newsletter-input-group">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your email"
                                            className="newsletter-input"
                                            required
                                        />
                                        <button type="submit" className="newsletter-btn">
                                            {isSubscribed ? <CheckCircle size={16} /> : <Send size={16} />}
                                        </button>
                                    </div>
                                    {isSubscribed && (
                                        <div className="newsletter-success">
                                            <CheckCircle size={14} />
                                            <span>Successfully subscribed!</span>
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-content">
                        <p className="footer-copy">
                            © 2026 Insaat Infra Projects Pvt Ltd. All rights reserved.
                        </p>
                        <div className="footer-bottom-links">
                            <a href="#" className="footer-bottom-link">Privacy Policy</a>
                            <span className="footer-separator">•</span>
                            <a href="#" className="footer-bottom-link">Terms & Conditions</a>
                            <span className="footer-separator">•</span>
                            <a href="#" className="footer-bottom-link">Sitemap</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
