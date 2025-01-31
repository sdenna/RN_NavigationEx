import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import colors from "@/styles/colors";

export default function IndexScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the App</Text>
      <Button
        title="Enter App"
        color={colors.primary}
        onPress={() => router.push("/(tabs)")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkbackground,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.textondark,
    marginBottom: 20,
  },
});
