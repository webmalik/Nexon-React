import React from 'react';
import SEO from '../components/seo/SEO';
import Impressum from '../components/impressum/Impressum';

const ImpressumPage = () => {
    return (
        <>
            <SEO title="Impressum | Nexon Studio" description="Impressum von Nexon Studio." />

            <Impressum />
        </>
    );
};

export default ImpressumPage;
