import { en, type Strings } from "./en";
import { hi } from "./hi";
import { es } from "./es";
import { pt } from "./pt";
import { fr } from "./fr";
import { de } from "./de";
import { it } from "./it";
import { ru } from "./ru";
import { ar } from "./ar";
import { tr } from "./tr";
import { id } from "./id";
import { fil } from "./fil";
import { vi } from "./vi";
import { th } from "./th";
import { ja } from "./ja";
import { ko } from "./ko";
import { zh } from "./zh";

export type { Strings };

/** Keyed by `Language.code` in languages.ts. */
export const translations: Record<string, Strings> = {
  en,
  hi,
  es,
  pt,
  fr,
  de,
  it,
  ru,
  ar,
  tr,
  id,
  fil,
  vi,
  th,
  ja,
  ko,
  zh,
};

export { en };
