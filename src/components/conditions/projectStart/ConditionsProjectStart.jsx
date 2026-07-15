import React from 'react';

import './style.scss';

import { conditionsProjectStartData } from '../../../data/conditionsData';

const ConditionsProjectStart = () => {
    const { title, titleLines, items } = conditionsProjectStartData;

    return (
        <section
            className="conditions-project-start p-sticky-not-mobile"
            aria-labelledby="conditions-project-start-title">
            <div className="conditions-project-start__container">
                <h2
                    className="conditions-project-start__title"
                    id="conditions-project-start-title"
                    aria-label={title}>
                    {titleLines.map((line) => (
                        <span key={line}>{line}</span>
                    ))}
                </h2>

                <div className="conditions-project-start__items">
                    {items.map((item) => (
                        <article className="conditions-project-start__item" key={item.id}>
                            <span className="conditions-project-start__number">{item.number}</span>
                            <p className="conditions-project-start__text">{item.text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ConditionsProjectStart;
