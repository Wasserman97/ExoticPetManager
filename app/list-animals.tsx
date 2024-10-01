import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Animal {
  name: string;
  species: string;
  registry: string;
}

export default function ListAnimalsScreen() {
  const [animals, setAnimals] = useState<Animal[]>([]);

  const loadAnimals = async () => {
    try {
      const storedAnimals = await AsyncStorage.getItem("animals");
      if (storedAnimals) {
        setAnimals(JSON.parse(storedAnimals));
      }
    } catch (error) {
      alert("Erro ao carregar os animais.");
    }
  };

  useEffect(() => {
    loadAnimals();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Animais</Text>

      <FlatList
        data={animals}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.animalItem}>
            <Text style={styles.animalName}>Nome: {item.name}</Text>
            <Text>Espécie: {item.species}</Text>
            <Text>Registro: {item.registry}</Text>
          </View>
        )}
        contentContainerStyle={styles.list}
      />

      <Button title="Atualizar Lista" onPress={loadAnimals} color="#4682B4" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  list: {
    paddingBottom: 20,
  },
  animalItem: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
  },
  animalName: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
});
