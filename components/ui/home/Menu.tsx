import {
  Aqiqah,
  Birthday,
  EidMubarak,
  Graduation,
  Iftar,
  Instagram,
  Khitanan,
  Ring,
  SaveTheDate,
  ThreeD,
  Video,
} from "@/assets/icons";
import { FlatList, Text, View } from "react-native";

type MenuInvitationProps = {
  icon: JSX.Element;
  title: string;
};

const dataMenu = [
  {
    icon: <Ring />,
    title: "Undangan Pernikahan",
  },
  {
    icon: <Instagram />,
    title: "Filter Instagram Pernikahan",
  },
  {
    icon: <Video />,
    title: "Undangan Video",
  },
  {
    icon: <Graduation />,
    title: "Undangan Wisuda",
  },
  {
    icon: <Birthday />,
    title: "Undangan Ulang Tahun",
  },
  {
    icon: <Khitanan />,
    title: "Undangan Khitanan",
  },
  {
    icon: <Aqiqah />,
    title: "Undangan Aqiqah",
  },
  {
    icon: <EidMubarak />,
    title: "Undangan Idul Fitri",
  },
  {
    icon: <ThreeD />,
    title: "Undangan 3D",
  },
  {
    icon: <Iftar />,
    title: "Undangan Buka Bersama",
  },
  {
    icon: <SaveTheDate />,
    title: "Save The Date",
  },
];

export default function Menu() {
  function MenuInvitation({ icon, title }: MenuInvitationProps) {
    return (
      <View className="flex pb-6 w-[25%]">
        <View className="bg-primary rounded-full p-1 flex justify-center items-center w-10 h-10 mx-auto">
          {icon}
        </View>
        <Text className="text-center text-xs mt-1 text-black">{title}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={dataMenu}
      renderItem={({ item }) => (
        <MenuInvitation icon={item.icon} title={item.title} />
      )}
      keyExtractor={(_, index) => index.toString()}
      numColumns={4}
      className="mt-10"
    />
  );
}
