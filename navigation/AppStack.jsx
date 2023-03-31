import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawer from '../components/CustomDrawer';

import HomeLoggedIn from '../screens/HomeLoggedIn';
import Mangas from '../screens/Mangas';
import Logout from '../screens/Logout';

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
            <Drawer.Screen name="Home" component={HomeLoggedIn} />
            <Drawer.Screen name="Mangas" component={Mangas} />
            <Drawer.Screen name="Logout" component={Logout} />
        </Drawer.Navigator>
    )
}
