import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function IndexScreen() {
  const router = useRouter(); // Navigation hook

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the App</Text>
      <Button title="Go to Home" onPress={() => router.push("/home")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});
