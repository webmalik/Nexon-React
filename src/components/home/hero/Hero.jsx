import { useRef, useEffect } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

import './style.scss';

import circle from './circle.png';

import { defaultData } from '../../../data/homeData';

gsap.registerPlugin(ScrollTrigger);

const textReveals = () => {
    const elements = document.querySelectorAll('.ttt');

    elements.forEach((element) => {
        new SplitType(element, {
            types: 'lines',
            lineClass: 'single-line',
        });

        const lines = element.querySelectorAll('.single-line');

        lines.forEach((line) => {
            const wrapper = document.createElement('div');

            wrapper.classList.add('line-wrapper');
            line.parentNode.insertBefore(wrapper, line);
            wrapper.appendChild(line);
        });

        gsap.from(lines, {
            yPercent: 130,
            rotate: 0.001,
            ease: 'power2.out',
            stagger: 0.2,
            delay: 0.1,
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

                    element.innerHTML = element.textContent;
                    gsap.set(element, { clearProps: 'all' });
                },
            },
        });
    });
};

const Hero = () => {
    const container = useRef(null);

    const { hero } = defaultData;

    useEffect(() => {
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

                <h3 className="banner__subtitle banner__subtitle-top ttt">{hero.subtitle}</h3>

                <h1 className="banner__title">
                    <span className="banner__right ttt">{hero.title[0]}</span>
                    <span className="banner__left ttt">{hero.title[1]}</span>
                    <span className="banner__right banner__silver ttt">{hero.title[2]}</span>
                </h1>

                <h3 className="banner__subtitle banner__subtitle-bottom ttt">{hero.text}</h3>
            </div>
        </section>
    );
};

export default Hero;
