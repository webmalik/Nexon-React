import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';

import './style.scss';
import Review from '../review/Review';

import { reviewsList } from './../../data/reviewsList';

const Reviews = () => {
    const { t, i18n } = useTranslation();
    const currentLanguageKey = i18n.language;

    const [openIndex, setOpenIndex] = useState(2);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="reviews">
            <div className="container">
                <div className="reviews__wrapper">
                    <div className="reviews__title">{t('reviews-title')}</div>
                    <div className="reviews__content">
                        {reviewsList.map((review) => {
                            return (
                                <Review
                                    id={review.id}
                                    toggleAccordion={() => toggleAccordion(review.id)}
                                    isOpen={openIndex === review.id}
                                    title={review.title[currentLanguageKey]}
                                    nikname={review.nikname}
                                    description={review.description[currentLanguageKey]}
                                    image={review.image}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
