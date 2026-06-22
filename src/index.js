import React from 'react';
import { hydrate, render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import en from './translations/en.json';
import ua from './translations/ua.json';
import ru from './translations/ru.json';
import de from './translations/de.json';

import App from './App';

console.log('[prerender] init');

const currentUrl = window.location.href;

let selectedLanguage = 'de';

if (currentUrl.includes('/ua/')) {
    selectedLanguage = 'ua';
} else if (currentUrl.includes('/ru/')) {
    selectedLanguage = 'ru';
} else if (currentUrl.includes('/de/')) {
    selectedLanguage = 'de';
}

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            ua: { translation: ua },
            ru: { translation: ru },
            de: { translation: de },
        },
        lng: selectedLanguage,
        fallbackLng: 'en',
        debug: true,
        detection: {
            order: ['path', 'localStorage', 'navigator'],
            lookupFromPathIndex: 0,
        },
        interpolation: {
            escapeValue: false,
        },
    });

const rootElement = document.getElementById('root');

const app = (
    <React.StrictMode>
        <BrowserRouter>
            <I18nextProvider i18n={i18n}>
                <App />
            </I18nextProvider>
        </BrowserRouter>
    </React.StrictMode>
);

if (rootElement.hasChildNodes()) {
    hydrate(app, rootElement);
} else {
    render(app, rootElement);
}
