import Svg, {
  Defs,
  LinearGradient,
  Polygon,
  Stop,
  Text as SvgText,
} from "react-native-svg";
import { fontFamily } from "../theme/fonts";

type Props = {
  /** Two letters, e.g. "BP". */
  label: string;
  /** Base colour; lighter and darker shades are derived for depth. */
  color: string;
  size?: number;
};

/** Mix a #RRGGBB colour toward white (amount > 0) or black (amount < 0). */
function shade(hex: string, amount: number) {
  const n = parseInt(hex.replace("#", "").slice(0, 6), 16);
  const target = amount > 0 ? 255 : 0;
  const mix = (c: number) =>
    Math.round(c + (target - c) * Math.abs(amount))
      .toString(16)
      .padStart(2, "0");
  return `#${mix((n >> 16) & 255)}${mix((n >> 8) & 255)}${mix(n & 255)}`;
}

/** Points of a pointy-top hexagon inside a `size` box, inset by `inset`. */
function hexPoints(size: number, inset: number) {
  const c = size / 2;
  const r = c - inset;
  return Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 2;
    return `${c + r * Math.cos(a)},${c + r * Math.sin(a)}`;
  }).join(" ");
}

/**
 * Glossy 3D-ish hexagon with two letters — the calculator tile icon. A
 * dark rim sits under a light face, offset down to read as thickness.
 */
export default function HexBadge({ label, color, size = 140 }: Props) {
  const id = `hex-${label}`;
  return (
    <Svg width={size} height={size + 8}>
      <Defs>
        <LinearGradient id={`${id}-face`} x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor={shade(color, 0.35)} />
          <Stop offset="1" stopColor={color} />
        </LinearGradient>
        <LinearGradient id={`${id}-inner`} x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor={shade(color, 0.15)} />
          <Stop offset="1" stopColor={shade(color, -0.08)} />
        </LinearGradient>
      </Defs>

      {/* Rim / thickness */}
      <Polygon
        points={hexPoints(size, 4)}
        fill={shade(color, -0.35)}
        transform="translate(0, 7)"
      />
      {/* Face */}
      <Polygon points={hexPoints(size, 4)} fill={`url(#${id}-face)`} />
      {/* Inner bevel */}
      <Polygon
        points={hexPoints(size, size * 0.12)}
        fill={`url(#${id}-inner)`}
        stroke={shade(color, 0.45)}
        strokeWidth={2}
      />

      <SvgText
        x={size / 2}
        y={size / 2 + size * 0.13}
        textAnchor="middle"
        fontFamily={fontFamily}
        fontWeight="900"
        fontSize={size * 0.36}
        fill={shade(color, 0.85)}
        stroke={shade(color, -0.3)}
        strokeWidth={1.5}
      >
        {label}
      </SvgText>
    </Svg>
  );
}
