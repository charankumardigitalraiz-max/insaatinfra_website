import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import {
    ArrowRight, CheckCircle2, Award, Users, Clock,
    Building2, ShieldCheck, TrendingUp, Phone,
    MapPin, Star, ChevronRight
} from 'lucide-react';
import '../styles/home.css';

const featuredProjects = [
    {
        id: 'insaat-capetown',
        title: "Insaat Capetown",
        location: "Kandi, Sangareddy",
        type: "Premium Apartments",
        image: "/images/apartments/capetown.png",
        status: "Upcoming",
    },
    {
        id: 'insaat-habitat',
        title: "Insaat Habitat",
        location: "Malkapur, Sangareddy",
        type: "Gated Community",
        image: "/images/layouts/habitat.png",
        status: "Completed",
    },
    {
        id: 'insaat-skyview',
        title: "Insaat Sky View",
        location: "Kandi, Sangareddy",
        type: "Luxury Residences",
        image: "/images/apartments/skyview.jpg",
        status: "Upcoming",
    },
];

const processSteps = [
    { num: '01', title: 'Explore Projects', desc: 'Browse our curated portfolio of premium residential and commercial properties.' },
    { num: '02', title: 'Schedule a Visit', desc: 'Book a free on-site visit with our expert team at a time convenient for you.' },
    { num: '03', title: 'Choose Your Home', desc: 'Select the perfect unit with guidance from our property consultants.' },
    { num: '04', title: 'Move In & Enjoy', desc: 'Seamless documentation and handover with full after-sales support.' },
];

const reasons = [
    { icon: <Building2 size={22} />, title: 'Premium Construction', desc: 'ISI-certified materials and world-class construction standards.' },
    { icon: <ShieldCheck size={22} />, title: 'RERA Approved', desc: 'All projects fully registered — safe, legal, and transparent.' },
    { icon: <TrendingUp size={22} />, title: 'High ROI Locations', desc: 'Strategically chosen sites with 20–30% annual appreciation.' },
    { icon: <Award size={22} />, title: 'Award-Winning Design', desc: 'Internationally inspired architecture by leading designers.' },
    { icon: <Users size={22} />, title: '500+ Happy Families', desc: 'A trusted name with a long trail of satisfied customers.' },
    { icon: <Clock size={22} />, title: 'On-Time Delivery', desc: 'Proven track record of honouring possession schedules.' },
];

const testimonials = [
    {
        name: 'Suresh Reddy',
        location: 'Sangareddy',
        text: 'Insaat Infra made our home-buying journey completely stress-free. The team was transparent and professional at every step.',
        rating: 5,
    },
    {
        name: 'Priya Nair',
        location: 'Hyderabad',
        text: 'We invested in Insaat Meadows and the value has already grown significantly. Highly recommended for anyone looking in Sangareddy.',
        rating: 5,
    },
    {
        name: 'Arun Kumar',
        location: 'Sangareddy',
        text: 'Beautiful design, top-quality materials, and exceptional customer service. Our villa feels like a dream come true.',
        rating: 5,
    },
];

