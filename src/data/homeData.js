import {
    ProcessSearchIcon,
    ProcessCodeIcon,
    ProcessRocketIcon,
    ProcessChatIcon,
    ProcessLockIcon,
    ProcessClockIcon,
} from '../assets/icons/processIcons';

export const defaultData = {
    seo: {
        title: 'Shopify Shop erstellen lassen | Nexon Digital Studio',
        description:
            'Shopify Shop erstellen lassen in Deutschland: individuelles Design, saubere Theme-Entwicklung, Performance, SEO-Grundlagen und technische Betreuung.',
    },

    labels: {
        back: 'Zurück',
    },

    buttons: {
        request: 'Anfrage senden',
        more: 'Mehr erfahren',
    },

    hero: {
        subtitle: 'Shopify-Entwicklung für Unternehmen in Deutschland',
        title: ['SHOPIFY-SHOPS', 'erstellen lassen,', 'die verkaufen.'],
        text: 'Wir entwickeln schnelle, moderne und SEO-optimierte Shopify-Shops für Marken, Händler und lokale Unternehmen.',
        button: 'Anfrage senden',
    },

    info: {
        title: 'Shopify-Entwicklung für Marken und Online-Shops in Deutschland',
        items: [
            {
                id: 1,
                value: '20',
                suffix: 'min',
                text: 'Kostenlose Ersteinschätzung Ihres Shopify-Projekts',
            },
            {
                id: 2,
                value: '90+ speed',
                text: 'Schnelle Shopify-Shops mit Fokus auf Performance, SEO und sauberem Code',
            },
            {
                id: 3,
                value: '15%',
                text: 'Shop-Struktur, Produktseiten und Checkout-orientierte Umsetzung für mehr Anfragen und Verkäufe',
            },
            {
                id: 4,
                value: '30+',
                text: 'Umgesetzte Projekte unterschiedlicher Komplexität',
            },
            {
                id: 5,
                value: '3+',
                text: 'Jahre Erfahrung mit E-Commerce, Shopify und Frontend-Entwicklung',
            },
        ],
    },

    portfolio: {
        title: 'Portfolio',
    },

    services: {
        title: 'Unsere Shopify-Leistungen',
        button: 'Mehr erfahren',
    },

    mail: {
        title: ['Shopify-Projekt starten?', 'E-Mail eintragen – wir melden uns.'],
        button: 'Anfrage senden',
        placeholder: 'Ihre E-Mail-Adresse',
        privacyText:
            'Mit dem Absenden des Formulars erklären Sie sich damit einverstanden, dass Ihre Angaben zur Bearbeitung Ihrer Anfrage verarbeitet werden. Weitere Informationen finden Sie in unserer Datenschutzerklärung.',
        messages: {
            success:
                'Ihre Kontaktdaten wurden erfolgreich gesendet. Wir werden uns bald bei Ihnen melden!',
            error: 'Beim Senden der Nachricht ist ein Fehler aufgetreten.',
            invalidEmail: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
            emptyEmail: 'Bitte geben Sie Ihre E-Mail-Adresse ein.',
        },
    },

    reviews: {
        title: 'Real Reviews of Clients on Cooperation',
    },

    process: {
        label: 'UNSER PROZESS',
        title: 'So läuft Ihr Shopify-Projekt ab',
        text: 'Ein klarer Prozess, transparente Kommunikation und ein Fokus auf Ergebnisse — das macht die Zusammenarbeit effizient und erfolgreich.',
        buttonTitle: 'Projekt starten',
        buttonText: 'Kostenlose Ersteinschätzung',
    },

    faq: {
        title: 'Häufige Fragen',
        button: 'Anfrage senden',
    },

    contacts: {
        title: 'Shopify-Projekt anfragen',
        subtitle:
            'Hinterlassen Sie Ihre Kontaktdaten – wir melden uns mit einer ersten Einschätzung zu Ihrem Shopify-Shop.',
        label: 'Kontakt',
    },

    form: {
        placeholders: {
            name: 'Name und Nachname',
            phone: 'Telefon / WhatsApp',
            email: 'E-Mail-Adresse',
        },
        button: 'Anfrage senden',
        privacyText:
            'Mit dem Absenden des Formulars erklären Sie sich damit einverstanden, dass Ihre Angaben zur Bearbeitung Ihrer Anfrage verarbeitet werden. Weitere Informationen finden Sie in unserer Datenschutzerklärung.',
        messages: {
            userError: 'Bitte geben Sie Ihren Namen ein.',
            phoneError: 'Bitte geben Sie eine gültige Telefonnummer ein.',
        },
    },
};

export const servicesList = [
    {
        id: 1,
        title: 'Shopify UX/UI Design',
        description:
            'Wir gestalten moderne, klare und verkaufsorientierte Shopify-Shops – von der Startseite über Produktseiten bis zur mobilen Nutzerführung. Fokus: Vertrauen, einfache Bedienung und mehr Verkäufe.',
        value: ['ab 4.000 €', 'ab 30 Tagen'],
    },
    {
        id: 2,
        title: 'Shopify Entwicklung',
        description:
            'Wir entwickeln und optimieren Shopify-Shops mit sauberem Code, schneller Ladezeit, SEO-Grundstruktur und flexiblen Sections, die Sie später einfach selbst bearbeiten können.',
        value: ['ab 3.000 €', 'ab 18 Tagen'],
    },
];

