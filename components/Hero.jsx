import React from 'react'
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, ImageBackground } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

export default function Hero() {
    let [fontsLoaded] = useFonts({
        Inter_900Black,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (

        <View style={style.contain}>
            <LinearGradient
                colors={['#000000', '#4338CA']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{
                    width: '100%',
                    height: '100%'
                }}>
                <ImageBackground
                    source={require('../assets/background-hero.png')}
                    style={{ flex: 1, width: '100%', display: 'flex', alignItems: 'center', top: 252 }}
                >
                    <View style={style.whitecontainer}>
                        <Text style={style.h1}>Live the emotion of manga</Text>
                        <Text style={style.p}>Find the perfect manga for you</Text>
                    </View>
                    <TouchableOpacity >
                        <LinearGradient
                            colors={['#4338CA', '#120F35', '#000000']}
                            style={style.gradientBtn}
                        >
                            <Text style={{ color: '#fff', fontSize: 16 }}>Get started</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </ImageBackground>
            </LinearGradient>
        </View>
    )
}

const style = StyleSheet.create({
    contain: {
        width: '100%',
        height: '100%',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    whitecontainer: {
        width: '95%',
        backgroundColor: 'green',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginVertical: 25,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        borderRadius: 10
    },
    h1: {
        fontFamily: 'Monsterrat_700Bold',
        fontSize: 40,
        textAlign: 'center',
        color: 'white',
        textShadowColor: '#17115F',
        textShadowRadius: 20,
        shadowOpacity: 0.1
    },
    p: {
        fontWeight: '400',
        fontSize: 20,
        color: '#17115F'
    },
    gradientBtn: {
        width: 363,
        height: 59,
        padding: 15,
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.18)',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
    }
})