import { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  Linking,
  Pressable,
  StatusBar,
  View,
  type GestureResponderEvent,
  type LayoutChangeEvent,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import * as MediaLibrary from "expo-media-library";
import { File, Paths } from "expo-file-system";
import {
  setAudioModeAsync,
  useAudioPlayer,
  useAudioPlayerStatus,
  type AudioPlayer,
} from "expo-audio";
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  type SharedValue,
} from "react-native-reanimated";
import {
  Check,
  ChevronsRight,
  Download,
  Music,
  Pause,
  Play,
  SkipBack,
  SkipForward,
  Volume2,
} from "lucide-react-native";
import ScreenHeader from "../components/ScreenHeader";
import PromoAdCard from "../components/PromoAdCard";
import { Text } from "../components/Text";
import { APP_NAME } from "../config/app";
import { sounds } from "../data/data";
import { useT } from "../i18n/language";
import type { RootStackScreenProps } from "../navigation/types";
import { colors, withAlpha } from "../theme/colors";
import { getAssetFileUri } from "../utils/assetFile";

type Props = RootStackScreenProps<"Sounds">;
type SaveState = "idle" | "saving" | "saved";

const HERO = require("../../assets/images/Emotes/emote_11_music.png");
/** Waveform bars on each side of the character. */
const BARS = 16;

/** The player exposes volume as a property; set it outside render. */
function setPlayerVolume(player: AudioPlayer, volume: number) {
  player.volume = volume;
}

/**
 * Bundled assets are cached under a hash (ExponentAsset-1a2b….wav); copy the
 * file to "<sound name>.<ext>" so it shows up with a readable name in Music.
 */
async function namedCopy(fileUri: string, name: string) {
  const ext = fileUri.split(".").pop() || "mp3";
  const safeName = name.replace(/[^\p{L}\p{N} _-]/gu, "").trim() || "sound";
  const target = new File(Paths.cache, `${safeName}.${ext}`);
  if (target.exists) target.delete();
  await new File(fileUri).copy(target);
  return target.uri;
}

const formatTime = (seconds: number) => {
  const s = Math.max(0, Math.floor(seconds || 0));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
};

