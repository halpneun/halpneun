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
  url: URL,
  collection: C
) {
  return getEntry(collection, getLocaleFromUrl(url))!;
}

export async function getI18n(url: URL) {
  const { data } = await getTranslatedEntry(url, "i18n");

  return data;
}

export const filterByLocale =
  <C extends CollectionKey, E extends CollectionEntry<C>>(
    locale: Intl.UnicodeBCP47LocaleIdentifier | URL
  ) =>
  (entry: CollectionEntry<C>): entry is E => {
    if (locale instanceof URL) {
      locale = getLocaleFromUrl(locale);
    }

    return entry.id.split("/")[0] === locale;
  };

export function stripLocale(url: URL) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const pattern = `^${base}/(?:${LOCALE.supported.join("|")})(/|$)`;
  return url.pathname.replace(new RegExp(pattern), `${base}/`);
}
