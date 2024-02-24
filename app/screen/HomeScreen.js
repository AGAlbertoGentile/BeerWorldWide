import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ActivityIndicator, ImageBackground } from 'react-native';
import { getAllBreweries } from "../utils/api";
import { FlatList, TextInput } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';
import BreweryCard from '../components/BreweryCard';
import CustomButton from "../components/CustomButton";
import CustomSwitch from "../components/CustomSwitch";
import CustomArrowButton from "../components/CustomButtonArrow";

export default function HomeScreen({ navigation }) {

    const [allBreweries, setAllBreweries] = useState([]);
    const [error, setError] = useState('');

    const [searchText, setSearchText] = useState('');
    const [isFilteredByCity, setIsFilteredByCity] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);

    const loadingAllBreweries = async () => {
        try {
            const allBreweries = await getAllBreweries();
            setAllBreweries(allBreweries)
        } catch (error) {
            setError('Error loading all the breweries')
        }
    };

    useEffect (() => {
        loadingAllBreweries();
    },[]);

    const maxPages = (allBreweries.length / 4);


    const filteredBreweries = allBreweries.filter( brewery => 
        isFilteredByCity
            ? brewery.city.toLowerCase().includes(searchText.toLowerCase())
            : brewery.name.toLowerCase().includes(searchText.toLowerCase())
    );

    const breweriesPerPage = 4;
    const maxIndex = currentPage * breweriesPerPage;
    const minIndex = maxIndex - breweriesPerPage;
    const currentView = filteredBreweries?.slice(minIndex, maxIndex);
    const maxNumOfPage = Math.ceil(filteredBreweries.length / breweriesPerPage);

    const handleNext = () => {
        if (currentPage < maxNumOfPage) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <ImageBackground 
            source={require('../assets/background-2.png')}
            style={styles.background}
            imageStyle={{ opacity: 0.08 }}
            resizeMode="cover"
        >
        <View style={styles.container}>
            {!allBreweries && <View style={styles.loading}><ActivityIndicator size="large" color='#0000ff'/></View>}
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
                    data={currentView}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <BreweryCard
                            brewery={item}
                            onPress={() => navigation.navigate('BreweryDetail', {breweryId: item.id})}
                        />   
                    )}
                />
            )}
            <View style={styles.pagination}>
                <CustomArrowButton title="<" onPress={handlePrevious} />
                <Text style={styles.pagination}>{`${currentPage} of ${maxNumOfPage}`}</Text>
                <CustomArrowButton title=">" onPress={handleNext} />
            </View>
            <CustomButton
                title="Exit"
                onPress={() => navigation.navigate('WelcomeView')}
            />
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
      },
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
        fontSize: 25,
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
        borderColor: '#000',
        borderWidth: 3,
        borderRadius: 50,
        margin: 10,
        width: '85%',
        // Sombra para iOS
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
    },
    checkBox: { 
        margin: 8,
    },
    loading: {
        flex: 1,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center', 
    },
    pagination: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        fontWeight: 'bold',
        fontSize: 15,
    },
});