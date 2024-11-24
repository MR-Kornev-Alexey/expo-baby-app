import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import NextButton from './ui/NextButton';
import {useTranslation} from "react-i18next";


interface GenderSelectorProps {
    selectedGender: string | null;
    onGenderSelect: (gender: string) => void;
    buttonState: string;
    onNext: () => void;
    nextButtonText: string;
}

const GenderSelector: React.FC<GenderSelectorProps> = ({
                                                           selectedGender,
                                                           onGenderSelect,
                                                           buttonState,
                                                           onNext,
                                                           nextButtonText,

                                                       }) => {

    const {t} = useTranslation();
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => onGenderSelect('boy')}
                style={[
                    styles.button,
                    selectedGender === 'boy' && styles.buttonActive,
                ]}
            >
                <Text style={styles.buttonText}>{t('baby_boy')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => onGenderSelect('girl')}
                style={[
                    styles.button,
                    selectedGender === 'girl' && styles.buttonActive,
                ]}
            >
                <Text style={styles.buttonText}>{t('baby_girl')}</Text>
            </TouchableOpacity>
            <NextButton
                onPress={onNext}
                enabled={buttonState === 'enabled'}
                text={nextButtonText}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    button: {
        width: '80%',
        paddingVertical: 15,
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: '#BDBDBD',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonActive: {
        backgroundColor: '#1b5e20',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
    },
});

export default GenderSelector;
