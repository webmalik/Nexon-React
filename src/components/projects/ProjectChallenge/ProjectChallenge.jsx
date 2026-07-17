import './style.scss';

const ProjectChallenge = ({ data }) => {
    if (!data) return null;

    const theme = data.theme || 'dark';

    return (
        <section className={`project-challenge project-challenge--${theme} not-sticky`}>
            <div className="container">
                <div className="project-challenge__wrapper">
                    <div className="project-challenge__content">
                        {data.eyebrow && (
                            <div className="project-challenge__eyebrow">{data.eyebrow}</div>
                        )}

                        {data.title && <h2 className="project-challenge__title">{data.title}</h2>}

                        {data.text && <p className="project-challenge__text">{data.text}</p>}

                        {data.items?.length > 0 && (
                            <div className="project-challenge__items">
                                {data.items.map((item) => (
                                    <div className="project-challenge__item" key={item.id}>
                                        <span
                                            className="project-challenge__item-marker"
                                            aria-hidden="true">
                                            −
                                        </span>

                                        <p className="project-challenge__item-text">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div
                        className={`project-challenge__media ${
                            !data.image ? 'project-challenge__media--empty' : ''
                        }`}>
                        {data.image ? (
                            <img
                                src={data.image}
                                alt={data.imageAlt || data.title || ''}
                                loading="lazy"
                            />
                        ) : (
                            <div className="project-challenge__placeholder" aria-hidden="true" />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectChallenge;
