import { base } from "../base.js";
import { blockGitignore } from "./blockGitignore.js";
import { blockIndex } from "./blockIndex.js";
import { blockPackageJson } from "./blockPackageJson.js";
import { blockPrettier } from "./blockPrettier.js";
import { blockREADME } from "./blockREADME.js";

export const blockTypeScript = base.createBlock({
	about: { name: "TypeScript" },
	produce() {
		return {
			addons: [
				blockGitignore({
					ignores: ["/lib"],
				}),
				blockIndex({
					extension: "ts",
				}),
				blockPackageJson({
					devDependencies: {
						typescript: "5.8.2",
					},
					scripts: {
						tsc: "tsc",
					},
				}),
				blockPrettier({
					ignores: ["/lib"],
				}),
				blockREADME({
					scripts: [
						{
							command: "npm run build",
							description:
								"Builds source files from `src/` to output in `lib/` using [TypeScript](https://www.typescriptlang.org).",
							title: "Building",
						},
					],
				}),
			],
			files: {
				"tsconfig.json": JSON.stringify(
					{
						compilerOptions: {
							declaration: true,
							declarationMap: true,
							esModuleInterop: true,
							module: "NodeNext",
							moduleResolution: "NodeNext",
							noEmit: true,
							resolveJsonModule: true,
							skipLibCheck: true,
							strict: true,
							target: "ES2022",
						},
						include: ["src"],
					},
					null,
					"\t",
				),
			},
		};
	},
});
