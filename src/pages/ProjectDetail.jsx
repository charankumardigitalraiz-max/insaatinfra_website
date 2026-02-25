import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
    MapPin, Home, Building, CheckCircle, Phone, ArrowRight,
    ChevronRight, Star, Shield, Award, Clock, Maximize2,
    Layers, Zap, Droplets, PaintBucket, HardHat, Compass,
    Trees, Leaf, Dumbbell, Gamepad2, Baby
} from 'lucide-react';
import '../styles/project-detail.css';

const ProjectDetail = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);

    // Mock project data - normally this would come from an API
    const projectsData = {
        'insaat-meadows': {
            id: 'insaat-meadows',
            title: 'Insaat Meadows',
            location: 'Bachepally Village, Sangareddy',
            type: 'Open Plots',
            status: 'Ready to Construct',
            image: 'https://images.unsplash.com/photo-1500382017468-9049fee74a62?auto=format&fit=crop&q=80&w=1600',
            price: '₹25L - ₹45L',
            area: '150 - 300 sq yds',
            fullDesc: 'Insaat Meadows is a premium DTCP approved layout situated at Bachepally Village, Sangareddy District. Located on the NH-161 Hyderabad-Indore Economic Corridor, it offers exceptional connectivity and high appreciation potential. The project is designed with a focus on sustainability and community living, providing a perfect balance between nature and modern infrastructure.',
            highlights: [
                'DTCP Approved Layout',
                'NH-161 Economic Corridor',
                'Clear Title & Spot Registration',
                '100% Vaastu Compliant',
                'High Appreciation Potential',
                'Bank Loan Facility Available'
            ],
            amenities: [
                { name: 'Blacktop Roads', icon: Layers },
                { name: 'Underground Drainage', icon: Droplets },
                { name: 'Street Lights', icon: Zap },
                { name: 'Parks & Play Areas', icon: Trees },
                { name: 'Avenue Plantation', icon: Leaf },
                { name: '24/7 Security', icon: Shield }
            ],
            specs: [
                { category: 'Roads', detail: '40ft & 33ft wide blacktop roads with curbing.' },
                { category: 'Drainage', detail: 'Advanced underground drainage system.' },
                { category: 'Water', detail: 'Overhead tank for continuous water supply.' },
                { category: 'Electricity', detail: 'Dedicated transformers and street lighting.' }
            ],
            locationAdvantages: [
                { place: 'NH-161 Highway', time: '2 Mins' },
                { place: 'Sangareddy Town', time: '10 Mins' },
                { place: 'IIT Hyderabad', time: '20 Mins' },
                { place: 'ORR Exit', time: '25 Mins' }
            ],
            stats: [
                { label: 'Total Area', value: '25 Acres' },
                { label: 'Total Units', value: '180 Plots' },
                { label: 'Approval', value: 'DTCP' }
            ]
        },
        'insaat-bliss': {
            id: 'insaat-bliss',
            title: 'Insaat Bliss',
            location: 'Sangareddy Town',
            type: 'Luxury Apartments',
            status: 'Ongoing',
            image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1600',
            price: '₹40L - ₹75L',
            area: '1100 - 1800 sq ft',
            fullDesc: 'Insaat Bliss offers contemporary luxury apartments in the heart of Sangareddy. Designed for modern families, it combines aesthetic excellence with practical living spaces and premium amenities. Each home is crafted to maximize natural light and ventilation while offering breathtaking views of the city.',
            highlights: [
                'G+5 Premium Construction',
                'Central Location',
                'Earthquake Resistant Structure',
                'No Common Walls',
                'Luxury Clubhouse',
                'OC and CC Approved'
            ],
            amenities: [
                { name: 'Swimming Pool', icon: Droplets },
                { name: 'Luxury Gym', icon: Dumbbell },
                { name: 'Clubhouse', icon: Building },
                { name: 'Indoor Games', icon: Gamepad2 },
                { name: 'Kids Play Zone', icon: Baby },
                { name: 'Power Backup', icon: Zap }
            ],
            specs: [
                { category: 'Structure', detail: 'RCC Framed Structure with high quality concrete.' },
                { category: 'Flooring', detail: 'Premium Vitrified tiles in all rooms.' },
                { category: 'Doors', detail: 'Teak wood main door frame and shutters.' },
                { category: 'Kitchen', detail: 'Granite platform with stainless steel sink.' }
            ],
            locationAdvantages: [
                { place: 'District Collectorate', time: '5 Mins' },
                { place: 'Govt. Hospital', time: '8 Mins' },
                { place: 'St. Joseph School', time: '10 Mins' },
                { place: 'Railway Station', time: '15 Mins' }
            ],
            stats: [
                { label: 'Total Units', value: '120 Apartments' },
                { label: 'Configuration', value: '2 & 3 BHK' },
                { label: 'Possession', value: 'Dec 2025' }
            ]
        }
    };

    useEffect(() => {
        // Find project by id (slug)
        setProject(projectsData[id] || projectsData['insaat-meadows']);
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) return null;

    return (
        <main className="project-detail-page">
            {/* Immersive Hero Section */}
            {/* Immersive Hero Section - Mirroring Hero.jsx Structure */}
            <section className="hero project-hero">
                <div className="hero-bg">
                    <img src={project.image} alt={project.title} />
                </div>
                <div className="hero-overlay" />

                <div className="hero-content">
                    <div className="container">
                        <div className="hero-inner" data-aos="fade-up">
                            <nav className="breadcrumb">
                                <Link to="/">Home</Link> <ChevronRight size={14} />
                                <Link to="/projects">Projects</Link> <ChevronRight size={14} />
                                <span>{project.title}</span>
                            </nav>

                            <div className="hero-tag">
                                <span className="hero-tag-line" />
                                {project.type} · Premium Development
                            </div>

                            <h1 className="hero-title">{project.title}</h1>

                            <p className="hero-subtitle">
                                <MapPin size={20} style={{ marginRight: '8px', verticalAlign: 'middle', color: 'var(--secondary)' }} />
                                {project.location}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Standard Stats Bar - Mirroring Home Page */}
                <div className="hero-stats">
                    <div className="container">
                        <div className="hero-stats-inner">
                            <div className="hero-stat-item">
                                <div className="hero-stat-number">{project.price}</div>
                                <div className="hero-stat-label">Investment Range</div>
                            </div>
                            <div className="hero-stat-item">
                                <div className="hero-stat-number">{project.area}</div>
                                <div className="hero-stat-label">Unit Dimensions</div>
                            </div>
                            <div className="hero-stat-item">
                                <div className="hero-stat-number">{project.status}</div>
                                <div className="hero-stat-label">Project Status</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sticky Section Bar */}
            <div className="section-nav-wrapper">
                <div className="container">
                    <nav className="section-nav">
                        <a href="#overview">Overview</a>
                        <a href="#highlights">Highlights</a>
                        <a href="#amenities">Amenities</a>
                        <a href="#specifications">Specifications</a>
                        <a href="#location">Location</a>
                    </nav>
                </div>
            </div>

            <div className="container main-content-layout">
                <div className="content-area">
                    {/* Project Overview */}
                    <section id="overview" className="detail-section">
                        <div className="section-header-small">
                            <span className="tag">The Vision</span>
                            <h2>Project Overview</h2>
                        </div>
                        <p className="project-full-desc">{project.fullDesc}</p>

                        <div className="stats-grid-circles">
                            {project.stats.map((stat, i) => (
                                <div key={i} className="stat-circle-item">
                                    <div className="stat-circle-value">{stat.value}</div>
                                    <div className="stat-circle-label">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Project Highlights */}
                    <section id="highlights" className="detail-section highlight-bg">
                        <div className="section-header-small">
                            <span className="tag">Why This Project</span>
                            <h2>Core Highlights</h2>
                        </div>
                        <div className="highlights-grid">
                            {project.highlights.map((item, i) => (
                                <div key={i} className="highlight-item" data-aos="fade-up" data-aos-delay={i * 50}>
                                    <CheckCircle size={20} className="check-icon" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Amenities */}
                    <section id="amenities" className="detail-section">
                        <div className="section-header-small">
                            <span className="tag">Lifestyle</span>
                            <h2>Premium Amenities</h2>
                        </div>
                        <div className="amenities-grid-modern">
                            {project.amenities.map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <div key={i} className="amenity-card-modern" data-aos="fade-up" data-aos-delay={i * 80}>
                                        <div className="icon-box">
                                            <Icon size={24} />
                                        </div>
                                        <span>{item.name}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    {/* Specifications */}
                    <section id="specifications" className="detail-section">
                        <div className="section-header-small">
                            <span className="tag">Quality & Design</span>
                            <h2>Technical Specifications</h2>
                        </div>
                        <div className="specs-accordion">
                            {project.specs.map((spec, i) => (
                                <div key={i} className="spec-row">
                                    <div className="spec-icon">
                                        <HardHat size={18} />
                                    </div>
                                    <div className="spec-content">
                                        <h4>{spec.category}</h4>
                                        <p>{spec.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Location Advantages */}
                    <section id="location" className="detail-section">
                        <div className="section-header-small">
                            <span className="tag">Connectivty</span>
                            <h2>Location Advantages</h2>
                        </div>
                        <div className="location-grid-modern">
                            {project.locationAdvantages.map((item, i) => (
                                <div key={i} className="location-box">
                                    <div className="loc-info">
                                        <Compass size={18} />
                                        <h4>{item.place}</h4>
                                    </div>
                                    <div className="loc-time">
                                        <Clock size={16} />
                                        <span>{item.time}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Sidebar */}
                <aside className="sidebar-area">
                    <div className="sidebar-sticky">
                        <div className="enquiry-card">
                            <div className="enquiry-header">
                                <h3>Enquire Now</h3>
                                <p>Get pricing and floor plans today.</p>
                            </div>
                            <form className="enquiry-form">
                                <div className="form-group-modern">
                                    <input type="text" placeholder="Full Name" />
                                </div>
                                <div className="form-group-modern">
                                    <input type="email" placeholder="Email Address" />
                                </div>
                                <div className="form-group-modern">
                                    <input type="tel" placeholder="Phone Number" />
                                </div>
                                <div className="form-group-modern">
                                    <select>
                                        <option>Interested In</option>
                                        <option>Pricing Details</option>
                                        <option>Site Visit</option>
                                        <option>Brochure Request</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-primary w-100">
                                    Submit Request <ArrowRight size={18} />
                                </button>
                            </form>
                        </div>

                        <div className="expert-connect-card">
                            <div className="expert-avatar">
                                <Award size={32} />
                            </div>
                            <div className="expert-info">
                                <h4>Expert Guidance</h4>
                                <p>Talk to our property specialist for a personalized consultation.</p>
                                <a href="tel:+919154491915" className="btn-call-compact">
                                    <Phone size={16} /> +91 91544 91915
                                </a>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    );
};

export default ProjectDetail;
