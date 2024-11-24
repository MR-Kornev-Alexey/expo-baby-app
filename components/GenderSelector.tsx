import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

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
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => onGenderSelect('boy')}
                style={[
                    styles.button,
                    selectedGender === 'boy' && styles.buttonActive,
                ]}
            >
                <Text style={styles.buttonText}>Мальчик</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => onGenderSelect('girl')}
                style={[
                    styles.button,
                    selectedGender === 'girl' && styles.buttonActive,
                ]}
            >
                <Text style={styles.buttonText}>Девочка</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={onNext}
                style={[
                    styles.button,
                    buttonState === 'enabled' ? styles.buttonNext : styles.buttonDisabled,
                ]}
                disabled={buttonState !== 'enabled'}
            >
                <Text style={buttonState === 'enabled' ? styles.nextText : styles.textDisabled}>
                    {nextButtonText}
                </Text>
            </TouchableOpacity>
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
    buttonNext: {
        backgroundColor: '#1b5e20',
        marginTop: 12,
        borderRadius: 5,
    },
    buttonDisabled: {
        backgroundColor: '#BDBDBD',
        marginTop: 12,
        borderRadius: 5,
    },
    nextText: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
    },
    textDisabled: {
        fontSize: 18,
        color: '#666',
        textAlign: 'center',
        textTransform: 'uppercase',
    },
});

export default GenderSelector;
