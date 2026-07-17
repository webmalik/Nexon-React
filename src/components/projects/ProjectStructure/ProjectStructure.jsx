import './style.scss';

const ProjectStructure = ({ data }) => {
    if (!data) return null;

    const hasImage = Boolean(data.image);

    return (
        <section className="project-structure not-sticky">
            <div className="container">
                <div className="project-structure__wrapper">
                    <div
                        className={`project-structure__media ${
                            !hasImage ? 'project-structure__media--empty' : ''
                        }`}>
                        {hasImage && (
                            <img
                                src={data.image}
                                alt={data.imageAlt || data.title || ''}
                                loading="lazy"
                            />
                        )}
                    </div>

                    <div className="project-structure__content">
                        <div className="project-structure__head">
                            {data.eyebrow && (
                                <div className="project-structure__eyebrow">{data.eyebrow}</div>
                            )}

                            {data.title && (
                                <h2 className="project-structure__title">{data.title}</h2>
                            )}

                            {data.text && <p className="project-structure__text">{data.text}</p>}
                        </div>

                        {data.items?.length > 0 && (
                            <div className="project-structure__items">
                                {data.items.map((item) => (
                                    <article className="project-structure__item" key={item.id}>
                                        <h3 className="project-structure__item-title">
                                            {item.title}
                                        </h3>

                                        <p className="project-structure__item-text">{item.text}</p>
                                    </article>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectStructure;
