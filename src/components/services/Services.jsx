import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './style.scss';
import headerVector from './header.png';
import Service from '../service/Service';

import { servicesList } from './../../data/servicesList';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const { t, i18n } = useTranslation();
    const currentLanguageKey = i18n.language;
    const ImgRotate = useRef();
    const services = useRef();

    useEffect(() => {
         gsap.to(ImgRotate.current, {
            rotate: 360,
            ease: 'power2.out',
            duration: 1.5, // Продолжительность анимации в секундах
            scrollTrigger: {
                trigger: services.current,
                start: 'top+=50 center', // Запуск анимации, когда блок services на 100px ниже
            },
        });
    }, []);

    return (
        <section ref={services} className="services not-sticky">
            <div className="container">
                <div className="services__header">
                    <span className='ttt'>{t('services')}</span>
                    <img ref={ImgRotate} src={headerVector} alt="" />
                </div>
                <div className="services__wrapper">
                    {servicesList.map((service) => {
                        return (
                            <Service
                                key={service.id}
                                title={service.title[currentLanguageKey]}
                                description={service.description[currentLanguageKey]}
                                value={service.value[currentLanguageKey]}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
