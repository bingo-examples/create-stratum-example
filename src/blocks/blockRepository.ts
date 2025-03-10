import { base } from "../base.js";

export const blockRepository = base.createBlock({
	about: { name: "Repository" },
	produce({ options }) {
		return {
			requests: [
				{
					id: "repository-settings",
					async send({ octokit }) {
						await octokit.rest.repos.update({
							description: options.description,
							owner: options.owner,
							repo: options.repository,
						});
					},
				},
			],
		};
	},
});
