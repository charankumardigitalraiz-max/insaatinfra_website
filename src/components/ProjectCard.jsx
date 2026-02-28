import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Home, Calendar, Ruler, IndianRupee } from 'lucide-react';
import '../styles/projectcard.css';

const ProjectCard = ({ title, location, type, image, status, price, area, id }) => {
    return (
        <div className="project-card" data-aos="fade-up">
            {/* Image Container */}
            <div className="card-image-container">
                <img src={image} alt={title} className="card-image" />
                <div className="card-overlay">
                    <div className={`card-status status-primary`}>
                        {status}
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="card-content">
                <div className="card-header">
                    <div className="card-location">
                        <MapPin size={14} />
                        <span>{location}</span>
                    </div>
                    <div className="card-type">
                        <Home size={14} />
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
                </div>

                <p className="card-description">
                    High-quality {type.toLowerCase()} development in {location} featuring
                    modern architecture and sustainable infrastructure.
                </p>

                {/* CTA Button */}
                <Link to={`/project/${id || title.toLowerCase().replace(/\s+/g, '-')}`} className="card-cta">
                    <span>View Property</span>
                    <ArrowRight size={16} />
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;
