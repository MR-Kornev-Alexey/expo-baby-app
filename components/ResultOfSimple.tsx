import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CalcSimpleTest from "@/data/CalcSimpleTest";
import {useTranslation} from "react-i18next";

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


interface GenderSelectorProps {
    state: State;
}


const findIndexGrowth = (data: string[]): { growth: number[], weight: number[], findGrowth: [number, number], findWeight: [number, number] } => {

    return new CalcSimpleTest(
        data[0],
        data[1],
        data[2],
        data[3],
    ).findIndexExpress();
};


const ResultOfSimple: React.FC<GenderSelectorProps> = ({state}) => {
    // const testData = ["boy", 5, 39, 5, 6500, 68];
    const weightInKg = Number(state.weightNow) / 1000;
    const growthInSm = state.growthNow
    const testData = [state.gender, state.old, growthInSm, weightInKg];
    const resultFind = findIndexGrowth(testData);
    const {t} = useTranslation();
    console.log(resultFind);
    console.log('resultFind ----', resultFind)
    const resultTestFinishGrowth = [
        t('quickTest.growth0'),
        t('quickTest.growth1'),
        t('quickTest.growth2'),
        t('quickTest.growth3'),
        t('quickTest.growth4'),
        t('quickTest.growth5'),
        t('quickTest.growth6')
    ];
    const resultTestFinishWeight = [
        t('quickTest.weight0'),
        t('quickTest.weight1'),
        t('quickTest.weight2'),
        t('quickTest.weight3'),
        t('quickTest.weight4'),
        t('quickTest.weight5'),
        t('quickTest.weight6')
    ];
    const setGender = (gender) => {
        if(gender === 'boy') {
            return   t('baby_boy')
        } else {
            return  t('baby_girl')
        }
    }
    return (
        <View style={styles.container}>
            {/* Пол ребенка */}
            <View style={styles.block}>
                <Text style={styles.title}>{t('babys_gender')} :</Text>
                <Text style={styles.text}>{setGender(state.gender)}</Text>
            </View>

            {/* Возраст ребенка */}
            <View style={styles.block}>
                <Text style={styles.title}>{t('babys_old')} :</Text>
                <Text style={styles.text}>{state.old}</Text>
            </View>

            {/* Неделя беременности */}
            <View style={styles.block}>
                <Text style={styles.title}>{t('babys_week')}</Text>
                <Text style={styles.text}>{state.week}</Text>
            </View>

            {/* Вес сейчас */}
            <View style={styles.block}>
                <Text style={styles.title}>{t('babys_weight')} </Text>
                <Text style={styles.text}>{state.weightNow} {t('gr')}</Text>
            </View>

            {/* Рост сейчас */}
            <View style={styles.block}>
                <Text style={styles.title}>{t('babys_growth')} :</Text>
                <Text style={styles.text}>{state.growthNow}</Text>
            </View>

            {/* Разделитель */}
            <View style={styles.separator} />

            {/* Результат по весу */}
            <View style={styles.block}>
                <Text style={styles.title}>{t('result_growth')} :</Text>
                <Text style={styles.result}>{resultTestFinishWeight[resultFind?.findWeight[0]]}</Text>
            </View>

            {/* Результат по росту */}
            <View style={styles.block}>
                <Text style={styles.title}>{t('result_weight')} :</Text>
                <Text style={styles.result}>{resultTestFinishGrowth[resultFind?.findGrowth[0]]}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
    },
    block: {
        marginBottom: 15,
        display: "flex",
        justifyContent: "space-between"
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    text: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    },
    result: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#28a745', // Зеленый цвет для результата
        marginTop: 5,
    },
    separator: {
        height: 2,
        backgroundColor: '#ccc',
        marginVertical: 10,
    },
});

export default ResultOfSimple;
