import { useState } from "react";
import { FlatList, Pressable, StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Check } from "lucide-react-native";
import ScreenHeader from "../components/ScreenHeader";
import { Text } from "../components/Text";
import { deviceLanguage, languages, type Language } from "../i18n/languages";
import { saveLanguage, useLanguage } from "../i18n/language";
import { en, translations } from "../i18n/translations";
import type { RootStackScreenProps } from "../navigation/types";
import { colors, withAlpha } from "../theme/colors";

type Props = RootStackScreenProps<"Language">;

export default function LanguageScreen({ navigation, route }: Props) {
  // Opened from Settings (can go back) vs. first launch (continues to Home).
  const fromSettings = route.params?.fromSettings ?? false;
  const saved = useLanguage();
  const [selected, setSelected] = useState(() =>
    fromSettings ? saved.code : deviceLanguage(),
  );
  // Preview the header in the language being picked.
  const t = translations[selected] ?? en;

  const confirm = async () => {
    await saveLanguage(selected);
    if (fromSettings) navigation.goBack();
    else navigation.replace("Home");
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />

      <ScreenHeader
        title={t.language.title}
        subtitle={t.language.subtitle}
        onBack={fromSettings ? () => navigation.goBack() : undefined}
        right={
          <Pressable
            onPress={confirm}
            hitSlop={8}
            accessibilityRole="button"
            accessibilityLabel={t.language.confirm}
            className="h-11 w-11 items-center justify-center rounded-2xl bg-primary active:opacity-70"
            style={{
              shadowColor: colors.primary,
              shadowOpacity: 0.6,
              shadowRadius: 12,
              shadowOffset: { width: 0, height: 0 },
              elevation: 8,
            }}
          >
            <Check size={22} color={colors.background} strokeWidth={3} />
          </Pressable>
        }
      />
      <View className="mx-5 h-px bg-border" />

      <FlatList
        data={languages}
        keyExtractor={(item) => item.code}
        renderItem={({ item }) => (
          <LanguageRow
            language={item}
            selected={item.code === selected}
            onPress={() => setSelected(item.code)}
          />
        )}
        extraData={selected}
        contentContainerStyle={{ padding: 20, gap: 10 }}
        showsVerticalScrollIndicator={false}
        accessibilityRole="radiogroup"
      />
    </SafeAreaView>
  );
}

type RowProps = {
  language: Language;
  selected: boolean;
  onPress: () => void;
};

function LanguageRow({ language, selected, onPress }: RowProps) {
  const accent = colors.primary;

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="radio"
      accessibilityState={{ checked: selected }}
      accessibilityLabel={`${language.name}, ${language.englishName}`}
      className="flex-row items-center rounded-2xl border p-3 active:opacity-70"
      style={{
        borderColor: selected ? accent : colors.border,
        backgroundColor: selected ? withAlpha(accent, 0.08) : colors.card,
      }}
    >
      <View className="h-11 w-11 items-center justify-center rounded-xl bg-elevated">
        <Text className="text-2xl">{language.flag}</Text>
      </View>

      <View className="ml-3.5 flex-1">
        <Text
          className="text-[15px] font-semibold text-foreground"
          numberOfLines={1}
        >
          {language.name}
        </Text>
        {language.name !== language.englishName && (
          <Text className="text-xs text-muted" numberOfLines={1}>
            {language.englishName}
          </Text>
        )}
      </View>

      <View
        className="h-6 w-6 items-center justify-center rounded-full border-2"
        style={{
          borderColor: selected ? accent : colors.subtle,
          backgroundColor: selected ? accent : "transparent",
        }}
      >
        {selected && (
          <Check size={14} color={colors.background} strokeWidth={3.5} />
        )}
      </View>
    </Pressable>
  );
}
