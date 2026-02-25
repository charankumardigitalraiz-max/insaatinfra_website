import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import '../styles/hero.css';

const Hero = () => {
    return (
        <section className="hero">
            {/* Background */}
            <div className="hero-bg">
                <img
                    src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=2000"
                    alt="Luxury Real Estate"
                />
            </div>
            <div className="hero-overlay" />

            {/* Modern Particle Effects */}
            <div className="hero-particles">
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* Content */}
            <div className="hero-content">
                <div className="container">
                    <div className="hero-inner" data-aos="fade-up">
                        <div className="hero-tag">
                            <span className="hero-tag-line" />
                            Premium Real Estate · Sangareddy
                        </div>

                        <h1 className="hero-title">
                            <span className="wave-text">E</span>
                            <span className="wave-text">l</span>
                            <span className="wave-text">e</span>
                            <span className="wave-text">v</span>
                            <span className="wave-text">a</span>
                            <span className="wave-text">t</span>
                            <span className="wave-text">i</span>
                            <span className="wave-text">n</span>
                            <span className="wave-text">g</span>
                            {' '}
                            <span className="highlight">Urban Living</span><br />
                            <span className="wave-text">W</span>
                            <span className="wave-text">i</span>
                            <span className="wave-text">t</span>
                            <span className="wave-text">h</span>
                            {' '}
                            <span className="wave-text">E</span>
                            <span className="wave-text">x</span>
                            <span className="wave-text">c</span>
                            <span className="wave-text">e</span>
                            <span className="wave-text">l</span>
                            <span className="wave-text">l</span>
                            <span className="wave-text">e</span>
                            <span className="wave-text">n</span>
                            <span className="wave-text">c</span>
                            <span className="wave-text">e</span>
                        </h1>

                        <p className="hero-subtitle">
                            Discover premium apartments, luxury villas and open plots in Sangareddy
                            designed for a lifestyle of comfort, luxury and nature.
                        </p>

                        <div className="hero-actions">
                            <Link to="/projects" className="btn btn-secondary btn-modern pulse-ring">
                                Explore Projects <ArrowRight size={18} />
                            </Link>
                            <Link to="/contact" className="btn btn-outline-white btn-modern">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="hero-scroll">
                <span>Scroll</span>
                <div className="scroll-indicator">
                    <div className="scroll-dot" />
                </div>
            </div>

            {/* Stats Bar */}
            <div className="hero-stats">
                <div className="container">
                    <div className="hero-stats-inner">
                        <div className="hero-stat-item" data-aos="fade-up" data-aos-delay="0">
                            <div className="hero-stat-number">15+</div>
                            <div className="hero-stat-label">Projects Delivered</div>
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
                            <div className="hero-stat-number">15+</div>
                            <div className="hero-stat-label">Years of Excellence</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
