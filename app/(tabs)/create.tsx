import Header from "@/components/ui/Header";
import Intro from "@/components/ui/Intro ";
import { Platform, SafeAreaView, StatusBar } from "react-native";

export default function Create() {
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
      className="flex-1 px-4"
    >
      <Header />
      <Intro
        title="Platform Pembuatan Undangan Online"
        content="Undangan online gratis dengan aplikasi eksklusif. Mulai buat undanganmu bersama kami dengan puluhan tema yang tersedia."
      />
    </SafeAreaView>
  );
}
