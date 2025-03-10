import { base } from "./base.js";
import { presetJavaScript } from "./presets/presetJavaScript.js";
import { presetTypeScript } from "./presets/presetTypeScript.js";

export const template = base.createStratumTemplate({
	presets: [presetJavaScript, presetTypeScript],
});
