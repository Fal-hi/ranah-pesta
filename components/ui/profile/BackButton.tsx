import { ArrowLeft } from "@/assets/icons";
import { router } from "expo-router";
import { Text, TouchableOpacity } from "react-native";

type ButtonBackProps = {
  title: string;
};

export default function ButtonBack({ title }: ButtonBackProps) {
  return (
    <TouchableOpacity
      className="flex-row gap-x-4 items-center px-5 py-2 mb-4"
      onPress={() => router.back()}
    >
      <ArrowLeft />
      <Text className="text-primary font-semibold text-base">{title}</Text>
    </TouchableOpacity>
  );
}
