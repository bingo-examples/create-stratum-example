import { testBlock } from "bingo-stratum-testers";
import { describe, expect, test } from "vitest";

import { blockRepository } from "./blockRepository.js";
import { optionsBase } from "./options.fakes.js";

describe("blockRepository", () => {
	test("production", () => {
		const creation = testBlock(blockRepository, {
			options: optionsBase,
		});

		expect(creation).toMatchInlineSnapshot(`
			{
			  "requests": [
			    {
			      "id": "repository-settings",
			      "send": [Function],
			    },
			  ],
			}
		`);
	});
});
