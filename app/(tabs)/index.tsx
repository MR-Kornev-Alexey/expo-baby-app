import {Image, StyleSheet, View, Dimensions} from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';
import {useTranslation} from 'react-i18next';
import {gStyle, images} from '@/constants';
import SocialLinks from '@/components/SocialLinks';

export default function HomeScreen() {
    const {t}: any = useTranslation();

    return (
        <ParallaxScrollView
            headerBackgroundColor={{light: "#e0e0e0", dark: '#01251e'}}
            headerFixedBackground={
                <Image
                    source={require('../../assets/images/content/new-main.png')}
                    style={styles.fixedBackgroundImage}
                    resizeMode="cover"
                />
            }
            headerImage={
                <View style={styles.headerImageContainer}>
                    <Image
                        source={require('../../assets/images/content/new-main.png')}
                        style={styles.reactLogo}
                    />
                </View>
            }
            headerText={t('')}
        >
            <ThemedView style={styles.textContainer}>
                {[...Array(7)].map((_, index) => (
                    <ThemedText key={index} type="subtitle">
                        &nbsp;&nbsp;&nbsp;&nbsp;{t(`intro${index + 1}`)}
                    </ThemedText>
                ))}
                <ThemedText type="subtitle">
                    &nbsp;&nbsp;&nbsp;&nbsp; {t('elena')}
                </ThemedText>
                <ThemedView style={gStyle.flexCenter}>
                    <Image source={images.elenaImg} style={gStyle.imgHome}/>
                </ThemedView>
                <SocialLinks/>
            </ThemedView>
        </ParallaxScrollView>
    );
}

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    headerImageContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: -1, // Устанавливаем zIndex, чтобы картинка была на заднем плане
    },
    fixedBackgroundImage: {
        width,
        height: height / 2, // Устанавливаем высоту половины экрана
        position: 'absolute',
    },
    reactLogo: {
        alignSelf: 'center',
        width: '100%',
        maxHeight: 600,
        height: 400,

    },
    textContainer: {
        width: '100%',
        flex: 1,
        padding: 12
    }
});
