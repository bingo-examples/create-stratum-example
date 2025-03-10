<h1 align="center">Create Stratum Example</h1>

<p align="center">
	Example of a template repository built with Bingo and Stratum.
	💝
</p>

<p align="center">
	<!-- prettier-ignore-start -->
	<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
	<a href="#contributors" target="_blank"><img alt="👪 All Contributors: 2" src="https://img.shields.io/badge/%F0%9F%91%AA_all_contributors-2-21bb42.svg" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:END -->
	<!-- prettier-ignore-end -->
	<a href="https://github.com/bingo-examples/create-stratum-example/blob/main/.github/CODE_OF_CONDUCT.md" target="_blank"><img alt="🤝 Code of Conduct: Kept" src="https://img.shields.io/badge/%F0%9F%A4%9D_code_of_conduct-kept-21bb42" /></a>
	<a href="https://codecov.io/gh/bingo-examples/create-stratum-example" target="_blank"><img alt="🧪 Coverage" src="https://img.shields.io/codecov/c/github/bingo-examples/create-stratum-example?label=%F0%9F%A7%AA%20coverage" /></a>
	<a href="https://github.com/bingo-examples/create-stratum-example/blob/main/LICENSE.md" target="_blank"><img alt="📝 License: MIT" src="https://img.shields.io/badge/%F0%9F%93%9D_license-MIT-21bb42.svg"></a>
	<a href="http://npmjs.com/package/create-stratum-example"><img alt="📦 npm version" src="https://img.shields.io/npm/v/create-stratum-example?color=21bb42&label=%F0%9F%93%A6%20npm" /></a>
	<img alt="💪 TypeScript: Strict" src="https://img.shields.io/badge/%F0%9F%92%AA_typescript-strict-21bb42.svg" />
</p>

## Usage

```shell
npx create-stratum-example
```

This repository is a general example of using [Bingo](https://create.bingo) with its [Stratum engine](https://create.bingo/engines/stratum/about).
Its `src/base.ts` file describes four base string options:

- `description`: 'Sentence case.' description of the repository, with a hardcoded value
- `owner`: GitHub organization or user the repository is underneath
- `repository`: 'kebab-case' or 'PascalCase' title of the repository
- `title`: 'Title Case' title for the repository, with a default value based on title-casing `repository`

That base is used to create two presets:

- `javascript`: as seen in [bingo-examples/created-stratum-example-javascript](https://github.com/bingo-examples/created-stratum-example-javascript)
- `typescript`: as seen in [bingo-examples/created-stratum-example-typescript](https://github.com/bingo-examples/created-stratum-example-typescript)

```shell
npx create-stratum-example --owner bingo-examples --repository created-stratum-example-typescript --preset typescript
```

## Development

See [`.github/CONTRIBUTING.md`](./.github/CONTRIBUTING.md), then [`.github/DEVELOPMENT.md`](./.github/DEVELOPMENT.md).
Thanks! 💖

## Contributors

<!-- spellchecker: disable -->
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://www.joshuakgoldberg.com"><img src="https://avatars.githubusercontent.com/u/3335181?v=4?s=100" width="100px;" alt="Josh Goldberg ✨"/><br /><sub><b>Josh Goldberg ✨</b></sub></a><br /><a href="https://github.com/bingo-examples/create-stratum-example/commits?author=JoshuaKGoldberg" title="Code">💻</a> <a href="#content-JoshuaKGoldberg" title="Content">🖋</a> <a href="https://github.com/bingo-examples/create-stratum-example/commits?author=JoshuaKGoldberg" title="Documentation">📖</a> <a href="#ideas-JoshuaKGoldberg" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-JoshuaKGoldberg" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-JoshuaKGoldberg" title="Maintenance">🚧</a> <a href="#projectManagement-JoshuaKGoldberg" title="Project Management">📆</a> <a href="#tool-JoshuaKGoldberg" title="Tools">🔧</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- spellchecker: enable -->

<!-- You can remove this notice if you don't want it 🙂 no worries! -->

> 💝 This package was templated with [`create-typescript-app`](https://github.com/JoshuaKGoldberg/create-typescript-app) using the [Bingo engine](https://create.bingo).
