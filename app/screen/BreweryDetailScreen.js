import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, ActivityIndicator, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getBreweryDetails } from "../utils/api";
import CustomButton from "../components/CustomButton";

export default function BreweryDetailsScreen({ navigation, route }) {

    const { breweryId } = route.params;

    const [brewery, setBrewery] = useState('');
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

    return (
        <ImageBackground 
            source={require('../assets/background-2.png')} // Asegúrate de cambiar esto por la ruta real de tu imagen
            style={styles.background}
            imageStyle={{ opacity: 0.08 }}
            resizeMode="cover"
        >
        <View style={styles.container}>
            <Image
                source={require('../assets/Mr.Beer.png')}
                style={styles.image}
            />
            {!brewery
                ? (<View style={styles.loading}><ActivityIndicator size="large" color='#0000ff'/></View>)
                : (
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{brewery.name}</Text>
                <View style={styles.secction}>
                    <Icon name='map-pin' size={25} color='#fc4a1a'/>
                    <Text style={styles.subtitle}>{brewery.city}, {brewery.state}</Text>
                </View>
                <View style={styles.secction}><Icon name='phone' size={25} color='#fc4a1a'/><Text style={styles.information}>{brewery.phone}</Text></View>
                <View style={styles.secction}><Icon name='at' size={25} color='#fc4a1a'/><Text style={styles.information}>{brewery.website_url}</Text></View>
            </View>
            )}
            <CustomButton
                style={styles.button}
                title="Back"
                onPress={() => navigation.goBack()}   
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
    title : {
        fontSize: 22,
        color: '#fc4a1a',
        fontWeight: 'bold',
        height: 90,
        textShadowColor: 'rgba(0, 0, 0, 0.15)',
        textShadowOffset: { width: -1, height: 0 },
        textShadowRadius: 3,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginLeft: 10,
        marginBottom: 10,
    },
    infoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 50,
    },
    information: {
        fontSize: 17,
        marginLeft: 10,
    },
    image: {
        width: 150, 
        height: 150,
        resizeMode: 'contain',
    },
    loading: {
        // flex: 1,
        position: 'absolute',
    },
    secction: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50
    },
});