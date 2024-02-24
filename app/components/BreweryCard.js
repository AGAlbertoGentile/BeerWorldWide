import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity, View, ImageBackground } from 'react-native';

export default function BreweryCard ({ brewery, onPress }) {

    
    return(
        <ImageBackground 
            source={require('../assets/background-2.png')} // Asegúrate de cambiar esto por la ruta real de tu imagen
            style={styles.background}
            imageStyle={{ opacity: 0.1 }}
            resizeMode="cover"
        >
        <View>
            <TouchableOpacity onPress={onPress} style={styles.card}>
                <Text style={styles.title}>{brewery.name}</Text>
                <Text style={styles.subtitle}>{brewery.city}, {brewery.state}</Text>
            </TouchableOpacity>
        </View>
        </ImageBackground>
    );
};


const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.15)',
        textShadowOffset: { width: -1, height: 0 },
        textShadowRadius: 2,
        marginBottom:5
    },
    background: {
        flex: 1,
    },
  });