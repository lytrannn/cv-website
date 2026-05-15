import {useTranslation} from 'react-i18next';

const SUPPORTED = ['en', 'vn'];

// Pick the right string out of a localised value for the active
// language. Accepts:
//   - a plain string (legacy / not-yet-translated content) — used as-is
//   - a { en, vn, ... } object — picks the active language with
//     fallback chain: active → en → first non-empty → ''
//   - null / undefined → ''
export function pickLocale(value, lang) {
    if (value == null) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
        if (value[lang]) return value[lang];
        if (value.en) return value.en;
        for (const key of SUPPORTED) if (value[key]) return value[key];
        const first = Object.values(value).find((v) => typeof v === 'string' && v);
        return first || '';
    }
    return String(value);
}

// Hook returning a `loc(value)` function bound to the active language.
// Use this for content coming from Firestore (`useContent`) so the
// public site shows the right language. Static UI strings hardcoded
// in JSX still go through `t()` (which reads the JSON locale bundles).
export function useLocalize() {
    const {i18n} = useTranslation();
    const lang = i18n.resolvedLanguage || i18n.language || 'en';
    return (value) => pickLocale(value, lang);
}

// Build a localised value out of two strings. Used by defaults.js to
// keep the file readable rather than typing { en: '...', vn: '...' }
// everywhere.
export function L(en, vn) {
    return {en, vn: vn ?? en};
}

// What an editor saves into a localised field when starting from blank.
export const emptyLocalized = () => ({en: '', vn: ''});

// True if a value looks like a localised object (has at least one of
// our locale keys).
export function isLocalized(value) {
    if (!value || typeof value !== 'object') return false;
    return SUPPORTED.some((k) => k in value);
}