export default function SoundsScreen({ navigation }: Props) {
  const t = useT();
  const [index, setIndex] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [save, setSave] = useState<SaveState>("idle");
  const sound = sounds[index];

  const player = useAudioPlayer(sound?.file ?? null);
  const status = useAudioPlayerStatus(player);
  const accent = sound?.accent ?? colors.secondary;

  useEffect(() => {
    setAudioModeAsync({ playsInSilentMode: true }).catch(() => {});
  }, []);

  useEffect(() => {
    setPlayerVolume(player, volume);
  }, [player, volume]);

  // `replace()` loads asynchronously, so a new sound starts once it's ready.
  const playWhenLoaded = useRef(false);
  const list = useRef<FlatList<(typeof sounds)[number]>>(null);
  useEffect(() => {
    const subscription = player.addListener("playbackStatusUpdate", (s) => {
      if (playWhenLoaded.current && s.isLoaded && !s.playing) {
        playWhenLoaded.current = false;
        player.play();
      }
    });
    return () => subscription.remove();
  }, [player]);

  // Waveform: `level` grows while playing, `phase` keeps the bars moving.
  const level = useSharedValue(0);
  const phase = useSharedValue(0);
  useEffect(() => {
    phase.set(
      withRepeat(withTiming(1, { duration: 900, easing: Easing.linear }), -1),
    );
  }, [phase]);
  useEffect(() => {
    level.set(withTiming(status.playing ? 1 : 0, { duration: 250 }));
  }, [level, status.playing]);

  if (!sound) {
    return (
      <SafeAreaView className="flex-1 bg-background">
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.background}
        />
        <ScreenHeader
          title={t.sounds.title}
          onBack={() => navigation.goBack()}
        />
        <View className="flex-1 items-center justify-center px-8 pb-24">
          <Music size={42} color={colors.secondary} />
          <Text className="mt-5 text-xl font-extrabold text-foreground">
            {t.sounds.emptyTitle}
          </Text>
          <Text className="mt-2 text-center text-sm text-muted">
            {t.sounds.emptyMessage}
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  const select = (next: number) => {
    const wrapped = (next + sounds.length) % sounds.length;
    setIndex(wrapped);
    setSave("idle");
    playWhenLoaded.current = true;
    player.replace(sounds[wrapped].file);
  };

  const togglePlay = async () => {
    if (status.playing) {
      player.pause();
      return;
    }
    // Restart a sound that already played to the end.
    if (status.duration > 0 && status.currentTime >= status.duration - 0.1) {
      await player.seekTo(0);
    }
    player.play();
  };

  const saveSound = async () => {
    if (save === "saving") return;
    setSave("saving");
    try {
      const { granted, canAskAgain } =
        await MediaLibrary.requestPermissionsAsync(true, ["audio"]);
      if (!granted) {
        setSave("idle");
        Alert.alert(
          t.sounds.permissionTitle,
          t.sounds.permissionMessage(APP_NAME),
          canAskAgain
            ? [{ text: t.common.ok }]
            : [
                { text: t.common.cancel, style: "cancel" },
                {
                  text: t.common.openSettings,
                  onPress: () => Linking.openSettings(),
                },
              ],
        );
        return;
      }
      const fileUri = await getAssetFileUri(sound.file);
      await MediaLibrary.Asset.create(await namedCopy(fileUri, sound.name));
      setSave("saved");
    } catch (error) {
      console.warn("[sounds] save failed:", error);
      setSave("idle");
      Alert.alert(t.sounds.failedTitle, t.sounds.failedMessage);
    }
  };

  const progress =
    status.duration > 0 ? Math.min(status.currentTime / status.duration, 1) : 0;

  const header = (
    <View>
      <ScreenHeader title={t.sounds.title} onBack={() => navigation.goBack()} />
      <View className="mx-5 h-px bg-border" />
      <PromoAdCard at="top" style={{ paddingHorizontal: 20, marginTop: 16 }} />

      {/* Hero: character between two waveforms */}
      <View className="mt-4 h-[210px] flex-row items-center justify-center">
        <Waveform side="left" accent={accent} level={level} phase={phase} />
        <View className="mx-1 items-center justify-center">
          <View
            className="absolute h-36 w-36 rounded-full"
            style={{ backgroundColor: withAlpha(accent, 0.18) }}
          />
          <Image
            source={HERO}
            resizeMode="contain"
            style={{ width: 150, height: 150 }}
          />
        </View>
        <Waveform side="right" accent={accent} level={level} phase={phase} />
      </View>

      {/* Now playing */}
      <View className="px-6">
        <Text
          className="text-center text-lg font-extrabold text-foreground"
          numberOfLines={1}
        >
          {sound.name}
        </Text>

        <View className="mt-3 h-1 overflow-hidden rounded-full bg-elevated">
          <View
            className="h-full rounded-full"
            style={{ width: `${progress * 100}%`, backgroundColor: accent }}
          />
        </View>
        <View className="mt-1 flex-row justify-between">
          <Text className="text-[10px] text-subtle">
            {formatTime(status.currentTime)}
          </Text>
          <Text className="text-[10px] text-subtle">
            {formatTime(status.duration)}
          </Text>
        </View>

        {/* Volume */}
        <View className="mt-3 flex-row items-center">
          <Volume2 size={20} color={colors.foreground} />
          <VolumeSlider
            value={volume}
            onChange={setVolume}
            accent={accent}
            label={t.sounds.volume}
          />
        </View>

        {/* Controls */}
        <View className="mt-5 flex-row items-center justify-center gap-8">
          <ControlButton
            onPress={() => select(index - 1)}
            label={t.sounds.previous}
          >
            <SkipBack size={18} color={colors.foreground} fill={colors.foreground} />
          </ControlButton>
          <Pressable
            onPress={togglePlay}
            accessibilityRole="button"
            accessibilityLabel={status.playing ? t.sounds.pause : t.sounds.play}
            className="h-16 w-16 items-center justify-center rounded-full active:opacity-80"
            style={{
              backgroundColor: colors.elevated,
              borderWidth: 1.5,
              borderColor: withAlpha(accent, 0.6),
              shadowColor: accent,
              shadowOpacity: 0.6,
              shadowRadius: 14,
              shadowOffset: { width: 0, height: 0 },
              elevation: 8,
            }}
          >
            {status.playing ? (
              <Pause size={26} color={colors.foreground} fill={colors.foreground} />
            ) : (
              <Play
                size={26}
                color={colors.foreground}
                fill={colors.foreground}
                style={{ marginLeft: 3 }}
              />
            )}
          </Pressable>
          <ControlButton onPress={() => select(index + 1)} label={t.sounds.next}>
            <SkipForward
              size={18}
              color={colors.foreground}
              fill={colors.foreground}
            />
          </ControlButton>
        </View>

        {/* Get this Sound Effect */}
        <Pressable
          onPress={saveSound}
          disabled={save === "saving"}
          accessibilityRole="button"
          accessibilityLabel={t.sounds.getSound}
          accessibilityState={{ busy: save === "saving" }}
          className="mt-6 h-14 overflow-hidden rounded-2xl active:opacity-90"
          style={{
            shadowColor: accent,
            shadowOpacity: 0.55,
            shadowRadius: 16,
            shadowOffset: { width: 0, height: 4 },
            elevation: 8,
          }}
        >
          <LinearGradient
            colors={[accent, withAlpha(accent, 0.75)]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {save === "saving" ? (
              <ActivityIndicator color={colors.background} />
            ) : save === "saved" ? (
              <Check size={18} color={colors.background} strokeWidth={3} />
            ) : (
              <Download size={18} color={colors.background} strokeWidth={2.6} />
            )}
            <Text className="ml-2 text-base font-extrabold text-background">
              {save === "saving"
                ? t.sounds.saving
                : save === "saved"
                  ? t.sounds.saved
                  : t.sounds.getSound}
            </Text>
          </LinearGradient>
        </Pressable>
      </View>

      <PromoAdCard
        at="afterPlayer"
        isDefault
        style={{ paddingHorizontal: 20, marginTop: 20 }}
      />

      <View className="h-6" />
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-background">
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <FlatList
        ref={list}
        data={sounds}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={header}
        ListFooterComponent={
          <PromoAdCard at="bottom" style={{ paddingHorizontal: 20, marginTop: 20 }} />
        }
        ItemSeparatorComponent={() => <View className="h-2.5" />}
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index: i }) => {
          const active = i === index;
          return (
            <Pressable
              onPress={() => {
                select(i);
                // Bring the player back into view.
                list.current?.scrollToOffset({ offset: 0, animated: true });
              }}
              accessibilityRole="button"
              accessibilityState={{ selected: active }}
              accessibilityLabel={item.name}
              className="mx-5 flex-row items-center rounded-2xl border px-3 py-3 active:opacity-70"
              style={{
                borderColor: active ? withAlpha(item.accent, 0.6) : colors.border,
                backgroundColor: active
                  ? withAlpha(item.accent, 0.1)
                  : colors.card,
              }}
            >
              <View
                className="h-10 w-10 items-center justify-center rounded-xl"
                style={{ backgroundColor: withAlpha(item.accent, 0.15) }}
              >
                <Music size={18} color={item.accent} />
              </View>
              <Text
                className="ml-3 flex-1 text-[15px] font-semibold text-foreground"
                numberOfLines={1}
              >
                {item.name}
              </Text>
              <ChevronsRight
                size={20}
                color={active ? item.accent : colors.subtle}
              />
            </Pressable>
          );
        }}
      />
    </SafeAreaView>
  );
}

