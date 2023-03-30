import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function App() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('email:', email);
        console.log('Password:', password);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome back!</Text>

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="introduce your email"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="introduce your password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>
        </View>
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
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 32,
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
        width: '90%', 
    },
    inputLabel: {
        color: '#1F1F1F',
        opacity: 0.5,
        fontSize: 12,
        marginBottom: 12,
        alignSelf: 'flex-start',
    }, 
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginBottom: 16,
        width: '100%',
        fontSize: 16,
    },
    button: {
        backgroundColor: '#1c7eff',
        borderRadius: 4,
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    },
});