import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronRight, Home, Building, Users, MessageCircle, Image, FileText, Briefcase } from 'lucide-react';
import '../styles/navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 60);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    // Prevent body scroll when menu open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    const navLinks = [
        { name: 'Home', path: '/', icon: Home },
        { name: 'About Us', path: '/about', icon: Users },
        { name: 'Projects', path: '/projects', icon: Building },
        { name: 'Gallery', path: '/gallery', icon: Image },
        { name: 'News', path: '/news', icon: FileText },
        { name: 'Careers', path: '/careers', icon: Briefcase },
        { name: 'Contact Us', path: '/contact', icon: MessageCircle },
    ];

    const isHome = location.pathname === '/';

    return (
        <>
            <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
                <div className="container nav-wrapper">
                    {/* Navbar Content */}
                    <div className="nav-content">
                        {/* Logo Section */}
                        <Link to="/" className="nav-logo">
                            <div className="nav-logo-icon">
                                <img src="/logo.png" alt="Insaat Infra Logo" className="logo-image" />
                            </div>
                            {/* <div className="nav-logo-text">
                                <span className="nav-logo-name">Insaat Infra</span>
                                <span className="nav-logo-sub">Projects Pvt Ltd</span>
                            </div> */}
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="nav-menu">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`nav-item ${location.pathname === link.path ? 'active' : ''}`}
                                >
                                    <span>{link.name}</span>
                                </Link>
                            ))}
                        </nav>

                        {/* Header Actions */}
                        <div className="nav-actions">
                            <a href="tel:+919154491915" className="btn-enquire">
                                <Phone size={16} />
                                <span>Enquire Now</span>
                            </a>

                            <button
                                className="mobile-toggle"
                                onClick={() => setIsOpen(true)}
                                aria-label="Open menu"
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Overlay */}
            <div
                className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                <div className="mobile-menu-header">
                    <div className="mobile-logo">
                        <div className="nav-logo-icon">
                            <img src='/logo.png' alt="Logo" />
                        </div>
                        {/* <div className="nav-logo-text">
                            <span className="nav-logo-name">Insaat Infra</span>
                            <span className="nav-logo-sub">Projects Pvt Ltd</span>
                        </div> */}
                    </div>
                    <button
                        className="mobile-menu-close"
                        onClick={() => setIsOpen(false)}
                        aria-label="Close"
                    >
                        <X size={24} />
                    </button>
                </div>

                <nav className="mobile-menu-nav">
                    {navLinks.map((link) => {
                        const IconComponent = link.icon;
                        return (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                                onClick={() => setIsOpen(false)}
                            >
                                <IconComponent size={20} />
                                <span>{link.name}</span>
                                <ChevronRight size={16} />
                            </Link>
                        );
                    })}
                </nav>

                <div className="mobile-menu-footer">
                    <div className="mobile-contacts">
                        <a href="tel:+919154491915" className="mobile-contact-link">
                            <Phone size={16} />
                            <span>+91 9322 22 2821</span>
                        </a>
                        <a href="mailto:info@insaatinfra.in" className="mobile-contact-link">
                            <Mail size={16} />
                            <span>info@insaatinfra.in</span>
                        </a>
                    </div>
                    <a href="tel:+919154491915" className="btn btn-primary mobile-cta">
                        <Phone size={16} />
                        <span>Call Us Now</span>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;
