import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string(),
    category: z.enum(['opinion', 'news', 'analysis', 'discussion']).default('opinion'),
    tags: z.array(z.string()).default([])
  })
});

export const collections = {
  'blog': blogCollection,
};