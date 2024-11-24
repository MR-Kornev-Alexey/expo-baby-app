import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    useColorScheme,
    Dimensions,
    Image,
    ScrollView
} from 'react-native';
import {useTranslation} from "react-i18next";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {gStyle, images} from "@/constants";
import NumberInput from "@/components/NumberInput";
import GenderSelector from "@/components/GenderSelector";
import CustomModal from "@/components/CustomModal";
import ResultOfSimple from "@/components/ResultOfSimple"; // Importing MaterialCommunityIcons
interface State {
    currentPage: number;
    gender: string;
    old: number | null;
    week: number | null;
    weightNow: number | null;
    growthNow: number | null;
    isModalOpen: boolean;
    isModalMainText: string;
}


export default function Simple() {
    const {t} = useTranslation();
    const colorScheme = useColorScheme();
    const screenHeight = useState(Dimensions.get('window').height);
    const [state, setState] = useState<State>({
        currentPage: 0,
        gender: "",
        old: null,
        week: null,
        weightNow: null,
        growthNow: null,
        isModalOpen: false,
        isModalMainText: ""
    });

    const [buttonState, setButtonState] = useState<string>('disabled'); // Initialize button state
    // Состояние для отслеживания выбранного пола
    const [selectedGender, setSelectedGender] = useState<string | null>(null);


    useEffect(() => {
        setButtonState('disabled');
        setSelectedGender(null)// Set the button to enabled by default
    }, []);


    const isDarkTheme = colorScheme === 'dark'; // Check if dark theme is in use
    const handleClearPress = () => {
        setState(prevState => ({
            ...prevState,
            currentPage: 0,
            gender: "",
            old: null,
            week: null,
            weightNow: null,
            growthNow: null,
            isModalOpen: false,
            isModalMainText: ""
        }));
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
        setState(prevState => ({
            ...prevState,
            isModalMainText: question[state.currentPage].help,
            isModalOpen: true,
        }));
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
        <ScrollView style={isDarkTheme ? gStyle.container_dark : gStyle.container_light}>
            <View style={gStyle.header}>
                <TouchableOpacity onPress={openHelp} style={gStyle.headerButton}>
                    <MaterialCommunityIcons name="help-circle-outline" size={28} color={isDarkTheme ? '#53f5cc' : '#000'}/>
                </TouchableOpacity>
                <Text
                    style={[
                        gStyle.headerTitle,
                        { color: isDarkTheme ? '#FFFFFF' : '#000000' }
                    ]}
                >
                    {t('quickTest.title')}
                </Text>
                <TouchableOpacity onPress={handleClearPress} style={gStyle.headerButton}>
                    <MaterialCommunityIcons name="delete-outline" size={28} color={isDarkTheme ? '#53f5cc' : '#000'}/>
                </TouchableOpacity>
            </View>

            <View style={[gStyle.flexCenter, gStyle.helper]}>
                 <Image
                    source={images.BabyHand}
                    style={[
                        gStyle.imgBabyTest,
                        {height: screenHeight <= 640 ? 230 : 180}
                    ]}
                />
            </View>
               <View style={gStyle.card}>
                <Text style={gStyle.cardTitle}>
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
                {state.currentPage === 5 &&
                    <ResultOfSimple  state={state}/>}
            </View>
            <CustomModal
                visible={state.isModalOpen}
                onClose={closeModal}
                message={state.isModalMainText}
                closeButtonText="Close"
            />
        </ScrollView>
    );
}

