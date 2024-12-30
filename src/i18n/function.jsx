import { useTranslation } from 'react-i18next';

export function t (property, param = {}) {
    const { t } = useTranslation();
    return t(property, {...param});
}