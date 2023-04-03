import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import CustomDrawer from '../components/CustomDrawer';

import Home from '../screens/Home';
import Mangas from '../screens/Mangas';
import MangaDetails from '../screens/MangaDetails';

import { useFonts } from 'expo-font';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


function DetailsStack() {
    return (
        <Stack.Navigator >
            <Stack.Screen name="ListMangas" component={Mangas} options={{ headerShown: false }}/>
            <Stack.Screen name="MangaDetails" component={MangaDetails} options={{ headerShown: false }}/>
        </Stack.Navigator>
    );
}

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
                swipeEdgeWidth: 70,
            }}>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Mangas" component={DetailsStack}/>
        </Drawer.Navigator>
    )
}
