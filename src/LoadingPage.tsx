import React, { useEffect } from 'react';
import { View, Image } from '@gluestack-ui/themed';
//@ts-ignore
import logo from '../assets/logo-color.png'


export default function LoadingScreen ({ navigation }: any) {
    useEffect(() => {
        setTimeout(() => {
          navigation.replace('Main');
        }, 3000); 
      }, [navigation]);
    return (
        <View alignItems='center'  justifyContent='center' flex={1} backgroundColor='#A1B0F6'>
            <Image source={logo} alt='image' style={{width: 230, height: 51}} />
        </View>
    );
};