export const faqList = [
    {
        id: 1,
        title: 'Wie viel kostet ein Shopify-Shop?',
        content:
            'Die Kosten hängen vom Umfang des Projekts ab: Design, Anzahl der Seiten, Funktionen, Produktstruktur, Integrationen und gewünschte Optimierungen. Ein vollständiger Shopify-Shop beginnt in der Regel ab 2.000 €.',
    },
    {
        id: 2,
        title: 'Wie lange dauert die Entwicklung?',
        content:
            'Ein kleiner Shopify-Shop oder eine gezielte Optimierung kann innerhalb von 1–2 Wochen umgesetzt werden. Für einen vollständigen Shop mit Design, Entwicklung, mobilen Anpassungen, SEO-Grundstruktur und Tests sollten Sie meistens 2–4 Wochen einplanen.',
    },
    {
        id: 3,
        title: 'Können Sie einen bestehenden Shopify-Shop verbessern?',
        content:
            'Ja. Wir analysieren bestehende Shopify-Shops und verbessern gezielt Ladezeit, mobile Darstellung, Produktseiten, Struktur, Conversion-Elemente, Theme-Code und technische Fehler.',
    },
    {
        id: 4,
        title: 'Wird der Shop DSGVO-konform umgesetzt?',
        content:
            'Der Shopify-Shop wird mit Blick auf den deutschen Markt und wichtige DSGVO-Anforderungen umgesetzt. Dazu gehören unter anderem saubere rechtliche Seiten, Cookie-/Consent-Lösungen, Datenschutz-Hinweise, Impressum, Kontaktinformationen und eine möglichst datensparsame technische Einrichtung. Wichtig: Eine rechtliche Prüfung durch einen Anwalt oder Datenschutzexperten ersetzt die technische Umsetzung nicht. Auf Wunsch kann der Shop aber so vorbereitet werden, dass rechtliche Inhalte sauber eingebunden werden können.',
    },
    {
        id: 5,
        title: 'Kann ein bestehender Shopify-Shop optimiert werden?',
        content:
            'Ja. Bestehende Shopify-Shops können technisch, visuell und verkaufsorientiert optimiert werden. Dazu gehören zum Beispiel bessere Produktseiten, übersichtlichere Navigation, mobilfreundliches Design, schnellere Ladezeiten, klarere Call-to-Actions und ein optimierter Checkout-Weg. Zuerst wird geprüft, wo der Shop aktuell Schwächen hat. Danach erhalten Sie konkrete Empfehlungen, welche Anpassungen den größten Effekt haben können.',
    },
    {
        id: 6,
        title: 'Gibt es nach dem Launch Support?',
        content:
            'Ja. Nach dem Launch können kleinere Anpassungen, technische Fragen oder weitere Optimierungen übernommen werden. Auf Wunsch ist auch laufende Betreuung möglich, zum Beispiel für neue Seiten, Produktbereiche, Design-Anpassungen oder technische Erweiterungen.',
    },
    {
        id: 7,
        title: 'Kann ich meinen Shopify-Shop später selbst bearbeiten?',
        content:
            'Ja. Shopify ist dafür gemacht, dass Sie Produkte, Texte, Bilder, Preise, Kategorien und einfache Inhalte selbst verwalten können. Nach der Umsetzung bekommen Sie eine kurze Einführung, damit Sie die wichtigsten Bereiche eigenständig bearbeiten können. Für größere Änderungen am Design, neue Funktionen oder technische Anpassungen kann weiterhin Unterstützung übernommen werden.',
    },
];

export const processList = [
    {
        id: 1,
        number: '01',
        icon: ProcessSearchIcon,
        title: 'Projektanalyse',
        description:
            'Wir analysieren Ihren bestehenden Shopify-Shop oder Ihre Idee, prüfen Ziele, Struktur, Design und technische Anforderungen. Sie erhalten eine klare Einschätzung und Empfehlung.',
    },
    {
        id: 2,
        number: '02',
        icon: ProcessCodeIcon,
        title: 'Design & Entwicklung',
        description:
            'Wir gestalten und entwickeln Ihren Shopify-Shop – schnell, modern und verkaufsorientiert. Sauberer Code, flexible Sections, mobile Optimierung und SEO-Grundstruktur sind inklusive.',
        active: true,
    },
    {
        id: 3,
        number: '03',
        icon: ProcessRocketIcon,
        title: 'Launch & Optimierung',
        description:
            'Nach dem Launch prüfen wir Performance, Darstellung auf allen Geräten und wichtige Conversion-Elemente. Auf Wunsch begleiten wir Sie weiter und optimieren kontinuierlich für mehr Ergebnisse.',
    },
];

export const processBenefitsList = [
    {
        id: 1,
        icon: ProcessChatIcon,
        title: 'Projekt starten',
        description: 'Direkte Kommunikation und schnelle Antworten',
    },
    {
        id: 2,
        icon: ProcessLockIcon,
        title: '100% Transparent',
        description: 'Klare Prozesse, offene Kommunikation und faire Preise',
    },
    {
        id: 3,
        icon: ProcessClockIcon,
        title: 'Zuverlässig & Pünktlich',
        description: 'Termintreu, planbar und professionell',
    },
];
