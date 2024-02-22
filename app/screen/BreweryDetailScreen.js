import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text, Button } from 'react-native';

export default function BreweryDetailsScreen({ navigation, route }) {

    const { id } = route.params;

    const [brewery, setBrewery] = useState({});
    const [error, setError] = useState('');

    useEffect (() => {
        const loadingDetailBrewery = async () => {
            try {
                const brewery = await getBreweryDetail(id);
                setBrewery(brewery)
            } catch (error) {
                setError('Error loading the detail')
            }
        };

        loadingDetailBrewery();
    },[id]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{brewery.name}</Text>
            <Button
                title="Home"
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
        borderRadius: 25,
        width: 200,
    },
    title : {
        fontSize: 40,
        color: '#000',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 14,
    },

});