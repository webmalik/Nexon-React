import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './translations/en.json';
import ua from './translations/ua.json';

import App from './App';

const userLanguage = navigator.language || navigator.userLanguage;

let selectedLanguage = 'en';

if (userLanguage.startsWith('uk') || userLanguage.startsWith('ua')) {
    selectedLanguage = 'ua';
}

i18n.init({
    fallbackLng: selectedLanguage,
    resources: {
        en: {
            translation: en,
        },
        ua: {
            translation: ua,
        },
        uk: {
            translation: ua,
        },
    },
    debug: true,
    detection: {
        order: ['localStorage', 'navigator'],
    },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18n}>
            <App />
        </I18nextProvider>
    </React.StrictMode>,
);
