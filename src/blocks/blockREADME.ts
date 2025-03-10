import { z } from "zod";
import { base } from "../base.js";

export const blockREADME = base.createBlock({
	about: { name: "README" },
	addons: {
		scripts: z
			.array(
				z.object({
					command: z.string(),
					description: z.string(),
					title: z.string(),
				}),
			)
			.default([]),
	},
	produce({ addons, options }) {
		return {
			files: {
				"README.md": `# ${options.repository}

Example repository created from create-stratum-example's \`--preset ${options.preset}\`. 💕

## Development

Requires Node.js LTS.
After [forking the repo from GitHub](https://help.github.com/articles/fork-a-repo):

\`\`\`shell
git clone https://github.com/(your-name-here)/${options.repository}
cd ${options.repository}
npm install
\`\`\`

${addons.scripts
	.sort((a, b) => a.title.localeCompare(b.title))
	.map(
		(script) => `### ${script.title}

\`\`\`shell
${script.command}
\`\`\`

${script.description}
	
	`,
	)
	.join("\n\n")}

---

> This repository was generated by [bingo-examples/create-stratum-example](https://github.com/bingo-examples/create-stratum-example) using the [Bingo engine](https://create.bingo).
`,
			},
		};
	},
});
