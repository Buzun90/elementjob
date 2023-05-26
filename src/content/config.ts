import { z, defineCollection } from 'astro:content';
import { newsSchema, blogSchema } from './_schemas';

const industryCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // tags: z.array(z.string()),
    thumbnail: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

const newsCollection = defineCollection({
  schema: newsSchema,
});

const blogCollection = defineCollection({
  schema: blogSchema,
});

export const collections = {
  'industries': industryCollection,
  'news': newsCollection,
  'blog': blogCollection,
};