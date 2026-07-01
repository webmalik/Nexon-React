import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

export default function SEO({ title, description, canonicalPath = '/', noindex = false }) {
    const { t } = useTranslation();

    const base = 'https://nexon-studio.com';
    const canonicalUrl = `${base}${canonicalPath === '/' ? '/' : canonicalPath}`;
    const ogImage = `${base}/og.jpg`;

    const seoTitle = title || t('seo.title');
    const seoDescription = description || t('seo.description');

    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        '@id': `${base}/#professional-service`,
        name: 'Nexon Studio',
        legalName: 'Nexon Digital Studio',
        url: `${base}/`,
        logo: `${base}/logo.png`,
        image: ogImage,
        description: seoDescription,
        email: 'nexonstudio24@gmail.com',
        telephone: '+4915510629166',
        priceRange: 'ab 2.000 €',
        founder: {
            '@type': 'Person',
            name: 'Dmytro Kiriachek',
            sameAs: 'https://www.linkedin.com/in/dmitriy-kiryachek-bb7272239',
        },
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Collegienstr. 59A',
            postalCode: '06886',
            addressLocality: 'Lutherstadt Wittenberg',
            addressCountry: 'DE',
        },
        areaServed: {
            '@type': 'Country',
            name: 'Germany',
        },
        contactPoint: [
            {
                '@type': 'ContactPoint',
                contactType: 'customer support',
                email: 'nexonstudio24@gmail.com',
                telephone: '+4915510629166',
                availableLanguage: ['de', 'uk', 'ru'],
                url: `${base}/#contact`,
            },
        ],
        sameAs: [
            'https://www.linkedin.com/in/dmitriy-kiryachek-bb7272239',
            'https://t.me/dmitriy_uier',
            'https://wa.me/4915510629166',
        ],
        serviceType: [
            'Shopify Entwicklung',
            'Shopify Shop Erstellung',
            'Shopify Theme Anpassung',
            'Shopify UX/UI Design',
            'Shopify SEO',
            'Performance Optimierung',
        ],
        knowsAbout: [
            'Shopify',
            'Shopify Themes',
            'Shopify SEO',
            'UX/UI Design',
            'Performance Optimierung',
            'Conversion Optimierung',
            'Webentwicklung',
        ],
        inLanguage: 'de-DE',
    };

    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${base}/#website`,
        name: 'Nexon Studio',
        url: `${base}/`,
        inLanguage: 'de-DE',
        publisher: {
            '@id': `${base}/#professional-service`,
        },
        description: seoDescription,
    };

    const servicesSchema = {
        '@context': 'https://schema.org',
        '@type': 'OfferCatalog',
        '@id': `${base}/#services`,
        name: 'Shopify Leistungen',
        itemListElement: [
            {
                '@type': 'Offer',
                name: 'Shopify UX/UI Design',
                priceCurrency: 'EUR',
                price: '4000',
                availability: 'https://schema.org/InStock',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Shopify UX/UI Design',
                    description:
                        'Wir gestalten moderne, klare und verkaufsorientierte Shopify-Shops – von der Startseite über Produktseiten bis zur mobilen Nutzerführung.',
                    provider: {
                        '@id': `${base}/#professional-service`,
                    },
                    areaServed: {
                        '@type': 'Country',
                        name: 'Germany',
                    },
                },
            },
            {
                '@type': 'Offer',
                name: 'Shopify Entwicklung',
                priceCurrency: 'EUR',
                price: '3000',
                availability: 'https://schema.org/InStock',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Shopify Entwicklung',
                    description:
                        'Wir entwickeln und optimieren Shopify-Shops mit sauberem Code, schneller Ladezeit, SEO-Grundstruktur und flexiblen Sections.',
                    provider: {
                        '@id': `${base}/#professional-service`,
                    },
                    areaServed: {
                        '@type': 'Country',
                        name: 'Germany',
                    },
                },
            },
        ],
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        '@id': `${base}/#faq`,
        mainEntity: [
            {
                '@type': 'Question',
                name: 'Wie viel kostet ein Shopify-Shop?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Die Kosten hängen vom Umfang des Projekts ab: Design, Anzahl der Seiten, Funktionen, Produktstruktur, Integrationen und gewünschte Optimierungen. Ein vollständiger Shopify-Shop beginnt in der Regel ab 2.000 €.',
                },
            },
            {
                '@type': 'Question',
                name: 'Wie lange dauert die Entwicklung?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Ein kleiner Shopify-Shop oder eine gezielte Optimierung kann innerhalb von 1–2 Wochen umgesetzt werden. Für einen vollständigen Shop mit Design, Entwicklung, mobilen Anpassungen, SEO-Grundstruktur und Tests sollten Sie meistens 2–4 Wochen einplanen.',
                },
            },
            {
                '@type': 'Question',
                name: 'Können Sie einen bestehenden Shopify-Shop verbessern?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Ja. Wir analysieren bestehende Shopify-Shops und verbessern gezielt Ladezeit, mobile Darstellung, Produktseiten, Struktur, Conversion-Elemente, Theme-Code und technische Fehler.',
                },
            },
            {
                '@type': 'Question',
                name: 'Wird der Shop DSGVO-konform umgesetzt?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Der Shopify-Shop wird mit Blick auf den deutschen Markt und wichtige DSGVO-Anforderungen umgesetzt. Dazu gehören unter anderem saubere rechtliche Seiten, Cookie- und Consent-Lösungen, Datenschutz-Hinweise, Impressum, Kontaktinformationen und eine möglichst datensparsame technische Einrichtung.',
                },
            },
            {
                '@type': 'Question',
                name: 'Kann ein bestehender Shopify-Shop optimiert werden?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Ja. Bestehende Shopify-Shops können technisch, visuell und verkaufsorientiert optimiert werden. Dazu gehören bessere Produktseiten, übersichtlichere Navigation, mobilfreundliches Design, schnellere Ladezeiten, klarere Call-to-Actions und ein optimierter Checkout-Weg.',
                },
            },
            {
                '@type': 'Question',
                name: 'Gibt es nach dem Launch Support?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Ja. Nach dem Launch können kleinere Anpassungen, technische Fragen oder weitere Optimierungen übernommen werden. Auf Wunsch ist auch laufende Betreuung möglich.',
                },
            },
            {
                '@type': 'Question',
                name: 'Kann ich meinen Shopify-Shop später selbst bearbeiten?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Ja. Shopify ist dafür gemacht, dass Sie Produkte, Texte, Bilder, Preise, Kategorien und einfache Inhalte selbst verwalten können. Nach der Umsetzung bekommen Sie eine kurze Einführung.',
                },
            },
        ],
    };

    const processSchema = {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        '@id': `${base}/#process`,
        name: 'So läuft Ihr Shopify-Projekt ab',
        description:
            'Projektanalyse, Design und Entwicklung sowie Launch und Optimierung eines Shopify-Shops.',
        step: [
            {
                '@type': 'HowToStep',
                position: 1,
                name: 'Projektanalyse',
                text: 'Wir analysieren Ihren bestehenden Shopify-Shop oder Ihre Idee, prüfen Ziele, Struktur, Design und technische Anforderungen.',
            },
            {
                '@type': 'HowToStep',
                position: 2,
                name: 'Design & Entwicklung',
                text: 'Wir gestalten und entwickeln Ihren Shopify-Shop – schnell, modern und verkaufsorientiert.',
            },
            {
                '@type': 'HowToStep',
                position: 3,
                name: 'Launch & Optimierung',
                text: 'Nach dem Launch prüfen wir Performance, Darstellung auf allen Geräten und wichtige Conversion-Elemente.',
            },
        ],
    };

    const portfolioSchema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        '@id': `${base}/#portfolio`,
        name: 'Shopify Portfolio',
        itemListElement: [
            {
                '@type': 'CreativeWork',
                position: 1,
                name: 'Website für gepanzerte Fenster',
                url: 'https://skygenwindows.com/',
                about: 'Shopify',
            },
            {
                '@type': 'CreativeWork',
                position: 2,
                name: 'Baumarkt in London',
                url: 'https://capitalbms.co.uk/',
                about: 'Shopify',
            },
            {
                '@type': 'CreativeWork',
                position: 3,
                name: 'Website für den Verkauf von Proteinprodukten',
                url: 'https://dod.live/',
                about: 'Shopify',
            },
            {
                '@type': 'CreativeWork',
                position: 4,
                name: 'Shopify Website',
                url: 'https://luxhairnyc.shop/',
                about: 'Shopify',
            },
            {
                '@type': 'CreativeWork',
                position: 5,
                name: 'Website für den Verkauf von Körperölen',
                url: 'https://finescents.co.uk/',
                about: 'Shopify',
            },
            {
                '@type': 'CreativeWork',
                position: 6,
                name: 'Website für den Verkauf von Zeichnungen',
                url: 'https://craftoriashop.pl/',
                about: 'Shopify',
            },
        ],
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        '@id': `${base}/#breadcrumb`,
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Startseite',
                item: `${base}/`,
            },
        ],
    };

    const schemas = [
        organizationSchema,
        websiteSchema,
        servicesSchema,
        faqSchema,
        processSchema,
        portfolioSchema,
        breadcrumbSchema,
    ];

    return (
        <Helmet htmlAttributes={{ lang: 'de-DE' }}>
            <title>{seoTitle}</title>
            <meta name="description" content={seoDescription} />

            {noindex && <meta name="robots" content="noindex, nofollow" />}

            <link rel="canonical" href={canonicalUrl} />

            <link rel="alternate" href={`${base}/`} hrefLang="de-DE" />
            <link rel="alternate" href={`${base}/`} hrefLang="x-default" />

            <meta property="og:type" content="website" />
            <meta property="og:locale" content="de_DE" />
            <meta property="og:title" content={seoTitle} />
            <meta property="og:description" content={seoDescription} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:site_name" content="Nexon Studio" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seoTitle} />
            <meta name="twitter:description" content={seoDescription} />
            <meta name="twitter:image" content={ogImage} />

            {schemas.map((schema) => (
                <script type="application/ld+json" key={schema['@id'] || schema['@type']}>
                    {JSON.stringify(schema)}
                </script>
            ))}
        </Helmet>
    );
}
