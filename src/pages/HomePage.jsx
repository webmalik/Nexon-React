import React from 'react';

import SEO from '../components/seo/SEO';

import Hero from '../components/hero/Hero';
import Info from '../components/info/Info';
import Projects from '../components/projects/Projects';
import Services from '../components/services/Services';
import Mail from '../components/mail/Mail';
import Reviews from '../components/reviews/Reviews';
import Process from '../components/process/Process';
import Faq from '../components/faq/Faq';
import Contacts from '../components/contacts/Contacts';

const HomePage = () => {
    return (
        <>
            <SEO
                title="Shopify Shop erstellen lassen | Nexon Digital Studio"
                description="Shopify Shop erstellen lassen in Deutschland: individuelles Design, saubere Theme-Entwicklung, Performance, SEO-Grundlagen und technische Betreuung."
            />

            <Hero />
            <Info />
            <Projects />
            <Services />
            <Mail />
            <Process />
            {/* <Reviews /> */}
            <Faq />
            <Contacts />
        </>
    );
};

export default HomePage;
