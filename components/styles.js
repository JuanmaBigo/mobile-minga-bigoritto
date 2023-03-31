import { StyleSheet } from 'react-native';

const stylesHero = StyleSheet.create({
    contain: {
        width: '100%',
        height: '100%',
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    whitecontainer: {
        marginTop: 120,
        width: '95%',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginVertical: 25,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        borderRadius: 10
    },
    h1: {
        fontFamily: 'ExtraBold',
        fontSize: 36,
        color: '#17115F',
        textAlign: 'center',
        textShadowRadius: 20,
        shadowOpacity: 0
    },
    p: {
        fontFamily: 'Regular',
        fontSize: 20,
        color: '#17115F'
    },
    gradientBtn: {
        width: 363,
        height: 59,
        padding: 15,
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.18)',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
    }
});

const stylesFormLogin = StyleSheet.create({
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

const styles = { stylesFormLogin, stylesHero }

export default styles;