import React from 'react'
import { View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import TextStyled from './TextStyled';

export default function Hero() {



    return (

        <View style={style.contain}>
            <LinearGradient
                colors={['#4338CA', '#000000']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{
                    flex: 1,
                    width: '100%',
                    height: '100%'
                }}>
                <ImageBackground
                    source={require('../assets/background-hero.png')}
                    style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', top: 252 }}
                >
                    <View style={style.whitecontainer}>
                        <TextStyled props={style.h1} content={'Live the emotion of manga'} />
                        <TextStyled props={style.p} content={'Find the perfect manga for you'} />
                    </View>
                    <TouchableOpacity >
                        <LinearGradient 
                            colors={['#4338CA', '#120F35', '#000000']}
                            start={{ x: 0.5, y: 0 }}
                            end={{ x: 0.5, y: 1 }}
                            locations={[0.2, 1, 1]}
                            style={style.gradientBtn}
                        >
                            <TextStyled props={{ color: '#fff', fontSize: 20, fontFamily: 'Medium' }} content={'Explore'} />
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
        marginTop: 120,
        width: '95%',
        backgroundColor: 'white',
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
        fontFamily: 'Bold',
        fontSize: 30,
        color: '#17115F',
        textAlign: 'center',
        textShadowRadius: 20,
        shadowOpacity: 0
    },
    p: {
        fontFamily: 'Regular',
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