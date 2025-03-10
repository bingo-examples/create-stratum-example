import { testBlock } from "bingo-stratum-testers";
import { describe, expect, test } from "vitest";

import { blockIndex } from "./blockIndex.js";
import { optionsBase } from "../options.fakes.js";

describe("blockIndex", () => {
	test("without addons", () => {
		const creation = testBlock(blockIndex, {
			options: optionsBase,
		});

		expect(creation).toMatchInlineSnapshot(`
			{
			  "files": {
			    "src": {
			      "index.js": "console.log("Hello, world!");
			",
			    },
			  },
			}
		`);
	});

	test("with addons", () => {
		const creation = testBlock(blockIndex, {
			addons: {
				extension: "ts",
			},
			options: optionsBase,
		});

		expect(creation).toMatchInlineSnapshot(`
			{
			  "files": {
			    "src": {
			      "index.ts": "console.log("Hello, world!");
			",
			    },
			  },
			}
		`);
	});
});
