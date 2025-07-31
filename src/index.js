import React from "react";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from "./translations/en.json";
import ua from "./translations/ua.json";
import ru from "./translations/ru.json";

import App from "./App";

// Получаем текущий URL
const currentUrl = window.location.href;

// Устанавливаем язык по умолчанию
let selectedLanguage = "en";

// Проверяем, содержит ли URL "/ua/"
if (currentUrl.includes("/ua/")) {
    selectedLanguage = "ua";
} else if (currentUrl.includes("/ru/")) {
    selectedLanguage = "ru";
}

// Инициализация i18next
i18n.use(LanguageDetector) // плагин детектора
    .use(initReactI18next) // подключение к React
    .init({
        resources: {
            en: { translation: en },
            ua: { translation: ua },
            ru: { translation: ru },
        },
        lng: selectedLanguage, // вот здесь — текущий язык!
        fallbackLng: "en", // если чего-то нет в ru или ua — брать из en
        debug: true,
        detection: {
            order: ["path", "localStorage", "navigator"],
            lookupFromPathIndex: 0, // язык из первого сегмента пути
        },
        interpolation: {
            escapeValue: false,
        },
    });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18n}>
            <App />
        </I18nextProvider>
    </React.StrictMode>
);
