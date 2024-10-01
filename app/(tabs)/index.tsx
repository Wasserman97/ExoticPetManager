import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import AddAnimalScreen from "../add-animal"; // Importando a tela de adicionar animal
import ListAnimalsScreen from "../list-animals"; // Importando a tela de listar animais

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="AddAnimal"
        component={AddAnimalScreen}
        options={{
          title: "Adicionar Animal",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="plus-circle" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ListAnimals"
        component={ListAnimalsScreen}
        options={{
          title: "Lista de Animais",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="list" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
