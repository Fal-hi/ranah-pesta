import { ArrowRight } from "@/assets/icons";
import { Image } from "expo-image";
import { Href, router } from "expo-router";
import {
  Platform,
  Pressable,
  SafeAreaView,
  SectionList,
  StatusBar,
  Text,
  View,
} from "react-native";

const dataProfile = [
  {
    title: "General",
    data: [
      { label: "Pesanan Saya", path: "../(profile)/pesanan" },
      { label: "Ubah Profile", path: "../(profile)/ubah-profile" },
      { label: "Ubah Password", path: "../screens/pesanan-saya" },
    ],
  },
  {
    title: "Preferance",
    data: [
      { label: "Program Referral", path: "../screens/pesanan-saya" },
      { label: "Ubah Referral", path: "../screens/pesanan-saya" },
      {
        label: "Credit Smart WhatsApp",
        path: "../screens/pesanan-saya",
      },
    ],
  },
  {
    title: "Info Lainnya",
    data: [
      { label: "Beri Rating", path: "../screens/pesanan-saya" },
      { label: "Beri Masukkan", path: "../screens/pesanan-saya" },
      { label: "Keluar", path: "../screens/pesanan-saya" },
    ],
  },
];

export default function Profile() {
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
      className="flex-1 px-4"
    >
      <View className="flex-col gap-2 justify-center items-center mt-2">
        <View className="border-2 border-primary rounded-full">
          <Image
            source={"https://picsum.photos/seed/696/3000/2000"}
            className="w-24 h-24 rounded-full"
            contentFit="cover"
            transition={500}
          />
        </View>
        <Text className="text-primary text-2xl font-medium">
          Mamank Sudarsono
        </Text>
        <View className="flex-col justify-center items-center">
          <Text className="text-black text-base">089648030105</Text>
          <Text className="text-black text-base -mt-1">
            mamank-sudarsono@gmail.com
          </Text>
        </View>
      </View>
      <SectionList
        sections={dataProfile}
        keyExtractor={(item, index) => item.label + index}
        renderSectionHeader={({ section: { title } }) => (
          <Text className="font-bold text-lg text-primary my-2">{title}</Text>
        )}
        renderItem={({ item }) => {
          const colorText =
            item.label === "Pesanan Saya"
              ? "font-medium"
              : item.label === "Keluar"
              ? "text-red"
              : "";
          return (
            <Pressable
              className="mb-3 flex-row justify-between items-center"
              onPress={() => router.push(item.path as Href<string>)}
            >
              {item.label !== "Versi" ? (
                <>
                  <Text className={`text-base ${colorText}`}>{item.label}</Text>
                  <ArrowRight fill="#201F1F" />
                </>
              ) : (
                <Text className="text-primary text-base font-semibold mt-2">
                  Versi 1.0.0
                </Text>
              )}
            </Pressable>
          );
        }}
        className="mt-4"
      />
    </SafeAreaView>
  );
}
