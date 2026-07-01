import { useEffect, useState } from 'react';

import './CookieBanner.scss';

import {
    DEFAULT_COOKIE_CATEGORIES,
    getCookieConsent,
    setCookieConsent,
} from '../../utils/cookieConsent';

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [categories, setCategories] = useState(DEFAULT_COOKIE_CATEGORIES);

    useEffect(() => {
        const consent = getCookieConsent();

        if (!consent) {
            setIsVisible(true);
        } else {
            setCategories({
                ...DEFAULT_COOKIE_CATEGORIES,
                ...consent.categories,
            });
        }

        const handleOpenSettings = () => {
            const currentConsent = getCookieConsent();

            setCategories({
                ...DEFAULT_COOKIE_CATEGORIES,
                ...currentConsent?.categories,
            });

            setIsVisible(true);
            setIsSettingsOpen(true);
        };

        window.addEventListener('wm-cookie-settings-open', handleOpenSettings);

        return () => {
            window.removeEventListener('wm-cookie-settings-open', handleOpenSettings);
        };
    }, []);

    const handleRejectAll = () => {
        setCookieConsent({
            status: 'rejected',
            categories: {
                necessary: true,
                statistics: false,
                marketing: false,
            },
        });

        setIsVisible(false);
        setIsSettingsOpen(false);
    };

    const handleAcceptAll = () => {
        setCookieConsent({
            status: 'accepted',
            categories: {
                necessary: true,
                statistics: true,
                marketing: true,
            },
        });

        setIsVisible(false);
        setIsSettingsOpen(false);
    };

    const handleSaveSettings = () => {
        const hasOptionalCookies = categories.statistics || categories.marketing;

        setCookieConsent({
            status: hasOptionalCookies ? 'custom' : 'rejected',
            categories,
        });

        setIsVisible(false);
        setIsSettingsOpen(false);
    };

    const handleCategoryChange = (category) => {
        setCategories((prevState) => ({
            ...prevState,
            [category]: !prevState[category],
        }));
    };

    if (!isVisible) return null;

    return (
        <div className="cookie-banner">
            <div className="cookie-banner__body">
                {!isSettingsOpen ? (
                    <>
                        <div className="cookie-banner__content">
                            <h2 className="cookie-banner__title">Wir verwenden Cookies</h2>

                            <p className="cookie-banner__text">
                                Wir verwenden notwendige Cookies für den Betrieb der Website. Mit
                                deiner Zustimmung nutzen wir außerdem Statistik- und
                                Marketing-Cookies, um unsere Website zu verbessern.
                            </p>
                        </div>

                        <div className="cookie-banner__actions">
                            <button
                                className="cookie-banner__button cookie-banner__button--secondary"
                                type="button"
                                onClick={handleRejectAll}>
                                Ablehnen
                            </button>

                            <button
                                className="cookie-banner__button cookie-banner__button--secondary"
                                type="button"
                                onClick={() => setIsSettingsOpen(true)}>
                                Einstellungen
                            </button>

                            <button
                                className="cookie-banner__button"
                                type="button"
                                onClick={handleAcceptAll}>
                                Alle akzeptieren
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="cookie-banner__settings">
                        <div className="cookie-banner__content">
                            <h2 className="cookie-banner__title">Cookie-Einstellungen</h2>

                            <p className="cookie-banner__text">
                                Hier kannst du auswählen, welche Cookies wir verwenden dürfen.
                                Notwendige Cookies sind für den Betrieb der Website erforderlich.
                            </p>
                        </div>

                        <div className="cookie-banner__categories">
                            <label className="cookie-banner__category">
                                <span className="cookie-banner__category-content">
                                    <span className="cookie-banner__category-title">
                                        Notwendige Cookies
                                    </span>

                                    <span className="cookie-banner__category-text">
                                        Erforderlich für Grundfunktionen der Website.
                                    </span>
                                </span>

                                <input
                                    className="cookie-banner__checkbox"
                                    type="checkbox"
                                    checked
                                    disabled
                                    readOnly
                                />
                            </label>

                            <label className="cookie-banner__category">
                                <span className="cookie-banner__category-content">
                                    <span className="cookie-banner__category-title">Statistik</span>

                                    <span className="cookie-banner__category-text">
                                        Hilft uns zu verstehen, wie Besucher die Website nutzen.
                                    </span>
                                </span>

                                <input
                                    className="cookie-banner__checkbox"
                                    type="checkbox"
                                    checked={categories.statistics}
                                    onChange={() => handleCategoryChange('statistics')}
                                />
                            </label>

                            <label className="cookie-banner__category">
                                <span className="cookie-banner__category-content">
                                    <span className="cookie-banner__category-title">Marketing</span>

                                    <span className="cookie-banner__category-text">
                                        Wird für Werbung, Remarketing und externe Tracking-Dienste
                                        verwendet.
                                    </span>
                                </span>

                                <input
                                    className="cookie-banner__checkbox"
                                    type="checkbox"
                                    checked={categories.marketing}
                                    onChange={() => handleCategoryChange('marketing')}
                                />
                            </label>
                        </div>

                        <div className="cookie-banner__actions cookie-banner__actions--settings">
                            <button
                                className="cookie-banner__button cookie-banner__button--secondary"
                                type="button"
                                onClick={handleRejectAll}>
                                Alle ablehnen
                            </button>

                            <button
                                className="cookie-banner__button cookie-banner__button--secondary"
                                type="button"
                                onClick={handleSaveSettings}>
                                Auswahl speichern
                            </button>

                            <button
                                className="cookie-banner__button"
                                type="button"
                                onClick={handleAcceptAll}>
                                Alle akzeptieren
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CookieBanner;
