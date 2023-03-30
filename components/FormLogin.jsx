import React, { useState } from 'react';
import { StyleSheet, Image, TextInput, TouchableOpacity, View } from 'react-native';
import TextStyled from './TextStyled';
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('email:', email);
        console.log('Password:', password);
    };

    return (
        <View style={styles.container}>
            <Image source={require('../assets/Logo.png')} style={{ width: 139, height: 70, marginBottom: 32 }} />
            <TextStyled props={styles.title} content={'Welcome back!'} />

            <View style={styles.inputContainer}>
                <TextStyled props={styles.inputLabel} content={'Email'} />
                <TextInput style={styles.input}
                    placeholder="minga@email.com"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            <View style={styles.inputContainer}>
                <TextStyled props={styles.inputLabel} content={'Password'} />
                <TextInput
                    style={styles.input}
                    placeholder="........"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <LinearGradient colors={['#4338CA', '#120F35']}
                    locations={[0.2, 1]}
                    start={[0, 0]}
                    end={[1, 1]}
                    style={styles.gradientBtn2}
                >
                    <TextStyled props={styles.buttonText} content={'Sign in'} />
                </LinearGradient>
            </TouchableOpacity>

            <View style={{ display: 'flex', width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: 24 }}>
                <TextStyled props={{ color: '#1F1F1F', opacity: 0.5, fontSize: 12, fontFamily: 'Regular' }} content={'Don\'t have an account?'} />
                <TouchableOpacity>
                    <TextStyled props={{ color: '#4338CA', fontSize: 12, fontFamily: 'Bold' }} content={' Register'} />
                </TouchableOpacity>
            </View>

        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontFamily: 'Bold',
        fontSize: 32,
        color: '#1F1F1F',
        marginBottom: 52,
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginBottom: 16,
        width: '90%',
    },
    inputLabel: {
        color: '#1F1F1F',
        opacity: 0.5,
        fontSize: 12,
        marginBottom: 5,
        alignSelf: 'flex-start',
    },
    input: {
        borderColor: '#fff',
        borderBottomColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginBottom: 16,
        width: '100%',
        fontSize: 16,
    },
    button: {
        borderRadius: 4,
        width: 365,
        height: 48,
    },
    buttonText: {
        fontFamily: 'Bold',
        color: '#fff',
        fontSize: 14,
    },
    gradientBtn2: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    }
});