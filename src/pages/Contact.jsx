import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Linkedin, Clock, MessageCircle, CheckCircle } from 'lucide-react';
import '../styles/contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    const contactCards = [
        {
            icon: <Phone size={32} />,
            title: 'Call Us',
            content: '+91 91544 91915',
            subtext: 'Mon - Sat: 9AM - 7PM',
            link: 'tel:+919154491915',
            color: 'sapphire'
        },
        {
            icon: <Mail size={32} />,
            title: 'Email Us',
            content: 'info@insaatinfra.in',
            subtext: 'We reply within 24 hours',
            link: 'mailto:info@insaatinfra.in',
            color: 'emerald'
        },
        {
            icon: <MapPin size={32} />,
            title: 'Visit Us',
            content: 'Plot No. 35, Shaikpet',
            subtext: 'Hyderabad, Telangana - 500008',
            link: 'https://goo.gl/maps/shaikpet-hyderabad',
            color: 'ruby'
        }
    ];

    const officeHours = [
        { day: 'Monday - Friday', hours: '9:00 AM - 7:00 PM' },
        { day: 'Saturday', hours: '9:00 AM - 5:00 PM' },
        { day: 'Sunday', hours: 'Closed' }
    ];

    return (
        <main className="contact-page">
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="hero-bg-pattern"></div>
                <div className="hero-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                </div>
                <div className="container">
                    <div className="hero-content" data-aos="fade-up">
                        <div className="hero-inner">
                            <span className="hero-tag">Get In Touch</span>
                            <h1 className="hero-title">
                                Let's Start a<br />
                                <span className="highlight">Conversation</span>
                            </h1>
                            <p className="hero-desc">
                                Ready to turn your property dreams into reality? We're here to help you
                                every step of the way with expert guidance and personalized solutions.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Stats Bar */}
                <div className="hero-stats">
                    <div className="container">
                        <div className="hero-stats-inner">
                            <div className="hero-stat-item" data-aos="fade-up" data-aos-delay="0">
                                <div className="hero-stat-number">24/7</div>
                                <div className="hero-stat-label">Support Available</div>
                            </div>
                            <div className="hero-stat-item" data-aos="fade-up" data-aos-delay="100">
                                <div className="hero-stat-number">500+</div>
                                <div className="hero-stat-label">Happy Families</div>
                            </div>
                            <div className="hero-stat-item" data-aos="fade-up" data-aos-delay="200">
                                <div className="hero-stat-number">15+</div>
                                <div className="hero-stat-label">Years Experience</div>
                            </div>
                            <div className="hero-stat-item" data-aos="fade-up" data-aos-delay="300">
                                <div className="hero-stat-number">98%</div>
                                <div className="hero-stat-label">Client Satisfaction</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Cards Section */}
            <section className="contact-cards-section">
                <div className="container">
                    <div className="contact-cards-grid">
                        {contactCards.map((card, i) => (
                            <a
                                key={i}
                                href={card.link}
                                className={`contact-card-link ${card.color}`}
                                data-aos="fade-up"
                                data-aos-delay={i * 100}
                            >
                                <div className="contact-card">
                                    <div className="card-icon-wrapper">
                                        <div className="card-icon-bg"></div>
                                        {card.icon}
                                    </div>
                                    <div className="card-content">
                                        <h3 className="card-title">{card.title}</h3>
                                        <p className="card-main">{card.content}</p>
                                        <p className="card-sub">{card.subtext}</p>
                                    </div>
                                    <div className="card-arrow">
                                        <Send size={18} />
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="contact-main-section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Left: Info & Hours */}
                        <div className="contact-info" data-aos="fade-right">
                            <div className="info-header">
                                <h2>Ready to Get Started?</h2>
                                <p>
                                    Have questions about our projects or want to schedule a site visit?
                                    Fill out the form or reach out to us using the contact details below.
                                    We're here to help you find your dream home.
                                </p>
                            </div>

                            <div className="office-hours">
                                <div className="hours-header">
                                    <Clock size={24} />
                                    <h3>Office Hours</h3>
                                </div>
                                <div className="hours-list">
                                    {officeHours.map((item, i) => (
                                        <div key={i} className="hours-item">
                                            <span className="day">{item.day}</span>
                                            <span className="time">{item.hours}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="social-section">
                                <h3>Follow Us</h3>
                                <p>Stay updated with our latest projects and offers</p>
                                <div className="social-links">
                                    <a href="#" className="social-link facebook" aria-label="Facebook">
                                        <Facebook size={20} />
                                    </a>
                                    <a href="#" className="social-link instagram" aria-label="Instagram">
                                        <Instagram size={20} />
                                    </a>
                                    <a href="#" className="social-link linkedin" aria-label="LinkedIn">
                                        <Linkedin size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right: Form */}
                        <div className="contact-form-wrap" data-aos="fade-left">
                            <div className="form-header">
                                <MessageCircle size={28} />
                                <h3>Send Us a Message</h3>
                                <p>We'll get back to you within 24 hours</p>
                            </div>

                            {isSubmitted && (
                                <div className="success-message">
                                    <CheckCircle size={24} />
                                    <span>Message sent successfully! We'll get back to you soon.</span>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label className="form-label">Full Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Email Address *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="john@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label className="form-label">Phone Number *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            className="form-control"
                                            placeholder="+91 91544 91915"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Subject</label>
                                        <select
                                            name="subject"
                                            className="form-control"
                                            value={formData.subject}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select Subject</option>
                                            <option value="enquiry">Project Enquiry</option>
                                            <option value="visit">Site Visit Request</option>
                                            <option value="investment">Investment Opportunity</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Your Message *</label>
                                    <textarea
                                        name="message"
                                        className="form-control"
                                        rows="6"
                                        placeholder="Tell us how we can help you..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary form-submit">
                                    <Send size={18} />
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="map-section">
                <div className="container">
                    <div className="map-header" data-aos="fade-up">
                        <h2>Find Us Here</h2>
                        <p>Visit our office for personalized consultation</p>
                    </div>
                    <div className="map-container" data-aos="fade-up">
                        <iframe
                            title="Location Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.447548!2d78.397123!3d17.411624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96cea0000001%3A0x0!2zMTfCsDI0JzQxLjkiTiA3OMKwMjMnNDkuNiJF!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
