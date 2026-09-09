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

import { buildStaticPageSchemas } from '../components/seo/schemaBuilders';

const ConditionsPage = () => {
    const schemas = buildStaticPageSchemas({
        path: '/conditions/',
        seo: defaultData.seo,

        breadcrumbs: [
            {
                name: 'Startseite',
                path: '/',
            },
            {
                name: 'Konditionen',
                path: '/conditions/',
            },
        ],
    });

    return (
        <>
            <SEO
                title={defaultData.seo.title}
                description={defaultData.seo.description}
                canonicalPath="/conditions/"
                image="/og.jpg"
                imageAlt="Shopify Leistungen und Konditionen von Nexon Digital Studio"
                schemas={schemas}
            />

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
