import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

import SEO from '../components/seo/SEO';
import Hero from '../components/home/hero/Hero';
import Faq from '../components/home/faq/Faq';
import ProjectIntro from '../components/projects/ProjectIntro/ProjectIntro';
import ProjectChallenge from '../components/projects/ProjectChallenge/ProjectChallenge';
import ProjectStructure from '../components/projects/ProjectStructure/ProjectStructure';
import ProjectShopifyImplementation from '../components/projects/ProjectShopifyImplementation/ProjectShopifyImplementation';
import ProjectImplementation from '../components/projects/ProjectImplementation/ProjectImplementation';
import ProjectResults from '../components/projects/ProjectResults/ProjectResults';
import Contacts from '../components/home/contacts/Contacts';

import { getProjectBySlug } from '../data/projectsData';
import { buildProjectSchemas } from '../components/seo/schemaBuilders';

const ProjectPage = () => {
    const { slug } = useParams();

    const project = getProjectBySlug(slug);

    if (!project) {
        return <Navigate to="/projects/" replace />;
    }

    const { page } = project;

    const canonicalPath = `/projects/${project.slug}/`;
    const schemas = buildProjectSchemas(project);

    return (
        <>
            <SEO
                title={project.page.seo.title}
                description={project.page.seo.description}
                canonicalPath={canonicalPath}
                image={project.page.intro?.image || project.image}
                imageAlt={project.page.intro?.imageAlt || project.imageAlt}
                ogType="article"
                author="Dmytro Kiriachek"
                schemas={schemas}
            />
            <Hero data={page.hero} variant="projects" titleTag="div" />
            <ProjectIntro data={page.intro} />
            <ProjectChallenge data={page.challenge} />
            <ProjectStructure data={page.structure} />
            <ProjectShopifyImplementation data={page.shopifyImplementation} />
            <ProjectImplementation data={page.implementation} />
            <ProjectResults data={page.results} />
            <Faq data={project.page.faq} />
            <Contacts />
        </>
    );
};

export default ProjectPage;
