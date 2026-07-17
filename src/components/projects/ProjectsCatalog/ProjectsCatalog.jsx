import { Link } from 'react-router-dom';

import './style.scss';

import { projectsList, projectsSectionData } from '../../../data/projectsData';

const ProjectsCatalog = ({ sectionData = projectsSectionData, projects = projectsList }) => {
    return (
        <section className="projects-catalog not-sticky">
            <div className="container">
                <div className="projects-catalog__head">
                    <h1
                        className="projects-catalog__title ttt"
                        dangerouslySetInnerHTML={{
                            __html: sectionData.title,
                        }}
                    />

                    {sectionData.description && (
                        <p className="projects-catalog__description">{sectionData.description}</p>
                    )}
                </div>

                <div className="projects-catalog__line" />

                <div className="projects-catalog__grid">
                    {projects.map((project) => (
                        <Link
                            className="projects-catalog__card"
                            to={`/projects/${project.slug}/`}
                            key={project.id}
                            aria-label={`${project.title} Case Study lesen`}>
                            <div className="projects-catalog__image">
                                <img
                                    src={project.image}
                                    alt={project.imageAlt || project.title}
                                    loading="lazy"
                                />
                            </div>

                            <div className="projects-catalog__content">
                                {project.category && (
                                    <span className="projects-catalog__tag">
                                        {project.category}
                                    </span>
                                )}

                                <h2 className="projects-catalog__card-title">{project.title}</h2>

                                {project.cardDescription && (
                                    <p className="projects-catalog__card-text">
                                        {project.cardDescription}
                                    </p>
                                )}

                                <span className="projects-catalog__link">Case Study lesen</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsCatalog;
