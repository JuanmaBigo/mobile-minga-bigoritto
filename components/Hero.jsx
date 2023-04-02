import React, {useEffect, useState} from 'react'
import { View, TouchableOpacity, ImageBackground, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import TextStyled from './TextStyled';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
const { stylesHero } = styles;


export default function Hero() {    
    let styles = stylesHero;
    const navigation = useNavigation()

    const [token, setToken] = useState(null);
    useEffect(() => {
        AsyncStorage.getItem('token')
            .then(res => {
                setToken(res);
            })
    }, []);

    function handleNavigate() {
        if (token){
            navigation.navigate('Mangas')
        }else{
            navigation.navigate('Login')
        }
    }

    return (
        <View style={styles.contain}>
            <LinearGradient colors={['#4338CA', '#000000']} start={{ x: 1, y: 1 }} end={{ x: -0.2, y: 0.1 }} style={{ flex: 1, width: '100%', height: '100%' }}>
                <ImageBackground source={require('../assets/background-hero.png')} style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', top: 380 }}>
                    <Image source={require('../assets/Logo.png')} style={{ width: 69, height: 35, position: 'absolute', top: -310, right: 26 }} />
                    <View style={styles.whitecontainer}>
                        <TextStyled props={styles.h1} content={'LIVE THE EMOTION OF MANGA'} />
                        <TextStyled props={styles.p} content={'Find the perfect manga for you'} />
                    </View>
                    <TouchableOpacity onPress={handleNavigate} style={{ width: 365, height: 48, marginTop: 180 }} >
                        <LinearGradient colors={['#4338CA', '#120F35']} locations={[0.2, 1]} start={[0, 0]} end={[1, 1]} style={styles.gradientBtn}>
                            <TextStyled props={{ color: '#fff', fontSize: 15, fontFamily: 'SemiBold' }} content={'EXPLORE'} />
                        </LinearGradient>
                    </TouchableOpacity>
                </ImageBackground>
            </LinearGradient>
        </View>
    )
}


