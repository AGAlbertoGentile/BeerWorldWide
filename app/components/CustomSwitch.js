import React, {useState} from "react";
import { View, StyleSheet, Text, Switch } from "react-native";

export default function CustomSwitch ({ isFilteredByCity, setIsFilteredByCity }) {

  return (
    <View style={styles.container}>
      <Text>{isFilteredByCity ? 'Filtrar por Ciudad' : 'Filtrar por Nombre'}</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isFilteredByCity ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => setIsFilteredByCity(previousState => !previousState)}
        value={isFilteredByCity}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});