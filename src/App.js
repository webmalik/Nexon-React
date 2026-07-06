import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { StateProvider } from './StateContext';
import { ReactLenis, useLenis } from 'lenis/react';

import './root/scss/style.scss';

import SiteLayout from './components/layout/SiteLayout';
import LegalLayout from './components/layout/LegalLayout';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ConditionsPage from './pages/ConditionsPage';
import ProjectsPage from './pages/ProjectsPage';
import ImpressumPage from './pages/ImpressumPage';
import DatenschutzPage from './pages/DatenschutzPage';

import CookieBanner from './components/CookieBanner/CookieBanner';

import { hasCookieCategory } from './utils/cookieConsent';
import { loadGoogleAnalytics } from './utils/analytics';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    const lenis = useLenis();

    useEffect(() => {
        requestAnimationFrame(() => {
            if (lenis) {
                lenis.scrollTo(0, {
                    immediate: true,
                });

                return;
            }

            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'instant',
            });
        });
    }, [pathname, lenis]);

    return null;
};

function App() {
    useEffect(() => {
        const applyCookieScripts = () => {
            if (hasCookieCategory('statistics')) {
                loadGoogleAnalytics();
            }

            if (hasCookieCategory('marketing')) {
                // Тут потім можна підключити Meta Pixel / Google Ads
                // loadMetaPixel();
                // loadGoogleAds();
            }
        };

        applyCookieScripts();

        window.addEventListener('wm-cookie-consent-updated', applyCookieScripts);

        return () => {
            window.removeEventListener('wm-cookie-consent-updated', applyCookieScripts);
        };
    }, []);

    return (
        <StateProvider>
            <ReactLenis root>
                <ScrollToTop />

                <Routes>
                    <Route element={<SiteLayout />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about/" element={<AboutPage />} />
                        <Route path="/conditions/" element={<ConditionsPage />} />
                        <Route path="/projects/" element={<ProjectsPage />} />
                    </Route>

                    <Route element={<LegalLayout />}>
                        <Route path="/impressum/" element={<ImpressumPage />} />
                        <Route path="/datenschutz/" element={<DatenschutzPage />} />
                    </Route>
                </Routes>

                <CookieBanner />
            </ReactLenis>
        </StateProvider>
    );
}

export default App;
