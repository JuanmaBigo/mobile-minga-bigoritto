import React from 'react'
<<<<<<< HEAD
import { View, TouchableOpacity, ImageBackground, Image } from 'react-native'
=======
import { View, TouchableOpacity, ImageBackground } from 'react-native'
>>>>>>> 59e601ffae7a5bbe2e3e573286ddd99335572172
import { LinearGradient } from 'expo-linear-gradient';
import TextStyled from './TextStyled';

import styles from './styles';
const { stylesHero } = styles;


export default function Hero() {
let styles = stylesHero;

    return (
        <View style={styles.contain}>
<<<<<<< HEAD
            <LinearGradient colors={['#4338CA', '#000000']} start={{ x: 1, y: 1 }} end={{ x: -0.2, y: 0.1 }} style={{flex: 1,width: '100%',height: '100%'}}>
                <ImageBackground source={require('../assets/background-hero.png')} style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', top: 380 }}>
                <Image source={require('../assets/Logo.png')} style={{ width: 69, height: 35, position: 'absolute', top: -310, right: 26  }}/>
                    <View style={styles.whitecontainer}>
                        <TextStyled props={styles.h1} content={'LIVE THE EMOTION OF MANGA'} />
                        <TextStyled props={styles.p} content={'Find the perfect manga for you'} />
                    </View>
                    <TouchableOpacity >
                    <LinearGradient colors={['#4338CA', '#120F35']} locations={[0.2, 1]} start={[0, 0]} end={[1, 1]} style={styles.gradientBtn}>
                            <TextStyled props={{ color: '#fff', fontSize: 15, fontFamily: 'SemiBold' }} content={'EXPLORE'} />
=======
            <LinearGradient colors={['#4338CA', '#000000']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={{flex: 1,width: '100%',height: '100%'}}>
                <ImageBackground source={require('../assets/background-hero.png')} style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', top: 252 }}>
                    <View style={styles.whitecontainer}>
                        <TextStyled props={styles.h1} content={'Live the emotion of manga'} />
                        <TextStyled props={styles.p} content={'Find the perfect manga for you'} />
                    </View>
                    <TouchableOpacity >
                        <LinearGradient colors={['#4338CA', '#120F35', '#000000']} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }} locations={[0.2, 1, 1]} style={styles.gradientBtn}>
                            <TextStyled props={{ color: '#fff', fontSize: 20, fontFamily: 'Regular' }} content={'Explore'} />
>>>>>>> 59e601ffae7a5bbe2e3e573286ddd99335572172
                        </LinearGradient>
                    </TouchableOpacity>
                </ImageBackground>
            </LinearGradient>
        </View>
    )
}


