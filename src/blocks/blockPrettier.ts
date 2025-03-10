import { z } from "zod";
import { base } from "../base.js";
import { blockPackageJson } from "./blockPackageJson.js";
import { blockREADME } from "./blockREADME.js";

export const blockPrettier = base.createBlock({
	about: { name: "Prettier" },
	addons: {
		ignores: z.array(z.string()).default([]),
	},
	produce({ addons, offline }) {
		return {
			addons: [
				blockPackageJson({
					devDependencies: {
						prettier: "^3.5.3",
					},
					scripts: {
						format: "prettier .",
					},
				}),
				blockREADME({
					scripts: [
						{
							command: "npm run format",
							description:
								"Formats files with [Prettier](https://prettier.io).",
							title: "Formatting",
						},
					],
				}),
			],
			files: {
				".prettierignore": `${[...addons.ignores, "/package-lock.json"].sort().join("\n")}\n`,
				".prettierrc.json": `{ useTabs: true }\n`,
			},
			scripts: offline
				? undefined
				: [
						{
							commands: ["npm run format -- --write"],
							phase: 1,
						},
					],
		};
	},
});