const Home = () => {
    return (
        <main>
            <Hero />

            {/* ── About Snippet ─────────────────────── */}
            <section className="about-section">
                <div className="container">
                    <div className="about-grid">
                        {/* Images */}
                        <div className="about-img-box" data-aos="fade-right">
                            <div className="about-img-main">
                                <img
                                    src="/images/apartments/skyview.jpg"
                                    alt="Premium Construction"
                                />
                            </div>
                            <div className="about-img-secondary">
                                <img
                                    src="/images/layouts/habitat.png"
                                    alt="Modern Architecture"
                                />
                            </div>
                            <div className="about-badge">
                                <div className="about-badge-num">6+</div>
                                <div className="about-badge-label">Years of Excellence</div>
                            </div>
                            <div className="about-badge-2">
                                <Star size={14} fill="#f0a500" stroke="none" />
                                <span>RERA Certified</span>
                            </div>
                        </div>

                        {/* Text */}
                        <div className="about-text" data-aos="fade-left">
                            <span className="section-tag">Who We Are</span>
                            <h2 className="about-title">
                                Specialized in Modern<br />
                                <span>Infrastructure & Residential Excellence</span>
                            </h2>
                            <p className="about-desc">
                                Insaat Infra Projects Pvt Ltd is a premier developer and infrastructure company
                                based in Sangareddy. We are committed to building high-quality residential communities
                                and sustainable infrastructure that stand the test of time.
                            </p>

                            <div className="about-highlights stagger-animation">
                                {[
                                    'RERA Registered & Legal Transparency',
                                    'Architectural Excellence & Modern Design',
                                    'Strategic High-Growth Locations',
                                    'Sustainable & Eco-Friendly Construction',
                                    'Comprehensive Post-Sale Support',
                                    'Proven Track Record of Delivery',
                                ].map(item => (
                                    <div key={item} className="about-highlight-item hover-lift">
                                        <span className="about-check"><CheckCircle2 size={16} /></span>
                                        {item}
                                    </div>
                                ))}
                            </div>

                            <div className="about-cta">
                                <Link to="/about" className="btn btn-primary">
                                    Company Profile <ArrowRight size={16} />
                                </Link>
                                <a href="tel:+919154491915" className="about-phone-btn hover-lift">
                                    <div className="about-phone-icon"><Phone size={18} /></div>
                                    <div>
                                        <div className="about-phone-label">Direct Consultation</div>
                                        <div className="about-phone-num">+91 9322 22 2821</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Banner 1: Modern Luxury ────────────────── */}
            <section className="wide-banner" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2000")' }}>
                <div className="wide-banner-overlay" style={{ background: 'linear-gradient(90deg, rgba(10, 37, 64, 0.95) 0%, rgba(10, 37, 64, 0.85) 10%)' }} />
                <div className="container">
                    <div className="wide-banner-content" data-aos="fade-right">
                        <h2>Experience Modern <br />Luxury Living</h2>
                        <p>Our premium apartments offer the perfect blend of sophisticated design and world-class amenities.</p>
                        <Link to="/gallery" className="btn btn-secondary">View Sample Flat <ArrowRight size={16} /></Link>
                    </div>
                </div>
            </section>

            {/* ── Stats Strip ───────────────────────── */}
            <section className="stats-strip">
                <div className="container">
                    <div className="stats-strip-inner">
                        {[
                            { num: '5+', label: 'Residential Projects' },
                            { num: '500+', label: 'Happy Families' },
                            { num: '120+', label: 'Acres Developed' },
                            { num: '2018', label: 'Established Year' },
                        ].map((s, i) => (
                            <div key={i} className="stat-strip-item" data-aos="fade-up" data-aos-delay={i * 80}>
                                <div className="stat-num">{s.num}</div>
                                <div className="stat-label">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Featured Projects ──────────────────── */}
            <section className="projects-section">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-tag">Our Portfolio</span>
                        <h2 className="section-title">
                            Featured <span>Projects</span>
                        </h2>
                        <p className="section-sub">
                            Explore our most sought-after properties — each crafted with meticulous attention to detail.
                        </p>
                        <div className="section-divider" />
                    </div>

                    <div className="projects-grid">
                        {featuredProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>

                    <div className="projects-cta" data-aos="fade-up">
                        <Link to="/projects" className="btn btn-outline">
                            View All Projects <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── Banner 2: Strategic Investment ──────────── */}
            <section className="wide-banner" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000")' }}>
                <div className="wide-banner-overlay" style={{ background: 'linear-gradient(90deg, rgba(10, 37, 64, 0.95) 0%, rgba(10, 37, 64, 0.2) 100%)' }} />
                <div className="container">
                    <div className="wide-banner-content" data-aos="fade-left" style={{ marginLeft: 'auto', textAlign: 'right' }}>
                        <h2>Strategic Investment <br />High ROI Locations</h2>
                        <p>Secure your future with RERA approved projects in the most rapidly developing areas of Sangareddy.</p>
                        <Link to="/contact" className="btn btn-primary">Invest Now <ArrowRight size={16} /></Link>
                    </div>
                </div>
            </section>

            {/* ── Process / How It Works ─────────────── */}
            <section className="process-section">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-tag">Simple Process</span>
                        <h2 className="section-title">
                            How It <span>Works</span>
                        </h2>
                        <div className="section-divider" />
                    </div>
                    <div className="process-grid">
                        {processSteps.map((step, i) => (
                            <div key={i} className="process-step" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="process-num">{step.num}</div>
                                <div className="process-connector" />
                                <div className="process-body">
                                    <h4>{step.title}</h4>
                                    <p>{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Why Choose Us ─────────────────────── */}
            <section className="why-section">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-tag">Why Insaat Infra</span>
                        <h2 className="section-title">
                            What Sets Us <span>Apart?</span>
                        </h2>
                        <div className="section-divider" />
                    </div>
                    <div className="why-grid">
                        {reasons.map((r, i) => (
                            <div key={i} className="why-card" data-aos="fade-up" data-aos-delay={i * 80}>
                                <div className="why-card-icon">{r.icon}</div>
                                <h4>{r.title}</h4>
                                <p>{r.desc}</p>
                                <div className="why-card-line" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Banner 3: Community ────────────────────── */}
            <section className="wide-banner" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000")' }}>
                <div className="wide-banner-overlay" />
                <div className="container">
                    <div className="wide-banner-content" data-aos="zoom-in" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <h2>Building Communities <br />Creating Legacies</h2>
                        <p>Join 500+ happy families who have found their dream homes with Insaat Infra.</p>
                    </div>
                </div>
            </section>

            {/* ── Testimonials ──────────────────────── */}
            <section className="testimonials-section">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-tag">Client Stories</span>
                        <h2 className="section-title">
                            What Our <span>Customers Say</span>
                        </h2>
                        <div className="section-divider" />
                    </div>
                    <div className="testimonials-grid">
                        {testimonials.map((t, i) => (
                            <div key={i} className="testimonial-card" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="t-stars">
                                    {Array(t.rating).fill(0).map((_, j) => (
                                        <Star key={j} size={16} fill="#f0a500" stroke="none" />
                                    ))}
                                </div>
                                <p className="t-text">"{t.text}"</p>
                                <div className="t-author">
                                    <div className="t-avatar">{t.name.charAt(0)}</div>
                                    <div>
                                        <div className="t-name">{t.name}</div>
                                        <div className="t-loc"><MapPin size={12} /> {t.location}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ───────────────────────────────── */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-inner" data-aos="zoom-in">
                        <div className="cta-badge">🏠 Limited Units Available</div>
                        <h2>
                            Find Your Perfect <span>Dream Home</span> Today
                        </h2>
                        <p>
                            Schedule a free site visit or speak with our property experts.
                            Our team is here to guide you every step of the way.
                        </p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn btn-secondary">
                                Book A Free Site Visit <ArrowRight size={16} />
                            </Link>
                            <a href="tel:+919154491915" className="btn btn-outline-white">
                                <Phone size={16} /> Call Us Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
