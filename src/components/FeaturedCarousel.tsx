import { useEffect, useRef, useState } from "react";
import {
  Image,
  Pressable,
  View,
  useWindowDimensions,
  type ImageSourcePropType,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  type SharedValue,
} from "react-native-reanimated";
import { ArrowRight } from "lucide-react-native";
import { Text } from "./Text";
import type { ParamlessRoute } from "../navigation/types";
import { colors, withAlpha } from "../theme/colors";

export type FeaturedSlide = {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  /** Transparent cut-out; rises slightly above the slide. */
  image: ImageSourcePropType;
  accent: string;
  route: ParamlessRoute;
  /**
   * "popOut" (default): character art, big and rising above the slide.
   * "inside": item art (e.g. a collage), kept within the slide.
   */
  art?: "popOut" | "inside";
};

type Props = {
  slides: FeaturedSlide[];
  onPressSlide: (slide: FeaturedSlide) => void;
};

const SLIDE_HEIGHT = 196;
/** Headroom above the slide for the character's head. */
const POP = 26;
const H_PADDING = 20;
const AUTO_ADVANCE_MS = 4500;
const fill = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
} as const;

export default function FeaturedCarousel({ slides, onPressSlide }: Props) {
  const { width } = useWindowDimensions();
  const listRef = useAnimatedRef<Animated.FlatList<FeaturedSlide>>();
  const scrollX = useSharedValue(0);
  const [index, setIndex] = useState(0);
  const isTouching = useRef(false);

  const onScroll = useAnimatedScrollHandler((e) => {
    scrollX.value = e.contentOffset.x;
  });

  // Auto-advance, paused while the user is touching the carousel.
  useEffect(() => {
    if (slides.length < 2) return;
    const timer = setInterval(() => {
      if (isTouching.current) return;
      const next = (index + 1) % slides.length;
      listRef.current?.scrollToOffset({ offset: next * width, animated: true });
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [index, slides.length, width, listRef]);

  return (
    <View>
      <Animated.FlatList
        ref={listRef}
        data={slides}
        keyExtractor={(slide) => slide.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        onScrollBeginDrag={() => {
          isTouching.current = true;
        }}
        onMomentumScrollEnd={(e) => {
          isTouching.current = false;
          setIndex(Math.round(e.nativeEvent.contentOffset.x / width));
        }}
        renderItem={({ item, index: i }) => (
          <Slide
            slide={item}
            index={i}
            width={width}
            scrollX={scrollX}
            onPress={() => onPressSlide(item)}
          />
        )}
      />

      {/* Page dots */}
      <View className="mt-3 flex-row justify-center" style={{ gap: 6 }}>
        {slides.map((slide, i) => (
          <Dot
            key={slide.id}
            index={i}
            width={width}
            scrollX={scrollX}
            accent={slide.accent}
          />
        ))}
      </View>
    </View>
  );
}

type SlideProps = {
  slide: FeaturedSlide;
  index: number;
  width: number;
  scrollX: SharedValue<number>;
  onPress: () => void;
};

function Slide({ slide, index, width, scrollX, onPress }: SlideProps) {
  const { tag, title, subtitle, image, accent } = slide;
  const art = artLayout(image, width - H_PADDING * 2, slide.art ?? "popOut");

  // Parallax: the character drifts slower than the slide and fades at the edges.
  const artStyle = useAnimatedStyle(() => {
    const offset = scrollX.value / width - index; // -1 … 0 … 1
    return {
      opacity: interpolate(Math.abs(offset), [0, 0.8], [1, 0.3]),
      transform: [
        { translateX: offset * -60 },
        { scale: interpolate(Math.abs(offset), [0, 1], [1, 0.85]) },
      ],
    };
  });

  const textStyle = useAnimatedStyle(() => {
    const offset = scrollX.value / width - index;
    return {
      opacity: interpolate(Math.abs(offset), [0, 0.5], [1, 0]),
      transform: [{ translateX: offset * 40 }],
    };
  });

  return (
    <View
      className="h-full"
      style={{ width, paddingHorizontal: H_PADDING, paddingTop: POP }}
    >
      <Pressable
        onPress={onPress}
        accessibilityRole="button"
        accessibilityLabel={`${title}. ${subtitle.replace("\n", " ")}`}
        className="active:opacity-90"
      >
        {/* Hairline border, bright at the top */}
        <LinearGradient
          colors={[
            withAlpha(accent, 0.9),
            withAlpha(accent, 0.15),
            withAlpha(accent, 0.4),
          ]}
          locations={[0, 0.6, 1]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ height: SLIDE_HEIGHT, borderRadius: 28, padding: 1.5 }}
        >
          <View
            className="flex-1 overflow-hidden"
            style={{ borderRadius: 26.5, backgroundColor: colors.surface }}
          >
            {/* Colour wash + diagonal light */}
            <LinearGradient
              colors={[
                withAlpha(accent, 0.3),
                withAlpha(accent, 0.06),
                "transparent",
              ]}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={fill}
            />
            <LinearGradient
              colors={["transparent", "rgba(255,255,255,0.06)", "transparent"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              locations={[0.35, 0.5, 0.65]}
              style={fill}
            />
            {/* Soft glow behind the art */}
            {[180, 140, 100].map((size, i) => (
              <View
                key={size}
                className="absolute"
                style={{
                  right: 18 + (180 - size) / 2,
                  top: SLIDE_HEIGHT / 2 - size / 2,
                  width: size,
                  height: size,
                  borderRadius: size / 2,
                  backgroundColor: withAlpha(accent, 0.07 + i * 0.03),
                }}
              />
            ))}
            <View className="absolute left-8 right-8 top-0 h-px bg-white/40" />

            {/* Text */}
            <Animated.View
              style={[
                {
                  flex: 1,
                  justifyContent: "center",
                  paddingLeft: 20,
                  width: art.textWidth,
                },
                textStyle,
              ]}
            >
              <View
                className="flex-row items-center self-start rounded-full px-2.5 py-1"
                style={{ backgroundColor: withAlpha(accent, 0.16) }}
              >
                <View
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: 3,
                    backgroundColor: accent,
                  }}
                />
                <Text
                  className="ml-1.5 text-[9px] font-extrabold tracking-[1.5px]"
                  style={{ color: accent }}
                >
                  {tag}
                </Text>
              </View>

              <Text
                className="mt-3 text-[26px] font-black leading-[30px] text-foreground"
                numberOfLines={1}
                adjustsFontSizeToFit
                minimumFontScale={0.75}
              >
                {title}
              </Text>
              <Text className="mt-1 text-xs leading-[17px] text-muted">
                {subtitle}
              </Text>

              <View
                className="mt-4 flex-row items-center self-start rounded-full px-4 py-2"
                style={{
                  backgroundColor: accent,
                  shadowColor: accent,
                  shadowOpacity: 0.7,
                  shadowRadius: 10,
                  shadowOffset: { width: 0, height: 0 },
                  elevation: 6,
                }}
              >
                <Text className="text-[11px] font-extrabold text-background">
                  EXPLORE
                </Text>
                <ArrowRight
                  size={13}
                  color={colors.background}
                  strokeWidth={2.8}
                  style={{ marginLeft: 4 }}
                />
              </View>
            </Animated.View>
          </View>
        </LinearGradient>

        {/* Character — outside the clipped slide so its head rises above it */}
        <Animated.View
          pointerEvents="none"
          style={[
            {
              position: "absolute",
              right: art.right,
              bottom: art.bottom,
              width: art.width,
              height: art.height,
            },
            artStyle,
          ]}
        >
          <Image
            source={image}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />
        </Animated.View>
      </Pressable>
    </View>
  );
}

/**
 * Sizes a slide's art from the image's proportions and the slide's `art` mode:
 * - "popOut": stands on the slide and rises above its top edge. Square art is
 *   allowed a little wider (and past the right edge) so it still pops out.
 * - "inside": sits within the slide with breathing room, anchored to the bottom.
 * The text column narrows whenever the art is wider than a tall character.
 */
function artLayout(
  image: ImageSourcePropType,
  slideWidth: number,
  mode: "popOut" | "inside",
) {
  const source = Image.resolveAssetSource(image);
  const aspect =
    source?.width && source?.height ? source.width / source.height : 0.75;
  const isTall = aspect < 0.87;

  if (mode === "popOut") {
    const maxWidth = slideWidth * (isTall ? 0.46 : 0.7);
    let height = SLIDE_HEIGHT + POP - (isTall ? 6 : 4);
    let artWidth = height * aspect;
    if (artWidth > maxWidth) {
      artWidth = maxWidth;
      height = artWidth / aspect;
    }
    return {
      width: artWidth,
      height,
      right: isTall ? 4 : -12,
      bottom: isTall ? 6 : 4,
      textWidth: isTall ? ("58%" as const) : ("52%" as const),
    };
  }

  const maxWidth = slideWidth * 0.5;
  let height = SLIDE_HEIGHT - 26;
  let artWidth = height * aspect;
  if (artWidth > maxWidth) {
    artWidth = maxWidth;
    height = artWidth / aspect;
  }
  return {
    width: artWidth,
    height,
    right: 14,
    bottom: 14,
    textWidth: "52%" as const,
  };
}

type DotProps = {
  index: number;
  width: number;
  scrollX: SharedValue<number>;
  accent: string;
};

function Dot({ index, width, scrollX, accent }: DotProps) {
  const style = useAnimatedStyle(() => {
    const distance = Math.min(Math.abs(scrollX.value / width - index), 1);
    return {
      width: interpolate(distance, [0, 1], [22, 6]),
      opacity: interpolate(distance, [0, 1], [1, 0.35]),
    };
  });
  return (
    <Animated.View
      style={[{ height: 6, borderRadius: 3, backgroundColor: accent }, style]}
    />
  );
}
