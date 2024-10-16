import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './style.scss';
import circle from './circle.png';

gsap.registerPlugin(useGSAP);

const Hero = () => {
    const { t } = useTranslation();
    const container = useRef();

    useGSAP(
        () => {
            gsap.fromTo('.banner__title', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });
            gsap.fromTo(
                '.banner__subtitle-top',
                { opacity: 0, y: -30 },
                { opacity: 1, y: 0, duration: 1 },
            );
            // gsap.fromTo(
            //     '.banner__subtitle-bottom',
            //     { opacity: 0, y: 30 },
            //     { opacity: 1, y: 0, duration: 1 },
            // );
        },
        { scope: container },
    );

    return (
        <section ref={container} className="main__banner banner">
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
