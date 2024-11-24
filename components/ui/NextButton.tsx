import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface NextButtonProps {
    onPress: () => void;
    enabled: boolean;
    text: string;
}

const NextButton: React.FC<NextButtonProps> = ({ onPress, enabled, text }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.button,
                enabled ? styles.buttonEnabled : styles.buttonDisabled,
            ]}
            disabled={!enabled}
        >
            <Text style={enabled ? styles.textEnabled : styles.textDisabled}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: '80%',
        paddingVertical: 15,
        marginTop: 12,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonEnabled: {
        backgroundColor: '#1b5e20',
    },
    buttonDisabled: {
        backgroundColor: '#BDBDBD',
    },
    textEnabled: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    textDisabled: {
        fontSize: 18,
        color: '#666',
        textAlign: 'center',
        textTransform: 'uppercase',
    },
});

export default NextButton;
