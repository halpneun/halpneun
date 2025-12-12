import {
  getEntry,
  type CollectionEntry,
  type CollectionKey,
} from "astro:content";

export const LOCALE = {
  default: "de",
  fallback: "en",
  supported: ["de", "en"],
} as const;

export type Locale = (typeof LOCALE.supported)[number];

export function getLocaleFromUrl(url: URL) {
  const [, locale = LOCALE.default] = url.pathname.split("/") as [
    never,
    Locale
  ];

  return LOCALE.supported.includes(locale) ? locale : LOCALE.default;
}

export async function getTranslatedEntry<C extends CollectionKey>(
  locale: string,
  collection: C
) {
  return getEntry(collection, locale)!;
}

export async function getI18n(locale: string) {
  const { data } = await getTranslatedEntry(locale, "i18n");

  return data;
}

export const filterByLocale =
  <C extends CollectionKey, E extends CollectionEntry<C>>(
    locale: Intl.UnicodeBCP47LocaleIdentifier
  ) =>
  (entry: CollectionEntry<C>): entry is E =>
    entry.id.split("/")[0] === locale;
