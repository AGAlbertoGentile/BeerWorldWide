import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function CustomButton ({ onPress, title }) {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={styles.buttonContainer}>
            <LinearGradient
                colors={['#f7b733', '#fc4a1a']}
                style={styles.button}
                start={{x:0, y:0}}
                end={{x:1, y:1}}    
            >
                <Text style={styles.text}>{title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        elevation: 8, // Sombra para Android
        shadowColor: '#000', // Sombra para iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderRadius: 25,
        margin: 10,
        width: 150,
        height:50,
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25, // borderRadius para el gradiente
    },
    text: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.15)',
        textShadowOffset: { width: -1, height: 0 },
        textShadowRadius: 5,
    },
})