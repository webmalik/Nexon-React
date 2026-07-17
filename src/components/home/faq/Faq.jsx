import { useState } from 'react';

import './style.scss';

import arrow from './arrow.png';

import Question from '../question/Question';
import useScrollTo from '../../useScrollTo/useScrollTo';

import { faqList, defaultData } from '../../../data/homeData';

const Faq = ({ data = null }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const { handleScrollToMain } = useScrollTo();

    const defaultFaqData = {
        title: defaultData.faq.title,

        items: faqList.map((item) => ({
            id: item.id,
            question: item.title,
            answer: item.content,
        })),

        button: {
            text: defaultData.faq.button,
            href: '#contacts',
        },
    };

    const faqData = data || defaultFaqData;

    const button =
        typeof faqData.button === 'string'
            ? {
                  text: faqData.button,
                  href: '#contacts',
              }
            : faqData.button;

    const scrollTarget = button?.href?.startsWith('#') ? button.href.slice(1) : 'contacts';

    const toggleAccordion = (id) => {
        setOpenIndex((prevIndex) => (prevIndex === id ? null : id));
    };

    if (!faqData?.items?.length) return null;

    return (
        <section className="faq not-sticky" id="faq">
            <div className="container">
                {faqData.title && <h2 className="faq__title ttt">{faqData.title}</h2>}

                <div className="faq__wrapper">
                    {faqData.items.map((faq) => (
                        <Question
                            id={faq.id}
                            key={faq.id}
                            isOpen={openIndex === faq.id}
                            toggleAccordion={() => toggleAccordion(faq.id)}
                            title={faq.question || faq.title}
                            content={faq.answer || faq.content}
                        />
                    ))}
                </div>

                {button?.text && (
                    <div className="faq__control">
                        <div className="faq__arrow" aria-hidden="true">
                            <img src={arrow} alt="" />
                        </div>

                        <button
                            className="faq__button"
                            type="button"
                            onClick={() => handleScrollToMain(scrollTarget)}>
                            {button.text}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Faq;
