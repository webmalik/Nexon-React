import React, { useRef, useEffect } from 'react';

import './style.scss';

import arrow from './arrow.png';
import Form from '../form/Form';

import { defaultData } from '../../../data/homeData';
import { siteData } from '../../../data/siteData';

const Contacts = () => {
    const imgRotate = useRef(null);
    const animationFrameId = useRef(null);
    const currentRotation = useRef(0);
    const isAnimating = useRef(false);

    const { contacts } = defaultData;
    const { contact } = siteData;

    const handlePhoneClick = () => {
        window.open(`tel:${contact.phoneHref}`, '_blank');
    };

    const handleEmailClick = () => {
        window.open(`mailto:${contact.email}`, '_blank');
    };

    const rotate = () => {
        if (!isAnimating.current || !imgRotate.current) return;

        currentRotation.current += 2;

        if (currentRotation.current >= 360) {
            currentRotation.current = 0;
        }

        imgRotate.current.style.transform = `rotate(${currentRotation.current}deg)`;
        animationFrameId.current = requestAnimationFrame(rotate);
    };

    const handleMouseEnter = () => {
        if (isAnimating.current) return;

        isAnimating.current = true;
        animationFrameId.current = requestAnimationFrame(rotate);
    };

    const handleMouseLeave = () => {
        if (!imgRotate.current) return;

        isAnimating.current = false;
        cancelAnimationFrame(animationFrameId.current);

        const remainder = 360 - (currentRotation.current % 360);

        imgRotate.current.style.transition = 'transform .9s linear';
        imgRotate.current.style.transform = `rotate(${currentRotation.current + remainder}deg)`;

        setTimeout(() => {
            if (!imgRotate.current) return;

            imgRotate.current.style.transition = '';
            currentRotation.current = 0;
        }, 900);
    };

    useEffect(() => {
        return () => {
            cancelAnimationFrame(animationFrameId.current);
        };
    }, []);

    return (
        <div className="contacts not-sticky" id="contacts">
            <div className="container">
                <div className="contacts__wrapper">
                    <div className="contacts__content">
                        <div className="contacts__headers">
                            <h2 className="contacts__title">{contacts.title}</h2>
                            <h3 className="contacts__subtitle">{contacts.subtitle}</h3>
                        </div>

                        <div className="contacts__form">
                            <Form />
                        </div>
                    </div>

                    <div
                        className="contacts__main"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        <div className="contacts__label">
                            <span>{contacts.label}</span>
                            <img ref={imgRotate} src={arrow} alt="" className="rotating-arrow" />
                        </div>

                        <div className="contacts__inner">
                            <button
                                type="button"
                                onClick={handlePhoneClick}
                                className="contacts__phone">
                                {contact.phone}
                            </button>

                            <button
                                type="button"
                                onClick={handleEmailClick}
                                className="contacts__mail">
                                {contact.email}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
