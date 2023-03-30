import React from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import FormLogin from './FormLogin'
import Hero from './Hero'

export default function Index() {
    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={{ height: 900 }}>
                <Hero />
            </View>
            <View style={{ height: 900 }}>
                <FormLogin />
            </View>
        </ScrollView>
    )
}

