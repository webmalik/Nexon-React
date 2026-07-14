import { useRef, useEffect } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

import './style.scss';

import circleDefault from './circle.png';

import { defaultData } from '../../../data/homeData';

gsap.registerPlugin(ScrollTrigger);

const textReveals = (rootElement) => {
    if (!rootElement) return;

    const elements = rootElement.querySelectorAll('.ttt');

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

const Hero = ({
    data = defaultData.hero,
    image = circleDefault,
    imageAlt = 'Circle',
    variant = '',
    className = '',
}) => {
    const container = useRef(null);

    const sectionClassName = [
        'main__banner',
        'banner',
        variant ? `banner--${variant}` : '',
        'p-sticky',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    useEffect(() => {
        document.fonts.ready.then(() => {
            textReveals(container.current);
        });
    }, []);

    return (
        <section ref={container} className={sectionClassName}>
            <div className="container">
                {image && (
                    <div className="banner__circle">
                        <img src={image} alt={imageAlt} />
                    </div>
                )}

                {data.subtitle && (
                    <h3 className="banner__subtitle banner__subtitle-top ttt">{data.subtitle}</h3>
                )}

                {data.title && (
                    <h1 className="banner__title">
                        {data.title.map((titleItem, index) => (
                            <span
                                className={`ttt ${
                                    index % 2 === 0 ? 'banner__right' : 'banner__left'
                                } ${index === data.title.length - 1 ? 'banner__silver' : ''}`}
                                key={titleItem}>
                                {titleItem}
                            </span>
                        ))}
                    </h1>
                )}

                {data.text && (
                    <h3 className="banner__subtitle banner__subtitle-bottom ttt">{data.text}</h3>
                )}
            </div>
        </section>
    );
};

export default Hero;
