import { Text, View } from "react-native";

type IntroProps = {
  title: string;
  content: string;
};

export default function Intro({ title, content }: IntroProps) {
  return (
    <View>
      <Text className="mb-2 font-bold text-primary text-[30px]">{title}</Text>
      <Text className="text-[16px] text-black">{content}</Text>
    </View>
  );
}
