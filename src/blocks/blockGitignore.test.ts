import { testBlock } from "bingo-stratum-testers";
import { describe, expect, test } from "vitest";

import { blockGitignore } from "./blockGitignore.js";
import { optionsBase } from "../options.fakes.js";

describe("blockGitignore", () => {
	test("without addons", () => {
		const creation = testBlock(blockGitignore, {
			options: optionsBase,
		});

		expect(creation).toMatchInlineSnapshot(`
			{
			  "files": {
			    ".gitignore": "
			",
			  },
			}
		`);
	});

	test("with addons", () => {
		const creation = testBlock(blockGitignore, {
			addons: {
				ignores: ["/lib", "/node_modules"],
			},
			options: optionsBase,
		});

		expect(creation).toMatchInlineSnapshot(`
			{
			  "files": {
			    ".gitignore": "/lib
			/node_modules
			",
			  },
			}
		`);
	});
});
