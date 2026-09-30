import { Pressable, View } from "react-native";
import { Text } from "./Text";
import { useT } from "../i18n/language";

type Props = { title: string; onBack: () => void };

export default function NotFound({ title, onBack }: Props) {
  const t = useT();

  return (
    <View className="flex-1 items-center justify-center bg-background px-8">
      <Text className="text-lg font-bold text-foreground">{title}</Text>
      <Text className="mt-2 text-center text-sm text-muted">
        {t.notFound.message}
      </Text>
      <Pressable
        onPress={onBack}
        className="mt-6 rounded-full bg-primary px-6 py-3"
      >
        <Text className="font-bold text-background">{t.common.goBack}</Text>
      </Pressable>
    </View>
  );
}
