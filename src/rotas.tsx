import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LoadingScreen from "./LoadingPage"
import Main from "./Main"

const Tab = createNativeStackNavigator()

export default function Rotas() {
    return(
        <NavigationContainer>
            <Tab.Navigator screenOptions={{headerShown: false}}>
                <Tab.Screen name="LoadingScreen" component={LoadingScreen}/>
                <Tab.Screen name="Main" component={Main}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}