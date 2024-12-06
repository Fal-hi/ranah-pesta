import ButtonBack from "@/components/ui/profile/BackButton";
import { Href, Link } from "expo-router";
import { Platform, SafeAreaView, StatusBar, Text, View } from "react-native";

export default function PesananSaya() {
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
      className="flex-1 px-4"
    >
      <ButtonBack title="Pesanan Saya" />
      <View className="flex-row gap-x-4">
        <Text>
          Kamu belum memesan paket undangan apapun. Pilih paket undangan kamu{" "}
          <Link
            href={"#" as Href<string>}
            className="text-blue font-medium underline"
          >
            disini.
          </Link>
        </Text>
      </View>
    </SafeAreaView>
  );
}
