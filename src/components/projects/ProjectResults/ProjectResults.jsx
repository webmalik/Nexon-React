import './style.scss';

const ProjectResults = ({ data }) => {
    if (!data) return null;

    const { testimonial } = data;
    const author = testimonial?.author;
    const hasAuthorImage = Boolean(author?.image);

    return (
        <section className="project-results not-sticky">
            <div className="container">
                <div className="project-results__head">
                    {data.eyebrow && <div className="project-results__eyebrow">{data.eyebrow}</div>}

                    {data.title && <h2 className="project-results__title ttt">{data.title}</h2>}
                </div>

                {data.stats?.length > 0 && (
                    <div className="project-results__stats">
                        {data.stats.map((stat) => (
                            <article className="project-results__stat" key={stat.id}>
                                <div className="project-results__stat-heading">
                                    {stat.value && (
                                        <span className="project-results__stat-value">
                                            {stat.value}
                                        </span>
                                    )}

                                    {stat.label && (
                                        <span className="project-results__stat-label">
                                            {stat.label}
                                        </span>
                                    )}
                                </div>

                                {stat.text && (
                                    <p className="project-results__stat-text">{stat.text}</p>
                                )}
                            </article>
                        ))}
                    </div>
                )}

                {testimonial && (
                    <div className="project-results__testimonial">
                        <div
                            className={`project-results__author-image ${
                                !hasAuthorImage ? 'project-results__author-image--empty' : ''
                            }`}>
                            {hasAuthorImage && (
                                <img
                                    src={author.image}
                                    alt={author.imageAlt || author.name || 'Projekt Autor'}
                                    loading="lazy"
                                />
                            )}
                        </div>

                        <div className="project-results__testimonial-content">
                            {testimonial.quote && (
                                <blockquote className="project-results__quote">
                                    {testimonial.quote}
                                </blockquote>
                            )}

                            <div className="project-results__author">
                                {testimonial.labelTitle && (
                                    <span className="project-results__author-label-title">
                                        {testimonial.labelTitle}
                                    </span>
                                )}

                                {testimonial.label && (
                                    <span className="project-results__author-label">
                                        {testimonial.label}
                                    </span>
                                )}

                                {author?.name && (
                                    <strong className="project-results__author-name">
                                        {author.name}
                                    </strong>
                                )}

                                {author?.position && (
                                    <span className="project-results__author-position">
                                        {author.position}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectResults;
