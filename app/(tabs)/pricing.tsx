import Header from "@/components/ui/Header";
import Intro from "@/components/ui/Intro ";
import Card from "@/components/ui/pricing/Card";
import {
  websitePackage,
  saveTheDatePackage,
  otherEventPackage,
  videoPackage,
  instagramWeddingFilterPackage,
  threeDInvitationPackage,
} from "@/data";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  Platform,
  Pressable,
  SafeAreaView,
  SectionList,
  StatusBar,
  Text,
  View,
} from "react-native";

const sectionLists = [
  {
    data: ["Intro", "Package"],
  },
];

const sectionListsHeader = [
  {
    title: "Paket Website",
    desc: "Pilih paket layanan website undangan pernikahan sesuai kebutuhan kamu",
    package: websitePackage,
  },
  {
    title: "Paket Save The Date",
    desc: "Pilih paket save the date undangan sesuai kebutuhan kamu",
    package: saveTheDatePackage,
  },
  {
    title: "Paket Event Lainnya",
    desc: "Pilih paket undangan website untuk event selain pernikahan",
    package: otherEventPackage,
  },
  {
    title: "Paket Video",
    desc: "Pilih paket video undangan pernikahan sesuai keinginan kamu",
    package: videoPackage,
  },
  {
    title: "Paket Filter Instagram",
    desc: "Pilih paket filter instagram undangan sesuai keinginan kamu",
    package: instagramWeddingFilterPackage,
  },
  {
    title: "Paket Undangan 3D",
    desc: "Pilih paket undangan 3D sesuai keinginan kamu",
    package: threeDInvitationPackage,
  },
];

export default function Pricing() {
  const { width } = Dimensions.get("window");
  const [activePackage, setActivePackage] = useState(
    sectionListsHeader[0].package
  );
  const [activeDesc, setActiveDesc] = useState(sectionListsHeader[0].desc);

  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity is 0
  const translateAnim = useRef(new Animated.Value(20)).current; // Initial position for sliding

  useEffect(() => {
    // Trigger the animation when activePackage changes
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(translateAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, [activePackage]);

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
                  title="Hemat Tanpa Mengorbankan Eksklusivitas & Pilihan Paket Terjangkau!"
                  content="Kami mengerti bahwa momen spesial dalam hidup Anda harus dirayakan dengan cara yang tak terlupakan. Inilah mengapa kami hadir untuk memberikan solusi undangan digital eksklusif yang akan mengesankan tamu undangan Anda. Berikut adalah pilihan paket yang kami tawarkan:"
                />
              );
            case "Package":
              return (
                <>
                  <FlatList
                    className="mt-10"
                    data={sectionListsHeader}
                    renderItem={({ item }) => (
                      <Pressable
                        className={`py-1 px-2 w-auto rounded-full ${
                          activePackage === item.package
                            ? "bg-primary"
                            : "bg-pink"
                        }`}
                        onPress={() => {
                          fadeAnim.setValue(0);
                          translateAnim.setValue(20);
                          setActivePackage(item.package);
                          setActiveDesc(item.desc);
                        }}
                      >
                        <Text
                          className={`${
                            activePackage === item.package
                              ? "text-secondary font-medium"
                              : "text-primary"
                          }`}
                        >
                          {item.title}
                        </Text>
                      </Pressable>
                    )}
                    keyExtractor={(_, index) => index.toString()}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    // snapToInterval={width * 0.8 + 20}
                    decelerationRate="fast"
                    ItemSeparatorComponent={() => (
                      <View style={{ width: 15 }} />
                    )}
                  />

                  <Text className="mt-4 mb-6 text-[18px] text-primary font-medium">
                    {activeDesc}
                  </Text>

                  <Animated.View
                    style={{
                      opacity: fadeAnim,
                      transform: [{ translateY: translateAnim }],
                      marginBottom: 40,
                    }}
                  >
                    <FlatList
                      data={activePackage}
                      renderItem={({ item, index }) => (
                        <Card
                          key={index}
                          title={item.title}
                          actualPrice={item.actualPrice}
                          discountPrice={item.discountPrice}
                          listsPackage={item.listsPackage}
                        />
                      )}
                      keyExtractor={(_, index) => index.toString()}
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                      snapToInterval={width * 0.8 + 20}
                      decelerationRate="fast"
                      ItemSeparatorComponent={() => (
                        <View style={{ width: 20 }} />
                      )}
                    />
                  </Animated.View>
                </>
              );
            default:
              return null;
          }
        }}
      />
    </SafeAreaView>
  );
}
