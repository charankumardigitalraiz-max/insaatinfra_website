import React from 'react';
import { Target, Eye, Award, Users, TrendingUp, Shield, Heart, Star, CheckCircle, ArrowRight } from 'lucide-react';
import '../styles/about.css';

const About = () => {
    const stats = [
        { number: '500+', label: 'Happy Families', icon: Users },
        { number: '15+', label: 'Years Experience', icon: Award },
        { number: '15+', label: 'Projects Completed', icon: CheckCircle },
        { number: '98%', label: 'Client Satisfaction', icon: Star }
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
            name: 'Rajesh Kumar',
            role: 'Founder & CEO',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=500',
            desc: 'Visionary leader with 20+ years in real estate development.'
        },
        {
            name: 'Priya Sharma',
            role: 'Project Director',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=500',
            desc: 'Expert in project management and quality assurance.'
        },
        {
            name: 'Amit Patel',
            role: 'Technical Head',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=500',
            desc: 'Civil engineering specialist ensuring structural excellence.'
        }
    ];

    return (
        <main className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="hero-bg-pattern"></div>
                <div className="hero-floating-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                </div>
                <div className="container">
                    <div className="hero-content" data-aos="fade-up">
                        <div className="hero-inner">
                            <span className="hero-tag">About Insaat Infra</span>
                            <h1 className="hero-title">
                                Building Dreams,<br />
                                <span className="highlight">Creating Futures</span>
                            </h1>
                            <p className="hero-desc">
                                For over 15 years, we've been transforming landscapes into premium living spaces,
                                combining architectural excellence with sustainable development practices.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Stats Bar */}
                <div className="hero-stats">
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
                </div>
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
                                To create exceptional living spaces that enhance quality of life,
                                foster community development, and contribute positively to the environment
                                through sustainable and innovative construction practices.
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
                                To be the most trusted and preferred real estate developer in Telangana,
                                recognized for excellence in quality, innovation, and customer satisfaction,
                                setting new standards in residential development.
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
                        <h2 className="section-title">What Drives <span>Us Forward</span></h2>
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
                        <h2 className="section-title">Meet Our <span>Experts</span></h2>
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
                <div className="container">
                    <div className="cta-content" data-aos="fade-up">
                        <h2>Ready to Start Your Journey?</h2>
                        <p>
                            Discover our premium projects and find the perfect home for your family.
                            Let's build your dream together.
                        </p>
                        <div className="cta-buttons">
                            <a href="/projects" className="btn btn-primary">
                                View Projects <ArrowRight size={18} />
                            </a>
                            <a href="/contact" className="btn btn-secondary">
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
