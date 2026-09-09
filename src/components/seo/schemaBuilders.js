import { siteData } from '../../data/siteData';

const BASE_URL = siteData.url.replace(/\/+$/, '');

const cleanObject = (value) => {
    if (Array.isArray(value)) {
        const items = value.map((item) => cleanObject(item)).filter((item) => item !== undefined);

        return items.length ? items : undefined;
    }

    if (value && typeof value === 'object') {
        const object = Object.entries(value).reduce((result, [key, item]) => {
            const cleanedItem = cleanObject(item);

            if (cleanedItem !== undefined) {
                result[key] = cleanedItem;
            }

            return result;
        }, {});

        return Object.keys(object).length ? object : undefined;
    }

    if (value === undefined || value === null || value === '') {
        return undefined;
    }

    return value;
};

const slugify = (value = '') => {
    return value
        .toLowerCase()
        .trim()
        .replace(/ä/g, 'ae')
        .replace(/ö/g, 'oe')
        .replace(/ü/g, 'ue')
        .replace(/ß/g, 'ss')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
};

export const normalizePath = (path = '/') => {
    const value = String(path || '/').trim();

    if (!value || value === '/') {
        return '/';
    }

    return `/${value.replace(/^\/+|\/+$/g, '')}/`;
};

export const toAbsoluteUrl = (value = '/') => {
    if (!value) return '';

    try {
        return new URL(value, `${BASE_URL}/`).href;
    } catch {
        return '';
    }
};

export const getCanonicalUrl = (path = '/') => {
    return toAbsoluteUrl(normalizePath(path));
};

const createImageObject = ({ image, imageAlt }) => {
    const imageUrl = toAbsoluteUrl(image);

    if (!imageUrl) return null;

    return cleanObject({
        '@type': 'ImageObject',
        url: imageUrl,
        contentUrl: imageUrl,
        caption: imageAlt,
    });
};

export const createOrganizationSchema = ({ description } = {}) => {
    const logoUrl = toAbsoluteUrl('/logo.png');
    const imageUrl = toAbsoluteUrl('/og.jpg');

    return cleanObject({
        '@type': 'ProfessionalService',
        '@id': `${BASE_URL}/#organization`,

        name: siteData.name,
        alternateName: 'Nexon Studio',
        legalName: siteData.legalName,

        url: `${BASE_URL}/`,
        description,

        logo: {
            '@type': 'ImageObject',
            '@id': `${BASE_URL}/#logo`,
            url: logoUrl,
            contentUrl: logoUrl,
        },

        image: imageUrl,

        email: siteData.contact.email,
        telephone: siteData.contact.phoneHref,

        address: {
            '@type': 'PostalAddress',
            streetAddress: siteData.address.street,
            postalCode: siteData.address.postalCode,
            addressLocality: siteData.address.city,
            addressCountry: siteData.address.countryCode,
        },

        areaServed: {
            '@type': 'Country',
            name: 'Deutschland',
        },

        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            telephone: siteData.contact.phoneHref,
            email: siteData.contact.email,
            url: siteData.contact.formUrl,
            availableLanguage: ['de', 'uk', 'ru'],
        },

        founder: {
            '@id': `${BASE_URL}/about/#founder`,
        },

        slogan: siteData.footer.slug,

        knowsAbout: [
            'Shopify',
            'Shopify Entwicklung',
            'Shopify Theme-Anpassung',
            'Shopify Store-Struktur',
            'Shopify Produktseiten',
            'Shopify Collections',
            'Mobile Optimierung',
            'Performance Optimierung',
            'Technische SEO',
            'E-Commerce',
        ],

        priceRange: '€€',
    });
};

export const createWebsiteSchema = ({ description } = {}) => {
    return cleanObject({
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`,

        url: `${BASE_URL}/`,
        name: siteData.name,

        alternateName: ['Nexon Studio', 'nexon-studio.de'],

        description,
        inLanguage: siteData.language,

        publisher: {
            '@id': `${BASE_URL}/#organization`,
        },
    });
};

