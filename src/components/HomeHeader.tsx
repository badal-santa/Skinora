import { Pressable, View } from "react-native";
import { Settings } from "lucide-react-native";
import { Text } from "./Text";
import { colors } from "../theme/colors";
import { useT } from "../i18n/language";

type Props = {
  onPressSettings: () => void;
};

export default function HomeHeader({ onPressSettings }: Props) {
  const t = useT();

  return (
    <View className="flex-row items-center justify-between px-5 pb-5 pt-3">
      <View>
        <Text
          className="text-[29px] font-black tracking-tight text-foreground"
          accessibilityRole="header"
        >
          skin<Text className="text-primary">ora</Text>
        </Text>
        <Text className="₹text-[10px] font-bold tracking-[3px] text-muted">
          {t.home.brandTagline}
        </Text>
      </View>

      <Pressable
        onPress={onPressSettings}
        hitSlop={8}
        accessibilityRole="button"
        accessibilityLabel={t.common.settings}
        className="h-11 w-11 items-center justify-center rounded-2xl border border-border bg-card active:opacity-70"
      >
        <Settings size={20} color={colors.foreground} />
      </Pressable>
    </View>
  );
}
