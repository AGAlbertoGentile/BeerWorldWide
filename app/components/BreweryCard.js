import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function BreweryCard ({ brewery, onPress }) {

    
    return(
        <View>
            <TouchableOpacity onPress={onPress} style={styles.card} activeOpacity={0.8}>
                <Text style={styles.title}>{brewery.name}</Text>
                <Text style={styles.subtitle}>{brewery.city}, {brewery.state}</Text>
            </TouchableOpacity>
        </View>
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
        width:350
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