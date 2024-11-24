import React from 'react';
import { View, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Используем иконки FontAwesome
import { useThemeColor } from '@/hooks/useThemeColor'; // Ваш кастомный хук

const socialLinks = {
    telegram: 'https://t.me/korneva_elena',
    instagram: 'https://www.instagram.com/elena_korneva_doctor',
    vk: 'https://vk.com/elena_korneva_doc',
    youtube: 'https://www.youtube.com/channel/UCnVyih3gnBiLo2yAnpy0p7Q',
};

export default function SocialLinks() {
    const iconColor = useThemeColor({ light: '#01482f', dark: '#53f5cc' }, 'tabBarActive'); // Цвет для иконок

    const openLink = (url: string) => {
        Linking.openURL(url).catch((err) => console.error('Failed to open link: ', err));
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => openLink(socialLinks.telegram)} style={styles.iconContainer}>
                <Icon name="telegram" size={28} color={iconColor} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink(socialLinks.instagram)} style={styles.iconContainer}>
                <Icon name="instagram" size={28} color={iconColor} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink(socialLinks.vk)} style={styles.iconContainer}>
                <Icon name="vk" size={28} color={iconColor} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink(socialLinks.youtube)} style={styles.iconContainer}>
                <Icon name="youtube" size={28} color={iconColor} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 36,
    },
    iconContainer: {
        marginHorizontal: 24,
    },
});
