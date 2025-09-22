import colors from "@/styles/colors";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import TextField from "../components/TextField";

export default function IndexScreen() {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [activity, setActivity] = useState<string>("");

  const openTabNav = () => {
    if (name != "" && activity != "") {
      setName(name);
      router.push({ pathname: "/(tabs)", params: { name, activity } });
    } else alert("Please enter your name and activity");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the App</Text>
      <TextField placeholder="Name" value={name} onChangeText={setName} />

      <TextField
        placeholder="Activity"
        value={activity}
        onChangeText={setActivity}
      />

      <Button title="Continue" onPress={openTabNav} />
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
