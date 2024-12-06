import { Text, TextInput, TextInputProps, View } from "react-native";

type InputProps = TextInputProps & {
  label?: string;
};

export default function Input({ label, ...props }: InputProps) {
  return (
    <View className="flex-col gap-2">
      <Text className="text-black">{label}</Text>
      <TextInput
        className={`border border-primary rounded-lg px-2`}
        {...props}
      />
    </View>
  );
}
