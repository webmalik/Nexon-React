import { useTranslation } from 'react-i18next';

import './style.scss';
import Project from '../project/Project';

import { projectsList } from './../../data/projectsList';

const Projects = () => {
    const { t, i18n } = useTranslation();
    const currentLanguageKey = i18n.language;

    return (
        <section className="portfolio not-sticky">
            <div className="container">
                <div className="portfolio__header">{t('portfolio')}</div>
                <div className="portfolio__wrapper">
                    {projectsList.map((project) => {
                        return (
                            <Project
                                key={project.id}
                                title={project.title[currentLanguageKey]}
                                label={project.description[currentLanguageKey]}
                                image={project.image}
                                tags={project.tags[currentLanguageKey]}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
