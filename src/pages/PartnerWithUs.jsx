import React, { useState } from 'react';
import { Handshake, Send, CheckCircle } from 'lucide-react';
import '../styles/partner.css';

const PartnerWithUs = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    return (
        <main className="partner-page">
            <section className="partner-hero">
                <div className="hero-bg">
                    <img
                        src="https://images.unsplash.com/photo-1600880210119-75ee99bb4823?auto=format&fit=crop&q=80&w=2000"
                        alt="Partner With Us"
                    />
                </div>
                <div className="hero-overlay" />
                <div className="container">
                    <div className="hero-content" data-aos="fade-up">
                        <div className="hero-inner">
                            <span className="hero-tag">Business Collaboration</span>
                            <h1 className="hero-title">Partner With <span className="highlight">Insaat Infra</span></h1>
                            <p className="hero-desc">We believe in mutual growth. Join hands with Sangareddy's most trusted developer for rewarding partnership opportunities.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="partner-section">
                <div className="container">
                    <div className="partner-grid">
                        <div className="partner-info" data-aos="fade-right">
                            <h2 className="section-title">Why Partner <span>With Us?</span></h2>
                            <p className="about-text">
                                We offer transparent dealings, timely payments, and professional management
                                for all our business associates. We are looking for:
                            </p>
                            <ul className="partner-list">
                                <li>
                                    <CheckCircle size={20} />
                                    <span>Land Owners for Joint Ventures</span>
                                </li>
                                <li>
                                    <CheckCircle size={20} />
                                    <span>Property Channel Partners</span>
                                </li>
                                <li>
                                    <CheckCircle size={20} />
                                    <span>Material Suppliers & Vendors</span>
                                </li>
                                <li>
                                    <CheckCircle size={20} />
                                    <span>Architects & Designers</span>
                                </li>
                            </ul>
                        </div>

                        <div className="partner-form-wrap" data-aos="fade-left">
                            <div className="form-card">
                                <h3>Partnership Enquiry</h3>
                                {isSubmitted && (
                                    <div className="success-message">
                                        <CheckCircle size={20} />
                                        <span>Thank you! We will contact you soon.</span>
                                    </div>
                                )}
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label>Full Name</label>
                                        <input type="text" className="form-control" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Company Name (Optional)</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="email" className="form-control" required />
                                        </div>
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input type="tel" className="form-control" required />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Interest Area</label>
                                        <select className="form-control">
                                            <option>Joint Venture</option>
                                            <option>Channel Partner</option>
                                            <option>Vendor/Supplier</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Message</label>
                                        <textarea className="form-control" rows="4"></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100">
                                        Submit Request <Send size={18} />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default PartnerWithUs;
