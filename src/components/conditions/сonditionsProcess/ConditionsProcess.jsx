import React from 'react';

import './style.scss';

import { conditionsProcessData } from '../../../data/conditionsData';

const ConditionsProcess = () => {
    const { title, subtitle, items } = conditionsProcessData;

    return (
        <section
            className="conditions-process not-sticky"
            aria-labelledby="conditions-process-title">
            <div className="conditions-process__container">
                <div className="conditions-process__head">
                    <h2 className="conditions-process__title" id="conditions-process-title">
                        {title}
                    </h2>

                    <p className="conditions-process__subtitle">{subtitle}</p>
                </div>

                <div className="conditions-process__items">
                    {items.map((item) => (
                        <article className="conditions-process__item" key={item.id}>
                            <span className="conditions-process__number">{item.number}</span>

                            <div className="conditions-process__content">
                                <h3 className="conditions-process__item-title">{item.title}</h3>

                                <p className="conditions-process__text">{item.text}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ConditionsProcess;
