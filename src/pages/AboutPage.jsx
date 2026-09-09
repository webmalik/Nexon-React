import React from 'react';

import SEO from '../components/seo/SEO';
import Hero from '../components/home/hero/Hero';
import Founder from '../components/about/founder/AboutFounder';
import ShopifyReason from '../components/about/shopifyReason/ShopifyReason';
import AboutServices from '../components/about/services/AboutServices';
import AboutAudience from '../components/about/audience/AboutAudience';
import AboutWorkflow from '../components/about/workflow/AboutWorkflow';
import Mail from '../components/home/mail/Mail';
import Faq from '../components/home/faq/Faq';
import Contacts from '../components/home/contacts/Contacts';

import { defaultData, aboutFounderData } from '../data/aboutData';

import { buildStaticPageSchemas } from '../components/seo/schemaBuilders';

const AboutPage = () => {
    const schemas = buildStaticPageSchemas({
        path: '/about/',
        seo: defaultData.seo,
        pageType: 'AboutPage',

        breadcrumbs: [
            {
                name: 'Startseite',
                path: '/',
            },
            {
                name: 'Über uns',
                path: '/about/',
            },
        ],

        image: aboutFounderData.person.image,
        imageAlt: aboutFounderData.person.imageAlt,
        person: aboutFounderData.person,
    });

    return (
        <>
            <SEO
                title={defaultData.seo.title}
                description={defaultData.seo.description}
                canonicalPath="/about/"
                image={aboutFounderData.person.image}
                imageAlt={aboutFounderData.person.imageAlt}
                schemas={schemas}
            />

            <Hero data={defaultData.hero} variant="about" />
            <Founder />
            <ShopifyReason />
            <AboutServices />
            <AboutAudience />
            <AboutWorkflow />
            <Mail />
            <Faq />
            <Contacts />
        </>
    );
};

export default AboutPage;
