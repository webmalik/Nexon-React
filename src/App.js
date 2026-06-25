import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { StateProvider } from './StateContext';
import { ReactLenis, useLenis } from 'lenis/react';

import './root/scss/style.scss';

import SiteLayout from './components/layout/SiteLayout';
import LegalLayout from './components/layout/LegalLayout';

import HomePage from './pages/HomePage';
import ImpressumPage from './pages/ImpressumPage';
import DatenschutzPage from './pages/DatenschutzPage';

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
    return (
        <StateProvider>
            <ReactLenis root>
                <ScrollToTop />
                <Routes>
                    <Route element={<SiteLayout />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/ua/" element={<HomePage />} />
                        <Route path="/ru/" element={<HomePage />} />
                        <Route path="*" element={<HomePage />} />
                    </Route>

                    <Route element={<LegalLayout />}>
                        <Route path="/impressum/" element={<ImpressumPage />} />
                        <Route path="/ua/impressum/" element={<ImpressumPage />} />
                        <Route path="/ru/impressum/" element={<ImpressumPage />} />

                        <Route path="/datenschutz/" element={<DatenschutzPage />} />
                        <Route path="/ua/datenschutz/" element={<DatenschutzPage />} />
                        <Route path="/ru/datenschutz/" element={<DatenschutzPage />} />
                    </Route>
                </Routes>
            </ReactLenis>
        </StateProvider>
    );
}

export default App;
