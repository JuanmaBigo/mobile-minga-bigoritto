import React from 'react'
import { View, StyleSheet, Text } from 'react-native'


export default function FormLogin() {
    return (
        <View style={style.contain}>
            <Text style={style.text}>Form Login</Text>
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
        backgroundColor: 'blue'
    },
    text: {

    }
})