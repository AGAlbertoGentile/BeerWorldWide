import React, {useState} from "react";
import { View, StyleSheet, Text, Switch } from "react-native";

export default function CustomSwitch ({ isFilteredByCity, setIsFilteredByCity }) {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{isFilteredByCity ? 'Search by City' : 'Search by Name'}</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#767577" }}
        thumbColor={isFilteredByCity ? '#f7b733' : '#f7b733'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => setIsFilteredByCity(previousState => !previousState)}
        value={isFilteredByCity}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  text: {
    fontWeight: 'bold',
    color: "#000",
  }
});