import defaultStyles from "@/styles/defaultStyles";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function FamilyScreen() {
  const { name, activity } = useLocalSearchParams();
  return (
    <View style={defaultStyles.pageContainer}>
      <Text style={defaultStyles.bodyText}>{name}'s Family</Text>
    </View>
  );
}
