import { Tabs } from 'expo-router';
import React, {useEffect} from 'react';
import { Platform, StyleSheet } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {useTranslation} from "react-i18next";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TabLayout() {
  const colorScheme = useColorScheme();
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const loadLanguage = async () => {
            const savedLanguage = await AsyncStorage.getItem('language');
            if (savedLanguage) {
                i18n.changeLanguage(savedLanguage as 'en' | 'ru' | 'de');
            }
        };
        loadLanguage();
    }, []);

  return (
      <Tabs
          screenOptions={{
              tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tabBarActive, // Цвет активного элемента
              tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].tabBarInactive, // Цвет неактивного элемента
              headerShown: false,
              tabBarButton: HapticTab, // Кастомная кнопка
              tabBarStyle: [
                  styles.tabBarStyle,
                  {
                      backgroundColor: Colors[colorScheme ?? 'light'].tabBarBackground, // Динамический фон
                      borderTopColor: Colors[colorScheme ?? 'light'].tabBarBorder, // Динамическая граница
                  },
                  Platform.OS === 'ios' ? styles.tabBarStyleIOS : {}, // Специфичный стиль для iOS
              ],
          }}
      >
          <Tabs.Screen
              name="index"
              options={{
                  tabBarLabel: t('tab.main'),
                  tabBarIcon: ({ color }: { color: string }) => (
                      <MaterialCommunityIcons name="home" size={28} color={color} />
                  ),
              } as CustomTabOptions}
          />
        <Tabs.Screen
            name="simple"
            options={{
                tabBarLabel: t('tab.simple'),
                tabBarIcon: ({ color }) => <MaterialCommunityIcons name="chart-areaspline-variant" size={28} color={color} />,
            }as CustomTabOptions}
        />
       <Tabs.Screen
            name="more"
            options={{
                tabBarLabel: t('tab.more'),
                tabBarIcon: ({ color }) => <MaterialCommunityIcons name="menu" size={28} color={color} />,
            }as CustomTabOptions}
        />
    </Tabs>
  );
}
const styles = StyleSheet.create({
    tabBarStyle: {
        height: 60,
        borderTopWidth: 1,
    },
    tabBarStyleIOS: {
        height: 80, // Пример увеличенной высоты для iOS
        paddingBottom: 20,
    },
});
