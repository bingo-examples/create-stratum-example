import { describe, expect, test } from "vitest";
import { testTemplate } from "bingo-testers";
import { template } from "./template.js";
import { optionsBase } from "./options.fakes.js";

describe("template", () => {
	test("production", async () => {
		// @ts-expect-error -- https://github.com/JoshuaKGoldberg/bingo/issues/272
		const creation = await testTemplate(template, {
			options: {
				...optionsBase,
				preset: "javascript",
			},
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
			    ".gitignore": "/node_modules
			",
			    ".prettierignore": "/package-lock.json
			",
			    ".prettierrc.json": "{ useTabs: true }
			",
			    "LICENSE.md": "# MIT License

			Permission is hereby granted, free of charge, to any person obtaining
			a copy of this software and associated documentation files (the
			'Software'), to deal in the Software without restriction, including
			without limitation the rights to use, copy, modify, merge, publish,
			distribute, sublicense, and/or sell copies of the Software, and to
			permit persons to whom the Software is furnished to do so, subject to
			the following conditions:

			The above copyright notice and this permission notice shall be
			included in all copies or substantial portions of the Software.

			THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
			EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
			MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
			IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
			CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
			TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
			SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
			",
			    "README.md": "# test-repository

			Example repository created from create-stratum-example's \`--preset javascript\`. 💕

			## Development

			Requires Node.js LTS.
			After [forking the repo from GitHub](https://help.github.com/articles/fork-a-repo):

			\`\`\`shell
			git clone https://github.com/(your-name-here)/test-repository
			cd test-repository
			npm install
			\`\`\`

			### Formatting

			\`\`\`shell
			npm run format
			\`\`\`

			Formats files with [Prettier](https://prettier.io).
				
				

			---

			> This repository was generated by [bingo-examples/create-stratum-example](https://github.com/bingo-examples/create-stratum-example) using the [Bingo engine](https://create.bingo).
			",
			    "package.json": "{
				"name": "test-repository",
				"description": "Example repository created from create-stratum-example's --preset javascript. 💕",
				"version": "0.0.0",
				"repository": {
					"type": "git",
					"url": "git+https://github.com/test-owner/test-repository.git"
				},
				"main": "src/index.js",
				"type": "module",
				"devDependencies": {
					"prettier": "^3.5.3"
				},
				"scripts": {
					"format": "prettier ."
				}
			}",
			    "src": {
			      "index.js": "console.log("Hello, world!");
			",
			    },
			  },
			  "requests": [
			    {
			      "id": "repository-settings",
			      "send": [Function],
			    },
			  ],
			  "scripts": [
			    {
			      "commands": [
			        "npm install",
			      ],
			      "phase": 0,
			    },
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
