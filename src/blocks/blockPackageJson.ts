import { z } from "zod";

import { base } from "../base.js";
import { blockGitignore } from "./blockGitignore.js";

export const blockPackageJson = base.createBlock({
	about: { name: "Package JSON" },
	addons: {
		devDependencies: z.record(z.string(), z.string()).default({}),
		scripts: z.record(z.string(), z.string()).default({}),
	},
	produce({ addons, offline, options }) {
		return {
			addons: [
				blockGitignore({
					ignores: ["/node_modules"],
				}),
			],
			files: {
				"package.json": JSON.stringify(
					{
						name: options.repository,
						description: `Example repository created from create-stratum-example's --preset ${options.preset}. 💕`,
						version: "0.0.0",
						repository: {
							type: "git",
							url: `git+https://github.com/${options.owner}/${options.repository}.git`,
						},
						main: "src/index.js",
						type: "module",
						...addons,
					},
					null,
					"\t",
				),
			},
			scripts: offline
				? undefined
				: [
						{
							commands: ["npm install"],
							phase: 0,
						},
					],
		};
	},
});
