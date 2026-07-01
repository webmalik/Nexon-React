const ENABLE_ANALYTICS = false;
const GA_ID = 'G-XXXXXXXXXX';

export const loadGoogleAnalytics = () => {
    if (!ENABLE_ANALYTICS) return;

    if (!GA_ID || GA_ID === 'G-XXXXXXXXXX') return;

    if (document.querySelector('[data-wm-ga]')) return;

    const script = document.createElement('script');

    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script.async = true;
    script.dataset.wmGa = 'true';

    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];

    window.gtag = function () {
        window.dataLayer.push(arguments);
    };

    window.gtag('js', new Date());
    window.gtag('config', GA_ID, {
        anonymize_ip: true,
    });
};
