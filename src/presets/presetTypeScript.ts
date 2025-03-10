import { base } from "../base.js";
import { blockTypeScript } from "../blocks/blockTypeScript.js";
import { presetJavaScript } from "./presetJavaScript.js";

export const presetTypeScript = base.createPreset({
	about: { name: "TypeScript" },
	blocks: [...presetJavaScript.blocks, blockTypeScript],
});
