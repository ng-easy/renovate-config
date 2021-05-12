# @ng-easy/renovate-config

Shareable config preset for [Renovate](https://www.whitesourcesoftware.com/free-developer-tools/renovate). Angular and Nx dependencies require post upgrade tasks, then Renovate must be configured [self-hosted](https://docs.renovatebot.com/self-hosting/), an easy way to do it would be with [Github Action Renovate](https://github.com/renovatebot/github-action).

You can find an example configuration [here](https://github.com/ng-easy/renovate-config/blob/main/renovate.config.js) and GitHub workflow [here](https://github.com/ng-easy/renovate-config/blob/main/.github/workflows/renovate.yml).

## [Default Preset](https://github.com/ng-easy/renovate-config/blob/main/default.json)

It includes all presets included in this repo:

```json
"extends": ["github>@ng-easy/renovate-config"]
```

## [Group All Non Major](https://github.com/ng-easy/renovate-config/blob/main/groupAllNonMajor.json)

Groups all non-major npm dependencies, including `bump` dependencies:

```json
"extends": ["github>@ng-easy/renovate-config:groupAllNonMajor"]
```

## [Angular Workspace](https://github.com/ng-easy/renovate-config/blob/main/angularWorkspace.json)

Groups all dependencies related to [Angular](https://angular.io/), including upgrade schematics:

```json
"extends": ["github>@ng-easy/renovate-config:angularWorkspace"]
```

## [Nrwl Workspace](https://github.com/ng-easy/renovate-config/blob/main/nrwlWorkspace.json)

Groups all dependencies related to [Nx](https://nx.dev/), including upgrade schematics:

```json
"extends": ["github>@ng-easy/renovate-config:nrwlWorkspace"]
```

## [Client Tooling](https://github.com/ng-easy/renovate-config/blob/main/clientTooling.json)

Groups all dependencies related to linting and formatting:

```json
"extends": ["github>@ng-easy/renovate-config:clientTooling"]
```

## [Github Actions](https://github.com/ng-easy/renovate-config/blob/main/githubActions.json)

Groups all dependencies related to Github actions:

```json
"extends": ["github>@ng-easy/renovate-config:githubActions"]
```
