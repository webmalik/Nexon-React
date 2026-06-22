import './style.scss';

const Project = ({ title, label, image, tags, link }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="portfolio__item">
            <img src={image} alt="" />
            <div className="portfolio__label">
                <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7.18037 18.3448L7.56302 11.9088L2.0033 15.4552L0 12.0839L5.94237 9.19431L0 6.30467L2.0033 2.88964L7.56302 6.43601L7.18037 0H11.1645L10.8043 6.43601L16.364 2.88964L18.3448 6.30467L12.425 9.19431L18.3448 12.0839L16.364 15.4552L10.8043 11.9088L11.1645 18.3448H7.18037Z"
                        fill="currentColor"
                    />
                </svg>
                <div>{label}</div>
                <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7.18037 18.3448L7.56302 11.9088L2.0033 15.4552L0 12.0839L5.94237 9.19431L0 6.30467L2.0033 2.88964L7.56302 6.43601L7.18037 0H11.1645L10.8043 6.43601L16.364 2.88964L18.3448 6.30467L12.425 9.19431L18.3448 12.0839L16.364 15.4552L10.8043 11.9088L11.1645 18.3448H7.18037Z"
                        fill="currentColor"
                    />
                </svg>
            </div>
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
