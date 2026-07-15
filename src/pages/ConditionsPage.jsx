import React from 'react';

import SEO from '../components/seo/SEO';
import Hero from '../components/home/hero/Hero';
import Mail from '../components/home/mail/Mail';

import ConditionsProjectStart from '../components/conditions/projectStart/ConditionsProjectStart';
import ConditionsProcess from '../components/conditions/сonditionsProcess/ConditionsProcess';
import ConditionsScope from '../components/conditions/scope/ConditionsScope';
import ConditionsExcluded from '../components/conditions/excluded/ConditionsExcluded';
import ConditionsPricing from '../components/conditions/pricing/ConditionsPricing';
import ConditionsCommunication from '../components/conditions/communication/ConditionsCommunication';

import { defaultData, conditionsMailData } from '../data/conditionsData';

const ConditionsPage = () => {
    return (
        <>
            <SEO title={defaultData.seo.title} description={defaultData.seo.description} />
            <Hero data={defaultData.hero} variant="conditions" />
            <ConditionsProjectStart />
            <ConditionsProcess />
            <ConditionsScope />
            <ConditionsExcluded />
            <ConditionsPricing />
            <ConditionsCommunication />
            <Mail data={conditionsMailData} variant="conditions" />
        </>
    );
};

export default ConditionsPage;
