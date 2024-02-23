import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button } from 'react-native';
import { getAllBreweries } from "../utils/api";
import { FlatList, TextInput } from "react-native-gesture-handler";
import BreweryCard from '../components/BreweryCard';
import CustomButton from "../components/CustomButton";
import CustomSwitch from "../components/CustomSwitch";

export default function HomeScreen({ navigation }) {

    const [allBreweries, setAllBreweries] = useState([]);
    const [error, setError] = useState('');

    const [searchText, setSearchText] = useState('');
    const [isFilteredByCity, setIsFilteredByCity] = useState(false);

    useEffect (() => {
        const loadingAllBreweries = async () => {
            try {
                const allBreweries = await getAllBreweries();
                setAllBreweries(allBreweries)
            } catch (error) {
                setError('Error loading all the breweries')
            }
        };

        loadingAllBreweries();
    },[]);

    const filteredBreweries = allBreweries.filter( brewery => 
        isFilteredByCity
            ? brewery.city.toLowerCase().includes(searchText.toLowerCase())
            : brewery.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <View style={styles.container}>
            <CustomSwitch
                isFilteredByCity={isFilteredByCity}
                setIsFilteredByCity={setIsFilteredByCity}
            />
            <TextInput
                style={styles.searchBox}
                placeholder={"Search..."}
                value={searchText}
                onChangeText={text => setSearchText(text)}
            />
            {error ? (
                <Text>{error}</Text>
            ) : (
                <FlatList
                    data={filteredBreweries}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <BreweryCard
                            brewery={item}
                            onPress={() => navigation.navigate('BreweryDetail', {breweryId: item.id})}
                        />   
                    )}
                />
            )}
            <CustomButton
                title="Exit"
                onPress={() => navigation.navigate('WelcomeView')}
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
    searchBox: {
        padding: 10,
        fontSize: 16,
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        margin: 10,
        width: '95%',
        // Sombra para iOS
        shadowColor: '#000',
        shadowOffset: { width: -2, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
    },
    checkBox: {
        margin: 8,
    },

});