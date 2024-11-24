/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#048c68';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    title: '#222',
    subtitle: '#666',
    link: '#1e90ff',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#05382a', //not selected
    tabIconSelected: '#033103',
    tabBarBackground: '#53f5cc',
    tabBarBorder: '#e0e0e0', // Светлая граница
    tabBarActive: '#01482f', // Цвет активных иконок/текста
    tabBarInactive: '#9BA1A6',
  },
  dark: {
    text: '#ECEDEE',
    title: '#ddd',
    subtitle: '#aaa',
    link: '#53f5cc',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    tabBarBackground: '#010504',
    tabBarBorder: '#333333', // Темная граница
    tabBarActive: '#53f5cc', // Цвет активных иконок/текста
    tabBarInactive: '#666666',
  },
};
