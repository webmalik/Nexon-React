import {
    ProcessSearchIcon,
    ProcessCodeIcon,
    ProcessRocketIcon,
    ProcessChatIcon,
    ProcessLockIcon,
    ProcessClockIcon,
} from '../assets/icons/processIcons';

export const processList = [
    {
        id: 1,
        number: '01',
        icon: ProcessSearchIcon,
        title: {
            de: 'Projektanalyse',
            en: 'Project analysis',
            ua: 'Аналіз проєкту',
            ru: 'Анализ проекта',
        },
        description: {
            de: 'Wir analysieren Ihren bestehenden Shopify-Shop oder Ihre Idee, prüfen Ziele, Struktur, Design und technische Anforderungen. Sie erhalten eine klare Einschätzung und Empfehlung.',
            en: 'We analyze your existing Shopify store or idea, check goals, structure, design and technical requirements. You receive a clear assessment and recommendation.',
            ua: 'Ми аналізуємо ваш існуючий Shopify-магазин або ідею, перевіряємо цілі, структуру, дизайн і технічні вимоги. Ви отримуєте чітку оцінку та рекомендації.',
            ru: 'Мы анализируем ваш существующий Shopify-магазин или идею, проверяем цели, структуру, дизайн и технические требования. Вы получаете понятную оценку и рекомендации.',
        },
    },
    {
        id: 2,
        number: '02',
        icon: ProcessCodeIcon,
        title: {
            de: 'Design & Entwicklung',
            en: 'Design & development',
            ua: 'Дизайн і розробка',
            ru: 'Дизайн и разработка',
        },
        description: {
            de: 'Wir gestalten und entwickeln Ihren Shopify-Shop – schnell, modern und verkaufsorientiert. Sauberer Code, flexible Sections, mobile Optimierung und SEO-Grundstruktur sind inklusive.',
            en: 'We design and develop your Shopify store — fast, modern and sales-focused. Clean code, flexible sections, mobile optimization and basic SEO structure are included.',
            ua: 'Ми проєктуємо та розробляємо ваш Shopify-магазин — швидко, сучасно й з фокусом на продажі. Чистий код, гнучкі секції, мобільна оптимізація та базова SEO-структура включені.',
            ru: 'Мы проектируем и разрабатываем ваш Shopify-магазин — быстро, современно и с фокусом на продажи. Чистый код, гибкие секции, мобильная оптимизация и базовая SEO-структура включены.',
        },
        active: true,
    },
    {
        id: 3,
        number: '03',
        icon: ProcessRocketIcon,
        title: {
            de: 'Launch & Optimierung',
            en: 'Launch & optimization',
            ua: 'Запуск і оптимізація',
            ru: 'Запуск и оптимизация',
        },
        description: {
            de: 'Nach dem Launch prüfen wir Performance, Darstellung auf allen Geräten und wichtige Conversion-Elemente. Auf Wunsch begleiten wir Sie weiter und optimieren kontinuierlich für mehr Ergebnisse.',
            en: 'After launch, we check performance, display on all devices and key conversion elements. If needed, we continue supporting you and optimize for better results.',
            ua: 'Після запуску ми перевіряємо швидкість, відображення на всіх пристроях і ключові елементи конверсії. За потреби супроводжуємо проєкт далі та оптимізуємо результат.',
            ru: 'После запуска мы проверяем скорость, отображение на всех устройствах и ключевые элементы конверсии. При необходимости сопровождаем проект дальше и улучшаем результат.',
        },
    },
];

export const processBenefitsList = [
    {
        id: 1,
        icon: ProcessChatIcon,
        title: {
            de: 'Projekt starten',
            en: 'Start project',
            ua: 'Запустити проєкт',
            ru: 'Запустить проект',
        },
        description: {
            de: 'Direkte Kommunikation und schnelle Antworten',
            en: 'Direct communication and fast answers',
            ua: 'Пряма комунікація та швидкі відповіді',
            ru: 'Прямая коммуникация и быстрые ответы',
        },
    },
    {
        id: 2,
        icon: ProcessLockIcon,
        title: {
            de: '100% Transparent',
            en: '100% Transparent',
            ua: '100% прозоро',
            ru: '100% прозрачно',
        },
        description: {
            de: 'Klare Prozesse, offene Kommunikation und faire Preise',
            en: 'Clear processes, open communication and fair prices',
            ua: 'Зрозумілі процеси, відкрита комунікація та чесні ціни',
            ru: 'Понятные процессы, открытая коммуникация и честные цены',
        },
    },
    {
        id: 3,
        icon: ProcessClockIcon,
        title: {
            de: 'Zuverlässig & Pünktlich',
            en: 'Reliable & punctual',
            ua: 'Надійно та вчасно',
            ru: 'Надежно и вовремя',
        },
        description: {
            de: 'Termintreu, planbar und professionell',
            en: 'On time, predictable and professional',
            ua: 'Дотримання термінів, планування та професійність',
            ru: 'Соблюдение сроков, планирование и профессиональность',
        },
    },
];
