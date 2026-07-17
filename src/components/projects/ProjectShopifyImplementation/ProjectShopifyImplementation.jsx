import './style.scss';

const ProjectShopifyImplementation = ({ data }) => {
    if (!data) return null;

    const theme = data.theme || 'dark';

    return (
        <section
            className={`project-shopify-implementation project-shopify-implementation--${theme} not-sticky`}>
            <div className="container">
                <div className="project-shopify-implementation__wrapper">
                    <div className="project-shopify-implementation__content">
                        {data.eyebrow && (
                            <div className="project-shopify-implementation__eyebrow">
                                {data.eyebrow}
                            </div>
                        )}

                        {data.title && (
                            <h2 className="project-shopify-implementation__title">{data.title}</h2>
                        )}

                        {data.text && (
                            <p className="project-shopify-implementation__text">{data.text}</p>
                        )}
                    </div>

                    {data.items?.length > 0 && (
                        <div className="project-shopify-implementation__items">
                            {data.items.map((item) => (
                                <article
                                    className="project-shopify-implementation__item"
                                    key={item.id}>
                                    <h3 className="project-shopify-implementation__item-title">
                                        {item.title}
                                    </h3>

                                    <p className="project-shopify-implementation__item-text">
                                        {item.text}
                                    </p>
                                </article>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ProjectShopifyImplementation;