export const createWebPageSchema = ({
    path,
    title,
    description,
    pageType = 'WebPage',
    image,
    imageAlt,
    hasBreadcrumb = false,
    mainEntityId,
}) => {
    const canonicalUrl = getCanonicalUrl(path);
    const imageObject = createImageObject({ image, imageAlt });

    if (imageObject) {
        imageObject['@id'] = `${canonicalUrl}#primary-image`;
    }

    return cleanObject({
        '@type': pageType,
        '@id': `${canonicalUrl}#webpage`,

        url: canonicalUrl,
        name: title,
        description,

        inLanguage: siteData.language,

        isPartOf: {
            '@id': `${BASE_URL}/#website`,
        },

        about: {
            '@id': `${BASE_URL}/#organization`,
        },

        publisher: {
            '@id': `${BASE_URL}/#organization`,
        },

        primaryImageOfPage: imageObject,

        breadcrumb: hasBreadcrumb
            ? {
                  '@id': `${canonicalUrl}#breadcrumb`,
              }
            : null,

        mainEntity: mainEntityId
            ? {
                  '@id': mainEntityId,
              }
            : null,
    });
};

export const createBreadcrumbSchema = ({ path, items = [] }) => {
    if (items.length < 2) return null;

    const canonicalUrl = getCanonicalUrl(path);

    return {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,

        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: getCanonicalUrl(item.path),
        })),
    };
};

export const createFaqSchema = ({ path, faq }) => {
    const items = Array.isArray(faq) ? faq : faq?.items;

    if (!items?.length) return null;

    const mainEntity = items
        .map((item) => {
            const question = item.question || item.title;
            const answer = item.answer || item.content;

            if (!question || !answer) return null;

            return {
                '@type': 'Question',
                name: question,

                acceptedAnswer: {
                    '@type': 'Answer',
                    text: answer,
                },
            };
        })
        .filter(Boolean);

    if (!mainEntity.length) return null;

    const canonicalUrl = getCanonicalUrl(path);

    return {
        '@type': 'FAQPage',
        '@id': `${canonicalUrl}#faq`,

        url: canonicalUrl,
        inLanguage: siteData.language,

        isPartOf: {
            '@id': `${canonicalUrl}#webpage`,
        },

        mainEntity,
    };
};

export const createServiceCatalogSchema = (services = []) => {
    if (!services.length) return null;

    return {
        '@type': 'OfferCatalog',
        '@id': `${BASE_URL}/#services`,

        name: 'Shopify Leistungen',

        itemListElement: services.map((service) => ({
            '@type': 'Offer',
            '@id': `${BASE_URL}/#offer-${slugify(service.title)}`,

            itemOffered: {
                '@type': 'Service',
                '@id': `${BASE_URL}/#service-${slugify(service.title)}`,

                name: service.title,
                description: service.description,

                serviceType: service.title,

                provider: {
                    '@id': `${BASE_URL}/#organization`,
                },

                areaServed: {
                    '@type': 'Country',
                    name: 'Deutschland',
                },
            },
        })),
    };
};

export const createProjectsListSchema = (projects = []) => {
    if (!projects.length) return null;

    const pageUrl = getCanonicalUrl('/projects/');

    return {
        '@type': 'ItemList',
        '@id': `${pageUrl}#project-list`,

        name: 'Ausgewählte Shopify-Projekte',
        numberOfItems: projects.length,

        itemListElement: projects.map((project, index) => {
            const projectUrl = getCanonicalUrl(`/projects/${project.slug}/`);

            return cleanObject({
                '@type': 'ListItem',
                position: index + 1,

                item: {
                    '@type': 'CreativeWork',
                    '@id': `${projectUrl}#project`,

                    url: projectUrl,
                    name: project.title,
                    description: project.cardDescription,

                    image: toAbsoluteUrl(project.image),

                    creator: {
                        '@id': `${BASE_URL}/#organization`,
                    },
                },
            });
        }),
    };
};

