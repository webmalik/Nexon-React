import React from 'react';

import './style.scss';

import { conditionsExcludedData } from '../../../data/conditionsData';

const ConditionsExcluded = () => {
    const { title, subtitle, intro, groups, note } = conditionsExcludedData;

    return (
        <section
            className="conditions-excluded not-sticky"
            aria-labelledby="conditions-excluded-title">
            <div className="conditions-excluded__container">
                <div className="conditions-excluded__head">
                    <h2 className="conditions-excluded__title" id="conditions-excluded-title">
                        {title}
                    </h2>

                    <p className="conditions-excluded__subtitle">{subtitle}</p>

                    <p className="conditions-excluded__intro">{intro}</p>
                </div>

                <div className="conditions-excluded__groups">
                    {groups.map((group) => (
                        <div className="conditions-excluded__group" key={group.id}>
                            <ul className="conditions-excluded__list">
                                {group.items.map((item) => (
                                    <li className="conditions-excluded__item" key={item}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <p className="conditions-excluded__note">{note}</p>
            </div>
        </section>
    );
};

export default ConditionsExcluded;
