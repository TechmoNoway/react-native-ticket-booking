import { Stack } from "expo-router";

export default function EventLayout() {
  return (
    <Stack screenOptions={{ headerBackTitle: "Events" }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="new" />
      <Stack.Screen name="event/[id]" />
    </Stack>
  );
}
