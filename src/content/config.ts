import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.string(),
    readTime: z.string(),
    image: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };