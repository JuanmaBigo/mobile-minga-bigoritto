import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import FormLogin from '../components/FormLogin'
import Hero from '../components/Hero'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {
    const [token, setToken] = useState(null);
    useEffect(() => {
        AsyncStorage.getItem('token')
            .then(res => {
                setToken(res);
            })
    }, []);

    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={{ height: 900 }}>
                <Hero/>
            </View>
            {!token ? <View style={{ height: 900 }}>
                <FormLogin />
            </View> : null}
        </ScrollView>
    )
}

