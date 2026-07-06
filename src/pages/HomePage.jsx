import React from 'react';

import SEO from '../components/seo/SEO';

import Hero from '../components/home/hero/Hero';
import Info from '../components/home/info/Info';
import Projects from '../components/home/projects/Projects';
import Services from '../components/home/services/Services';
import Mail from '../components/home/mail/Mail';
import Process from '../components/home/process/Process';
import Faq from '../components/home/faq/Faq';
import Contacts from '../components/home/contacts/Contacts';

import { defaultData } from '../data/homeData';

const HomePage = () => {
    return (
        <>
            <SEO title={defaultData.seo.title} description={defaultData.seo.description} />

            <Hero />
            <Info />
            <Projects />
            <Services />
            <Mail />
            <Process />
            <Faq />
            <Contacts />
        </>
    );
};

export default HomePage;
