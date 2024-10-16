import './style.scss';

const Project = ({ title, label, image, tags }) => {
    return (
        <div className="portfolio__item">
            <img src={image} alt="" />
            <div className="portfolio__label">{label}</div>
            <div className="portfolio__title">{title}</div>
            <div className="portfolio__meta">
                {tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                ))}
            </div>
        </div>
    );
};

export default Project;
