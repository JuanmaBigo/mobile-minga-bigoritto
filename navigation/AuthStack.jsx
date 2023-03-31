import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawer from '../components/CustomDrawer';

import Home from '../screens/Home';
import Login from '../screens/Login';
import Register from '../screens/Register';

import { useFonts } from 'expo-font';


const Drawer = createDrawerNavigator();

export default function AppStack() {
    let [fontsLoaded] = useFonts({
        Medium: require('../assets/fonts/Montserrat-Medium.ttf'),
    });
    if (!fontsLoaded) {
        return null;
    }

    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: 'white',
                drawerActiveTintColor: '#4338CA',
                drawerInactiveTintColor: 'white',
                drawerLabelStyle: {
                    fontFamily: 'Medium',
                },
            }}>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="Register" component={Register} />
        </Drawer.Navigator>
    )
}
