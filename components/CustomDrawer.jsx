import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { LinearGradient } from 'expo-linear-gradient';
import { View, Image } from 'react-native'
import TextStyled from './TextStyled';


const CustomDrawer = (props) => {
    return (
            <LinearGradient colors={['#4338CA', '#000000']} start={[1, 0]} end={[0.5, 1.4]} style={{ flex: 1, display: 'flex', flexDirection: 'column', paddingVertical: 50 }}>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', height: 46, paddingHorizontal: 12}}>
                <Image source={require('../assets/defaultUser.png')} style={{width: 46, height: 46, borderRadius: 50, marginRight: 12}} />
                <View style={{display: 'flex', flexDirection: 'column', }}>
                    <TextStyled props={{ color: '#fff', fontSize: 15, fontFamily: 'SemiBold' }} content={'Username'}/>
                    <TextStyled props={{ color: '#fff', fontSize: 13, fontFamily: 'Medium' }} content={'email'}/>
                </View>
            </View>
                <DrawerContentScrollView {...props}>
                    <DrawerItemList {...props} />
                </DrawerContentScrollView>
            </LinearGradient>
    )
}

export default CustomDrawer