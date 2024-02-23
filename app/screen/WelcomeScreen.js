import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CustomButton from '../components/CustomButton';

export default function WelcomeScreen({ navigation }) {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Hello</Text>
            <Text style={styles.subtitle}>Welcome to the Breweries World Tour</Text>
            <CustomButton
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
    title : {
        fontSize: 40,
        color: '#000',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 14,
    }

});