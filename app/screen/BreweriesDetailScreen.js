import React from "react";
import { View, Text, Button } from 'react-native';

export default function BreweriesDetailsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Brewerie Detail</Text>
            <Button
                title="Home"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}