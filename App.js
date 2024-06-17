import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoadingScreen from './src/telas/LoadingScreen';
import Produtos from './src/telas/produtos';
import { StatusBar } from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <StatusBar />
      <Stack.Navigator initialRouteName="Loading" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="Main" component={Produtos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;