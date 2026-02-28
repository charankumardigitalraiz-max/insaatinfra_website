import React from 'react';
import { Target, Eye, Award, Users, TrendingUp, Shield, Heart, Star, CheckCircle, ArrowRight } from 'lucide-react';
import '../styles/about.css';

const About = () => {
    const stats = [
        { number: '500+', label: 'Happy Families', icon: Users },
        { number: '2018', label: 'Established Year', icon: Award },
        { number: '5+', label: 'Residential Projects', icon: CheckCircle },
        { number: '6+', label: 'Years of Excellence', icon: Star }
    ];

    const values = [
        {
            icon: Shield,
            title: 'Quality Assurance',
            desc: 'Every project undergoes rigorous quality checks to ensure the highest standards.'
        },
        {
            icon: Heart,
            title: 'Customer First',
            desc: 'Your satisfaction and comfort are at the heart of everything we do.'
        },
        {
            icon: TrendingUp,
            title: 'Innovation',
            desc: 'We embrace modern construction techniques and sustainable practices.'
        },
        {
            icon: Target,
            title: 'Transparency',
            desc: 'Clear communication and honest dealings build lasting relationships.'
        }
    ];

    const team = [
        {
            name: 'Expert Construction Team',
            role: 'Skilled Professionals',
            image: '/logo.png',
            desc: 'Our team of experienced engineers and architects ensures every project meets the highest standards of quality and excellence.'
        }
    ];

    return (
        <main className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="hero-bg">
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
                        alt="Corporate Excellence"
                    />
                </div>
                <div className="hero-overlay" />

                <div className="container">
                    <div className="hero-content" data-aos="fade-up">
                        <div className="hero-inner">
                            <span className="hero-tag">About Insaat Infra</span>
                            <h1 className="hero-title">
                                Building Dreams,<br />
                                <span className="highlight">Creating Futures</span>
                            </h1>
                            <p className="hero-desc">
                                Established in 2018, INSAAT INFRA PROJECTS PVT. LTD. is a leading construction
                                and infrastructure development company in Sangareddy, specializing in
                                commercial complexes, residential houses, and gated communities.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Stats Bar */}
                {/* <div className="hero-stats">
                    <div className="container">
                        <div className="hero-stats-inner">
                            {stats.map((stat, i) => {
                                const IconComponent = stat.icon;
                                return (
                                    <div key={i} className="hero-stat-item" data-aos="fade-up" data-aos-delay={i * 100}>
                                        <div className="hero-stat-icon">
                                            <IconComponent size={24} />
                                        </div>
                                        <div className="hero-stat-number">{stat.number}</div>
                                        <div className="hero-stat-label">{stat.label}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div> */}
            </section>

            {/* Mission & Vision */}
            <section className="mission-vision-section">
                <div className="container">
                    <div className="mv-grid">
                        <div className="mv-card mission-card" data-aos="fade-right">
                            <div className="mv-card-header">
                                <div className="mv-icon">
                                    <Target size={32} />
                                </div>
                                <h3>Our Mission</h3>
                            </div>
                            <p className="mv-text">
                                To deliver exceptional construction, infrastructure development, and
                                engineering services that exceed client expectations through expertise,
                                professional excellence, and teamwork.
                            </p>
                            <div className="mv-accent"></div>
                        </div>

                        <div className="mv-card vision-card" data-aos="fade-left">
                            <div className="mv-card-header">
                                <div className="mv-icon">
                                    <Eye size={32} />
                                </div>
                                <h3>Our Vision</h3>
                            </div>
                            <p className="mv-text">
                                To be a leader in the engineering and construction industry
                                recognized for commitment to quality, innovation, and customer satisfaction.
                            </p>
                            <div className="mv-accent"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="values-section">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-tag">Our Core Values</span>
                        <h2 className="section-title">What Drives <span className="highlight">Us Forward</span></h2>
                        <div className="section-divider"></div>
                    </div>

                    <div className="values-grid">
                        {values.map((value, i) => {
                            const IconComponent = value.icon;
                            return (
                                <div key={i} className="value-card" data-aos="fade-up" data-aos-delay={i * 100}>
                                    <div className="value-card-inner">
                                        <div className="value-number">0{i + 1}</div>
                                        <div className="value-icon-box">
                                            <IconComponent size={32} />
                                        </div>
                                        <h3 className="value-title">{value.title}</h3>
                                        <p className="value-desc">{value.desc}</p>
                                    </div>
                                    <div className="value-accent-line"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-tag">Leadership Team</span>
                        <h2 className="section-title">Meet Our <span className="highlight">Experts</span></h2>
                        <div className="section-divider"></div>
                    </div>

                    <div className="team-grid">
                        {team.map((member, i) => (
                            <div key={i} className="team-card" data-aos="fade-up" data-aos-delay={i * 150}>
                                <div className="team-image-wrapper">
                                    <img src={member.image} alt={member.name} className="team-image" />
                                    <div className="team-overlay">
                                        <div className="team-social-links">
                                            <a href="#" className="team-social-link">LinkedIn</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-content">
                                    <h4 className="team-name">{member.name}</h4>
                                    <span className="team-role">{member.role}</span>
                                    <p className="team-desc">{member.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="about-cta-section">
                <div className="wide-banner-overlay" />
                <div className="container">
                    <div className="cta-content" data-aos="fade-up">
                        <span className="section-tag" style={{ color: 'var(--secondary)' }}>Get Started</span>
                        <h2 className="section-title" style={{ color: 'white' }}>Ready to Start Your <span className="highlight">Journey?</span></h2>
                        <p>
                            Discover our premium projects and find the perfect home for your family.
                            Let's build your dream together.
                        </p>
                        <div className="cta-buttons">
                            <a href="/projects" className="btn btn-primary">
                                View Projects <ArrowRight size={18} />
                            </a>
                            <a href="/contact" className="btn btn-outline-white">
                                Get In Touch
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
