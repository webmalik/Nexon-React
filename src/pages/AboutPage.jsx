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

import { defaultData } from '../data/aboutData';

const AboutPage = () => {
    return (
        <>
            <SEO title={defaultData.seo.title} description={defaultData.seo.description} />
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
