import React, { useState, useEffect } from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { LinearGradient } from 'expo-linear-gradient';
import { View, Image } from 'react-native'
import TextStyled from './TextStyled';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import drawerActions from '../store/Drawer/actions.js';
import Spinner from 'react-native-loading-spinner-overlay';


import {REACT_APP_URL} from '@env'
const { reloadDrawer } = drawerActions


const CustomDrawer = (props) => {
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()
    let state = useSelector(store => store.drawerReducer.state)

    useEffect(() => {
        AsyncStorage.getItem('user')
            .then(res => {
                setUser(JSON.parse(res));
            })

        AsyncStorage.getItem('token')
            .then(res => {
                setToken(res);
            })
    }, []);


    async function handleSignOut() {
        setLoading(true)
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }
        let url = REACT_APP_URL + 'auth/signout'
        try {
            await axios.post(url, null, headers)
                .then(res => {
                    AsyncStorage.setItem('token', '');
                    AsyncStorage.setItem('user', JSON.stringify({
                        name: '',
                        mail: '',
                        photo: ''
                    }))
                })
                setLoading(false)
                dispatch(reloadDrawer({ state: !state }))
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <LinearGradient colors={['#4338CA', '#000000']} start={[1, 0]} end={[0.5, 1.4]} style={{ flex: 1, display: 'flex', flexDirection: 'column', paddingVertical: 50 }}>
            <View style={{ display: 'flex', flexDirection: 'column', height: 46, paddingHorizontal: 20, marginBottom: 40 }}>
                <Image source={token ? { uri: user.photo } : require('../assets/defaultUser.png')} style={{ width: 65, height: 65, borderRadius: 50, marginRight: 12, marginBottom: 5, resizeMode: 'cover' }} />
                <View style={{ display: 'flex', flexDirection: 'column', }}>
                    <TextStyled props={{ color: '#fff', fontSize: 15, fontFamily: 'SemiBold' }} content={token ? user.name : 'Username'} />
                    <TextStyled props={{ color: '#fff', fontSize: 13, fontFamily: 'Medium' }} content={token ? user.mail : 'email'} />
                </View>
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            {token ? <View style={{ position: 'absolute', bottom: 20 }}>
                <TouchableOpacity onPress={handleSignOut} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, gap: 10 }}>
                    <Ionicons name="log-out-outline" size={30} color="#fff" /><TextStyled content={'Sign Out'} props={{ color: '#fff', fontSize: 15, fontFamily: 'Medium', marginRight: 15 }} />
                </TouchableOpacity>
            </View> : ''}
            <Spinner visible={loading} />
        </LinearGradient>
    )
}

export default CustomDrawer