import React from 'react';
import { FileText, Calendar, ArrowRight } from 'lucide-react';
import '../styles/news.css';

const News = () => {
    const newsItems = [
        {
            id: 1,
            title: 'Insaat Meadows Phase 2 Launch',
            date: 'March 15, 2024',
            category: 'Project Update',
            desc: 'We are excited to announce the launch of Phase 2 for Insaat Meadows at Bachepally.',
            image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1000'
        },
        {
            id: 2,
            title: 'Real Estate Trends in Sangareddy',
            date: 'February 28, 2024',
            category: 'Market News',
            desc: 'Sangareddy is emerging as the top investment destination in Telangana.',
            image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000'
        },
        // {
        //     id: ,
        //     title: 'Real Estate Trends in Sangareddy',
        //     date: 'February 28, 2024',
        //     category: 'Market News',
        //     desc: 'Sangareddy is emerging as the top investment destination in Telangana.',
        //     image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000'
        // }
    ];

    return (
        <main className="news-page">
            <section className="news-hero">
                <div className="hero-bg">
                    <img
                        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000"
                        alt="News & Updates"
                    />
                </div>
                <div className="hero-overlay" />
                <div className="container">
                    <div className="hero-content" data-aos="fade-up">
                        <div className="hero-inner">
                            <span className="hero-tag">News & Updates</span>
                            <h1 className="hero-title">Latest from <span className="highlight">Insaat Infra</span></h1>
                            <p className="hero-desc">Stay updated with our latest project milestones, property news, and company announcements.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="news-section">
                <div className="container">
                    <div className="news-grid">
                        {newsItems.map((item, i) => (
                            <article key={item.id} className="news-card" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="news-image">
                                    <img src={item.image} alt={item.title} />
                                    <div className="news-category">{item.category}</div>
                                </div>
                                <div className="news-content">
                                    <div className="news-date">
                                        <Calendar size={14} />
                                        <span>{item.date}</span>
                                    </div>
                                    <h2 className="news-title">{item.title}</h2>
                                    <p className="news-excerpt">{item.desc}</p>
                                    <button className="news-link">
                                        <span>Read More</span>
                                        <ArrowRight size={18} />
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default News;
