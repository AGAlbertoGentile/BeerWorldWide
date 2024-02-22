import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screen/HomeScreen.js';
import BreweriesDetailScreen from './screen/BreweriesDetailScreen.js';
import BreweriesScreen from './screen/BreweriesScreen.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomeView" component={HomeScreen} options={{ title: 'Beer World Wide'}}/>
        <Stack.Screen name="Home" component={BreweriesScreen} options={{ title: 'Home'}} />
        <Stack.Screen name="BreweriesDetails" component={BreweriesDetailScreen} options={{ title: 'Detail'}} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
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
