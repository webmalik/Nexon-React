import { Helmet } from 'react-helmet';

import { siteData } from '../../data/siteData';

import { getCanonicalUrl, toAbsoluteUrl } from './schemaBuilders';

const serializeJsonLd = (data) => {
    return JSON.stringify(data).replace(/</g, '\\u003c');
};

const SEO = ({
    title,
    description,

    canonicalPath = '/',

    image = '/og.jpg',
    imageAlt = 'Nexon Digital Studio',

    ogType = 'website',

    noindex = false,

    author = null,

    schemas = [],
}) => {
    const canonicalUrl = canonicalPath ? getCanonicalUrl(canonicalPath) : null;

    const imageUrl = toAbsoluteUrl(image);

    const schemaGraph = (Array.isArray(schemas) ? schemas : [schemas]).filter(Boolean);

    const structuredData = schemaGraph.length
        ? {
              '@context': 'https://schema.org',
              '@graph': schemaGraph,
          }
        : null;

    const robotsContent = noindex
        ? 'noindex, nofollow'
        : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

    return (
        <Helmet
            htmlAttributes={{
                lang: siteData.language,
            }}>
            <title>{title}</title>

            <meta name="description" content={description} />

            <meta name="robots" content={robotsContent} />

            <meta name="googlebot" content={robotsContent} />

            {author && <meta name="author" content={author} />}

            {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

            <meta property="og:type" content={ogType} />

            <meta property="og:locale" content={siteData.locale} />

            <meta property="og:site_name" content={siteData.name} />

            <meta property="og:title" content={title} />

            <meta property="og:description" content={description} />

            {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

            <meta property="og:image" content={imageUrl} />

            <meta property="og:image:secure_url" content={imageUrl} />

            <meta property="og:image:alt" content={imageAlt} />

            <meta name="twitter:card" content="summary_large_image" />

            <meta name="twitter:title" content={title} />

            <meta name="twitter:description" content={description} />

            <meta name="twitter:image" content={imageUrl} />

            <meta name="twitter:image:alt" content={imageAlt} />

            {structuredData && (
                <script type="application/ld+json">{serializeJsonLd(structuredData)}</script>
            )}
        </Helmet>
    );
};

export default SEO;
