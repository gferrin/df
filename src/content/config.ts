import { defineCollection, z } from 'astro:content';

const data = defineCollection({
	type: 'content',
	schema: z.object({
		menuId: z.string(),
		title: z.string(),
		year: z.number(),
		dimensions: z.string(),
		s3Url: z.string(),
		category: z.string(),
		forSale: z.boolean().default(false),
		draft: z.boolean().default(false),
	}),
});

export const collections = { 
	"data": data,
};
