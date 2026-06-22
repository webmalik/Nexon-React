import { useTranslation } from 'react-i18next';

import './style.scss';

const Projects = () => {
    const { t, i18n } = useTranslation();
    const currentLanguageKey = i18n.language;

    return (
        <section className="process p-sticky" id="process">
            <div className="container">
                <h2 className="process__header ttt">{t('process-title')}</h2>
                <div className="process__wrapper"></div>
            </div>
        </section>
    );
};

export default Projects;
