// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, passthroughImageService } from "astro/config";

export default defineConfig({
  site: "http://halpneun.de",
  image: {
    service: passthroughImageService(),
  },
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: "de",
    locales: ["de", "en"],
  },
});
