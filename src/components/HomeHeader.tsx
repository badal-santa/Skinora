import { Pressable, View } from "react-native";
import { Settings } from "lucide-react-native";
import { Text } from "./Text";
import { colors } from "../theme/colors";

type Props = {
  onPressSettings: () => void;
};

export default function HomeHeader({ onPressSettings }: Props) {
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
          OUTFIT & SKIN
        </Text>
      </View>

      <Pressable
        onPress={onPressSettings}
        hitSlop={8}
        accessibilityRole="button"
        accessibilityLabel="Settings"
        className="h-11 w-11 items-center justify-center rounded-2xl border border-border bg-card active:opacity-70"
      >
        <Settings size={20} color={colors.foreground} />
      </Pressable>
    </View>
  );
}
