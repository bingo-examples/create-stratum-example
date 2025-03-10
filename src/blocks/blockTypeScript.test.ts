import { testBlock } from "bingo-stratum-testers";
import { describe, expect, test } from "vitest";

import { blockTypeScript } from "./blockTypeScript.js";
import { optionsBase } from "../options.fakes.js";

describe("blockTypeScript", () => {
	test("production", () => {
		const creation = testBlock(blockTypeScript, {
			options: optionsBase,
		});

		expect(creation).toMatchInlineSnapshot(`
			{
			  "addons": [
			    {
			      "addons": {
			        "ignores": [
			          "/lib",
			        ],
			      },
			      "block": [Function],
			    },
			    {
			      "addons": {
			        "extension": "ts",
			      },
			      "block": [Function],
			    },
			    {
			      "addons": {
			        "devDependencies": {
			          "typescript": "5.8.2",
			        },
			        "scripts": {
			          "tsc": "tsc",
			        },
			      },
			      "block": [Function],
			    },
			    {
			      "addons": {
			        "ignores": [
			          "/lib",
			        ],
			      },
			      "block": [Function],
			    },
			    {
			      "addons": {
			        "scripts": [
			          {
			            "command": "npm run build",
			            "description": "Builds source files from \`src/\` to output in \`lib/\` using [TypeScript](https://www.typescriptlang.org).",
			            "title": "Building",
			          },
			        ],
			      },
			      "block": [Function],
			    },
			  ],
			  "files": {
			    "tsconfig.json": "{
				"compilerOptions": {
					"declaration": true,
					"declarationMap": true,
					"esModuleInterop": true,
					"module": "NodeNext",
					"moduleResolution": "NodeNext",
					"noEmit": true,
					"resolveJsonModule": true,
					"skipLibCheck": true,
					"strict": true,
					"target": "ES2022"
				},
				"include": [
					"src"
				]
			}",
			  },
			}
		`);
	});
});