function ControlButton({
  onPress,
  label,
  children,
}: {
  onPress: () => void;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      className="h-12 w-12 items-center justify-center rounded-full border border-border bg-card active:opacity-70"
    >
      {children}
    </Pressable>
  );
}

type WaveformProps = {
  side: "left" | "right";
  accent: string;
  level: SharedValue<number>;
  phase: SharedValue<number>;
};

/** Bars that pulse with playback; tallest next to the character. */
function Waveform({ side, accent, level, phase }: WaveformProps) {
  return (
    <View className="h-[120px] flex-1 flex-row items-center justify-between px-1">
      {Array.from({ length: BARS }, (_, i) => {
        // Distance from the character: 0 (next to it) → 1 (screen edge).
        const distance = side === "left" ? (BARS - 1 - i) / BARS : i / BARS;
        return (
          <WaveBar
            key={i}
            seed={i * 1.7 + (side === "left" ? 0 : 0.9)}
            scale={1 - distance * 0.65}
            accent={accent}
            level={level}
            phase={phase}
          />
        );
      })}
    </View>
  );
}

function WaveBar({
  seed,
  scale,
  accent,
  level,
  phase,
}: {
  seed: number;
  scale: number;
  accent: string;
  level: SharedValue<number>;
  phase: SharedValue<number>;
}) {
  const style = useAnimatedStyle(() => {
    const wave = (Math.sin((phase.value + seed) * Math.PI * 2) + 1) / 2;
    const resting = 0.12 + 0.1 * ((seed * 7) % 1);
    const height = interpolate(level.value, [0, 1], [resting, 0.25 + wave * 0.75]);
    return { height: `${Math.max(height * scale, 0.06) * 100}%` };
  });

  return (
    <Animated.View
      style={[
        { width: 2.5, borderRadius: 2, backgroundColor: accent },
        style,
      ]}
    />
  );
}

