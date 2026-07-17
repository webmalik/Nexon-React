import heroIMG from '../../assets/images/projects/doc-of-detox/hero.png';

// Додаткові зображення підключимо під час верстки блоків
import challengeIMG from '../../assets/images/projects/doc-of-detox/challenge.png';
import structureIMG from '../../assets/images/projects/doc-of-detox/structure.png';

import { projectAuthorData } from './projectAuthorData';

export const docOfDetoxProject = {
    id: 3,
    slug: 'doc-of-detox',

    label: 'Shopify',
    category: 'Shopify Store',

    title: 'DOC OF DETOX',

    cardDescription:
        'Shopify Store-Anpassung für eine Health-&-Wellness-Marke: Landingpage-Struktur, mobile Darstellung und technische Umsetzung von Verkaufsbereichen.',

    image: heroIMG,
    imageAlt: 'DOC OF DETOX Shopify Store Startseite',

    tags: ['UX/UI', 'Entwicklung', 'Shopify'],

    website: 'https://dod.live/',

    page: {
        seo: {
            title: 'DOC OF DETOX — Shopify-Umsetzung für einen Health-&-Wellness Store | Nexon Digital Studio',

            description:
                'Shopify-Umsetzung für DOC OF DETOX: technische Store-Anpassung, strukturierte Produktbereiche, mobile Optimierung und skalierbare Shopify-Struktur.',
        },

        hero: {
            subtitle:
                'Nexon Digital Studio entwickelt und verbessert Shopify-Shops für kleine Unternehmen, Marken und Online-Händler in Deutschland — klar strukturiert, technisch sauber und auf Online-Verkauf ausgerichtet.',

            title: ['SHOPIFY', 'ENTWICKLUNG'],

            text: 'Shopify-Erstellung, Theme-Anpassung, Relaunch und technische Umsetzung für Unternehmen, die online verkaufen möchten.',

            button: 'Anfrage senden',
        },

        intro: {
            title: 'DOC OF DETOX — Shopify-Umsetzung für einen Health-&-Wellness Store',

            texts: [
                'Für DOC OF DETOX wurde ein Shopify-Store mit umfangreichem Produktkatalog technisch angepasst und strukturiert weiterentwickelt. Der Fokus lag auf klarer Produktpräsentation, übersichtlichen Collections, mobiler Nutzerführung und einer sauberen technischen Grundlage für den Online-Verkauf.',

                'Das Projekt zeigt, wie Nexon Digital Studio Shopify-Shops mit vielen Produktbereichen, Kategorien und Verkaufsflächen technisch unterstützt, verständlicher strukturiert und für Kunden besser nutzbar macht.',
            ],

            meta: [
                {
                    id: 1,
                    title: 'Shopify Setup',
                    label: 'Projektart',
                },
                {
                    id: 2,
                    title: 'Health & Wellness',
                    label: 'Branche',
                },
                {
                    id: 3,
                    title: 'Shop-Bereiche',
                    label: 'Collections',
                },
                {
                    id: 4,
                    title: 'Mobile Optimierung',
                    label: 'Fokus',
                },
            ],

            image: heroIMG,
            imageAlt: 'DOC OF DETOX Shopify Store Startseite',
        },

        challenge: {
            theme: 'dark',

            eyebrow: 'Ausgangssituation',

            title: 'Ein umfangreicher Shopify-Store mit vielen Produktbereichen.',

            text: 'DOC OF DETOX arbeitet mit einem breiten Sortiment aus Wellness-, Nutraceutical- und Health-Produkten. Der Shopify-Store musste viele Produkte, Collections, Kategorien und Verkaufsbereiche verständlich abbilden, ohne für Nutzer unübersichtlich zu wirken.',

            items: [
                {
                    id: 1,
                    text: 'Viele Produktbereiche und Collections mussten klarer strukturiert werden',
                },
                {
                    id: 2,
                    text: 'Startseite und Verkaufsbereiche sollten stärker auf Orientierung und Online-Verkauf ausgerichtet werden',
                },
                {
                    id: 3,
                    text: 'Produktseiten und Kategorie-Bereiche mussten verständlich und mobil nutzbar bleiben',
                },
                {
                    id: 4,
                    text: 'Navigation und Shop-Struktur sollten Kunden schneller zu relevanten Produkten führen',
                },
                {
                    id: 5,
                    text: 'Technische Shopify-Anpassungen mussten sauber in die bestehende Store-Struktur integriert werden',
                },
                {
                    id: 6,
                    text: 'Der Store brauchte eine stabile Grundlage für weitere Inhalte, Produkte und Optimierungen',
                },
            ],

            image: challengeIMG,
            imageAlt: 'DOC OF DETOX Produktbereich Shopify',
        },

        structure: {
            theme: 'light',

            eyebrow: 'Zielsetzung',

            title: 'Eine klare Shopify-Struktur für einen großen Produktkatalog schaffen.',

            text: 'Ziel des Projekts war es, den DOC OF DETOX Shopify-Store übersichtlicher, technisch sauberer und besser nutzbar aufzubauen. Besonders wichtig waren eine klare Produktstruktur, verständliche Collections, mobile Darstellung und eine technische Grundlage, die weitere Anpassungen ermöglicht.',

            image: structureIMG,
            imageAlt: 'DOC OF DETOX Mobile Shopify Store',

            items: [
                {
                    id: 1,
                    title: 'Produktstruktur',
                    text: 'Produkte, Kategorien und Collections sollten klarer organisiert werden, damit Kunden schneller relevante Bereiche finden.',
                },
                {
                    id: 2,
                    title: 'Store-Navigation',
                    text: 'Navigation, Startseite und zentrale Shop-Bereiche wurden auf bessere Orientierung und einfachere Nutzerführung ausgerichtet.',
                },
                {
                    id: 3,
                    title: 'Mobile Darstellung',
                    text: 'Der Store sollte auch auf Smartphones verständlich funktionieren und wichtige Produktbereiche sauber darstellen.',
                },
                {
                    id: 4,
                    title: 'Technische Grundlage',
                    text: 'Shopify-Anpassungen wurden so umgesetzt, dass der Store langfristig gepflegt, erweitert und optimiert werden kann.',
                },
            ],
        },

        shopifyImplementation: {
            theme: 'dark',

            eyebrow: 'Warum Nexon Digital Studio',

            title: 'Fokussierte Shopify-Umsetzung für komplexe Store-Strukturen.',

            text: 'Für DOC OF DETOX lag der Fokus auf einer technischen Shopify-Umsetzung, die auch bei vielen Produkten, Collections und Inhaltsbereichen übersichtlich bleibt. Nexon Digital Studio unterstützte bei Store-Struktur, Produktpräsentation, mobiler Darstellung und technischen Anpassungen für den Online-Verkauf.',

            items: [
                {
                    id: 1,
                    title: 'Shopify-Expertise',
                    text: 'Technische Umsetzung von Shopify-Stores, Produktbereichen, Collections und Theme-Anpassungen.',
                },
                {
                    id: 2,
                    title: 'Klare Store-Struktur',
                    text: 'Strukturierung von Startseite, Navigation und Produktbereichen für eine bessere Nutzerführung.',
                },
                {
                    id: 3,
                    title: 'Technische Umsetzung',
                    text: 'Saubere Anpassungen am Shopify-Store, damit Inhalte, Produkte und Verkaufsbereiche langfristig pflegbar bleiben.',
                },
            ],
        },

        implementation: {
            theme: 'light',

            eyebrow: 'Umsetzung',

            title: 'Produktbereiche, Collections und mobile Darstellung technisch umgesetzt.',

            items: [
                {
                    id: 1,
                    eyebrow: 'Shopify Store-Anpassung',
                    title: 'Startseite und zentrale Shop-Bereiche',
                    text: 'Zentrale Bereiche des Shopify-Stores wurden technisch angepasst und klarer auf Produktpräsentation, Orientierung und Online-Verkauf ausgerichtet.',
                },
                {
                    id: 2,
                    eyebrow: 'Collections & Produktstruktur',
                    title: 'Übersichtliche Produktbereiche',
                    text: 'Produktbereiche und Collections wurden so strukturiert, dass Kunden schneller relevante Kategorien, Bestseller und Produkte finden.',
                },
                {
                    id: 3,
                    eyebrow: 'Mobile Optimierung',
                    title: 'Nutzbar auf allen Geräten',
                    text: 'Mobile Darstellung, Navigation und Nutzerführung wurden geprüft und angepasst, damit der Shopify-Store auch auf Smartphones verständlich nutzbar bleibt.',
                },
            ],
        },

        results: {
            theme: 'light',

            eyebrow: 'Ergebnisse',

            title: 'Ein klarer strukturierter Shopify-Store für einen umfangreichen Produktkatalog',

            stats: [
                {
                    id: 1,
                    value: '10+',
                    label: 'Store-Bereiche',
                    text: 'Strukturiert und technisch umgesetzt',
                },
                {
                    id: 2,
                    value: '6',
                    label: 'Shopify-Templates',
                    text: 'Für Produktseiten, Collections und zentrale Shop-Bereiche',
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
                quote: 'Bei diesem Projekt lag der Fokus darauf, einen umfangreichen Shopify-Store verständlicher zu strukturieren. Besonders wichtig waren klare Produktbereiche, mobile Nutzerführung und eine technische Grundlage, die weitere Produkte, Inhalte und Optimierungen sauber unterstützt.',

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
                    question: 'Was wurde bei DOC OF DETOX umgesetzt?',

                    answer: 'Bei DOC OF DETOX lag der Fokus auf Shopify Store-Anpassung, Produktstruktur, Collections, mobiler Darstellung und technischer Umsetzung.',
                },
                {
                    id: 2,
                    question: 'Für welche Art von Unternehmen ist dieses Projekt relevant?',

                    answer: 'Das Projekt ist relevant für Health-&-Wellness Marken, Online-Händler und Unternehmen mit umfangreichen Produktkatalogen.',
                },
                {
                    id: 3,
                    question: 'Kann Nexon Digital Studio ähnliche Shopify-Stores verbessern?',

                    answer: 'Ja. Nexon Digital Studio unterstützt Shopify-Stores bei Struktur, Produktpräsentation, Collections, mobiler Optimierung und technischer Umsetzung.',
                },
            ],

            button: {
                text: 'Anfrage senden',
                href: '#contacts',
            },
        },
    },
};
