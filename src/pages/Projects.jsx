import React, { useState } from 'react';
import { Filter, Search, MapPin, Home, ArrowRight, CheckCircle, Star, Award, Users, TrendingUp } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import '../styles/projects.css';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    const projects = [
        // Apartments
        {
            id: 'insaat-glow',
            title: 'INSAAT Glow',
            location: 'Pothireddipally, Sangareddy',
            type: 'Apartment',
            image: '/images/apartments/glow.jpg',
            status: 'Upcoming',
            area: 'Luxury Living'
        },
        {
            id: 'insaat-capetown',
            title: 'INSAAT Capetown',
            location: 'Kandi, Sangareddy',
            type: 'Apartment',
            image: '/images/apartments/capetown.png',
            status: 'Ongoing',
            area: 'Premium Residences'
        },
        {
            id: 'insaat-skyview',
            title: 'INSAAT Sky View',
            location: 'Kandi, Sangareddy',
            type: 'Apartment',
            image: '/images/apartments/skyview.jpg',
            status: 'Upcoming',
            area: 'Luxury Suites'
        },
        {
            id: 'insaat-grace',
            title: 'INSAAT Grace',
            location: 'Tolichowki, Hyderabad',
            type: 'Apartment',
            image: '/images/apartments/grace.jpg',
            status: 'Upcoming',
            area: 'Luxury Living'
        },
        {
            id: 'insaat-abode',
            title: 'INSAAT Abode',
            location: 'Malkapur, Sangareddy',
            type: 'Apartment',
            image: '/images/apartments/capetown.png', // Fallback
            status: 'Ongoing',
            area: 'Premium Living'
        },
        {
            id: 'insaat-bliss',
            title: 'INSAAT Bliss',
            location: 'Malkapur, Sangareddy',
            type: 'Apartment',
            image: '/images/apartments/glow.jpg', // Fallback
            status: 'Completed',
            area: 'Modern Living'
        },
        // Layouts
        {
            id: 'insaat-habitat-layout',
            title: 'INSAAT Habitat',
            location: 'Malkapur, Sangareddy',
            type: 'Land Layout',
            image: '/images/layouts/habitat.png',
            status: 'Completed',
            area: 'Gated Community'
        },
        {
            id: 'insaat-serene',
            title: 'INSAAT Serene',
            location: 'Kohir, Sangareddy',
            type: 'Land Layout',
            image: '/images/layouts/serene.jpg',
            status: 'Completed',
            area: 'Premium Plots'
        },
        {
            id: 'insaat-meadows',
            title: 'INSAAT Meadows',
            location: 'Bachepally, Shankrampet',
            type: 'Land Layout',
            image: '/images/layouts/meadows.jpg',
            status: 'Completed',
            area: 'Gated Community'
        },
        {
            id: 'insaat-ecovalley',
            title: 'INSAAT Eco Valley',
            location: 'Sadasivapet, Sangareddy',
            type: 'Land Layout',
            image: '/images/layouts/ecovalley.jpg',
            status: 'Completed',
            area: 'Sustainable Living'
        },
        {
            id: 'insaat-tadlapally',
            title: 'Tadlapally Village Layout',
            location: 'Sangareddy',
            type: 'Land Layout',
            image: '/images/layouts/habitat.png', // Fallback
            status: 'Completed',
            area: 'Residential Plots'
        },
        // Villas
        {
            id: 'habitat-triplex',
            title: 'Habitat Triplex',
            location: 'Malkapur, Sangareddy',
            type: 'Villa',
            image: '/images/villas/habitat.jpg',
            status: 'Ready to Move',
            area: 'Luxury Triplex'
        },
        {
            id: 'serene-duplex',
            title: 'Serene Duplex',
            location: 'Kohir, Sangareddy',
            type: 'Villa',
            image: '/images/villas/serene.jpg',
            status: 'Ready to Move',
            area: 'Premium Duplex'
        },
        {
            id: 'lakeview-villas',
            title: 'Lakeview Villas',
            location: 'Malkapur, Sangareddy',
            type: 'Villa',
            image: '/images/villas/lakeview.jpg',
            status: 'Ongoing',
            area: 'Scenic Living'
        },
        // Commercial
        {
            id: 'motimahal',
            title: 'Motimahal Complex',
            location: 'Market Road, Sangareddy',
            type: 'Commercial',
            image: '/images/commercial/motimahal.jpg',
            status: 'Completed',
            area: 'Premium Retail'
        },
        // Interiors
        {
            id: 'pink-pearl',
            title: 'Pink Pearl Boutique',
            location: 'Sangareddy',
            type: 'Interior',
            image: '/images/commercial/motimahal.jpg',
            status: 'Completed',
            area: 'Designer Interiors'
        },
        {
            id: 'al-zabihah',
            title: 'Al-Zabihah Meat Mart',
            location: 'Tolichowki, Hyderabad',
            type: 'Interior',
            image: '/images/apartments/grace.jpg',
            status: 'Completed',
            area: 'Premium Commercial'
        }
    ];

    const filters = [
        { id: 'all', label: 'All Projects', count: projects.length },
        { id: 'apartment', label: 'Apartments', count: projects.filter(p => p.type === 'Apartment').length },
        { id: 'villa', label: 'Villas', count: projects.filter(p => p.type === 'Villa').length },
        { id: 'land', label: 'Land Layouts', count: projects.filter(p => p.type === 'Land Layout').length },
        { id: 'commercial', label: 'Commercial', count: projects.filter(p => p.type === 'Commercial').length },
        { id: 'interior', label: 'Interiors', count: projects.filter(p => p.type === 'Interior').length }
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
            desc: '6+ years of experience with 500+ satisfied families and 98% client satisfaction.'
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
            (activeFilter === 'apartment' && project.type === 'Apartment') ||
            (activeFilter === 'villa' && project.type === 'Villa') ||
            (activeFilter === 'land' && project.type === 'Land Layout') ||
            (activeFilter === 'commercial' && project.type === 'Commercial') ||
            (activeFilter === 'interior' && project.type === 'Interior');

        const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.location.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesFilter && matchesSearch;
    });

    return (
        <main className="projects-page">
            {/* Hero Section */}
            <section className="projects-hero">
                <div className="hero-bg">
                    <img
                        src="https://images.unsplash.com/photo-1545243424-0ce743321e11?auto=format&fit=crop&q=80&w=2000"
                        alt="Premium Projects"
                    />
                </div>
                <div className="hero-overlay" />

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
                {/* <div className="hero-stats">
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
                </div> */}
            </section>

            {/* Projects Section */}
            <section className="projects-section">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-tag">Explore Our Portfolio</span>
                        <h2 className="section-title">Featured <span className="highlight">Projects</span></h2>
                        <div className="section-divider"></div>
                    </div>

                    {/* Search and Filters */}
                    <div className="projects-controls-wrapper" data-aos="fade-up">
                        <div className="search-bar-container">
                            <div className="search-box">
                                <Search size={20} />
                                <input
                                    type="text"
                                    placeholder="Search projects by name or location..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="filter-tabs-container">
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
                        <h2 className="section-title">Investment <span className="highlight">Benefits</span></h2>
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
                <div className="wide-banner-overlay" />
                <div className="container">
                    <div className="cta-content" data-aos="fade-up">
                        <span className="section-tag" style={{ color: 'var(--secondary)' }}>Investment Hub</span>
                        <h2 className="section-title" style={{ color: 'white' }}>Ready to Invest in Your <span className="highlight">Future?</span></h2>
                        <p>
                            Join hundreds of satisfied families who have made the smart choice.
                            Let's discuss your investment options today.
                        </p>
                        <div className="cta-buttons">
                            <a href="/contact" className="btn btn-primary">
                                Schedule Site Visit <ArrowRight size={18} />
                            </a>
                            <a href="tel:+919322222821" className="btn btn-outline-white">
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
