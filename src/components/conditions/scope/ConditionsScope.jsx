import React from 'react';

import './style.scss';

import { conditionsScopeData } from '../../../data/conditionsData';

const ConditionsScope = () => {
    const { title, subtitle, services, note } = conditionsScopeData;

    return (
        <section className="conditions-scope not-sticky" aria-labelledby="conditions-scope-title">
            <div className="conditions-scope__container">
                <div className="conditions-scope__head">
                    <h2 className="conditions-scope__title" id="conditions-scope-title">
                        {title}
                    </h2>

                    <p className="conditions-scope__subtitle">{subtitle}</p>
                </div>

                <div className="conditions-scope__services">
                    {services.map((service) => (
                        <div className="conditions-scope__service" key={service.id}>
                            {service.title}
                        </div>
                    ))}

                    <p className="conditions-scope__note">{note}</p>
                </div>
            </div>
        </section>
    );
};

export default ConditionsScope;
