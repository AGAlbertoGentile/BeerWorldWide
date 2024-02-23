import React, { useState } from "react";
import { View, FlatList, TouchableOpacity } from "react-native-gesture-handler";
import BreweryCard from "../components/BreweryCard";


export default function FavoriteBreweries () {

    const [isFavorite, setIsFavorite] = useState([]);

    useEffect (()=> {
        const loadFavorites = async () => {
            const favoritesBreweries = await getFavorites();
            setIsFavorite(favoritesBreweries);
        }; 
        loadFavorites()
    },[])

    return(
        <View>
            <TouchableOpacity>
                <FlatList
                    data={isFavorite}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <BreweryCard
                            brewery={item}
                            onPress={() => navigation.navigate('BreweryDetail', {breweryId: item.id})}
                        />   
                    )}
                />
                <CustomButton
                    style={styles.button}
                    title="Back"
                    onPress={() => navigation.goBack()}
                />
            </TouchableOpacity>
        </View>
    )
};