import { Stack } from "expo-router";

export default function ProfileLayout() {
  return (
    <Stack>
      <Stack.Screen name="pesanan" options={{ headerShown: false }} />
      <Stack.Screen name="ubah-profile" options={{ headerShown: false }} />
    </Stack>
  );
}
