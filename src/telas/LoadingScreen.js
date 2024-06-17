import React from 'react';
import { useEffect } from 'react';
import { View, Image } from 'react-native';
import logo from '../../assets/logo-color.png'

export default function LoadingScreen ({ navigation }) {
    useEffect(() => {
      setTimeout(() => {
        navigation.replace('Main');
      }, 3000); 
    }, [navigation]);
    
    return (
        <View className="flex-1 justify-center items-center bg-[#A1B0F6]">
            <Image source={logo} style={{ width: 230, height: 51 }} />
        </View>
    );
};
