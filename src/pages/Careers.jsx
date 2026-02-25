import React from 'react';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';
import '../styles/careers.css';

const Careers = () => {
    const jobs = [
        {
            id: 1,
            title: 'Sales Manager',
            location: 'Sangareddy / Hyderabad',
            type: 'Full Time',
            desc: 'Experienced real estate sales professional with 3+ years experience.'
        },
        {
            id: 2,
            title: 'Site Supervisor',
            location: 'Sangareddy',
            type: 'Full Time',
            desc: 'Civil engineer with experience in residential construction projects.'
        }
    ];

    return (
        <main className="careers-page">
            <section className="careers-hero">
                <div className="container">
                    <div className="hero-content" data-aos="fade-up">
                        <div className="hero-inner">
                            <span className="hero-tag">Join Our Team</span>
                            <h1 className="hero-title">Build Your <span className="highlight">Career</span> With Us</h1>
                            <p className="hero-desc">We are always looking for passionate individuals who want to make a difference in the real estate industry.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="careers-section">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <h2 className="section-title">Current <span>Openings</span></h2>
                        <div className="section-divider"></div>
                    </div>

                    <div className="jobs-grid">
                        {jobs.map((job, i) => (
                            <div key={job.id} className="job-card" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="job-info">
                                    <h3 className="job-title">{job.title}</h3>
                                    <div className="job-meta">
                                        <span><MapPin size={14} /> {job.location}</span>
                                        <span><Clock size={14} /> {job.type}</span>
                                    </div>
                                    <p className="job-desc">{job.desc}</p>
                                </div>
                                <button className="btn btn-primary">
                                    Apply Now <ArrowRight size={16} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Careers;
