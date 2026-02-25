import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Home, Calendar, Ruler, IndianRupee } from 'lucide-react';
import '../styles/projectcard.css';

const ProjectCard = ({ title, location, type, image, status, price, area, id }) => {
    const getStatusColor = (status) => {
        switch (status) {
            case 'Ready to Move': return 'emerald';
            case 'Under Construction': return 'sapphire';
            case 'Pre Launch': return 'ruby';
            default: return 'sapphire';
        }
    };

    const statusColor = getStatusColor(status);

    return (
        <div className="project-card" data-aos="fade-up">
            {/* Image Container */}
            <div className="card-image-container">
                <img src={image} alt={title} className="card-image" />
                <div className="card-overlay">
                    <div className={`card-status status-${statusColor}`}>
                        {status}
                    </div>
                    <div className="card-type-badge">
                        {type}
                    </div>
                </div>
                <div className="card-hover-effect"></div>
            </div>

            {/* Content */}
            <div className="card-content">
                <div className="card-header">
                    <div className="card-location">
                        <MapPin size={16} />
                        <span>{location}</span>
                    </div>
                    <div className="card-type">
                        <Home size={16} />
                        <span>{type}</span>
                    </div>
                </div>

                <h3 className="card-title">{title}</h3>

                <div className="card-details">
                    {price && (
                        <div className="card-detail-item">
                            <IndianRupee size={14} />
                            <span>{price}</span>
                        </div>
                    )}
                    {area && (
                        <div className="card-detail-item">
                            <Ruler size={14} />
                            <span>{area}</span>
                        </div>
                    )}
                    <div className="card-detail-item">
                        <Calendar size={14} />
                        <span>{status}</span>
                    </div>
                </div>

                <p className="card-description">
                    Experience premium living with world-class amenities and modern architecture
                    in the heart of {location}.
                </p>

                {/* CTA Button */}
                <Link to={`/project/${id || title.toLowerCase().replace(/\s+/g, '-')}`} className="card-cta">
                    <span>View Details</span>
                    <ArrowRight size={16} />
                </Link>
            </div>

            {/* Decorative Elements */}
            <div className="card-decoration">
                <div className="decoration-shape shape-1"></div>
                <div className="decoration-shape shape-2"></div>
            </div>
        </div>
    );
};

export default ProjectCard;
