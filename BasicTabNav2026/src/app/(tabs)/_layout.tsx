import { Tabs } from "expo-router";
import Ionicons from "@react-native-vector-icons/ionicons";
import colors from "@/styles/colors";

// Need to run this install statement for this 
// icon library to work. Note the second i is lowercase
// import Ionicons from '@react-native-vector-icons/ionicons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.secondary,
        tabBarInactiveTintColor: colors.mediumgrey,
        headerStyle: {
          backgroundColor: colors.secondary,
        },
        headerShadowVisible: false,
        headerTintColor: colors.darkbackground,
        tabBarStyle: {
          backgroundColor: colors.lightbackground,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Home",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="family"
        options={{
          headerTitle: "Family",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "people" : "people-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="school"
        options={{
          headerTitle: "School",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "school" : "school-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
