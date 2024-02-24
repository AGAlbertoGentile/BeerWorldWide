import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screen/WelcomeScreen.js';
import BreweryDetailScreen from './screen/BreweryDetailScreen.js';
import HomeScreen from './screen/HomeScreen.js';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomeView" component={WelcomeScreen} options={{ title: ''}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Mr.Beer'}} />
        <Stack.Screen name="BreweryDetail" component={BreweryDetailScreen} options={{ title: 'Brewery Detail'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
