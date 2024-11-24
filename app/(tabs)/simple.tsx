import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, useColorScheme, Dimensions, Image, Modal} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTranslation} from "react-i18next";
import i18nSwith from "../../utils/locale/i18n";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {gStyle, images} from "@/constants";
import NumberInput from "@/components/NumberInput";
import GenderSelector from "@/components/GenderSelector";
import CustomModal from "@/components/CustomModal"; // Importing MaterialCommunityIcons

export default function Simple() {
    const {t} = useTranslation();
    const colorScheme = useColorScheme(); // Determine current theme (light/dark)
    const [screenHeight, setScreenHeight] = useState(Dimensions.get('window').height);
    const [state, setState] = useState({
        currentPage: 0,
        gender: "",
        old: null,
        week: null,
        weightNow: null,
        growthNow: null,
        showTheGender: true,
        showTheInput: false,
        isShowButtonTest: false,
        isModalOpen: false, // Track modal state
        isModalOpenUnit: false,
        isShowButton: false,
        isShowResult: false,
        isModalTitle: '',
        isModalMainText: '',
        isModalMainTextIn: '',
        number: null,
        isResult: null,
        activeIndex: -1,
        resultAll: [],
        flagWeight: null,
        arrayData: []
    });

    const [buttonState, setButtonState] = useState<string>('disabled'); // Initialize button state
    // Состояние для отслеживания выбранного пола
    const [selectedGender, setSelectedGender] = useState<string | null>(null);


    useEffect(() => {
        setButtonState('disabled');
        setSelectedGender(null)// Set the button to enabled by default
    }, []);


    const isDarkTheme = colorScheme === 'dark'; // Check if dark theme is in use

    const handleBackPress = () => {
        // Handle the back button press (navigation functionality here)
    };

    const handleCartPress = () => {
        // Handle the cart button press (functionality to be added later)
    };
    const handleGenderSelect = (gender: string) => {
        setSelectedGender(gender);  // Устанавливаем выбранный пол
        setState(prevState => ({
            ...prevState,
            gender: gender,
        }));
        setButtonState('enabled')
    };

    const universalOpenModal = (mainText) => {
        setState(prevState => ({
            ...prevState,
            isModalMainText: mainText,
            isModalOpen: true, // Open modal
        }));
    };

    const closeModal = () => {
        setState(prevState => ({
            ...prevState,
            isModalOpen: false, // Close modal
        }));
    };
    const openHelp = () => {
        universalOpenModal(question[state.currentPage]?.help);
    };
    const getNext = () => {
        if (selectedGender === null) {
            universalOpenModal(question[state.currentPage]?.help);
        } else {
            setState(prevState => ({
                ...prevState,
                currentPage: prevState.currentPage + 1,
            }));
        }
    };
    const getNextNumber = (data, flag) => {
            if (flag === "old") {
                setState(prevState => ({
                    ...prevState,
                    old: data,
                    currentPage: prevState.currentPage + 1,
                }));
            } else if (flag === "week") {
                setState(prevState => ({
                    ...prevState,
                    week: data,
                    currentPage: prevState.currentPage + 1,
                }));
            } else if (flag === "weightNow") {
                setState(prevState => ({
                    ...prevState,
                    weightNow: data,
                    currentPage: prevState.currentPage + 1,
                }));
            } else if (flag === "growthNow") {
                setState(prevState => ({
                    ...prevState,
                    growthNow: data,
                    currentPage: prevState.currentPage + 1,
                }));
            }
        }
    ;

    const question = [
        {
            number: 0,
            question: t('psychoTest.question0.title'),
            help: t('psychoTest.question0.help'),
            key: 'gender',
            warning: t('psychoTest.question0.warning'),
        },
        {
            number: 1,
            question: t('quickTest.question1.title'),
            key: 'old',
            help: t('quickTest.question1.help'),
            warning: t('quickTest.question1.warning'),
            meta: t('months'),
        },
        {
            number: 2,
            question: t('psychoTest.question2.title'),
            key: 'week',
            help: t('psychoTest.question2.help'),
            warning: t('psychoTest.question2.warning'),
            meta: t('weeks'),
        },
        {
            number: 3,
            question: t('psychoTest.question3.title'),
            key: 'weightNow',
            help: t('psychoTest.question3.help'),
            warning: t('psychoTest.question3.warning'),
            meta: t('gr'),
        },
        {
            number: 4,
            question: t('psychoTest.question4.title'),
            key: 'growthNow',
            meta: t('sm'),
            help: t('psychoTest.question4.help'),
            warning: t('psychoTest.question4.warning'),
        },
        {
            number: 5,
            question: t('quickTest.question5.title'),
            help: t('quickTest.question5.help'),
            key: 'result',
            warning: t('quickTest.question5.warning'),
        }
    ];

    return (
        <View style={isDarkTheme ? styles.container_dark : styles.container_light}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleBackPress} style={styles.headerButton}>
                    <MaterialCommunityIcons name="arrow-left-thin" size={24} color={isDarkTheme ? '#53f5cc' : '#000'}/>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>{t('quickTest.title')}</Text>
                <TouchableOpacity onPress={handleCartPress} style={styles.headerButton}>
                    <MaterialCommunityIcons name="delete-outline" size={24} color={isDarkTheme ? '#53f5cc' : '#000'}/>
                </TouchableOpacity>
            </View>

            <View style={[gStyle.flexCenter, styles.helper]}>
                <TouchableOpacity onPress={openHelp} style={styles.helpButton}>
                    <MaterialCommunityIcons
                        name="help-circle-outline"
                        size={30}
                        color={isDarkTheme ? '#53f5cc' : '#000'}
                    />
                </TouchableOpacity>
                <Image
                    source={images.BabyHand}
                    style={[
                        gStyle.imgBabyTest,
                        {height: screenHeight <= 640 ? 230 : 180}
                    ]}
                />
            </View>
            <View style={[gStyle.flexCenter, styles.helper]}>
                <Text style={styles.cardTitle}>
                    gender {state.gender} <br/>
                    old: {state.old} <br/>
                    week: {state.week} <br/>
                    weightNow: {state.weightNow}<br/>
                    growthNow: {state.growthNow}
                </Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>
                    {question[state.currentPage]?.question}
                </Text>

                {state.currentPage === 0 && <GenderSelector
                    selectedGender={selectedGender}
                    onGenderSelect={handleGenderSelect}
                    buttonState={buttonState}
                    onNext={getNext}
                    nextButtonText={t('next')}
                />}
                {state.currentPage === 1 &&
                    <NumberInput flag="old" under={0} over={36} onNext={getNextNumber} nextButtonText={t('next')}/>}
                {state.currentPage === 2 &&
                    <NumberInput flag="week" onNext={getNextNumber} nextButtonText={t('next')} over={42} under={36}/>}
                {state.currentPage === 3 &&
                    <NumberInput flag="weightNow" onNext={getNextNumber} nextButtonText={t('next')} over={25000}
                                 under={2600}/>}
                {state.currentPage === 4 &&
                    <NumberInput flag="growthNow" onNext={getNextNumber} nextButtonText={t('next')} over={160}
                                 under={36}/>}
            </View>
            <CustomModal
                visible={state.isModalOpen}
                onClose={closeModal}
                message={state.isModalMainText}
                closeButtonText="Close"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container_light: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e8f5e9', // Light green background for light theme
        padding: 20,
        position: "relative",
    },
    container_dark: {
        position: "relative",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222', // Dark background for dark theme
        padding: 20,
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 10,
        paddingBottom: 20,
        position: "absolute",
        top: 50,
        left: 0
    },
    headerButton: {
        padding: 10,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        flex: 1,
        textAlign: 'center',
    },
    card: {
        backgroundColor: '#ffffff', // White card background
        borderRadius: 10,
        marginTop: 40,
        padding: 20,
        width: '90%',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5, // Shadow for Android
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },
    languageText: {
        fontSize: 16,
        color: '#1b5e20',
        paddingVertical: 10,
        textAlign: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    helper: {
        position: "relative"
    },
    helpButton: {
        padding: 10,
        position: "absolute",
        top: 0,
        right: 60,
        zIndex: 99999
    },
    // Modal styles
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    modalContainer: {
        width: '80%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalText: {
        fontSize: 16,
        marginBottom: 20,
    },
    closeModalButton: {
        backgroundColor: '#1b5e20',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    closeModalText: {
        color: '#fff',
        fontSize: 16,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    fistList: {
        flexDirection: 'column', // Вертикальная ориентация
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    button: {
        width: '80%', // Ширина кнопки фиксирована
        paddingVertical: 15, // Высота кнопки
        marginBottom: 10, // Отступ между кнопками
        borderRadius: 5, // Округлые углы
        backgroundColor: '#BDBDBD', // Цвет по умолчанию
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonActive: {
        backgroundColor: '#1b5e20',  // Зеленый цвет для активной кнопки
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,  // Размер шрифта для всех кнопок
        fontWeight: '600', // Средний вес шрифта
        textAlign: 'center',
    },
    buttonNext: {
        backgroundColor: '#1b5e20',  // Зеленый для кнопки "Next"
        marginTop: 12,
        borderRadius: 5,
    },
    buttonDisabled: {
        backgroundColor: '#BDBDBD', // Серый для отключенной кнопки
        marginTop: 12,
        borderRadius: 5,
    },
    nextText: {
        fontSize: 18,  // Единый размер шрифта для кнопки "Next"
        color: '#fff',
        textAlign: 'center',
    },
    textDisabled: {
        fontSize: 18,  // Размер шрифта для неактивной кнопки
        color: '#666',
        textAlign: 'center',
        textTransform: 'uppercase',
    },
});
