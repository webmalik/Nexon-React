import './style.scss';

const Project = ({ title, label, image, tags, link }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="portfolio__item">
            <img src={image} alt="" />
            <div className="portfolio__label">{label}</div>
            <h4 className="portfolio__title">{title}</h4>
            <div className="portfolio__meta">
                {tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                ))}
            </div>
        </a>
    );
};

export default Project;
