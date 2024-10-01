import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Button, StyleSheet, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Pesagem {
  date: string;
  weight: string;
  length: string;
}

interface Animal {
  name: string;
  species: string;
  father: string;
  mother: string;
  birthDate: string;
  acquisitionDate: string;
  registry: string;
  pesagens: Pesagem[];
  healthStatus: string;
  litterId: string;
}

export default function ListAnimalsScreen() {
  const [animals, setAnimals] = useState<Animal[]>([]);

  const loadAnimals = async () => {
    try {
      const storedAnimals = await AsyncStorage.getItem("animals");
      if (storedAnimals) {
        setAnimals(JSON.parse(storedAnimals));
      } else {
        setAnimals([]);
      }
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar os animais.");
    }
  };

  useEffect(() => {
    loadAnimals();
  }, []);

  const renderPesagem = ({ item }: { item: Pesagem }) => (
    <View style={styles.pesagemItem}>
      <Text>Data: {item.date}</Text>
      <Text>Peso: {item.weight} kg</Text>
      <Text>Comprimento: {item.length} cm</Text>
    </View>
  );

  const renderAnimal = ({ item }: { item: Animal }) => (
    <View style={styles.animalItem}>
      <Text style={styles.animalName}>Nome: {item.name}</Text>
      <Text>Espécie: {item.species}</Text>
      <Text>Pai: {item.father || "Desconhecido"}</Text>
      <Text>Mãe: {item.mother || "Desconhecido"}</Text>
      <Text>Data de Nascimento: {item.birthDate}</Text>
      <Text>Data de Aquisição: {item.acquisitionDate || "Não informada"}</Text>
      <Text>Registro: {item.registry}</Text>
      <Text>Status de Saúde: {item.healthStatus || "Não informado"}</Text>
      {item.litterId ? <Text>ID da Ninhada: {item.litterId}</Text> : null}

      <Text style={styles.subTitle}>Histórico de Pesagens:</Text>
      {item.pesagens && item.pesagens.length > 0 ? (
        <FlatList
          data={item.pesagens}
          renderItem={renderPesagem}
          keyExtractor={(pesagem, index) => index.toString()}
        />
      ) : (
        <Text>Sem pesagens registradas.</Text>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Animais</Text>
      <FlatList
        data={animals}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderAnimal}
        ListEmptyComponent={<Text>Nenhum animal cadastrado.</Text>}
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
  subTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 10,
  },
  pesagemItem: {
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginBottom: 5,
  },
});
