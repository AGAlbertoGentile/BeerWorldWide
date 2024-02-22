import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screen/WelcomeScreen.js';
import BreweryDetailScreen from './screen/BreweryDetailScreen.js';
import HomeScreen from './screen/HomeScreen.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomeView" component={WelcomeScreen} options={{ title: 'Beer World Wide'}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home'}} />
        <Stack.Screen name="BreweryDetail" component={BreweryDetailScreen} options={{ title: 'Detail'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
