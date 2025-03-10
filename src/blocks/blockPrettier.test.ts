import { testBlock } from "bingo-stratum-testers";
import { describe, expect, test } from "vitest";

import { blockPrettier } from "./blockPrettier.js";
import { optionsBase } from "../options.fakes.js";

describe("blockPrettier", () => {
	test("without addons", () => {
		const creation = testBlock(blockPrettier, {
			options: optionsBase,
		});

		expect(creation).toMatchInlineSnapshot(`
			{
			  "addons": [
			    {
			      "addons": {
			        "devDependencies": {
			          "prettier": "^3.5.3",
			        },
			        "scripts": {
			          "format": "prettier .",
			        },
			      },
			      "block": [Function],
			    },
			    {
			      "addons": {
			        "scripts": [
			          {
			            "command": "npm run format",
			            "description": "Formats files with [Prettier](https://prettier.io).",
			            "title": "Formatting",
			          },
			        ],
			      },
			      "block": [Function],
			    },
			  ],
			  "files": {
			    ".prettierignore": "/package-lock.json
			",
			    ".prettierrc.json": "{ useTabs: true }
			",
			  },
			  "scripts": [
			    {
			      "commands": [
			        "npm run format -- --write",
			      ],
			      "phase": 1,
			    },
			  ],
			}
		`);
	});

	test("with addons", () => {
		const creation = testBlock(blockPrettier, {
			addons: {
				ignores: ["/dist", "/lib"],
			},
			options: optionsBase,
		});

		expect(creation).toMatchInlineSnapshot(`
			{
			  "addons": [
			    {
			      "addons": {
			        "devDependencies": {
			          "prettier": "^3.5.3",
			        },
			        "scripts": {
			          "format": "prettier .",
			        },
			      },
			      "block": [Function],
			    },
			    {
			      "addons": {
			        "scripts": [
			          {
			            "command": "npm run format",
			            "description": "Formats files with [Prettier](https://prettier.io).",
			            "title": "Formatting",
			          },
			        ],
			      },
			      "block": [Function],
			    },
			  ],
			  "files": {
			    ".prettierignore": "/dist
			/lib
			/package-lock.json
			",
			    ".prettierrc.json": "{ useTabs: true }
			",
			  },
			  "scripts": [
			    {
			      "commands": [
			        "npm run format -- --write",
			      ],
			      "phase": 1,
			    },
			  ],
			}
		`);
	});
});
