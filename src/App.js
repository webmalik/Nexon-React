import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { StateProvider } from './StateContext';
import { ReactLenis } from 'lenis/react';

import './root/scss/style.scss';

import SiteLayout from './components/layout/SiteLayout';

import HomePage from './pages/HomePage';
import ImpressumPage from './pages/ImpressumPage';
import DatenschutzPage from './pages/DatenschutzPage';

function App() {
    return (
        <StateProvider>
            <ReactLenis root>
                <Routes>
                    <Route element={<SiteLayout />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/ua/" element={<HomePage />} />
                        <Route path="/ru/" element={<HomePage />} />

                        <Route path="/impressum/" element={<ImpressumPage />} />
                        <Route path="/ua/impressum/" element={<ImpressumPage />} />
                        <Route path="/ru/impressum/" element={<ImpressumPage />} />

                        <Route path="/datenschutz/" element={<DatenschutzPage />} />
                        <Route path="/ua/datenschutz/" element={<DatenschutzPage />} />
                        <Route path="/ru/datenschutz/" element={<DatenschutzPage />} />

                        <Route path="*" element={<HomePage />} />
                    </Route>
                </Routes>
            </ReactLenis>
        </StateProvider>
    );
}

export default App;