export const createProjectSchema = (project) => {
    if (!project?.slug) return null;

    const path = `/projects/${project.slug}/`;
    const canonicalUrl = getCanonicalUrl(path);

    const intro = project.page?.intro;
    const seo = project.page?.seo;

    const image = intro?.image || project.image;
    const imageAlt = intro?.imageAlt || project.imageAlt;

    const keywords = [
        'Shopify',
        project.category,
        ...(project.tags || []),
        ...(intro?.meta || []).map((item) => item.title),
    ].filter(Boolean);

    return cleanObject({
        '@type': 'CreativeWork',
        '@id': `${canonicalUrl}#project`,

        url: canonicalUrl,

        name: intro?.title || project.title,
        headline: intro?.title || project.title,

        description: seo?.description || project.cardDescription,

        genre: 'Shopify Case Study',
        inLanguage: siteData.language,

        image: createImageObject({
            image,
            imageAlt,
        }),

        keywords: [...new Set(keywords)].join(', '),

        creator: {
            '@id': `${BASE_URL}/#organization`,
        },

        publisher: {
            '@id': `${BASE_URL}/#organization`,
        },

        mainEntityOfPage: {
            '@id': `${canonicalUrl}#webpage`,
        },

        about: {
            '@type': 'WebSite',
            name: project.title,
            url: project.website,
        },

        mentions: (intro?.meta || []).map((item) => ({
            '@type': 'Thing',
            name: item.title,
        })),
    });
};

export const createPersonSchema = (person) => {
    if (!person?.name) return null;

    return cleanObject({
        '@type': 'Person',
        '@id': `${BASE_URL}/about/#founder`,

        name: person.name,

        jobTitle: person.role || person.position || 'Gründer von Nexon Digital Studio',

        image: createImageObject({
            image: person.image,
            imageAlt: person.imageAlt,
        }),

        url: `${BASE_URL}/about/`,

        worksFor: {
            '@id': `${BASE_URL}/#organization`,
        },

        sameAs: [siteData.links.linkedin],
    });
};

export const buildHomeSchemas = ({ seo, services, faq }) => {
    return [
        createOrganizationSchema({
            description: seo.description,
        }),

        createWebsiteSchema({
            description: seo.description,
        }),

        createWebPageSchema({
            path: '/',
            title: seo.title,
            description: seo.description,
            pageType: 'WebPage',
            image: '/og.jpg',
            imageAlt: 'Nexon Digital Studio Shopify Entwicklung',
        }),

        createServiceCatalogSchema(services),

        createFaqSchema({
            path: '/',
            faq,
        }),
    ].filter(Boolean);
};

export const buildStaticPageSchemas = ({
    path,
    seo,
    pageType = 'WebPage',
    breadcrumbs = [],
    image = '/og.jpg',
    imageAlt = siteData.name,
    person,
}) => {
    return [
        createWebPageSchema({
            path,
            title: seo.title,
            description: seo.description,
            pageType,
            image,
            imageAlt,
            hasBreadcrumb: breadcrumbs.length >= 2,
        }),

        createBreadcrumbSchema({
            path,
            items: breadcrumbs,
        }),

        person ? createPersonSchema(person) : null,
    ].filter(Boolean);
};

export const buildProjectsSchemas = ({ seo, projects }) => {
    const path = '/projects/';
    const listId = `${getCanonicalUrl(path)}#project-list`;

    return [
        createWebPageSchema({
            path,
            title: seo.title,
            description: seo.description,
            pageType: 'CollectionPage',
            image: projects?.[0]?.image || '/og.jpg',
            imageAlt: 'Shopify-Projekte von Nexon Digital Studio',
            hasBreadcrumb: true,
            mainEntityId: listId,
        }),

        createBreadcrumbSchema({
            path,
            items: [
                {
                    name: 'Startseite',
                    path: '/',
                },
                {
                    name: 'Portfolio',
                    path,
                },
            ],
        }),

        createProjectsListSchema(projects),
    ].filter(Boolean);
};

export const buildProjectSchemas = (project) => {
    const path = `/projects/${project.slug}/`;
    const canonicalUrl = getCanonicalUrl(path);

    return [
        createWebPageSchema({
            path,
            title: project.page.seo.title,
            description: project.page.seo.description,
            pageType: 'WebPage',
            image: project.page.intro?.image || project.image,
            imageAlt: project.page.intro?.imageAlt || project.imageAlt,
            hasBreadcrumb: true,
            mainEntityId: `${canonicalUrl}#project`,
        }),

        createBreadcrumbSchema({
            path,
            items: [
                {
                    name: 'Startseite',
                    path: '/',
                },
                {
                    name: 'Portfolio',
                    path: '/projects/',
                },
                {
                    name: project.title,
                    path,
                },
            ],
        }),

        createProjectSchema(project),

        createFaqSchema({
            path,
            faq: project.page.faq,
        }),
    ].filter(Boolean);
};
