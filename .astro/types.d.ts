declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"data": {
"38-special.md": {
	id: "38-special.md";
  slug: "38-special";
  body: string;
  collection: "data";
  data: InferEntrySchema<"data">
} & { render(): Render[".md"] };
"american-gothic.md": {
	id: "american-gothic.md";
  slug: "american-gothic";
  body: string;
  collection: "data";
  data: InferEntrySchema<"data">
} & { render(): Render[".md"] };
"arcata-2013.md": {
	id: "arcata-2013.md";
  slug: "arcata-2013";
  body: string;
  collection: "data";
  data: InferEntrySchema<"data">
} & { render(): Render[".md"] };
"be-myan-valentine.md": {
	id: "be-myan-valentine.md";
  slug: "be-myan-valentine";
  body: string;
  collection: "data";
  data: InferEntrySchema<"data">
} & { render(): Render[".md"] };
"black-and-white.md": {
	id: "black-and-white.md";
  slug: "black-and-white";
  body: string;
  collection: "data";
  data: InferEntrySchema<"data">
} & { render(): Render[".md"] };
"cave-paintings.md": {
	id: "cave-paintings.md";
  slug: "cave-paintings";
  body: string;
  collection: "data";
  data: InferEntrySchema<"data">
} & { render(): Render[".md"] };
"eureka-still-life.md": {
	id: "eureka-still-life.md";
  slug: "eureka-still-life";
  body: string;
  collection: "data";
  data: InferEntrySchema<"data">
} & { render(): Render[".md"] };
"jamie.md": {
	id: "jamie.md";
  slug: "jamie";
  body: string;
  collection: "data";
  data: InferEntrySchema<"data">
} & { render(): Render[".md"] };
"joyce-lifting-skirt.md": {
	id: "joyce-lifting-skirt.md";
  slug: "joyce-lifting-skirt";
  body: string;
  collection: "data";
  data: InferEntrySchema<"data">
} & { render(): Render[".md"] };
"lace-runner-and-blue-bottles.md": {
	id: "lace-runner-and-blue-bottles.md";
  slug: "lace-runner-and-blue-bottles";
  body: string;
  collection: "data";
  data: InferEntrySchema<"data">
} & { render(): Render[".md"] };
"laura-and-beth.md": {
	id: "laura-and-beth.md";
  slug: "laura-and-beth";
  body: string;
  collection: "data";
  data: InferEntrySchema<"data">
} & { render(): Render[".md"] };
"maroon-2016.md": {
	id: "maroon-2016.md";
  slug: "maroon-2016";
  body: string;
  collection: "data";
  data: InferEntrySchema<"data">
} & { render(): Render[".md"] };
"night-dolls.md": {
	id: "night-dolls.md";
  slug: "night-dolls";
  body: string;
  collection: "data";
  data: InferEntrySchema<"data">
} & { render(): Render[".md"] };
"opium-pipe.md": {
	id: "opium-pipe.md";
  slug: "opium-pipe";
  body: string;
  collection: "data";
  data: InferEntrySchema<"data">
} & { render(): Render[".md"] };
"prison-vanitas.md": {
	id: "prison-vanitas.md";
  slug: "prison-vanitas";
  body: string;
  collection: "data";
  data: InferEntrySchema<"data">
} & { render(): Render[".md"] };
"range-and-separation.md": {
	id: "range-and-separation.md";
  slug: "range-and-separation";
  body: string;
  collection: "data";
  data: InferEntrySchema<"data">
} & { render(): Render[".md"] };
"romeo-juliette-left-panel.md": {
	id: "romeo-juliette-left-panel.md";
  slug: "romeo-juliette-left-panel";
  body: string;
  collection: "data";
  data: InferEntrySchema<"data">
} & { render(): Render[".md"] };
"self-portrait-1999.md": {
	id: "self-portrait-1999.md";
  slug: "self-portrait-1999";
  body: string;
  collection: "data";
  data: InferEntrySchema<"data">
} & { render(): Render[".md"] };
"self-portrait-2005.md": {
	id: "self-portrait-2005.md";
  slug: "self-portrait-2005";
  body: string;
  collection: "data";
  data: InferEntrySchema<"data">
} & { render(): Render[".md"] };
"self-portrait-2016.md": {
	id: "self-portrait-2016.md";
  slug: "self-portrait-2016";
  body: string;
  collection: "data";
  data: InferEntrySchema<"data">
} & { render(): Render[".md"] };
"self-portrait-long-beard.md": {
	id: "self-portrait-long-beard.md";
  slug: "self-portrait-long-beard";
  body: string;
  collection: "data";
  data: InferEntrySchema<"data">
} & { render(): Render[".md"] };
"self-portrait-with-suspenders-large.md": {
	id: "self-portrait-with-suspenders-large.md";
  slug: "self-portrait-with-suspenders-large";
  body: string;
  collection: "data";
  data: InferEntrySchema<"data">
} & { render(): Render[".md"] };
"shelly-in-a-slip.md": {
	id: "shelly-in-a-slip.md";
  slug: "shelly-in-a-slip";
  body: string;
  collection: "data";
  data: InferEntrySchema<"data">
} & { render(): Render[".md"] };
"sitting-at-easel-2013.md": {
	id: "sitting-at-easel-2013.md";
  slug: "sitting-at-easel-2013";
  body: string;
  collection: "data";
  data: InferEntrySchema<"data">
} & { render(): Render[".md"] };
"skinned-rabbit.md": {
	id: "skinned-rabbit.md";
  slug: "skinned-rabbit";
  body: string;
  collection: "data";
  data: InferEntrySchema<"data">
} & { render(): Render[".md"] };
"spring-cleaning.md": {
	id: "spring-cleaning.md";
  slug: "spring-cleaning";
  body: string;
  collection: "data";
  data: InferEntrySchema<"data">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../src/content/config.js");
}
