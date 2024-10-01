import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  FlatList,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Pesagem {
  date: string;
  weight: string;
  length: string;
}

export default function AddAnimalScreen() {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [father, setFather] = useState("");
  const [mother, setMother] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [acquisitionDate, setAcquisitionDate] = useState("");
  const [registry, setRegistry] = useState("");
  const [currentWeight, setCurrentWeight] = useState("");
  const [currentLength, setCurrentLength] = useState("");
  const [healthStatus, setHealthStatus] = useState("");
  const [litterId, setLitterId] = useState("");
  const [pesagens, setPesagens] = useState<Pesagem[]>([]);

  const addPesagem = () => {
    if (!currentWeight || !currentLength) {
      Alert.alert("Erro", "Por favor, adicione peso e comprimento.");
      return;
    }

    const newPesagem: Pesagem = {
      date: new Date().toLocaleDateString(),
      weight: currentWeight,
      length: currentLength,
    };

    setPesagens([...pesagens, newPesagem]);
    setCurrentWeight("");
    setCurrentLength("");
  };

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

      const newAnimal = {
        name,
        species,
        father,
        mother,
        birthDate,
        acquisitionDate,
        registry,
        pesagens,
        healthStatus,
        litterId,
      };

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
    setAcquisitionDate("");
    setRegistry("");
    setCurrentWeight("");
    setCurrentLength("");
    setHealthStatus("");
    setLitterId("");
    setPesagens([]);
  };

  const renderPesagem = ({ item }: { item: Pesagem }) => (
    <View style={styles.pesagemItem}>
      <Text>Data: {item.date}</Text>
      <Text>Peso: {item.weight} kg</Text>
      <Text>Comprimento: {item.length} cm</Text>
    </View>
  );

  return (
    <FlatList
      ListHeaderComponent={
        <View style={styles.formContainer}>
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

          <Text style={styles.label}>Data de Aquisição</Text>
          <TextInput
            style={styles.input}
            placeholder="DD/MM/AAAA"
            value={acquisitionDate}
            onChangeText={setAcquisitionDate}
          />

          <Text style={styles.label}>Registro</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o registro"
            value={registry}
            onChangeText={setRegistry}
          />

          <Text style={styles.label}>Peso Atual (kg)</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o peso"
            value={currentWeight}
            onChangeText={setCurrentWeight}
            keyboardType="numeric"
          />

          <Text style={styles.label}>Comprimento Atual (cm)</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o comprimento"
            value={currentLength}
            onChangeText={setCurrentLength}
            keyboardType="numeric"
          />

          <Button
            title="Adicionar Pesagem"
            onPress={addPesagem}
            color="#2E8B57"
          />
        </View>
      }
      data={pesagens}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderPesagem}
      ListFooterComponent={
        <View>
          <Text style={styles.label}>Status de Saúde</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o status de saúde"
            value={healthStatus}
            onChangeText={setHealthStatus}
          />

          <Text style={styles.label}>ID da Ninhada</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o ID da ninhada (se aplicável)"
            value={litterId}
            onChangeText={setLitterId}
          />

          <Button title="Salvar Animal" onPress={saveAnimal} color="#2E8B57" />
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  formContainer: {
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
  pesagemItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 10,
  },
});
