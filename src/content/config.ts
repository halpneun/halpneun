import { defineCollection, z } from "astro:content";

export const collections = {
  i18n: defineCollection({
    type: "data",
    schema: z.object({
      routes: z.object({
        "": z.object({
          label: z.string(),
          description: z.string(),
        }),
        "data-protection": z.object({
          label: z.string(),
          description: z.string(),
        }),
        imprint: z.object({
          label: z.string(),
          description: z.string(),
        }),
      }),
      hero: z.object({
        title: z.string(),
        subtitle: z.string(),
        callToAction: z.object({
          label: z.string(),
        }),
      }),
      localeSelect: z.object({
        label: z.string(),
        options: z.object({
          de: z.string(),
          en: z.string(),
        }),
      }),
      references: z.object({
        title: z.string(),
        projects: z.object({
          title: z.string(),
        }),
      }),
      footer: z.object({
        backToTop: z.string(),
      }),
    }),
  }),
  references: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
    }),
  }),
  contact: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
    }),
  }),
  "data-protection": defineCollection({
    type: "content",
  }),
  imprint: defineCollection({
    type: "content",
  }),
  about: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
    }),
  }),
  me: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
    }),
  }),
};
