import { base } from "../base.js";
import { blockGitignore } from "../blocks/blockGitignore.js";
import { blockIndex } from "../blocks/blockIndex.js";
import { blockLicense } from "../blocks/blockLicense.js";
import { blockPackageJson } from "../blocks/blockPackageJson.js";
import { blockPrettier } from "../blocks/blockPrettier.js";
import { blockREADME } from "../blocks/blockREADME.js";
import { blockRepository } from "../blocks/blockRepository.js";

export const presetJavaScript = base.createPreset({
	about: { name: "JavaScript" },
	blocks: [
		blockGitignore,
		blockIndex,
		blockLicense,
		blockPackageJson,
		blockPrettier,
		blockREADME,
		blockRepository,
	],
});
