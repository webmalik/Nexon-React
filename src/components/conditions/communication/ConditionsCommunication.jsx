import React from 'react';

import './style.scss';

import { conditionsCommunicationData } from '../../../data/conditionsData';

const ConditionsCommunication = () => {
    const { title, titleLines, items } = conditionsCommunicationData;

    return (
        <section
            className="conditions-communication not-sticky"
            aria-labelledby="conditions-communication-title">
            <div className="conditions-communication__container">
                <h2
                    className="conditions-communication__title"
                    id="conditions-communication-title"
                    aria-label={title}>
                    {titleLines.map((line) => (
                        <span key={line}>{line}</span>
                    ))}
                </h2>

                <div className="conditions-communication__items">
                    {items.map((item) => (
                        <article className="conditions-communication__item" key={item.id}>
                            <span className="conditions-communication__number">{item.number}</span>

                            <p className="conditions-communication__text">{item.text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ConditionsCommunication;
