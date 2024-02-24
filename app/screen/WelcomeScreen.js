import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import CustomButton from '../components/CustomButton';

export default function WelcomeScreen({ navigation }) {
    return(
        <View style={styles.container}>
            <Image
                source={require('../assets/Mr.Beer.png')}
                style={styles.image}
            />
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
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom:20,
        textShadowColor: 'rgba(0, 0, 0, 0.15)',
        textShadowOffset: { width: -1, height: 0 },
        textShadowRadius: 3,
    },
    image: {
        width: 250, 
        height: 250,
        resizeMode: 'contain',
        marginBottom: 30,
    },

});