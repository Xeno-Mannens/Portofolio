import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()).optional(),
        link: z.string().url().optional(),
        github: z.string().url().optional(),
        order: z.number().default(0),
    }),
});

const experience = defineCollection({
    type: 'content',
    schema: z.object({
        role: z.string(),
        company: z.string(),
        period: z.string(),
        order: z.number().default(0),
    }),
});

export const collections = {
    projects,
    experience,
};
