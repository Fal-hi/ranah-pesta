import Input from "@/components/Input";
import ButtonBack from "@/components/ui/profile/BackButton";
import { Platform, SafeAreaView, StatusBar, View } from "react-native";

export default function UbahProfile() {
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
      className="flex-1 px-4"
    >
      <ButtonBack title="Ubah Profile" />
      <View className="flex-col">
        <Input label="Nama Lengkap" className="mb-2" />
        <Input label="Nama Lengkap" />
      </View>
    </SafeAreaView>
  );
}
