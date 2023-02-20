import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";
import sanity from "astro-sanity";

// https://astro.build/config
export default defineConfig({
  site: "https://mimotype-microsite.vercel.app/",
  // Your public domain, e.g.: https://my-site.dev/
  integrations: [
    sitemap(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    sanity({
      projectId: "scwqq8bp",
      dataset: "production",
      apiVersion: "v2021-03-25",
      useCdn: true,
    }),
  ],
});
