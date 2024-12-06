import { Notification } from "@/assets/icons";
import { Text, View } from "react-native";

export default function Header() {
  return (
    <View className="flex-row justify-between items-center pt-4 mb-8">
      <View className="px-2 py-1 rounded-xl bg-primary">
        <Text className="text-secondary font-medium">Mamank</Text>
      </View>
      <View className="bg-primary p-1 rounded-full relative">
        <View className="bg-red w-2.5 h-2.5 rounded-full absolute top-1 right-1 z-10 flex justify-center items-center">
          <Text className="text-white text-center text-[6px] pr-[1px] font-bold">
            5
          </Text>
        </View>
        <Notification width="20" height="20" className="z-0" />
      </View>
    </View>
  );
}
