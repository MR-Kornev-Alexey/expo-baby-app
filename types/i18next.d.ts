import 'i18next';

// Пример, как типизировать ваши JSON файлы с переводами
declare module 'i18next' {
    interface CustomTypeOptions {
        // Определите ключи перевода для каждого языка
        resources: {
            en: {
                translation: typeof import('../utils/locale/en.json');
            };
            ru: {
                translation: typeof import('../utils/locale/ru.json');
            };
            de: {
                translation: typeof import('../utils/locale/de.json');
            };
        };
    }
}
