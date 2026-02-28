import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, MapPin, Building2 } from 'lucide-react';
import '../styles/hero.css';
import '../styles/banners.css';

const Hero = () => {
    return (
        <section className="hero">
            {/* Background */}
            <div className="hero-bg">
                <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000"
                    alt="Cinematic Real Estate"
                />
            </div>
            <div className="hero-overlay" />

            {/* Content */}
            <div className="hero-content">
                <div className="container">
                    <div className="hero-inner" data-aos="fade-up">
                        <div className="hero-tag">
                            <span className="hero-tag-line" />
                            Premier Real Estate & Infrastructure · Sangareddy
                        </div>

                        <h1 className="hero-title">
                            Find Your<br />
                            <span className="highlight">Perfect Flats & Plots</span>
                        </h1>

                        <p className="hero-subtitle">
                            Discover premium apartments, luxury villas, and high-growth open plots
                            designed for excellence and built with trust.
                        </p>

                        {/* Property Search UI */}
                        {/* <div className="hero-search-wrapper">
                            <div className="search-item">
                                <label><MapPin size={10} /> Location</label>
                                <select>
                                    <option>Sangareddy</option>
                                    <option>Kandi</option>
                                    <option>Malkapur</option>
                                </select>
                            </div>
                            <div className="search-item">
                                <label><Building2 size={10} /> Property Type</label>
                                <select>
                                    <option>Premium Apartments</option>
                                    <option>Luxury Villas</option>
                                    <option>Open Plots</option>
                                </select>
                            </div>
                            <div className="search-item">
                                <label>Project Status</label>
                                <select>
                                    <option>Ongoing</option>
                                    <option>Ready to Move</option>
                                    <option>Upcoming</option>
                                </select>
                            </div>
                            <button className="search-btn">
                                <Search size={20} />
                                <span>Search</span>
                            </button>
                        </div> */}

                        <div className="hero-actions" style={{ marginTop: '30px' }}>
                            <Link to="/projects" className="btn btn-primary">
                                Explore All Projects <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="hero-scroll">
                <span>Explore</span>
                <div className="scroll-indicator">
                    <div className="scroll-dot" />
                </div>
            </div>

            {/* Stats Bar */}
            <div className="hero-stats">
                <div className="container">
                    <div className="hero-stats-inner">
                        <div className="hero-stat-item" data-aos="fade-up" data-aos-delay="0">
                            <div className="hero-stat-number">2018</div>
                            <div className="hero-stat-label">Since</div>
                        </div>
                        <div className="hero-stat-item" data-aos="fade-up" data-aos-delay="100">
                            <div className="hero-stat-number">500+</div>
                            <div className="hero-stat-label">Happy Families</div>
                        </div>
                        <div className="hero-stat-item" data-aos="fade-up" data-aos-delay="200">
                            <div className="hero-stat-number">120+</div>
                            <div className="hero-stat-label">Acres Developed</div>
                        </div>
                        <div className="hero-stat-item" data-aos="fade-up" data-aos-delay="300">
                            <div className="hero-stat-number">RERA</div>
                            <div className="hero-stat-label">Certified</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
