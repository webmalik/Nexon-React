import { useTranslation } from 'react-i18next';

import './style.scss';
import Project from '../project/Project';

import { projectsList } from './../../data/projectsList';

const Projects = () => {
    const { t, i18n } = useTranslation();
    const currentLanguageKey = i18n.language;

    return (
        <section className="portfolio not-sticky" id="portfolio">
            <div className="container">
                <h2 className="portfolio__header ttt">{t('portfolio')}</h2>
                <div className="portfolio__wrapper">
                    {projectsList.map((project) => {
                        return (
                            <Project
                                key={project.id}
                                title={project.title[currentLanguageKey]}
                                label={project.description[currentLanguageKey]}
                                image={project.image}
                                tags={project.tags[currentLanguageKey]}
                                link={project.link}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
