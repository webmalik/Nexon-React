import './style.scss';

const ProjectIntro = ({ data }) => {
    if (!data) return null;

    return (
        <section className="project-intro not-sticky">
            <div className="container">
                <div className="project-intro__head">
                    <h2 className="project-intro__title">{data.title}</h2>

                    {data.texts?.length > 0 && (
                        <div className="project-intro__texts">
                            {data.texts.map((text, index) => (
                                <p
                                    className="project-intro__text"
                                    key={`${index}-${text.slice(0, 20)}`}>
                                    {text}
                                </p>
                            ))}
                        </div>
                    )}
                </div>

                {data.meta?.length > 0 && (
                    <div className="project-intro__meta">
                        {data.meta.map((item) => (
                            <div className="project-intro__meta-item" key={item.id}>
                                <span className="project-intro__meta-title">{item.title}</span>

                                <span className="project-intro__meta-label">{item.label}</span>
                            </div>
                        ))}
                    </div>
                )}

                {data.image && (
                    <div className="project-intro__image">
                        <img src={data.image} alt={data.imageAlt || data.title} />
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectIntro;
