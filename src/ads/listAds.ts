/**
 * Repeating ad inside long item lists (outfits, characters, emotes,
 * accessories): after every 3 rows (rows 3, 6, 9…). With 2 columns that is
 * every 6 items.
 */
export const LIST_AD_FIRST_ROWS = 3;
export const LIST_AD_EVERY_ROWS = 3;

/** The in-list position id the dashboard ticks (see backend migration 0009). */
export const LIST_AD_SPOT = "inList";

/**
 * Which repeat of the in-list ad goes after row `row` (0-based), or null
 * when no ad follows that row.
 */
export function listAdAfterRow(row: number): number | null {
  const n = row + 1 - LIST_AD_FIRST_ROWS;
  if (n < 0 || n % LIST_AD_EVERY_ROWS !== 0) return null;
  return n / LIST_AD_EVERY_ROWS;
}
