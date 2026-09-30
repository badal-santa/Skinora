import { Pressable, View } from "react-native";
import { ChevronsRight, type LucideIcon } from "lucide-react-native";
import { Text } from "./Text";
import { colors, withAlpha } from "../theme/colors";

type Props = {
  icon: LucideIcon;
  label: string;
  /** Text shown on the right instead of the chevrons, e.g. "1.0.0". */
  value?: string;
  onPress?: () => void;
  accent?: string;
};

export default function SettingsRow({
  icon: Icon,
  label,
  value,
  onPress,
  accent = colors.primary,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      disabled={!onPress}
      accessibilityRole={onPress ? "button" : "text"}
      accessibilityLabel={value ? `${label}, ${value}` : label}
      className="flex-row items-center rounded-2xl border border-border bg-card p-3 active:opacity-70"
    >
      <View
        className="h-11 w-11 items-center justify-center rounded-xl"
        style={{ backgroundColor: withAlpha(accent, 0.12) }}
      >
        <Icon size={20} color={accent} strokeWidth={2} />
      </View>

      <Text className="ml-3.5 flex-1 text-[15px] font-semibold text-foreground">
        {label}
      </Text>

      {value ? (
        <Text className="mr-1 text-sm font-medium text-muted">{value}</Text>
      ) : (
        <ChevronsRight size={20} color={colors.subtle} />
      )}
    </Pressable>
  );
}
