import { Pressable, View } from "react-native";
import { Text } from "./Text";

type Props = { title: string; onBack: () => void };

export default function NotFound({ title, onBack }: Props) {
  return (
    <View className="flex-1 items-center justify-center bg-background px-8">
      <Text className="text-lg font-bold text-foreground">{title}</Text>
      <Text className="mt-2 text-center text-sm text-muted">
        This item may have been removed.
      </Text>
      <Pressable
        onPress={onBack}
        className="mt-6 rounded-full bg-primary px-6 py-3"
      >
        <Text className="font-bold text-background">Go Back</Text>
      </Pressable>
    </View>
  );
}
