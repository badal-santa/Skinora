import { View } from "react-native";
import { Info } from "lucide-react-native";
import { Text } from "../Text";
import { CALC_SURFACE } from "./robuxCalculator";
import { colors, withAlpha } from "../../theme/colors";

type Props = { title: string; message: string };

/** Info box with an icon, used for the calculator disclaimer. */
export default function InfoNote({ title, message }: Props) {
  return (
    <View
      className="mt-5 overflow-hidden rounded-[20px] border p-4"
      style={{ backgroundColor: CALC_SURFACE, borderColor: colors.border }}
    >
      <View className="flex-row">
        <View
          className="h-8 w-8 items-center justify-center rounded-full"
          style={{ backgroundColor: withAlpha(colors.primary, 0.1) }}
        >
          <Info size={15} color={colors.primary} />
        </View>
        <View className="ml-3 flex-1">
          <Text className="text-[11px] font-bold text-foreground">{title}</Text>
          <Text className="mt-1.5 text-[10px] leading-4 text-muted">
            {message}
          </Text>
        </View>
      </View>
    </View>
  );
}
