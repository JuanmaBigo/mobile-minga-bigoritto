import React from 'react'
import { Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';


export default function TextStyled({ props, content }) {
    let [fontsLoaded] = useFonts({
        Bold: require('../assets/fonts/Montserrat-Bold.ttf'),
        Regular: require('../assets/fonts/Montserrat-Regular.ttf'),
        Medium: require('../assets/fonts/Montserrat-Medium.ttf'),
        Light: require('../assets/fonts/Montserrat-Light.ttf'),
        SemiBold: require('../assets/fonts/Montserrat-SemiBold.ttf'),
        ExtraBold: require('../assets/fonts/Montserrat-ExtraBold.ttf'),
        Black: require('../assets/fonts/Montserrat-Black.ttf'),
    });

    props.fontFamily = props.fontFamily || 'Regular';
    props.fontSize = props.fontSize || 16;
    props.color = props.color || '#000';
    props.textAlign = props.textAlign || 'left';
    props.textShadowRadius = props.textShadowRadius || 0;
    props.shadowOpacity = props.shadowOpacity || 0;
    props.opacity = props.opacity || 1;
    props.marginBottom = props.marginBottom || 0;
    props.marginTop = props.marginTop || 0;
<<<<<<< HEAD
    props.width = props.width || 'auto';
    props.height = props.height || 'auto';
=======
>>>>>>> 59e601ffae7a5bbe2e3e573286ddd99335572172

    const styles = StyleSheet.create({
        text: {
            fontFamily: props.fontFamily,
            fontSize: props.fontSize,
            color: props.color,
            textAlign: props.textAlign,
            textShadowRadius: props.textShadowRadius,
            shadowOpacity: props.shadowOpacity,
            opacity: props.opacity,
            marginBottom: props.marginBottom,
            marginTop: props.marginTop,
        },
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Text style={styles.text}>{content}</Text>
    )
}


