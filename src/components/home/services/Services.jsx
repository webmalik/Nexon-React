import { useEffect, useRef } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './style.scss';

import headerVector from './header.png';
import Service from '../service/Service';

import { defaultData, servicesList } from '../../../data/homeData';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const imgRotate = useRef(null);
    const services = useRef(null);

    useEffect(() => {
        const animation = gsap.to(imgRotate.current, {
            rotate: 360,
            ease: 'power2.out',
            duration: 1.5,
            scrollTrigger: {
                trigger: services.current,
                start: 'top+=50 center',
            },
        });

        return () => {
            animation.kill();

            if (animation.scrollTrigger) {
                animation.scrollTrigger.kill();
            }
        };
    }, []);

    return (
        <section ref={services} className="services not-sticky" id="services">
            <div className="container">
                <div className="services__header">
                    <h2 className="ttt">{defaultData.services.title}</h2>
                    <img ref={imgRotate} src={headerVector} alt="" />
                </div>

                <div className="services__wrapper">
                    {servicesList.map((service) => (
                        <Service
                            key={service.id}
                            title={service.title}
                            description={service.description}
                            value={service.value}
                            button={defaultData.services.button}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
