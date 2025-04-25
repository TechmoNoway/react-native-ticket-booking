import { Redirect, Stack } from "expo-router";

export default function AppLayout() {
  const isLoggedIn = true;

  if (!isLoggedIn) {
    return <Redirect href="../login" />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
