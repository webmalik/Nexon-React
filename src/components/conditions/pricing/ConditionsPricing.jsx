import React from 'react';

import './style.scss';

import { conditionsPricingData } from '../../../data/conditionsData';

const ConditionsPricing = () => {
    const { title, items, note } = conditionsPricingData;

    return (
        <section
            className="conditions-pricing p-sticky-not-mobile"
            aria-labelledby="conditions-pricing-title">
            <div className="conditions-pricing__container">
                <h2 className="conditions-pricing__title" id="conditions-pricing-title">
                    {title}
                </h2>

                <div className="conditions-pricing__items">
                    {items.map((item) => (
                        <article className="conditions-pricing__item" key={item.id}>
                            <h3 className="conditions-pricing__item-title">{item.title}</h3>

                            <p className="conditions-pricing__text">{item.text}</p>
                        </article>
                    ))}
                </div>

                <p className="conditions-pricing__note">{note}</p>
            </div>
        </section>
    );
};

export default ConditionsPricing;
