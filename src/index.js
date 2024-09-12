import React from 'react';
import ReactDOM from 'react-dom/client';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import App from './App';
import './output.css';

i18next
    .use(initReactI18next)
    .use(HttpApi)
    .use(LanguageDetector)
    .init({
        //lng: document.querySelector('html').lang, //default language
        supportedLngs: ['en', 'it'],
        fallbackLng: "en", //when specified language translations not present 
        debug: false,
        backend: {
            /* translation file path */
            loadPath: "/assets/locales/{{lng}}/{{lng}}.json",
        },
        detection: {
            order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
            caches: ['cookie']
        },
        keySeparator: false,
        interpolation: {
            escapeValue: false,
            formatSeparator: ",",
        },
        react: {
            useSuspense: false,
        },
    });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);