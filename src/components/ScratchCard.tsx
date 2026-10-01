import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  View,
  StyleSheet,
  type GestureResponderEvent,
} from "react-native";

import Svg, {
  Defs,
  G,
  LinearGradient,
  RadialGradient,
  Mask,
  Path,
  Rect,
  Stop,
  Circle,
  Line,
  Text as SvgText,
} from "react-native-svg";

import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";

import { scheduleOnRN } from "react-native-worklets";
import { fontFamily } from "../theme/fonts";

type Props = {
  width: number;
  height: number;
  hint: string;
  onRevealed?: () => void;
  children: ReactNode;
};

const RADIUS = 24;
const BRUSH = 48;

const REVEAL_AT = 0.48;

const GRID_COLS = 18;
const GRID_ROWS = 10;

export default function ScratchCard({
  width,
  height,
  hint,
  onRevealed,
  children,
}: Props) {
  const [path, setPath] = useState("");
  const [revealed, setRevealed] = useState(false);

  const pathRef = useRef("");
  const frame = useRef<number | null>(null);

  const cells = useRef(new Set<number>());
  const done = useRef(false);

  const foil = useSharedValue(1);
  const shimmer = useSharedValue(0);

  /*
   * Premium foil shimmer
   */
  useEffect(() => {
    shimmer.set(
      withRepeat(
        withSequence(
          withTiming(1, {
            duration: 1800,
            easing: Easing.inOut(Easing.ease),
          }),
          withTiming(0, {
            duration: 1800,
            easing: Easing.inOut(Easing.ease),
          }),
        ),
        -1,
        false,
      ),
    );
  }, [shimmer]);

  const foilStyle = useAnimatedStyle(() => ({
    opacity: foil.value,
  }));

  const queueFlush = () => {
    if (frame.current != null) return;

    frame.current = requestAnimationFrame(() => {
      frame.current = null;
      setPath(pathRef.current);
    });
  };

  const finish = () => {
    setRevealed(true);
    onRevealed?.();
  };

  const markCells = (x: number, y: number) => {
    const cellW = width / GRID_COLS;
    const cellH = height / GRID_ROWS;

    const r = BRUSH / 2;

    const minX = Math.floor((x - r) / cellW);
    const maxX = Math.floor((x + r) / cellW);

    const minY = Math.floor((y - r) / cellH);
    const maxY = Math.floor((y + r) / cellH);

    for (let cx = minX; cx <= maxX; cx++) {
      for (let cy = minY; cy <= maxY; cy++) {
        if (
          cx < 0 ||
          cy < 0 ||
          cx >= GRID_COLS ||
          cy >= GRID_ROWS
        ) {
          continue;
        }

        cells.current.add(cy * GRID_COLS + cx);
      }
    }

    if (
      !done.current &&
      cells.current.size / (GRID_COLS * GRID_ROWS) >= REVEAL_AT
    ) {
      done.current = true;

      foil.set(
        withTiming(
          0,
          {
            duration: 450,
            easing: Easing.out(Easing.cubic),
          },
          (finished) => {
            if (finished) {
              scheduleOnRN(finish);
            }
          },
        ),
      );
    }
  };

  const onScratchStart = (e: GestureResponderEvent) => {
    const { locationX: x, locationY: y } = e.nativeEvent;

    pathRef.current += `M${x} ${y}L${x + 0.1} ${y}`;

    markCells(x, y);
    queueFlush();
  };

  const onScratchMove = (e: GestureResponderEvent) => {
    const { locationX: x, locationY: y } = e.nativeEvent;

    pathRef.current += `L${x} ${y}`;

    markCells(x, y);
    queueFlush();
  };

  return (
    <View
      style={[
        styles.card,
        {
          width,
          height,
          borderRadius: RADIUS,
        },
      ]}
    >
      {/* Actual reward/content */}
      {children}

      {!revealed && (
        <Animated.View
          style={[
            StyleSheet.absoluteFill,
            styles.foilContainer,
            foilStyle,
          ]}
          onStartShouldSetResponder={() => true}
          onMoveShouldSetResponder={() => true}
          onResponderTerminationRequest={() => false}
          onResponderGrant={onScratchStart}
          onResponderMove={onScratchMove}
        >
          <Svg
            width={width}
            height={height}
            pointerEvents="none"
          >
            <Defs>

              {/* MAIN CHROME */}
              <LinearGradient
                id="premiumFoil"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >
                <Stop
                  offset="0"
                  stopColor="#F8FAFC"
                />

                <Stop
                  offset="0.18"
                  stopColor="#C9D0D9"
                />

                <Stop
                  offset="0.38"
                  stopColor="#737D8B"
                />

                <Stop
                  offset="0.5"
                  stopColor="#E8EDF2"
                />

                <Stop
                  offset="0.62"
                  stopColor="#8994A3"
                />

                <Stop
                  offset="0.82"
                  stopColor="#C9D0D9"
                />

                <Stop
                  offset="1"
                  stopColor="#F4F6F8"
                />
              </LinearGradient>

              {/* DARK EDGE */}
              <LinearGradient
                id="foilEdge"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <Stop
                  offset="0"
                  stopColor="#FFFFFF"
                  stopOpacity="0.8"
                />

                <Stop
                  offset="0.5"
                  stopColor="#4B5563"
                  stopOpacity="0.35"
                />

                <Stop
                  offset="1"
                  stopColor="#FFFFFF"
                  stopOpacity="0.7"
                />
              </LinearGradient>

              {/* MASK */}
              <Mask
                id="scratchMask"
                x="0"
                y="0"
                width={width}
                height={height}
                maskUnits="userSpaceOnUse"
              >
                <Rect
                  width={width}
                  height={height}
                  fill="white"
                />

                <Path
                  d={path}
                  stroke="black"
                  strokeWidth={BRUSH}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </Mask>

              {/* GLOW */}
              <RadialGradient
                id="cyanGlow"
                cx="50%"
                cy="50%"
                rx="70%"
                ry="70%"
              >
                <Stop
                  offset="0"
                  stopColor="#00F0FF"
                  stopOpacity="0.2"
                />

                <Stop
                  offset="1"
                  stopColor="#00F0FF"
                  stopOpacity="0"
                />
              </RadialGradient>

            </Defs>

            {/* ======================== */}
            {/* FOIL */}
            {/* ======================== */}

            <G mask="url(#scratchMask)">

              {/* Chrome base */}
              <Rect
                width={width}
                height={height}
                fill="url(#premiumFoil)"
              />

              {/* Subtle dark overlay */}
              <Rect
                width={width}
                height={height}
                fill="#FFFFFF"
                opacity={0.05}
              />

              {/* Metallic diagonal lines */}
              {Array.from(
                { length: 18 },
                (_, i) => (
                  <Line
                    key={`line-${i}`}
                    x1={i * 28 - height}
                    y1={height}
                    x2={i * 28 + height}
                    y2={0}
                    stroke="#FFFFFF"
                    strokeWidth={2}
                    opacity={0.09}
                  />
                ),
              )}

              {/* Tiny metallic dots */}
              {Array.from(
                { length: 100 },
                (_, i) => {
                  const x =
                    ((i * 37) % Math.max(width, 1));

                  const y =
                    ((i * 53) % Math.max(height, 1));

                  return (
                    <Circle
                      key={`dot-${i}`}
                      cx={x}
                      cy={y}
                      r={0.8}
                      fill="#FFFFFF"
                      opacity={0.14}
                    />
                  );
                },
              )}

              {/* Center glow */}
              <Rect
                width={width}
                height={height}
                fill="url(#cyanGlow)"
              />

              {/* TOP PREMIUM BORDER */}
              <Rect
                x={1}
                y={1}
                width={width - 2}
                height={height - 2}
                rx={RADIUS}
                fill="none"
                stroke="url(#foilEdge)"
                strokeWidth={2}
              />

              {/* ======================== */}
              {/* TEXT */}
              {/* ======================== */}

              <SvgText
                x={width / 2}
                y={height / 2 - 14}
                textAnchor="middle"
                fontFamily={fontFamily}
                fontWeight="900"
                fontSize={11}
                letterSpacing={3}
                fill="#26313F"
              >
                LUCKY REWARD
              </SvgText>

              <SvgText
                x={width / 2}
                y={height / 2 + 18}
                textAnchor="middle"
                fontFamily={fontFamily}
                fontWeight="900"
                fontSize={22}
                letterSpacing={1.5}
                fill="#111827"
              >
                {hint.toUpperCase()}
              </SvgText>

              {/* Small decorative separators */}
              <Line
                x1={width / 2 - 50}
                y1={height / 2 + 35}
                x2={width / 2 - 15}
                y2={height / 2 + 35}
                stroke="#00F0FF"
                strokeWidth={2}
                strokeLinecap="round"
              />

              <Circle
                cx={width / 2}
                cy={height / 2 + 35}
                r={2.5}
                fill="#00F0FF"
              />

              <Line
                x1={width / 2 + 15}
                y1={height / 2 + 35}
                x2={width / 2 + 50}
                y2={height / 2 + 35}
                stroke="#8B5CF6"
                strokeWidth={2}
                strokeLinecap="round"
              />

            </G>
          </Svg>
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    overflow: "hidden",
    backgroundColor: "#080A12",

    borderWidth: 1,
    borderColor: "rgba(0,240,255,0.25)",

    shadowColor: "#00F0FF",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.18,
    shadowRadius: 18,

    elevation: 8,
  },

  foilContainer: {
    overflow: "hidden",
  },
});