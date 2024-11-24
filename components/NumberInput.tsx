import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const NumberInput = ({flag, onNext, nextButtonText }) => {
    const [number, setNumber] = useState<number | string>('');
    const [isValid, setIsValid] = useState<boolean>(false);

    const handleInputChange = (value) => {
        const parsedValue = parseInt(value, 10);

        // Проверяем, является ли значение числом и входит ли оно в диапазон
        if (!isNaN(parsedValue) && parsedValue >= 0 && parsedValue <= 36) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }

        setNumber(value); // Обновляем состояние с введённым значением
    };

    const handleNext = () => {
        if (isValid) {
            onNext(number, flag); // Передаём введённое значение родительскому компоненту
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={number}
                onChangeText={handleInputChange}
                placeholder="Введите число от 0 до 36"
                maxLength={2} // Ограничение на ввод до 2 символов
            />
            <TouchableOpacity
                onPress={handleNext}
                style={isValid ? styles.buttonNext : styles.buttonDisabled}
                disabled={!isValid} // Блокируем кнопку, если число некорректно
            >
                <Text style={styles.buttonText}>{nextButtonText || 'Дальше'}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
    },
    input: {
        width: '80%',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'center',
    },
    buttonNext: {
        backgroundColor: '#1b5e20', // Зеленый цвет активной кнопки
        borderRadius: 5,
        paddingVertical: 12,
        paddingHorizontal: 20,
        width: '80%',
        alignItems: 'center',
    },
    buttonDisabled: {
        backgroundColor: '#BDBDBD', // Серый цвет для неактивной кнопки
        borderRadius: 5,
        paddingVertical: 12,
        paddingHorizontal: 20,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default NumberInput;
