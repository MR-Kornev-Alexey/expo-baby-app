import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle, TextStyle, useColorScheme } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';

// constants
import { device, gStyle } from '../constants';

// Define color schemes for light and dark modes
const lightColors = {
    background: '#ffffff',
    heading: '#333333',
    white: '#ffffff',
    backIcon: '#000000',  // Example color for the back icon
};

const darkColors = {
    background: '#000000',
    heading: '#ffffff',
    white: '#ffffff',
    backIcon: '#ffffff',  // Example color for the back icon
};

// Typing the props
type HeaderProps = {
    bg?: string | number;
    close?: boolean;
    showBack?: boolean;
    title?: string | null;
    clearAll?: (() => void) | null;
};

const Header: React.FC<HeaderProps> = ({
                                           bg = lightColors.background,
                                           close = false,
                                           showBack = false,
                                           title = null,
                                           clearAll = null,
                                       }) => {
    const navigation = useNavigation();
    const colorScheme = useColorScheme(); // Determine current theme (light/dark)

    // Choose the appropriate color scheme based on the current theme
    const colors = colorScheme === 'dark' ? darkColors : lightColors;

    return (
        <View
            style={[styles.container, { backgroundColor: bg, paddingTop: device.iPhoneNotch ? 44 : 16 }]}
        >
            {showBack && (
                <TouchableOpacity
                    activeOpacity={gStyle.activeOpacity}
                    onPress={() => navigation.goBack()}
                    style={styles.back}
                >
                    <MaterialCommunityIcons name="left" size={28} color={colors} />

                </TouchableOpacity>
            )}

            {title && (
                <View style={styles.containerTitle}>
                    <Text style={[styles.title, { color: colors.heading }]}>{title}</Text>
                </View>
            )}

            {close && (
                <TouchableOpacity
                    activeOpacity={gStyle.activeOpacity}
                    onPress={clearAll || undefined}
                    style={styles.close}
                >
                    <AntDesign name="delete" size={22} color={colors.white} />
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        paddingBottom: 4,
        paddingHorizontal: 16,
    } as ViewStyle,
    back: {
        alignSelf: 'center',
        flex: 1,
    } as ViewStyle,
    containerTitle: {
        flex: 4,
        height: 35,
        justifyContent: 'flex-end',
    } as ViewStyle,
    title: {
        fontSize: 16,
        marginLeft: 18,
        paddingBottom: 4,
    } as TextStyle,
    close: {
        alignItems: 'flex-end',
        flex: 1,
        height: 35,
        justifyContent: 'center',
    } as ViewStyle,
});

export default Header;
