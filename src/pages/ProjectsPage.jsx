import React from 'react';

import SEO from '../components/seo/SEO';
import Hero from '../components/home/hero/Hero';
import Contacts from '../components/home/contacts/Contacts';
import ProjectsCatalog from '../components/projects/ProjectsCatalog/ProjectsCatalog';

import { projectsPageData, projectsList } from '../data/projectsData';

import { buildProjectsSchemas } from '../components/seo/schemaBuilders';

const ProjectsPage = () => {
    const schemas = buildProjectsSchemas({
        seo: projectsPageData.seo,
        projects: projectsList,
    });

    return (
        <>
            <SEO
                title={projectsPageData.seo.title}
                description={projectsPageData.seo.description}
                canonicalPath="/projects/"
                image={projectsList[0]?.image || '/og.jpg'}
                imageAlt="Shopify-Projekte von Nexon Digital Studio"
                schemas={schemas}
            />

            <Hero data={projectsPageData.hero} variant="projects" />

            <ProjectsCatalog />
            <Contacts />
        </>
    );
};

export default ProjectsPage;
