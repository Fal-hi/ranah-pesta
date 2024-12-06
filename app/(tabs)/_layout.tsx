import { Tabs } from "expo-router";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { About, Create, Home, Pricing, Profile } from "@/assets/icons";
import { Text, View } from "react-native";

type TabsTextProps = {
  title: string;
  focused: boolean;
};

export default function TabLayout() {
  const colorScheme = useColorScheme();

  function Title({ title, focused }: TabsTextProps) {
    return (
      <Text
        style={{
          fontSize: 12,
          fontWeight: focused ? "bold" : "400",
          color: Colors.default.primary,
          marginTop: 14,
        }}
      >
        {title}
      </Text>
    );
  }

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#FDE8DC",
          paddingVertical: 20,
          height: 70,
          paddingBottom: 10,
        },
        tabBarActiveTintColor: Colors.default.primary,
        tabBarLabelStyle: {
          backgroundColor: Colors.default.primary,
          fontWeight: "700",
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => <Home />,
          tabBarLabel: ({ focused }) => (
            <Title title="Home" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color, focused }) => <About />,
          tabBarLabel: ({ focused }) => (
            <Title title="About" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <View className="absolute bottom-2">
              <Create />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <Text className="text-center text-primary text-[12px] leading-3 font-bold">
              Buat Undangan
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="pricing"
        options={{
          title: "Pricing",
          tabBarIcon: ({ color, focused }) => <Pricing />,
          tabBarLabel: ({ focused }) => (
            <Title title="Pricing" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => <Profile />,
          tabBarLabel: ({ focused }) => (
            <Title title="Profile" focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}
