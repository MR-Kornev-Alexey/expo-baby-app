import { Text, type TextProps, StyleSheet } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Colors } from "@/constants/Colors";
import fonts from "@/constants/fonts"; // Подключаем шрифты

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function ThemedText({
                             style,
                             lightColor,
                             darkColor,
                             type = 'default',
                             ...rest
                           }: ThemedTextProps) {
  // Определение цвета для всех типов текста
  const textColors = {
    default: useThemeColor({ light: Colors.light.text, dark: Colors.dark.text }, 'text'),
    title: useThemeColor({ light: Colors.light.title, dark: Colors.dark.title }, 'title'),
    defaultSemiBold: useThemeColor({ light: Colors.light.text, dark: Colors.dark.text }, 'text'),
    subtitle: useThemeColor({ light: Colors.light.subtitle, dark: Colors.dark.subtitle }, 'subtitle'),
    link: useThemeColor({ light: Colors.light.link, dark: Colors.dark.link }, 'link'),
  };

  // Выбор подходящего цвета для текущего типа текста
  const color = textColors[type];

  const textStyle = StyleSheet.flatten([
    { color },
    type === 'default' && [styles.default, { fontFamily: fonts.regular }],
    type === 'title' && [styles.title, { fontFamily: fonts.bold }],
    type === 'defaultSemiBold' && [styles.defaultSemiBold, { fontFamily: fonts.medium }],
    type === 'subtitle' && [styles.subtitle, { fontFamily: fonts.regular }],
    type === 'link' && [styles.link, { fontFamily: fonts.regular }],
    style,
  ]);

  return <Text style={textStyle} {...rest} />;
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 40,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 2,
    marginLeft: 2,
    marginTop: 6,
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
