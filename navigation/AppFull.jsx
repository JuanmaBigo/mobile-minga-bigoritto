import React, {useEffect, useState} from 'react'

import AppStack from './AppStack.jsx';
import AuthStack from './AuthStack.jsx';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';


export default function AppFull() {
    const [token, setToken] = useState(null);
    let state = useSelector(store => store)

    useEffect(() => {
        AsyncStorage.getItem('token')
            .then(res => {
                setToken(res);
            })
    }, [state]);

    return (
        <>
            {token? <AppStack /> : <AuthStack />}
        </>
    )
}
