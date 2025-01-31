import { Slot, Stack, useRouter } from "expo-router";

export default function RootLayout() {
  return (
    <Slot />
    // <Stack screenOptions={{ headerShown: false }}>
    //   {/* <Stack.Screen name="index" options={{ title: "Home" }} /> */}
    //   <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    // </Stack>
  );
}
