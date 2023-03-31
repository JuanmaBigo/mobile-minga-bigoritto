import React from 'react'
import { View, TouchableOpacity, ImageBackground } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import TextStyled from './TextStyled';

import styles from './styles';
const { stylesHero } = styles;


export default function Hero() {
let styles = stylesHero;

    return (
        <View style={styles.contain}>
            <LinearGradient colors={['#4338CA', '#000000']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={{flex: 1,width: '100%',height: '100%'}}>
                <ImageBackground source={require('../assets/background-hero.png')} style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', top: 252 }}>
                    <View style={styles.whitecontainer}>
                        <TextStyled props={styles.h1} content={'Live the emotion of manga'} />
                        <TextStyled props={styles.p} content={'Find the perfect manga for you'} />
                    </View>
                    <TouchableOpacity >
                        <LinearGradient colors={['#4338CA', '#120F35', '#000000']} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }} locations={[0.2, 1, 1]} style={styles.gradientBtn}>
                            <TextStyled props={{ color: '#fff', fontSize: 20, fontFamily: 'Regular' }} content={'Explore'} />
                        </LinearGradient>
                    </TouchableOpacity>
                </ImageBackground>
            </LinearGradient>
        </View>
    )
}


