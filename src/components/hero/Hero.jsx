import { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import './style.scss';
import circle from './circle.png';

gsap.registerPlugin(ScrollTrigger);

const textReveals = () => {
    const elements = document.querySelectorAll('.ttt');

    elements.forEach((element) => {
        // Разбиваем текст на строки и создаем обертки для строк
        const splitText = new SplitType(element, {
            types: 'lines',
            lineClass: 'single-line'
        });
        const lines = element.querySelectorAll('.single-line');

        lines.forEach((line) => {
            const wrapper = document.createElement('div');
            wrapper.classList.add('line-wrapper');
            line.parentNode.insertBefore(wrapper, line);
            wrapper.appendChild(line);
        });

        // Анимация появления с задержкой
        gsap.from(lines, {
            yPercent: 130,
            rotate: 0.001,
            ease: 'power2.out',
            stagger: 0.2,
            delay: 0.1, // Добавляем задержку перед анимацией
            duration: 1.3,
            scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                onComplete: () => {
                    lines.forEach((line) => {
                        const parent = line.parentNode;
                        if (parent.classList.contains('line-wrapper')) {
                            parent.parentNode.insertBefore(line, parent);
                            parent.remove();
                        }
                    });
                    // Manually revert SplitType
                    element.innerHTML = element.textContent;
                    gsap.set(element, { clearProps: 'all' });
                },
            },
        });
    });
};

const Hero = () => {
    const { t } = useTranslation();
    const container = useRef();

    useEffect(() => {
        // Дожидаемся полной загрузки шрифтов перед запуском textReveals
        document.fonts.ready.then(() => {
            textReveals();
        });
    }, []);

    return (
        <section ref={container} className="main__banner banner p-sticky">
            <div className="container">
                <div className="banner__circle">
                    <img src={circle} alt="Circle" />
                </div>
                <div className="banner__subtitle banner__subtitle-top ttt">{t('hero-subtitle-1')}</div>
                <div className="banner__title">
                    <div className="banner__right ttt">{t('hero-title-1')}</div>
                    <div className="banner__left ttt">{t('hero-title-2')}</div>
                    <div className="banner__right banner__silver ttt">{t('hero-title-3')}</div>
                </div>
                <div className="banner__subtitle banner__subtitle-bottom ttt">
                    {t('hero-subtitle-2')}
                </div>
            </div>
        </section>
    );
};

export default Hero;
