import { useTranslation } from 'react-i18next';

import './style.scss';

import circle from './circle.png';

const Hero = () => {
    const { t } = useTranslation();
    return (
        <section className="main__banner banner">
            <div className="container">
                <div className="banner__circle">
                    <img src={circle} alt="Circle" />
                </div>
                <div className="banner__subtitle banner__subtitle-top">{t('hero-subtitle-1')}</div>
                <div className="banner__title">
                    <div className="banner__right">{t('hero-title-1')}</div>
                    <div className="banner__left">{t('hero-title-2')}</div>
                    <div className="banner__right banner__silver">{t('hero-title-3')}</div>
                </div>
                <div className="banner__subtitle banner__subtitle-bottom">
                    {t('hero-subtitle-2')}
                </div>
            </div>
        </section>
    );
};

export default Hero;
