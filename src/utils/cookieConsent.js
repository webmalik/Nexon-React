export const COOKIE_CONSENT_KEY = 'wm_cookie_consent';

export const DEFAULT_COOKIE_CATEGORIES = {
    necessary: true,
    statistics: false,
    marketing: false,
};

export const getCookieConsent = () => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);

    if (!consent) return null;

    // Підтримка старого формату: accepted / rejected
    if (consent === 'accepted') {
        return {
            status: 'accepted',
            categories: {
                necessary: true,
                statistics: true,
                marketing: true,
            },
        };
    }

    if (consent === 'rejected') {
        return {
            status: 'rejected',
            categories: {
                necessary: true,
                statistics: false,
                marketing: false,
            },
        };
    }

    try {
        return JSON.parse(consent);
    } catch {
        return null;
    }
};

export const setCookieConsent = (data) => {
    localStorage.setItem(
        COOKIE_CONSENT_KEY,
        JSON.stringify({
            ...data,
            updatedAt: new Date().toISOString(),
        }),
    );

    window.dispatchEvent(new Event('wm-cookie-consent-updated'));
};

export const hasCookieCategory = (category) => {
    const consent = getCookieConsent();

    if (!consent) return false;

    return Boolean(consent.categories?.[category]);
};

export const openCookieSettings = () => {
    window.dispatchEvent(new Event('wm-cookie-settings-open'));
};
