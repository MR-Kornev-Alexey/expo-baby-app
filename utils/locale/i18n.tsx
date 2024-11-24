import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Импортируем локальные JSON-файлы с переводами
import enTranslation from './en.json';
import ruTranslation from './ru.json';
import deTranslation from './de.json';


const resources = {
    en: {
        translation: enTranslation,
    },
    ru: {
        translation: ruTranslation,
    },
    de: {
        translation: deTranslation,
    },
};

i18n
    .use(initReactI18next) // Инициализация с react-i18next
    .init({
        resources,
        lng: 'ru', // Язык по умолчанию
        fallbackLng: 'en', // Резервный язык
        interpolation: {
            escapeValue: false, // Отключаем экранирование
        },
    });

export default i18n;
