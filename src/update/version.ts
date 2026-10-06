/**
 * Compares dotted version numbers ("1.10.0" > "1.9.2"). Missing parts count
 * as 0, so "1.1" equals "1.1.0". Anything after a "-" or "+" is ignored.
 * Returns a negative number if a < b, 0 if equal, positive if a > b.
 */
export function compareVersions(a: string, b: string): number {
  const parts = (v: string) =>
    v
      .split(/[-+]/)[0]
      .split(".")
      .map((n) => parseInt(n, 10) || 0);
  const x = parts(a);
  const y = parts(b);
  for (let i = 0; i < Math.max(x.length, y.length); i++) {
    const diff = (x[i] ?? 0) - (y[i] ?? 0);
    if (diff !== 0) return diff;
  }
  return 0;
}

/** True when `version` looks like "1.2" or "1.2.3". */
export const isVersion = (version: string) => /^\d+(\.\d+)*$/.test(version);
