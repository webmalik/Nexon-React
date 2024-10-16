import { useTranslation } from 'react-i18next';
import React from 'react';

import './style.scss';
import arrow from './arrow.png';
import Form from '../form/Form';

const Contacts = () => {
    const { t } = useTranslation();

    const handlePhoneClick = (phoneNumber) => {
        window.open(`tel:${phoneNumber}`, '_blank');
    };

    const handleEmailClick = (email) => {
        window.open(`mailto:${email}`, '_blank');
    };
    return (
        <div className="contacts" id="contacts">
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
                    <div className="contacts__main">
                        <div className="contacts__label">
                            <span>{t('contacts-label')}</span>
                            <img src={arrow} alt="" />
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
