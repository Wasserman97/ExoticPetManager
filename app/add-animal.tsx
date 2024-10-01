import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AddAnimalScreen() {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [father, setFather] = useState("");
  const [mother, setMother] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [registry, setRegistry] = useState("");

  const saveAnimal = async () => {
    if (!name || !species || !birthDate || !registry) {
      Alert.alert(
        "Erro",
        "Todos os campos obrigatórios devem ser preenchidos."
      );
      return;
    }

    try {
      const existingAnimals = await AsyncStorage.getItem("animals");
      const animals = existingAnimals ? JSON.parse(existingAnimals) : [];
      const newAnimal = { name, species, father, mother, birthDate, registry };

      animals.push(newAnimal);
      await AsyncStorage.setItem("animals", JSON.stringify(animals));

      Alert.alert("Sucesso!", "Animal adicionado com sucesso!");
      clearForm();
    } catch (error) {
      Alert.alert("Erro", "Não foi possível salvar o animal.");
    }
  };

  const clearForm = () => {
    setName("");
    setSpecies("");
    setFather("");
    setMother("");
    setBirthDate("");
    setRegistry("");
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}>Adicionar Animal</Text>

      <Text style={styles.label}>Nome do Animal</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Espécie</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a espécie"
        value={species}
        onChangeText={setSpecies}
      />

      <Text style={styles.label}>Pai</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome do pai"
        value={father}
        onChangeText={setFather}
      />

      <Text style={styles.label}>Mãe</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome da mãe"
        value={mother}
        onChangeText={setMother}
      />

      <Text style={styles.label}>Data de Nascimento</Text>
      <TextInput
        style={styles.input}
        placeholder="DD/MM/AAAA"
        value={birthDate}
        onChangeText={setBirthDate}
      />

      <Text style={styles.label}>Registro</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o registro"
        value={registry}
        onChangeText={setRegistry}
      />

      <Button title="Salvar Animal" onPress={saveAnimal} color="#2E8B57" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
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
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#555",
    marginBottom: 10,
  },
  input: {
    height: 48,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 20,
    backgroundColor: "#fff",
    fontSize: 16,
  },
});
