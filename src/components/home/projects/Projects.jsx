import './style.scss';

import Project from '../project/Project';

import { projectsList, projectsSectionHomeData } from '../../../data/projectsData';

const Projects = () => {
    return (
        <section className="portfolio not-sticky" id="portfolio">
            <div className="container">
                <h2 className="portfolio__header ttt">{projectsSectionHomeData.title}</h2>

                <div className="portfolio__wrapper">
                    {projectsList.map((project) => (
                        <Project
                            key={project.id}
                            title={project.title}
                            label={project.label}
                            image={project.image}
                            tags={project.tags}
                            link={`/projects/${project.slug}/`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
