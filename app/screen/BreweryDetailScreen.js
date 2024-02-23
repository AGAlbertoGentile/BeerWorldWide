import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from 'react-native';
import { getBreweryDetails } from "../utils/api";
import CustomButton from "../components/CustomButton";

export default function BreweryDetailsScreen({ navigation, route }) {

    const { breweryId } = route.params;

    const [brewery, setBrewery] = useState(null);
    const [error, setError] = useState('');

    useEffect (() => {
        const loadingDetailBrewery = async () => {
            try {
                const breweryDetails = await getBreweryDetails(breweryId);
                setBrewery(breweryDetails)
            } catch (error) {
                setError('Error loading brewery details')
            }
        };

        loadingDetailBrewery();
    },[breweryId]);

    if(error) {
        return <View><Text>{error}</Text></View>;
    }

    if(!brewery) {
        return <View><Text>Loading...</Text></View>;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{brewery.name}</Text>
            <Text style={styles.subtitle}>{brewery.adress}</Text>
            <Text style={styles.subtitle}>{brewery.city}, {brewery.state}</Text>
            <Text style={styles.subtitle}>{brewery.country}</Text>
            <Text style={styles.information}>Phone: {brewery.phone}</Text>
            <Text style={styles.information}>Web: {brewery.website_url}</Text>

            <CustomButton
                style={styles.button}
                title="Back"
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
        marginTop: 20,
    },
    title : {
        fontSize: 35,
        color: '#000',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 22,
    },
    information: {
        fontSize: 15,
    }

});