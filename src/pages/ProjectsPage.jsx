import React from 'react';

import SEO from '../components/seo/SEO';

import { defaultData } from '../data/projectsData';

const ProjectsPage = () => {
    return (
        <>
            <SEO title={defaultData.seo.title} description={defaultData.seo.description} />
        </>
    );
};

export default ProjectsPage;
