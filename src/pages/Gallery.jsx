import React, { useState } from 'react';
import { ImageIcon, Maximize2, X } from 'lucide-react';
import '../styles/gallery.css';

const Gallery = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedImage, setSelectedImage] = useState(null);

    const galleryItems = [
        {
            id: 1,
            category: 'apartments',
            title: 'Insaat Bliss - Exterior',
            image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000',
            desc: 'Modern facade design of Insaat Bliss Apartments.'
        },
        {
            id: 2,
            category: 'plots',
            title: 'Insaat Meadows - Layout',
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000',
            desc: 'Spacious open plots at Bachepally Village.'
        },
        {
            id: 3,
            category: 'construction',
            title: 'Construction in Progress',
            image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1000',
            desc: 'Site completion and quality checks.'
        },
        {
            id: 4,
            category: 'interiors',
            title: 'Luxury Living Room',
            image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000',
            desc: 'High-end interior design at Insaat Bliss.'
        },
        {
            id: 5,
            category: 'apartments',
            title: 'Insaat Bliss - Night View',
            image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1000',
            desc: 'Elegant lighting and landscape architecture.'
        },
        {
            id: 6,
            category: 'plots',
            title: 'Meadows Greenery',
            image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=1000',
            desc: 'Eco-friendly sustainable plot development.'
        }
    ];

    const filters = [
        { id: 'all', label: 'All Photos' },
        { id: 'apartments', label: 'Apartments' },
        { id: 'plots', label: 'Open Plots' },
        { id: 'interiors', label: 'Interiors' },
        { id: 'construction', label: 'Construction' }
    ];

    const filteredItems = activeFilter === 'all'
        ? galleryItems
        : galleryItems.filter(item => item.category === activeFilter);

    return (
        <main className="gallery-page">
            {/* Hero Section */}
            <section className="gallery-hero">
                <div className="hero-bg-pattern"></div>
                <div className="container">
                    <div className="hero-content" data-aos="fade-up">
                        <div className="hero-inner">
                            <span className="hero-tag">Visual Portfolio</span>
                            <h1 className="hero-title">
                                Our Journey in <span className="highlight">Pictures</span>
                            </h1>
                            <p className="hero-desc">
                                Explore our projects through high-quality visuals, from architectural
                                renderings to real on-site completion photos.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="gallery-section">
                <div className="container">
                    {/* Filter Tabs */}
                    <div className="gallery-controls" data-aos="fade-up">
                        <div className="gallery-tabs">
                            {filters.map(filter => (
                                <button
                                    key={filter.id}
                                    className={`gallery-tab ${activeFilter === filter.id ? 'active' : ''}`}
                                    onClick={() => setActiveFilter(filter.id)}
                                >
                                    {filter.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Masonry Grid */}
                    <div className="gallery-grid">
                        {filteredItems.map((item, i) => (
                            <div
                                key={item.id}
                                className="gallery-item"
                                data-aos="fade-up"
                                data-aos-delay={i * 100}
                                onClick={() => setSelectedImage(item)}
                            >
                                <img src={item.image} alt={item.title} />
                                <div className="gallery-overlay">
                                    <div className="gallery-content">
                                        <h4>{item.title}</h4>
                                        <p>{item.desc}</p>
                                    </div>
                                    <div className="gallery-view-btn">
                                        <Maximize2 size={18} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox - Simple Modal */}
            {selectedImage && (
                <div className="gallery-lightbox" onClick={() => setSelectedImage(null)}>
                    <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
                        <X size={32} />
                    </button>
                    <div className="lightbox-content" onClick={e => e.stopPropagation()}>
                        <img src={selectedImage.image} alt={selectedImage.title} />
                        <div className="lightbox-caption">
                            <h3>{selectedImage.title}</h3>
                            <p>{selectedImage.desc}</p>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
};

export default Gallery;
