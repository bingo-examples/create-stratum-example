import { z } from "zod";
import { base } from "../base.js";

export const blockIndex = base.createBlock({
	about: { name: "Index" },
	addons: {
		extension: z.string().optional(),
	},
	produce({ addons }) {
		return {
			files: {
				src: {
					[`index.${addons.extension ?? "js"}`]: `console.log("Hello, world!");\n`,
				},
			},
		};
	},
});
