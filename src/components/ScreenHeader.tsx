import type { ReactNode } from "react";
import { Pressable, View } from "react-native";
import { Text } from "./Text";
import { ChevronLeft } from "lucide-react-native";
import { colors } from "../theme/colors";
import { useT } from "../i18n/language";

type Props = {
  title: string;
  subtitle?: string;
  /** Shows a back button when provided. */
  onBack?: () => void;
  /** Optional action(s) on the right, e.g. an icon button. */
  right?: ReactNode;
};

export default function ScreenHeader({
  title,
  subtitle,
  onBack,
  right,
}: Props) {
  const t = useT();

  return (
    <View className="flex-row items-center px-5 pb-5 pt-4">
      {onBack && (
        <Pressable
          onPress={onBack}
          hitSlop={8}
          accessibilityRole="button"
          accessibilityLabel={t.common.back}
          className="mr-4 h-11 w-11 items-center justify-center rounded-2xl border border-border bg-card active:opacity-70"
        >
          <ChevronLeft size={22} color={colors.foreground} />
        </Pressable>
      )}

      <View className="flex-1">
        <Text
          className="text-[25px] font-extrabold text-foreground"
          accessibilityRole="header"
          numberOfLines={1}
        >
          {title}
        </Text>
        {subtitle && (
          <Text className="mt-0.5 text-xs text-muted" numberOfLines={1}>
            {subtitle}
          </Text>
        )}
      </View>

      {right && <View className="ml-3">{right}</View>}
    </View>
  );
}
