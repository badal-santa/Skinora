/**
 * Skinora theme — neon on black.
 * Shared by tailwind.config.js (className utilities) and components
 * that need raw values (icons, gradients, shadows, StatusBar).
 */
export const neon = {
  green: "#37ff14b0",
  cyan: "#00F0FF",
  pink: "#FF2BD6",
  yellow: "#F5FF3B",
  purple: "#C13BFF",
  violet: "#8B3DFF",
  gold: "#FFC21A",
  blue: "#1E9BFF",
  red: "#FF3B1F",
  silver: "#D6DEE8",
} as const;

export const colors = {
  // Surfaces
  background: "#000000",
  surface: "#0A0A0A",
  card: "#111111",
  elevated: "#1A1A1A",
  border: "#262626",

  // Brand
  primary: neon.green,
  secondary: neon.cyan,
  accent: neon.pink,
  neon,

  // Text
  foreground: "#FFFFFF",
  muted: "#A3A3A3",
  subtle: "#5C5C5C",
} as const;

/**
 * Apply an opacity (0–1) to a #RGB, #RRGGBB or #RRGGBBAA color.
 * If the color already has alpha, the two are multiplied.
 */
export function withAlpha(hex: string, opacity: number): string {
  let h = hex.replace("#", "");
  if (h.length === 3)
    h = h
      .split("")
      .map((c) => c + c)
      .join("");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  const a = h.length === 8 ? parseInt(h.slice(6, 8), 16) / 255 : 1;
  return `rgba(${r}, ${g}, ${b}, ${+(a * opacity).toFixed(3)})`;
}
