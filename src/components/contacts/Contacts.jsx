import { useTranslation } from 'react-i18next';
import React, { useRef, useEffect } from 'react';

import './style.scss';
import arrow from './arrow.png';
import Form from '../form/Form';

const Contacts = () => {
    const { t } = useTranslation();
    const ImgRotate = useRef();
    const animationFrameId = useRef(null);
    const currentRotation = useRef(0);
    const isAnimating = useRef(false);

    const handlePhoneClick = (phoneNumber) => {
        window.open(`tel:${phoneNumber}`, '_blank');
    };

    const handleEmailClick = (email) => {
        window.open(`mailto:${email}`, '_blank');
    };

    const rotate = () => {
        if (isAnimating.current) {
            currentRotation.current += 2; // Увеличиваем угол поворота
            if (currentRotation.current >= 360) {
                currentRotation.current = 0; // Сбрасываем на 0 после полного оборота
            }
            ImgRotate.current.style.transform = `rotate(${currentRotation.current}deg)`;
            animationFrameId.current = requestAnimationFrame(rotate);
        }
    };

    const handleMouseEnter = () => {
        if (!isAnimating.current) {
            isAnimating.current = true;
            animationFrameId.current = requestAnimationFrame(rotate);
        }
    };

    const handleMouseLeave = () => {
        isAnimating.current = false;
        cancelAnimationFrame(animationFrameId.current);
        // Запускаем докручивание до следующего полного оборота
        const remainder = 360 - (currentRotation.current % 360);
        ImgRotate.current.style.transition = 'transform .9s linear';
        ImgRotate.current.style.transform = `rotate(${currentRotation.current + remainder}deg)`;
        setTimeout(() => {
            ImgRotate.current.style.transition = ''; // Убираем transition после завершения
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
                            <div className="contacts__title">{t('contacts-title')}</div>
                            <div className="contacts__subtitle">{t('contacts-subtitle')}</div>
                        </div>
                        <div className="contacts__form">
                            <Form />
                        </div>
                    </div>
                    <div
                        className="contacts__main"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="contacts__label">
                            <span>{t('contacts-label')}</span>
                            <img
                                ref={ImgRotate}
                                src={arrow}
                                alt=""
                                className="rotating-arrow"
                            />
                        </div>
                        <div className="contacts__inner">
                            <button
                                onClick={() => handlePhoneClick(t('contacts-phone'))}
                                className="contacts__phone">
                                {t('contacts-phone')}
                            </button>
                            <button
                                onClick={() => handleEmailClick(t('contacts-mail'))}
                                className="contacts__mail">
                                {t('contacts-mail')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
