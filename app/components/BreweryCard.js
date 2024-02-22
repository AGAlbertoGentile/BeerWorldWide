import React from "react";
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function BreweryCard ({ brewery, onPress }) {
    return(
        <TouchableOpacity onPress={onPress} style={styles.card}>
            <Text style={styles.title}>{brewery.name}</Text>
            <Text>{brewery.type}</Text>
            <Text>{brewery.city}, {brewery.state}</Text>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      borderRadius: 8,
      padding: 16,
      marginVertical: 8,
      marginHorizontal: 16,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
    },
  });