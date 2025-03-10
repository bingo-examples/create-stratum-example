import { z } from "zod";
import { base } from "../base.js";

export const blockGitignore = base.createBlock({
	about: { name: "Gitignore" },
	addons: {
		ignores: z.array(z.string()).default([]),
	},
	produce({ addons }) {
		return {
			files: {
				".gitignore": `${addons.ignores.sort().join("\n")}\n`,
			},
		};
	},
});
