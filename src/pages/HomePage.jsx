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
                title="Разработка продающих сайтов под ключ | NEXON STUDIO"
                description="▶ Разработка продающих сайтов под ключ за 14 дней — Word Press, Shopify, Web Flow. ✓ Конверсия +30 %. ☎Telegram: @dmitriy_uier — NEXON STUDIO"
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
