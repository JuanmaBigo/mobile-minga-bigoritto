import React from 'react'
import { Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';


export default function TextStyled({ props, content }) {
    let [fontsLoaded] = useFonts({
        Bold: require('../assets/fonts/Montserrat-Bold.ttf'),
        Regular: require('../assets/fonts/Montserrat-Regular.ttf'),
        Medium: require('../assets/fonts/Montserrat-Medium.ttf'),
    });

    props.fontFamily = props.fontFamily || 'Regular';
    props.fontSize = props.fontSize || 16;
    props.color = props.color || '#000';
    props.textAlign = props.textAlign || 'left';
    props.textShadowRadius = props.textShadowRadius || 0;
    props.shadowOpacity = props.shadowOpacity || 0;

    const styles = StyleSheet.create({
        text: {
            fontFamily: props.fontFamily,
            fontSize: props.fontSize,
            color: props.color,
            textAlign: props.textAlign,
            textShadowRadius: props.textShadowRadius,
            shadowOpacity: props.shadowOpacity
        },
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Text style={styles.text}>{content}</Text>
    )
}


