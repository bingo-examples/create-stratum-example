import { testBlock } from "bingo-stratum-testers";
import { describe, expect, test } from "vitest";

import { blockPackageJson } from "./blockPackageJson.js";
import { optionsBase } from "../options.fakes.js";

describe("blockPackageJson", () => {
	test("without addons", () => {
		const creation = testBlock(blockPackageJson, {
			options: optionsBase,
		});

		expect(creation).toMatchInlineSnapshot(`
			{
			  "addons": [
			    {
			      "addons": {
			        "ignores": [
			          "/node_modules",
			        ],
			      },
			      "block": [Function],
			    },
			  ],
			  "files": {
			    "package.json": "{
				"name": "test-repository",
				"description": "Example repository created from create-stratum-example's --preset undefined. 💕",
				"version": "0.0.0",
				"repository": {
					"type": "git",
					"url": "git+https://github.com/test-owner/test-repository.git"
				},
				"main": "src/index.js",
				"type": "module",
				"devDependencies": {},
				"scripts": {}
			}",
			  },
			  "scripts": [
			    {
			      "commands": [
			        "npm install",
			      ],
			      "phase": 0,
			    },
			  ],
			}
		`);
	});

	test("with addons", () => {
		const creation = testBlock(blockPackageJson, {
			addons: {
				devDependencies: {
					abc: "^1.2.3",
					def: "4.5.6",
				},
				scripts: {
					ghi: "jkl",
				},
			},
			options: optionsBase,
		});

		expect(creation).toMatchInlineSnapshot(`
			{
			  "addons": [
			    {
			      "addons": {
			        "ignores": [
			          "/node_modules",
			        ],
			      },
			      "block": [Function],
			    },
			  ],
			  "files": {
			    "package.json": "{
				"name": "test-repository",
				"description": "Example repository created from create-stratum-example's --preset undefined. 💕",
				"version": "0.0.0",
				"repository": {
					"type": "git",
					"url": "git+https://github.com/test-owner/test-repository.git"
				},
				"main": "src/index.js",
				"type": "module",
				"devDependencies": {
					"abc": "^1.2.3",
					"def": "4.5.6"
				},
				"scripts": {
					"ghi": "jkl"
				}
			}",
			  },
			  "scripts": [
			    {
			      "commands": [
			        "npm install",
			      ],
			      "phase": 0,
			    },
			  ],
			}
		`);
	});
});
