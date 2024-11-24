import type {PropsWithChildren, ReactElement} from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
    interpolate,
    useAnimatedRef,
    useAnimatedStyle,
    useScrollViewOffset,
} from 'react-native-reanimated';

import {ThemedView} from '@/components/ThemedView';
import {useBottomTabOverflow} from '@/components/ui/TabBarBackground';
import {useColorScheme} from '@/hooks/useColorScheme';

const HEADER_HEIGHT = 400;

type Props = PropsWithChildren<{
    headerImage: ReactElement;
    headerBackgroundColor: { dark: string; light: string };
}>;

export default function ParallaxScrollView({
                                               children,
                                               headerImage,
                                               headerBackgroundColor,
                                               headerText

                                           }: Props) {
    const colorScheme = useColorScheme() ?? 'light';
    const scrollRef = useAnimatedRef<Animated.ScrollView>();
    const scrollOffset = useScrollViewOffset(scrollRef);
    const bottom = useBottomTabOverflow();
    const headerAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: interpolate(
                        scrollOffset.value,
                        [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                        [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
                    ),
                },
                {
                    scale: interpolate(scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [2, 1, 1]),
                },
            ],
        };
    });

    return (
        <ThemedView style={styles.container}>
            <Animated.ScrollView
                ref={scrollRef}
                scrollEventThrottle={16}
                scrollIndicatorInsets={{bottom}}
                contentContainerStyle={{paddingBottom: bottom}}>
                <Animated.View
                    style={[
                        styles.header,
                        {backgroundColor: headerBackgroundColor[colorScheme]},
                        headerAnimatedStyle,
                    ]}>
                    {headerImage}
                    <Animated.Text style={styles.headerText}>{headerText}</Animated.Text>
                </Animated.View>
                <ThemedView style={styles.content}>{children}</ThemedView>
            </Animated.ScrollView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: HEADER_HEIGHT,
        overflow: 'hidden',
        position: 'relative',
    },
    content: {
        flex: 1,
        padding: 12,
        gap: 8,
        overflow: 'hidden',
    },
    headerText: {
        position: 'absolute', // Делаем текст поверх изображения
        color: '#3e4b48',
        fontSize: 26, // Размер текста
        fontWeight: "bold",
        textAlign: 'center', // Выравнивание текста по центру
        zIndex: 1, // Гарантируем, что текст будет поверх
        bottom: 10,
        width: 260,
        left: "50%",
        transform: [{ translateX: -130 }, { translateY: -13 }]
    },
});
