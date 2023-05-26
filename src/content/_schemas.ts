import { z } from "astro:content";

export const newsSchema = z
  .object({
    title: z.string(),
    description: z.string(),
    source: z.string().optional(),
    thumbnail: z.string().optional(),
    draft: z.boolean().optional().default(false),
    date: z.string().transform(str => new Date(str)),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
  })
  .strict();

export type NewsFrontmatter = z.infer<typeof newsSchema>;


export const blogSchema = z
  .object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
  })
  .strict();

export type BlogFrontmatter = z.infer<typeof blogSchema>;

