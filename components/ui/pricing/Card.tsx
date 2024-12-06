import { formatToRupiah } from "@/utils/formatToRupiah";
import { memo } from "react";
import { Dimensions, FlatList, Pressable, Text, View } from "react-native";

type listsPackageProps = {
  title: string;
  isBold?: boolean;
};
type CardProps = {
  title: string;
  actualPrice: number;
  discountPrice: number;
  listsPackage: listsPackageProps[];
};

function Card({ title, actualPrice, discountPrice, listsPackage }: CardProps) {
  const { width } = Dimensions.get("window");
  return (
    <View
      className="bg-primary-light rounded-lg p-3"
      style={{ width: width * 0.8 }}
    >
      <View className="flex-row justify-between items-center">
        <Text className="text-secondary text-xl font-bold w-[63.3330%]">
          {title}
        </Text>
        <View className="flex-col items-start">
          <Text className="text-secondary text-xs line-through">
            {formatToRupiah(actualPrice)}
          </Text>
          <Text className="text-secondary font-medium text-base">
            {formatToRupiah(discountPrice)}
          </Text>
        </View>
      </View>
      <View className="w-full h-[1px] bg-secondary mt-2 mb-3"></View>
      <FlatList
        data={listsPackage}
        renderItem={({ item }) => (
          <Text
            className={`text-secondary my-0.5 ${item.isBold && "font-bold"}`}
          >
            {item.title}
          </Text>
        )}
        keyExtractor={(_, index) => index.toString()}
        nestedScrollEnabled={true}
      />

      <Pressable className="bg-secondary mt-10 mb-2 py-2 rounded-full">
        <Text className="font-semibold text-center text-primary">
          Pesan Sekarang
        </Text>
      </Pressable>
    </View>
  );
}

export default memo(Card);
