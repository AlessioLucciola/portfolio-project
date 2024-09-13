import React from 'react';
import ReactDOM from 'react-dom/client';
import { Helmet } from 'react-helmet';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import App from './App';
import me from './assets/me.jpg';
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
root.render(
    <>
        <Helmet>
            <title>Alessio Lucciola Portfolio</title>
            <meta name="google-site-verification" data-react-helmet="true" content="FGKxB5O1aJsgIxJfNfu_KAfmJW_im96FXfSMbP54fNc" />
            <meta name="description" data-react-helmet="true" content="I'm Alessio Lucciola, a 25-year-old Software Engineer from Italy. Since I was a child I have always had a profound interest in IT, in fact, I obtained a Bachelor's Degree in Computer Science in March 2022 and I am currently obtaining a Master's Degree in Sapienza - University of Rome. I am particularly interested in Web Application development although I am always experimenting with new technologies and tools to create interesting projects (especially if they concern AI)." />
            <meta property="og:title" data-react-helmet="true" content="Alessio Lucciola Portfolio" />
            <meta property="og:description" data-react-helmet="true" content="I'm Alessio Lucciola, a 25-year-old Software Engineer from Italy. Since I was a child I have always had a profound interest in IT, in fact, I obtained a Bachelor's Degree in Computer Science in March 2022 and I am currently obtaining a Master's Degree in Sapienza - University of Rome. I am particularly interested in Web Application development although I am always experimenting with new technologies and tools to create interesting projects (especially if they concern AI)." />
            <meta property="og:image" data-react-helmet="true" content={me} />
            <meta property="og:url" data-react-helmet="true" content="https://alessioluc.netlify.app/" />
            <meta property="og:type" data-react-helmet="true" content="website" />
            <meta property="og:site_name" data-react-helmet="true" content="Alessio Lucciola Portfolio" />
            <meta property="og:locale" data-react-helmet="true" content="en" />
            <meta name="twitter:title" data-react-helmet="true" content="Alessio Lucciola Portfolio" />
            <meta name="twitter:description" data-react-helmet="true" content="I'm Alessio Lucciola, a 25-year-old Software Engineer from Italy. Since I was a child I have always had a profound interest in IT, in fact, I obtained a Bachelor's Degree in Computer Science in March 2022 and I am currently obtaining a Master's Degree in Sapienza - University of Rome. I am particularly interested in Web Application development although I am always experimenting with new technologies and tools to create interesting projects (especially if they concern AI)." />
            <meta name="twitter:card" data-react-helmet="true" content="summary_large_image" />
            <meta name="twitter:image" data-react-helmet="true" content={me} />
        </Helmet>
        <App />
    </>
);