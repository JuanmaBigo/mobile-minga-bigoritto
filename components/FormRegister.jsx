import React, { useState } from 'react';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import TextStyled from './TextStyled';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import drawerActions from '../store/Drawer/actions.js';
import { useNavigation } from '@react-navigation/native';
const { reloadDrawer } = drawerActions

import styles from './styles.js';
const { stylesFormLogin } = styles;


export default function App() {
    let styles = stylesFormLogin;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [photo, setPhoto] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation()
    const dispatch = useDispatch()

    let state = useSelector(store => store.drawerReducer.state)

    async function handleRegister() {
        let data = {
            name: name,
            mail: email,
            photo: photo,
            password: password,
        };
        console.log(data);
        let url = 'https://minga-red.onrender.com/api/' + 'auth/signup'

        try {
            await axios.post(url, data)
            dispatch(reloadDrawer({ state: !state }))
            console.log("User created successfully")
            console.log("Check your email to verify your account")
            dispatch(reloadDrawer({ state: !state }))
        } catch (error) {
            if (typeof error.response.data.message === 'string') {
                console.log(error.response.data.message)
            } else {
                error.response.data.message.forEach(err => console.log(err))
            }
        }
    };

    function handleNavigate() {
        navigation.navigate('Login')
    }
    
    return (
        <View style={styles.container}>
            <Image source={require('../assets/Logo.png')} style={{ width: 139, height: 70, marginBottom: 32 }} />
            <TextStyled props={styles.title} content={'Welcome back!'} />

            <View style={styles.inputContainer}>
                <TextStyled props={styles.inputLabel} content={'Name'} />
                <TextInput style={styles.input} placeholder="your name" value={name} onChangeText={setName} />
            </View>

            <View style={styles.inputContainer}>
                <TextStyled props={styles.inputLabel} content={'Email'} />
                <TextInput style={styles.input} placeholder="minga@email.com" value={email} onChangeText={setEmail} />
            </View>

            <View style={styles.inputContainer}>
                <TextStyled props={styles.inputLabel} content={'Photo'} />
                <TextInput style={styles.input} placeholder="photo url" value={photo} onChangeText={setPhoto} />
            </View>

            <View style={styles.inputContainer}>
                <TextStyled props={styles.inputLabel} content={'Password'} />
                <TextInput style={styles.input} placeholder="........" value={password} onChangeText={setPassword} secureTextEntry />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <LinearGradient colors={['#4338CA', '#120F35']} locations={[0.2, 1]} start={[0, 0]} end={[1, 1]} style={styles.gradientBtn2}>
                    <TextStyled props={styles.buttonText} content={'Register'} />
                </LinearGradient>
            </TouchableOpacity>

            <View style={{ display: 'flex', width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: 24 }}>
                <TextStyled props={{ color: '#1F1F1F', opacity: 0.5, fontSize: 12, fontFamily: 'Regular' }} content={'Already have an account?'} />
                <TouchableOpacity onPress={handleNavigate}>
                    <TextStyled props={{ color: '#4338CA', fontSize: 12, fontFamily: 'Bold' }} content={' Log in'} />
                </TouchableOpacity>
            </View>
        </View>
    );
}
