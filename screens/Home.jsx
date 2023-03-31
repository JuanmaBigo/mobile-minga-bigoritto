import React from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import FormLogin from '../components/FormLogin'
import Hero from '../components/Hero'

export default function Home() {
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

