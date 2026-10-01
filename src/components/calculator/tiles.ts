import type { TierId } from "../../config/remoteConfig";

/** A Premium plan converter, or the plain Robux ⇄ USD calculator. */
export type CalculatorTileData =
  | { kind: "tier"; from: TierId; to: TierId; label: string; color: string }
  | { kind: "robuxUsd"; label: string; color: string };

/** Same order and colours as the reference grid. */
export const CALCULATOR_TILES: CalculatorTileData[] = [
  { kind: "tier", from: "basic", to: "pro", label: "BP", color: "#3ED598" },
  { kind: "tier", from: "pro", to: "basic", label: "PB", color: "#3FA9F5" },
  { kind: "tier", from: "basic", to: "elite", label: "BE", color: "#FFC93C" },
  { kind: "tier", from: "elite", to: "basic", label: "EB", color: "#F2545B" },
  { kind: "tier", from: "pro", to: "elite", label: "PE", color: "#9B5DE5" },
  { kind: "tier", from: "elite", to: "pro", label: "EP", color: "#F15BB5" },
  { kind: "robuxUsd", label: "R$", color: "#FFB020" },
];

/** Splits items into rows of `size` (the last row may be shorter). */
export function toRows<T>(items: T[], size = 2): T[][] {
  const rows: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    rows.push(items.slice(i, i + size));
  }
  return rows;
}