type SliderProps = {
  value: number;
  onChange: (value: number) => void;
  accent: string;
  label: string;
};

/** Drag or tap anywhere on the track to set a 0–1 value. */
function VolumeSlider({ value, onChange, accent, label }: SliderProps) {
  const [width, setWidth] = useState(0);

  const update = (e: GestureResponderEvent) => {
    if (width <= 0) return;
    onChange(Math.min(Math.max(e.nativeEvent.locationX / width, 0), 1));
  };

  return (
    <View
      className="ml-3 h-8 flex-1 justify-center"
      onLayout={(e: LayoutChangeEvent) => setWidth(e.nativeEvent.layout.width)}
      onStartShouldSetResponder={() => true}
      onMoveShouldSetResponder={() => true}
      onResponderTerminationRequest={() => false}
      onResponderGrant={update}
      onResponderMove={update}
      accessible
      accessibilityRole="adjustable"
      accessibilityLabel={label}
      accessibilityValue={{ min: 0, max: 100, now: Math.round(value * 100) }}
      accessibilityActions={[{ name: "increment" }, { name: "decrement" }]}
      onAccessibilityAction={(e) =>
        onChange(
          Math.min(
            Math.max(
              value + (e.nativeEvent.actionName === "increment" ? 0.1 : -0.1),
              0,
            ),
            1,
          ),
        )
      }
    >
      <View pointerEvents="none" className="h-1 rounded-full bg-elevated">
        <View
          className="h-full rounded-full"
          style={{ width: `${value * 100}%`, backgroundColor: accent }}
        />
      </View>
      <View
        pointerEvents="none"
        className="absolute h-4 w-4 rounded-full bg-foreground"
        style={{
          left: Math.max(0, value * width - 8),
          shadowColor: accent,
          shadowOpacity: 0.8,
          shadowRadius: 6,
          shadowOffset: { width: 0, height: 0 },
          elevation: 4,
        }}
      />
    </View>
  );
}
