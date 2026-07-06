import React from 'react';

import SEO from '../components/seo/SEO';

import { defaultData } from '../data/aboutData';

const AboutPage = () => {
    return (
        <>
            <SEO title={defaultData.seo.title} description={defaultData.seo.description} />
        </>
    );
};

export default AboutPage;
