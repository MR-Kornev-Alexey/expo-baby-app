import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from "react-i18next";
import i18nSwith from "../../utils/locale/i18n";

export default function More() {
    const { t } = useTranslation();
    const colorScheme = useColorScheme(); // Определяем текущую тему (light/dark)

    const changeLanguage = async (lang: 'en' | 'ru' | 'de') => {
        await AsyncStorage.setItem('language', lang);
        i18nSwith.changeLanguage(lang);
    };

    const isDarkTheme = colorScheme === 'dark'; // Проверка, используется ли тёмная тема

    return (
        <View style={isDarkTheme ? styles.container_dark : styles.container_light}>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>{t('language_switch')}</Text>
                <View style={styles.languageList}>
                    <TouchableOpacity onPress={() => changeLanguage('en')}>
                        <Text style={styles.languageText}>{t('language_en')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => changeLanguage('ru')}>
                        <Text style={styles.languageText}>{t('language_ru')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => changeLanguage('de')}>
                        <Text style={styles.languageText}>{t('language_de')}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container_light: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e8f5e9', // Светло-зелёный фон для светлой темы
        padding: 20,
    },
    container_dark: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222', // Тёмный фон для тёмной темы
        padding: 20,
    },
    card: {
        backgroundColor: '#ffffff', // Белая карточка
        borderRadius: 10,
        marginTop: 40,
        padding: 20,
        width: '90%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5, // Тень для Android
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },
    languageList: {
        flexDirection: 'column', // Вертикальный список
        justifyContent: 'center',
    },
    languageText: {
        fontSize: 16,
        color: '#1b5e20',
        paddingVertical: 10,
        textAlign: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
});
