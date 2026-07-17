import './style.scss';

const ProjectImplementation = ({ data }) => {
    if (!data) return null;

    return (
        <section className="project-implementation not-sticky">
            <div className="container">
                <div className="project-implementation__head">
                    {data.eyebrow && (
                        <div className="project-implementation__eyebrow">{data.eyebrow}</div>
                    )}

                    {data.title && (
                        <h2 className="project-implementation__title ttt">{data.title}</h2>
                    )}
                </div>

                {data.items?.length > 0 && (
                    <div className="project-implementation__items">
                        {data.items.map((item) => (
                            <article className="project-implementation__item" key={item.id}>
                                {item.eyebrow && (
                                    <div className="project-implementation__item-eyebrow">
                                        {item.eyebrow}
                                    </div>
                                )}

                                {item.title && (
                                    <h3 className="project-implementation__item-title">
                                        {item.title}
                                    </h3>
                                )}

                                {item.text && (
                                    <p className="project-implementation__item-text">{item.text}</p>
                                )}
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectImplementation;
