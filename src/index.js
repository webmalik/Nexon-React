import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import en from './translations/en.json';
import ua from './translations/ua.json';

import App from './App';

// Получаем текущий URL
const currentUrl = window.location.href;

// Устанавливаем язык по умолчанию
let selectedLanguage = 'en';

// Проверяем, содержит ли URL "/ua/"
if (currentUrl.includes('/ua/')) {
    selectedLanguage = 'ua';
}

// Инициализация i18next
i18n.init({
    fallbackLng: selectedLanguage,
    resources: {
        en: {
            translation: en,
        },
        ua: {
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
