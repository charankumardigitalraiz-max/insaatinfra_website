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
                            Transforming<br />
                            <span className="highlight">Visions into Reality</span>
                        </h1>

                        <p className="hero-subtitle">
                            Established in 2018, INSAAT INFRA PROJECTS PVT. LTD. is a leading construction
                            company specializing in premium apartments, luxury villas, and open plots.
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
                            <div className="hero-stat-number">2018</div>
                            <div className="hero-stat-label">Established Year</div>
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
                            <div className="hero-stat-number">6+</div>
                            <div className="hero-stat-label">Years of Excellence</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
