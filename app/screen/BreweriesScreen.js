import React, { useEffect, useState } from "react";
import { View, Text, Button } from 'react-native';
import { getAllBreweries } from "../utils/api";
import { FlatList } from "react-native-gesture-handler";
import BreweryCard from '../components/BreweryCard';

export default function BreweriesScreen({ navigation }) {

    const [breweries, setBreweries] = useState([]);
    const [error, setError] = useState('');

    const array = ['hola', 'como', 'estas']

    useEffect (() => {
        const loadingAllBreweries = async () => {
            try {
                const allBreweries = await getAllBreweries();
                console.log(allBreweries)
                setBreweries(allBreweries)
            } catch (error) {
                setError('Error loading all the breweries')
            }
        };

        loadingAllBreweries();
    },[]);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {/* <Text>Breweries all arround the World</Text> */}
            {error ? (
                <Text>{error}</Text>
            ) : (
                <FlatList
                    data={breweries}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <BreweryCard
                            brewery={item}
                            onPress={() => navigation.navigate('BreweryDetail', {breweryId: item.id})}
                        />   
                    )}
                />
            )}
            <Button
                title="Exit"
                onPress={() => navigation.navigate('WelcomeView')}
            />
        </View>
    )
}