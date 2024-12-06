import { Phone, QR, Thunder, Video } from "@/assets/icons";
import Header from "@/components/ui/Header";
import Intro from "@/components/ui/Intro ";
import {
  FlatList,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";

const dataAbout = [
  {
    icon: <Phone />,
    title: "Undangan Digital",
    content:
      "Kami menyediakan berbagai pilihan template untuk undangan digital kamu. Eits, ada ragam pilihan musik juga loh.",
  },
  {
    icon: <Video />,
    title: "Undangan Video",
    content:
      "Tidak cukup hanya dengan website, kami juga menyediakan undangan berupa video untuk membuat tamu kamu lebih nyaman dalam menerima informasi.",
  },
  {
    icon: <Thunder />,
    title: "Cepat & Mudah",
    content:
      "Cukup dalam beberapa menit kamu sudah bisa membuat website undangan digital kamu sendiri.",
  },
  {
    icon: <QR />,
    title: "QR Scanner Tamu",
    content:
      "Untuk menghindari kontak antar tamu saat acara berlangsung, kami juga menyediakan sistem penerimaan tamu via scanner QR code. Tentu hal ini lebih mudah, cepat dan aman.",
  },
];

export default function About() {
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
      className="flex-1 px-4"
    >
      <Header />
      <ScrollView>
        <Intro
          title="Mengapa Memilih Undangan Digital?"
          content="Kami menyediakan berbagai macam fitur untuk undanganmu. Mulai dari template yang premium, undangan berupa video hingga sistem tamu yang menggunakan QR code."
        />
        <View className="my-10">
          {dataAbout.map(({ icon, title, content }, index) => (
            <View key={index} className="flex-row gap-x-2">
              <View className="flex-col items-center">
                <View className="bg-primary rounded-full w-12 h-12 flex justify-center items-center">
                  {icon}
                </View>
                {index !== dataAbout.length - 1 && (
                  <View className="w-1 h-20 bg-primary"></View>
                )}
              </View>
              <View className="w-[80%] mt-2">
                <Text className="text-xl text-primary font-bold mb-1">
                  {title}
                </Text>
                <Text className="text-black text-sm">{content}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
