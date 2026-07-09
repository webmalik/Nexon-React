import React from 'react';

import SEO from '../components/seo/SEO';

import { projectsPageData } from '../data/projectsData';

const ProjectsPage = () => {
    return (
        <>
            <SEO
                title={projectsPageData.seo.title}
                description={projectsPageData.seo.description}
            />
        </>
    );
};

export default ProjectsPage;
