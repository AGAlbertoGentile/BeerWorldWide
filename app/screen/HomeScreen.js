import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function HomeScree({ navigation }) {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Hello</Text>
            <Text style={styles.subtitle}>Welcome to the Breweries World Tour</Text>
            <Button
                style={styles.button}
                title="Enter"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
        borderRadius: 5,
    },
    title : {
        fontSize: 40,
        color: '#000',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 14,
    }

  });