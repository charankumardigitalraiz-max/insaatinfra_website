import React, { useState } from 'react';
import { Filter, Search, MapPin, Home, ArrowRight, CheckCircle, Star, Award, Users, TrendingUp } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import '../styles/projects.css';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    const projects = [
        {
            id: 'insaat-meadows',
            title: 'Insaat Meadows',
            location: 'Sangareddy (Bachepally Village)',
            type: 'Open Plots',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=500',
            status: 'Ready to Construct',
            price: '₹25L - ₹45L',
            area: '150 - 300 sq yds'
        },
        {
            id: 'insaat-bliss',
            title: 'Insaat Bliss',
            location: 'Sangareddy',
            type: 'Luxury Apartments',
            image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=500',
            status: 'Upcoming',
            price: '₹40L - ₹75L',
            area: '1100 - 1800 sq ft'
        },
        {
            title: 'Insaat Glow',
            location: 'Sangareddy',
            type: 'Premium Development',
            image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=500',
            status: 'Ongoing',
            price: '₹55L - ₹1.2Cr',
            area: '1500 - 3000 sq ft'
        }
    ];

    const filters = [
        { id: 'all', label: 'All Projects', count: projects.length },
        { id: 'residential', label: 'Residential', count: projects.filter(p => p.type === 'Residential').length },
        { id: 'commercial', label: 'Commercial', count: projects.filter(p => p.type === 'Commercial').length },
        { id: 'ready', label: 'Ready to Move', count: projects.filter(p => p.status === 'Ready to Move').length },
        { id: 'construction', label: 'Under Construction', count: projects.filter(p => p.status === 'Under Construction').length }
    ];

    const investPoints = [
        {
            icon: <CheckCircle size={32} />,
            title: 'Prime Location',
            desc: 'Strategically located in Sangareddy with excellent connectivity and infrastructure.'
        },
        {
            icon: <TrendingUp size={32} />,
            title: 'High ROI',
            desc: 'Consistent appreciation in property values with strong rental yields.'
        },
        {
            icon: <Award size={32} />,
            title: 'Quality Construction',
            desc: 'Premium materials and modern construction techniques ensuring longevity.'
        },
        {
            icon: <Users size={32} />,
            title: 'Trusted Developer',
            desc: '15+ years of experience with 500+ satisfied families and 98% client satisfaction.'
        },
        {
            icon: <Home size={32} />,
            title: 'Modern Amenities',
            desc: 'State-of-the-art facilities including parks, gyms, and community spaces.'
        },
        {
            icon: <Star size={32} />,
            title: 'After Sales Support',
            desc: 'Comprehensive maintenance and support services post possession.'
        }
    ];

    const filtered = projects.filter(project => {
        const matchesFilter = activeFilter === 'all' ||
            (activeFilter === 'residential' && project.type === 'Residential') ||
            (activeFilter === 'commercial' && project.type === 'Commercial') ||
            (activeFilter === 'ready' && project.status === 'Ready to Move') ||
            (activeFilter === 'construction' && project.status === 'Under Construction');

        const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.location.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesFilter && matchesSearch;
    });

    return (
        <main className="projects-page">
            {/* Hero Section */}
            <section className="projects-hero">
                <div className="hero-bg-pattern"></div>
                <div className="hero-particles">
                    <div className="particle particle-1"></div>
                    <div className="particle particle-2"></div>
                    <div className="particle particle-3"></div>
                </div>
                <div className="container">
                    <div className="hero-content" data-aos="fade-up">
                        <div className="hero-inner">
                            <span className="hero-tag">Our Projects</span>
                            <h1 className="hero-title">
                                Crafting Dreams into<br />
                                <span className="highlight">Reality</span>
                            </h1>
                            <p className="hero-desc">
                                Discover our portfolio of premium residential and commercial projects
                                designed to exceed expectations and create lasting value.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Stats Bar */}
                <div className="hero-stats">
                    <div className="container">
                        <div className="hero-stats-inner">
                            <div className="hero-stat-item" data-aos="fade-up" data-aos-delay="0">
                                <div className="hero-stat-number">50+</div>
                                <div className="hero-stat-label">Projects Completed</div>
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
                                <div className="hero-stat-label">Years Experience</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="projects-section">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-tag">Explore Our Portfolio</span>
                        <h2 className="section-title">Featured <span>Projects</span></h2>
                        <div className="section-divider"></div>
                    </div>

                    {/* Search and Filters */}
                    <div className="projects-controls-wrapper" data-aos="fade-up">
                        <div className="projects-controls-bar">
                            <div className="search-box">
                                <Search size={18} />
                                <input
                                    type="text"
                                    placeholder="Search by name or location..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>

                            <div className="filter-divider"></div>

                            <div className="filter-tabs">
                                {filters.map((filter) => (
                                    <button
                                        key={filter.id}
                                        className={`filter-tab ${activeFilter === filter.id ? 'active' : ''}`}
                                        onClick={() => setActiveFilter(filter.id)}
                                    >
                                        <span>{filter.label}</span>
                                        <span className="filter-count">{filter.count}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className="projects-grid">
                        {filtered.map((project, i) => (
                            <div key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                                <ProjectCard {...project} />
                            </div>
                        ))}
                    </div>

                    {filtered.length === 0 && (
                        <div className="no-results" data-aos="fade-up">
                            <div className="no-results-icon">🏗️</div>
                            <h3>No projects found</h3>
                            <p>Try adjusting your search or filter criteria.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Investment Benefits */}
            <section className="invest-section">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-tag">Why Choose Us</span>
                        <h2 className="section-title">Investment <span>Benefits</span></h2>
                        <div className="section-divider"></div>
                        <p className="section-desc">
                            Discover why thousands of families trust us with their investment decisions
                        </p>
                    </div>

                    <div className="invest-grid">
                        {investPoints.map((item, i) => (
                            <div key={i} className="invest-card" data-aos="fade-up" data-aos-delay={i * 80}>
                                <div className="invest-card-inner">
                                    <div className="invest-number">0{i + 1}</div>
                                    <div className="invest-icon-box">
                                        {item.icon}
                                    </div>
                                    <h3 className="invest-title">{item.title}</h3>
                                    <p className="invest-desc">{item.desc}</p>
                                </div>
                                <div className="invest-accent-line"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="projects-cta-section">
                <div className="container">
                    <div className="cta-content" data-aos="fade-up">
                        <h2>Ready to Invest in Your Future?</h2>
                        <p>
                            Join hundreds of satisfied families who have made the smart choice.
                            Let's discuss your investment options today.
                        </p>
                        <div className="cta-buttons">
                            <a href="/contact" className="btn btn-primary">
                                Schedule Site Visit <ArrowRight size={18} />
                            </a>
                            <a href="tel:+919154491915" className="btn btn-secondary">
                                Call Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Projects;
