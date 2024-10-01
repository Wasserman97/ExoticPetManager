import { Stack } from "expo-router";

export default function TabLayout() {
  return (
    <Stack>
      {/* Aqui você pode gerenciar layouts adicionais para as abas */}
      <Stack.Screen name="explore" options={{ headerShown: false }} />
    </Stack>
  );
}
