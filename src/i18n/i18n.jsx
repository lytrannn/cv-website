import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import vn from './locales/vn.json';

// Initialised synchronously at boot from main.jsx so t() returns the
// real translation on first render (no flash of English keys).
//
// Detection order: explicit choice persisted to localStorage > browser
// navigator language > HTML lang attribute. The toggle in the Header
// writes localStorage via i18n.changeLanguage so the choice sticks.
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {translation: en},
            vn: {translation: vn},
        },
        supportedLngs: ['en', 'vn'],
        fallbackLng: 'en',
        // For unknown keys, render the key itself rather than an empty
        // string. Matches the previous behaviour and is forgiving when
        // Firestore content is added that doesn't have a translation.
        returnEmptyString: false,
        parseMissingKeyHandler: (key) => key,
        interpolation: {escapeValue: false},
        detection: {
            order: ['localStorage', 'navigator', 'htmlTag'],
            lookupLocalStorage: 'i18nextLng',
            caches: ['localStorage'],
        },
    });

export default i18n;
