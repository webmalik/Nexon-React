import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';

import './style.scss';
import arrow from './arrow.png';
import Question from '../question/Question';

import { faqList } from './../../data/faqList';

const Faq = () => {
    const { t, i18n } = useTranslation();
    const currentLanguageKey = i18n.language;

    const [openIndex, setOpenIndex] = useState(2);

    const toggleAccordion = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="faq not-sticky">
            <div className="container">
                <div className="faq__title">{t('faq-title')}</div>
                <div className="faq__wrapper">
                    {faqList.map((faq) => {
                        return (
                            <Question
                                id={faq.id}
                                key={faq.id}
                                isOpen={openIndex === faq.id}
                                toggleAccordion={() => toggleAccordion(faq.id)}
                                title={faq.title[currentLanguageKey]}
                                content={faq.content[currentLanguageKey]}
                            />
                        );
                    })}
                </div>
                <div className="faq__control">
                    <div className="faq__arrow">
                        <img src={arrow} alt="" />
                    </div>
                    <button className="faq__button">{t('faq-button')}</button>
                </div>
            </div>
        </div>
    );
};

export default Faq;
