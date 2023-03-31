import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeLoggedIn from '../screens/HomeLoggedIn';
import Mangas from '../screens/Mangas';
import Logout from '../screens/Logout';


const Drawer = createDrawerNavigator();

export default function AppStack() {
    return (
        <Drawer.Navigator screenOptions={{headerShown: false}}>
            <Drawer.Screen name="Home" component={HomeLoggedIn} />
            <Drawer.Screen name="Mangas" component={Mangas} />
            <Drawer.Screen name="Logout" component={Logout} />
        </Drawer.Navigator>
    )
}
