import { BaseOptionsFor, createBase } from "bingo-stratum";
import { titleCase } from "title-case";
import { z } from "zod";

export const base = createBase({
	options: {
		description: z
			.string()
			.default("Example repository created from create-stratum-example. 💕")
			.describe("'Sentence case.' description of the repository"),
		owner: z
			.string()
			.describe("GitHub organization or user the repository is underneath"),
		repository: z
			.string()
			.describe("'kebab-case' or 'PascalCase' title of the repository"),
		title: z.string().describe("'Title Case' title for the repository"),
	},
	prepare({ options }) {
		return {
			title: options.repository
				? titleCase(options.repository).replaceAll("-", " ")
				: undefined,
		};
	},
});

export type BaseOptions = BaseOptionsFor<typeof base>;
