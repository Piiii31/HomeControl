import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native'
import React, { useRef } from 'react'
import AppIntroSlider from 'react-native-app-intro-slider'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/AntDesign'

const slides = [
    {
        key: 'slide1',
        title: 'Welcome to the app',
        text: 'Stay Connected',
        image: require('../../assets/Image.png'),
    },
    
    {
        key: 'slide3',
        title: 'Control',
        text: 'your devices from anywhere',
        image: require('../../assets/openning.png'),
    },
]

const WelcomePage = () => {
    const sliderRef = useRef<AppIntroSlider>(null)
    const navigation = useNavigation()

    const renderItem = ({ item, index }: { item: any, index: number }) => (
        <View style={styles.slide}>
            <Image style={styles.ImageContainer} source={item.image} />
            <Text style={styles.TextContainer}>{item.title}</Text>
            <Text style={styles.underTitle}>{item.text}</Text>
            {item.key === 'slide1' ? (
                <TouchableOpacity style={styles.button} onPress={() => sliderRef.current?.goToSlide(index + 1)}>
                    <Text style={styles.text1}>Get Started</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity style={styles.Skip} onPress={() => navigation.navigate('Login' as never)}>
                    <Text style={styles.text2}>Let's Connect</Text>
                    <Icon  name="arrowright" size={20} color="white" />
                </TouchableOpacity>
            )}
        </View>
    )

    return (
        <AppIntroSlider
            ref={sliderRef}
            data={slides}
            renderItem={renderItem}
            dotStyle={styles.dotStyle}
            activeDotStyle={styles.activeDotStyle}
        />
    )
}

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    ImageContainer: {
        width: 310,
        height: 310,
    },
    TextContainer: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
    },
    underTitle: {
        textAlign: 'center',
        width:"100%",
        fontSize: 18,
        marginTop: 20,
    },
    button: {
        width: 335,
        height:56,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:50,
        backgroundColor: '#e89434',
        padding: 10,
        borderRadius: 10,
        
    },
    Skip: {
        width: 335,
        height:56,
        flexDirection: 'row',
        
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop:50,
        backgroundColor: '#e89434',
        padding: 10,
        borderRadius: 10,
    },
    dotStyle: {
        backgroundColor: '#e89434',
    },
    activeDotStyle: {
        backgroundColor: '#e89434',
        display: 'none',
    },
    text1: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 23,


    },
    text2: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 23,
    },
    
})

export default WelcomePage