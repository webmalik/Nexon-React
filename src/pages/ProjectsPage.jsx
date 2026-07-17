import React from 'react';

import SEO from '../components/seo/SEO';
import Hero from '../components/home/hero/Hero';
import Contacts from '../components/home/contacts/Contacts';
import ProjectsCatalog from '../components/projects/ProjectsCatalog/ProjectsCatalog';

import { projectsPageData } from '../data/projectsData';

const ProjectsPage = () => {
    return (
        <>
            <SEO
                title={projectsPageData.seo.title}
                description={projectsPageData.seo.description}
            />
            <Hero data={projectsPageData.hero} variant="projects" />
            <ProjectsCatalog />
            <Contacts />
        </>
    );
};

export default ProjectsPage;
