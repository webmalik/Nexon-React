import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

export default function SEO() {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;

    const base = 'https://nexon-studio.com';
    const canonical =
        currentLang === 'ua' ? `${base}/ua/` : currentLang === 'ru' ? `${base}/ru/` : `${base}/en/`;

    const htmlLang = currentLang === 'ua' ? 'uk-UA' : currentLang === 'ru' ? 'ru-UA' : 'en-UA';

    const ogImage = `${base}/og.jpg`;

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'NEXON STUDIO',
        url: base,
        logo: `${base}/logo.png`,
        sameAs: ['https://t.me/dmitriy_uier'],
    };

    return (
        <Helmet htmlAttributes={{ lang: htmlLang }}>
            {/* SEO basics */}
            <title>{t('seo.title')}</title>
            <meta name="description" content={t('seo.description')} />
            <link rel="canonical" href={canonical} />

            {/* Hreflang */}
            <link rel="alternate" href={`${base}/ua/`} hrefLang="uk-UA" />
            <link rel="alternate" href={`${base}/ru/`} hrefLang="ru-UA" />
            <link rel="alternate" href={`${base}/en/`} hrefLang="en-UA" />
            <link rel="alternate" href={base} hrefLang="x-default" />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={t('seo.title')} />
            <meta property="og:description" content={t('seo.description')} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:url" content={canonical} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={t('seo.title')} />
            <meta name="twitter:description" content={t('seo.description')} />
            <meta name="twitter:image" content={ogImage} />

            {/* JSON-LD */}
            <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        </Helmet>
    );
}
