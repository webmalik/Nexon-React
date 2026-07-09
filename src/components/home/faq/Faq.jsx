import React, { useState } from 'react';

import './style.scss';

import arrow from './arrow.png';

import Question from '../question/Question';
import useScrollTo from '../../useScrollTo/useScrollTo';

import { faqList, defaultData } from '../../../data/homeData';

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const { handleScrollToMain } = useScrollTo();

    const toggleAccordion = (id) => {
        setOpenIndex((prevIndex) => (prevIndex === id ? null : id));
    };

    return (
        <div className="faq not-sticky" id="faq">
            <div className="container">
                <h2 className="faq__title ttt">{defaultData.faq.title}</h2>

                <div className="faq__wrapper">
                    {faqList.map((faq) => (
                        <Question
                            id={faq.id}
                            key={faq.id}
                            isOpen={openIndex === faq.id}
                            toggleAccordion={() => toggleAccordion(faq.id)}
                            title={faq.title}
                            content={faq.content}
                        />
                    ))}
                </div>

                <div className="faq__control">
                    <div className="faq__arrow">
                        <img src={arrow} alt="" />
                    </div>

                    <button
                        className="faq__button"
                        type="button"
                        onClick={() => handleScrollToMain('contacts')}>
                        {defaultData.faq.button}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Faq;
