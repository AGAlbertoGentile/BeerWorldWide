import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button } from 'react-native';
import { getAllBreweries } from "../utils/api";
import { FlatList } from "react-native-gesture-handler";
import BreweryCard from '../components/BreweryCard';

export default function HomeScreen({ navigation }) {

    const [allBreweries, setAllBreweries] = useState([]);
    const [error, setError] = useState('');

    // const array = [
    //     {
    //       "id": "5128df48-79fc-4f0f-8b52-d06be54d0cec",
    //       "name": "(405) Brewing Co",
    //       "brewery_type": "micro",
    //       "address_1": "1716 Topeka St",
    //       "address_2": null,
    //       "address_3": null,
    //       "city": "Norman",
    //       "state_province": "Oklahoma",
    //       "postal_code": "73069-8224",
    //       "country": "United States",
    //       "longitude": "-97.46818222",
    //       "latitude": "35.25738891",
    //       "phone": "4058160490",
    //       "website_url": "http://www.405brewing.com",
    //       "state": "Oklahoma",
    //       "street": "1716 Topeka St"
    //     },
    //     {
    //       "id": "9c5a66c8-cc13-416f-a5d9-0a769c87d318",
    //       "name": "(512) Brewing Co",
    //       "brewery_type": "micro",
    //       "address_1": "407 Radam Ln Ste F200",
    //       "address_2": null,
    //       "address_3": null,
    //       "city": "Austin",
    //       "state_province": "Texas",
    //       "postal_code": "78745-1197",
    //       "country": "United States",
    //       "longitude": null,
    //       "latitude": null,
    //       "phone": "5129211545",
    //       "website_url": "http://www.512brewing.com",
    //       "state": "Texas",
    //       "street": "407 Radam Ln Ste F200"
    //     },
    //     {
    //       "id": "34e8c68b-6146-453f-a4b9-1f6cd99a5ada",
    //       "name": "1 of Us Brewing Company",
    //       "brewery_type": "micro",
    //       "address_1": "8100 Washington Ave",
    //       "address_2": null,
    //       "address_3": null,
    //       "city": "Mount Pleasant",
    //       "state_province": "Wisconsin",
    //       "postal_code": "53406-3920",
    //       "country": "United States",
    //       "longitude": "-87.88336350209435",
    //       "latitude": "42.72010826899558",
    //       "phone": "2624847553",
    //       "website_url": "https://www.1ofusbrewing.com",
    //       "state": "Wisconsin",
    //       "street": "8100 Washington Ave"
    //     }]

    useEffect (() => {
        const loadingAllBreweries = async () => {
            try {
                const allBreweries = await getAllBreweries();
                console.log(allBreweries)
                setAllBreweries(allBreweries)
            } catch (error) {
                setError('Error loading all the breweries')
            }
        };

        loadingAllBreweries();
    },[]);

    return (
        <View style={styles.container}>
            {/* <Text>Breweries all arround the World</Text> */}
            {error ? (
                <Text>{error}</Text>
            ) : (
                <FlatList
                    data={allBreweries}
                    keyExtractor={item => item.id}
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