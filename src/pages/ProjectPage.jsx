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

const ProjectPage = () => {
    const { slug } = useParams();

    const project = getProjectBySlug(slug);

    if (!project) {
        return <Navigate to="/projects/" replace />;
    }

    const { page } = project;

    return (
        <>
            <SEO title={page.seo.title} description={page.seo.description} />
            <Hero data={page.hero} variant="projects" />
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
