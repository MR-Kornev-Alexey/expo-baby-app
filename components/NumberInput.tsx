import React, {useEffect, useState} from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface NumberInputProps {
    flag?: string; // Дополнительный флаг
    under: number; // Нижний предел
    over: number; // Верхний предел
    onNext: (number: number, flag?: string) => void; // Callback при успешном вводе
    nextButtonText?: string; // Текст кнопки
}

const NumberInput: React.FC<NumberInputProps> = ({
                                                     flag,
                                                     under,
                                                     over,
                                                     onNext,
                                                     nextButtonText = 'Дальше', // Значение по умолчанию для кнопки
                                                 }) => {
    const [number, setNumber] = useState<string>(''); // Храним значение как строку для обработки ввода
    const [isValid, setIsValid] = useState<boolean>(false);

    useEffect(() => {
        setNumber(''); // Сбрасываем поле ввода
        setIsValid(false); // Деактивируем кнопку
    }, [under, over, flag]);

    const handleInputChange = (value: string) => {
        const parsedValue = parseInt(value, 10);

        // Проверяем корректность значения в диапазоне
        if (!isNaN(parsedValue) && parsedValue >= under && parsedValue <= over) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }

        setNumber(value); // Обновляем состояние с введённым значением
    };

    const handleNext = () => {
        if (isValid) {
            onNext(Number(number), flag); // Передаём числовое значение и флаг родительскому компоненту
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={number}
                onChangeText={handleInputChange}
                placeholder={`Введите число от ${under} до ${over}`}
                maxLength={over.toString().length} // Ограничиваем ввод длиной верхнего предела
            />
            <TouchableOpacity
                onPress={handleNext}
                style={isValid ? styles.buttonNext : styles.buttonDisabled}
                disabled={!isValid} // Блокируем кнопку, если число некорректно
            >
                <Text style={styles.buttonText}>{nextButtonText}</Text>
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
        textTransform: "uppercase"
    },
    buttonDisabled: {
        backgroundColor: '#BDBDBD', // Серый цвет для неактивной кнопки
        borderRadius: 5,
        paddingVertical: 12,
        paddingHorizontal: 20,
        width: '80%',
        alignItems: 'center',
        textTransform: "uppercase"
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        textTransform: "uppercase"
    },
});

export default NumberInput;
