import Header from "@/components/ui/Header";
import Intro from "@/components/ui/Intro ";
import { Menu } from "@/components/ui/home";
import {
  Platform,
  SafeAreaView,
  SectionList,
  StatusBar,
  Text,
} from "react-native";

const sectionLists = [
  {
    title: null,
    data: ["Intro", "Menu"],
  },
  {
    title: "Diskon Menarik",
    data: ["Diskon"],
  },
];

export default function Index() {
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
      className="flex-1 px-4"
    >
      <Header />
      <SectionList
        sections={sectionLists}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => {
          switch (item) {
            case "Intro":
              return (
                <Intro
                  title="Platform Pembuatan Undangan Online"
                  content="Undangan online gratis dengan aplikasi eksklusif. Mulai buat undanganmu bersama kami dengan puluhan tema yang tersedia."
                />
              );
            case "Menu":
              return <Menu />;
            case "Diskon":
              return <Text>Hahaha</Text>;
            default:
              return null;
          }
        }}
        renderSectionHeader={({ section: { title } }) =>
          title ? <Text className="font-medium text-lg">{title}</Text> : null
        }
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
