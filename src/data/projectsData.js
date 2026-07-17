import { projectsList } from './projects';

export const projectsPageData = {
    seo: {
        title: 'Projekte | Nexon Digital Studio',
        description:
            'Entdecken Sie unsere Shopify-Projekte und technischen Lösungen für Unternehmen, Marken und Online-Händler.',
    },

    hero: {
        subtitle:
            'Bei Nexon Digital Studio zeigen wir ausgewählte Shopify-Projekte, technische Umsetzungen und Anpassungen für kleine Unternehmen, Marken und Online-Händler in Deutschland.',
        title: ['SHOPIFY', 'PROJEKTE'],
        text: 'Ausgewählte Shopify-Shops, Relaunches und technische Anpassungen — klar strukturiert, mobil optimiert und auf Online-Verkauf ausgerichtet.',
        button: 'Anfrage senden',
    },
};

export const projectsSectionData = {
    title: 'Ausgewählte <br/> Shopify-Projekte',

    description:
        'Hier finden Sie Beispiele für Shopify-Entwicklung, Shopify Theme-Anpassung, Relaunch, Migration und technische Store-Optimierung für kleine Unternehmen und Online-Händler.',
};

export const projectsSectionHomeData = {
    title: 'Portfolio',
};

export { projectsList };

export const getProjectBySlug = (slug = '') => {
    return projectsList.find((project) => project.slug === slug);
};
