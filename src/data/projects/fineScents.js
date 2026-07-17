import heroIMG from '../../assets/images/projects/fineScents/hero.png';

// Додаткові зображення сторінки
import challengeIMG from '../../assets/images/projects/fineScents/challenge.png';
import structureIMG from '../../assets/images/projects/fineScents/structure.png';

import { projectAuthorData } from './projectAuthorData';

export const fineScentsProject = {
    id: 5,
    slug: 'fine-scents',

    label: 'Shopify',
    category: 'Shopify Relaunch',

    title: 'Fine Scents - The Art of Hedonism',

    cardDescription:
        'Shopify-Umsetzung für eine Duftmarke: visuelle Produktpräsentation, Startseite und technische Anpassungen für einen klaren Store-Aufbau.',

    image: heroIMG,
    imageAlt: 'Fine Scents Shopify Store Startseite',

    tags: ['UX/UI', 'Entwicklung', 'Shopify'],

    website: 'https://finescents.co.uk/',

    page: {
        seo: {
            title: 'Fine Scents — Shopify-Umsetzung für eine Niche-Fragrance-Marke | Nexon Digital Studio',

            description:
                'Shopify-Umsetzung für Fine Scents mit visueller Produktpräsentation, klarer Store-Struktur, mobilen Anpassungen und technischer Theme-Entwicklung.',
        },

        hero: {
            subtitle:
                'Nexon Digital Studio entwickelt und verbessert Shopify-Shops für kleine Unternehmen, Marken und Online-Händler in Deutschland — klar strukturiert, technisch sauber und auf Online-Verkauf ausgerichtet.',

            title: ['SHOPIFY', 'ENTWICKLUNG'],

            text: 'Shopify-Erstellung, Theme-Anpassung, Relaunch und technische Umsetzung für Unternehmen, die online verkaufen möchten.',

            button: 'Anfrage senden',
        },

        intro: {
            title: 'Fine Scents — Shopify-Umsetzung für eine Niche-Fragrance-Marke',

            texts: [
                'Für Fine Scents wurde ein Shopify-Store für eine hochwertige Duftmarke technisch umgesetzt und strukturiert aufgebaut. Der Fokus lag auf visueller Produktpräsentation, klaren Collection-Bereichen, mobiler Darstellung und einer sauberen technischen Grundlage für den Online-Verkauf.',

                'Das Projekt zeigt, wie Nexon Digital Studio Shopify-Shops für Marken mit starkem visuellen Auftritt, hochwertigen Produkten und mehreren Produktkategorien technisch unterstützt, verständlich strukturiert und für Kunden nutzbar macht.',
            ],

            meta: [
                {
                    id: 1,
                    title: 'Shopify',
                    label: 'Projektart',
                },
                {
                    id: 2,
                    title: 'Niche Fragrance',
                    label: 'Branche',
                },
                {
                    id: 3,
                    title: 'Collections',
                    label: 'Shop-Bereiche',
                },
                {
                    id: 4,
                    title: 'Mobile Darstellung',
                    label: 'Fokus',
                },
            ],

            image: heroIMG,
            imageAlt: 'Fine Scents Shopify Store Startseite',
        },

        challenge: {
            theme: 'dark',

            eyebrow: 'Ausgangssituation',

            title: 'Ein visueller Shopify-Store für eine hochwertige Duftmarke.',

            text: 'Fine Scents arbeitet mit einem kuratierten Sortiment aus Perfumes, Home Fragrances und Personal Care. Der Shopify-Store musste die Marke hochwertig präsentieren, Produktbereiche klar strukturieren und Kunden schnell zu relevanten Düften, Collections und Produktseiten führen.',

            items: [
                {
                    id: 1,
                    text: 'Mehrere Produktkategorien mussten klar und hochwertig dargestellt werden',
                },
                {
                    id: 2,
                    text: 'Startseite und Verkaufsbereiche sollten stärker auf Markenwirkung und Online-Verkauf ausgerichtet werden',
                },
                {
                    id: 3,
                    text: 'Produktseiten mussten visuell ansprechend, verständlich und mobil nutzbar bleiben',
                },
                {
                    id: 4,
                    text: 'Collections und Navigation sollten Kunden schneller zu passenden Produkten führen',
                },
                {
                    id: 5,
                    text: 'Technische Shopify-Anpassungen mussten sauber in die bestehende Store-Struktur integriert werden',
                },
                {
                    id: 6,
                    text: 'Der Store brauchte eine stabile Grundlage für weitere Inhalte, Produkte und Kampagnen',
                },
            ],

            image: challengeIMG,
            imageAlt: 'Fine Scents Produktbereich Shopify',
        },

        structure: {
            theme: 'light',

            eyebrow: 'Zielsetzung',

            title: 'Eine klare Shopify-Struktur für eine hochwertige Duftmarke schaffen.',

            text: 'Ziel des Projekts war es, den Fine Scents Shopify-Store visuell hochwertig, technisch sauber und übersichtlich aufzubauen. Besonders wichtig waren eine klare Produktpräsentation, verständliche Collections, mobile Darstellung und eine technische Grundlage, die weitere Kampagnen, Inhalte und Produktbereiche unterstützt.',

            image: structureIMG,
            imageAlt: 'Fine Scents Mobile Shopify Store',

            items: [
                {
                    id: 1,
                    title: 'Markenwirkung',
                    text: 'Der Store sollte die hochwertige Duftmarke klar präsentieren und den visuellen Charakter der Produkte unterstützen.',
                },
                {
                    id: 2,
                    title: 'Produktstruktur',
                    text: 'Perfumes, Home Fragrances, Personal Care und weitere Produktbereiche sollten verständlich organisiert werden.',
                },
                {
                    id: 3,
                    title: 'Mobile Darstellung',
                    text: 'Der Shopify-Store sollte auch auf Smartphones hochwertig wirken und einfach nutzbar bleiben.',
                },
                {
                    id: 4,
                    title: 'Technische Grundlage',
                    text: 'Shopify-Anpassungen wurden so geplant, dass Produktseiten, Collections und Inhalte langfristig gepflegt und erweitert werden können.',
                },
            ],
        },

        shopifyImplementation: {
            theme: 'dark',

            eyebrow: 'Warum Nexon Digital Studio',

            title: 'Fokussierte Shopify-Umsetzung für visuelle Marken und Produktwelten.',

            text: 'Für Fine Scents lag der Fokus auf einer Shopify-Umsetzung, die hochwertige Produktpräsentation, klare Store-Struktur und technische Stabilität verbindet. Nexon Digital Studio unterstützte bei Produktbereichen, Collections, mobiler Darstellung und technischen Anpassungen für den Online-Verkauf.',

            items: [
                {
                    id: 1,
                    title: 'Shopify-Expertise',
                    text: 'Technische Umsetzung von Shopify-Stores, Produktseiten, Collections und Theme-Anpassungen.',
                },
                {
                    id: 2,
                    title: 'Visuelle Store-Struktur',
                    text: 'Aufbau von Store-Bereichen, die Produkte hochwertig präsentieren und die Marke klar transportieren.',
                },
                {
                    id: 3,
                    title: 'Saubere Umsetzung',
                    text: 'Technische Anpassungen am Shopify-Store, damit Produktwelten, Inhalte und Kampagnen langfristig pflegbar bleiben.',
                },
            ],
        },

        implementation: {
            theme: 'light',

            eyebrow: 'Umsetzung',

            title: 'Produktwelten, Collections und mobile Darstellung technisch umgesetzt.',

            items: [
                {
                    id: 1,
                    eyebrow: 'Shopify Store-Anpassung',
                    title: 'Startseite und Markenbereiche',
                    text: 'Zentrale Bereiche des Shopify-Stores wurden technisch umgesetzt und auf Produktpräsentation, Markenwirkung und Online-Verkauf ausgerichtet.',
                },
                {
                    id: 2,
                    eyebrow: 'Produkte & Collections',
                    title: 'Übersichtliche Duftwelten',
                    text: 'Produktseiten und Collection-Bereiche wurden so strukturiert, dass Kunden schneller relevante Düfte, Produktkategorien und Angebote finden.',
                },
                {
                    id: 3,
                    eyebrow: 'Mobile Optimierung',
                    title: 'Hochwertig auf allen Geräten',
                    text: 'Mobile Darstellung, Navigation und Nutzerführung wurden geprüft und angepasst, damit der Shopify-Store auch auf Smartphones klar und hochwertig nutzbar bleibt.',
                },
            ],
        },

        results: {
            theme: 'light',

            eyebrow: 'Ergebnisse',

            title: 'Ein hochwertig strukturierter Shopify-Store für den Online-Verkauf',

            stats: [
                {
                    id: 1,
                    value: '10+',
                    label: 'Store-Bereiche',
                    text: 'Strukturiert und technisch umgesetzt',
                },
                {
                    id: 2,
                    value: '5+',
                    label: 'Produktbereiche',
                    text: 'Perfumes, Home Fragrances, Personal Care, Discovery Set und Content-Bereiche',
                },
                {
                    id: 3,
                    value: '3',
                    label: 'Breakpoints',
                    text: 'Desktop, Tablet und Mobile geprüft',
                },
                {
                    id: 4,
                    value: '100%',
                    label: 'Shopify',
                    text: 'Fokussierte Umsetzung ohne unnötige Systemkomplexität',
                },
            ],

            testimonial: {
                quote: 'Bei diesem Projekt lag der Fokus darauf, eine hochwertige Duftmarke im Shopify-Store klar und visuell stark zu präsentieren. Wichtig waren eine verständliche Produktstruktur, mobile Nutzerführung und eine technische Grundlage, die weitere Produkte, Inhalte und Kampagnen sauber unterstützt.',

                labelTitle: 'Kommentar-Label:',
                label: 'Kommentar zur Umsetzung',

                author: {
                    ...projectAuthorData,
                    name: 'Dmytro Kiriachek',
                    position: 'CEO Nexon Digital Studio',
                },
            },
        },

        faq: {
            title: 'Häufige Fragen zu diesem Shopify-Projekt',

            items: [
                {
                    id: 1,
                    question: 'Was wurde bei Fine Scents umgesetzt?',

                    answer: 'Bei Fine Scents lag der Fokus auf technischer Shopify-Umsetzung, klarer Produktpräsentation, Collection-Struktur, mobiler Darstellung und einer sauberen Store-Struktur für den Online-Verkauf.',
                },
                {
                    id: 2,
                    question: 'Für welche Unternehmen ist dieses Shopify-Projekt relevant?',

                    answer: 'Dieses Shopify-Projekt ist relevant für Marken, kleine Unternehmen und Online-Händler mit hochwertigen Produkten, mehreren Produktbereichen oder einem starken visuellen Markenauftritt.',
                },
                {
                    id: 3,
                    question: 'Welche Shopify-Bereiche wurden berücksichtigt?',

                    answer: 'Im Projekt wurden zentrale Shopify-Bereiche wie Startseite, Produktseiten, Collections, Navigation, mobile Darstellung und technische Store-Struktur berücksichtigt.',
                },
                {
                    id: 4,
                    question: 'Warum ist eine klare Produktstruktur in Shopify wichtig?',

                    answer: 'Eine klare Produktstruktur hilft Kunden, relevante Produkte schneller zu finden. Besonders bei mehreren Kategorien, Collections oder Produktwelten ist eine verständliche Shopify-Struktur wichtig für Nutzerführung und Online-Verkauf.',
                },
                {
                    id: 5,
                    question: 'Kann Nexon Digital Studio ähnliche Shopify-Stores umsetzen?',

                    answer: 'Ja. Nexon Digital Studio unterstützt kleine Unternehmen, Marken und Online-Händler bei Shopify-Umsetzung, Theme-Anpassung, Produktseiten, Collections, mobiler Optimierung und technischer Store-Struktur.',
                },
                {
                    id: 6,
                    question: 'Unterstützt Nexon Digital Studio auch bestehende Shopify-Stores?',

                    answer: 'Ja. Bestehende Shopify-Stores können technisch angepasst, neu strukturiert oder für mobile Nutzung, Produktpräsentation und bessere Pflege im Shopify-Admin verbessert werden.',
                },
            ],

            button: {
                text: 'Anfrage senden',
                href: '#contacts',
            },
        },
    },
};
