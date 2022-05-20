## [3.2.1](https://github.com/ng-easy/renovate-config/compare/v3.2.0...v3.2.1) (2022-05-20)


### Bug Fixes

* **nrwl:** :bug: execute all upgrade for [@nrwl](https://github.com/nrwl) packages not only workspace ([#197](https://github.com/ng-easy/renovate-config/issues/197)) ([4db0551](https://github.com/ng-easy/renovate-config/commit/4db05519521a7fad987e93a09769772ac4cd7c05))
* **nrwl:** :bug: run migrations for all [@nrwl](https://github.com/nrwl) packages ([#198](https://github.com/ng-easy/renovate-config/issues/198)) ([6ee1a42](https://github.com/ng-easy/renovate-config/commit/6ee1a4297e88afff1e23f0fdb398aaa94e0d56ab))

# [3.2.0](https://github.com/ng-easy/renovate-config/compare/v3.1.0...v3.2.0) (2022-05-06)


### Features

* **rxjs:** enable minor upgrades ([#183](https://github.com/ng-easy/renovate-config/issues/183)) ([8051168](https://github.com/ng-easy/renovate-config/commit/8051168d756ad2627f2f6e4c21f3c0177988e480))

# [3.1.0](https://github.com/ng-easy/renovate-config/compare/v3.0.0...v3.1.0) (2022-04-22)


### Bug Fixes

* :bug: fix concurrent limit config to 10 ([dee78c1](https://github.com/ng-easy/renovate-config/commit/dee78c12a5fe59de2950fb4e3f97dcec323cda6b))
* :bug: split maintenance into a separate PR ([a6d69d7](https://github.com/ng-easy/renovate-config/commit/a6d69d7a9fecbe583cc01a81bdae0b9d3daa7a0e))


### Features

* :memo: change to default schedule weekends ([8792bc5](https://github.com/ng-easy/renovate-config/commit/8792bc52bc3857134487e181dd722eecf4d48c2d))

# [3.0.0](https://github.com/ng-easy/renovate-config/compare/v2.1.2...v3.0.0) (2022-04-22)


### chore

* **node:** :sparkles: upgrade to node v16 and npm v8.5.5 ([26fe9ec](https://github.com/ng-easy/renovate-config/commit/26fe9ec1e993dd025831047658ff5c2f8c8e26b1))


### BREAKING CHANGES

* **node:** upgrade major version of node and npm

## [2.1.2](https://github.com/ng-easy/renovate-config/compare/v2.1.1...v2.1.2) (2022-04-22)


### Bug Fixes

* **nrwl:** :bug: include nx in the nrwl workspace and separate maintenance PRs ([b4e2dc9](https://github.com/ng-easy/renovate-config/commit/b4e2dc97b46383dc091aa690dd891cc9308e3431)), closes [#133](https://github.com/ng-easy/renovate-config/issues/133)

## [2.1.1](https://github.com/ng-easy/renovate-config/compare/v2.1.0...v2.1.1) (2022-03-06)

### Bug Fixes

* ***client-tooling:** :bug: client tooling don't create duplicate PRs ([58b3bba](https://github.com/ng-easy/renovate-config/commit/58b3bba9e88b10424a9478a003a5ddc0dee1452a))

# [2.1.0](https://github.com/ng-easy/renovate-config/compare/v2.0.3...v2.1.0) (2022-02-27)

### Bug Fixes

* *:bug: reorder semantic commit type rules ([67bae31](https://github.com/ng-easy/renovate-config/commit/67bae314121e91da8ac6e5dd3282148eae2756a8))

### Features

* *:sparkles: improve semantic release type to match semver ([d2ecd94](https://github.com/ng-easy/renovate-config/commit/d2ecd947c54742161c9d0fe021d0efaf72125d0c))

## [2.0.3](https://github.com/ng-easy/renovate-config/compare/v2.0.2...v2.0.3) (2022-02-15)

### Bug Fixes

* *force semantic commits ([bcd10ce](https://github.com/ng-easy/renovate-config/commit/bcd10ce8038ccd913a9f266ecbd8b60c5d175440))

## [2.0.2](https://github.com/ng-easy/renovate-config/compare/v2.0.1...v2.0.2) (2022-02-13)

### Bug Fixes

* ***angular:** fix post upgrade tasks ([ce6dc95](https://github.com/ng-easy/renovate-config/commit/ce6dc95a2fb0e4e0616573720221038e02972be3))
* ***nrwl:** adjust match update type ([06732aa](https://github.com/ng-easy/renovate-config/commit/06732aa157ba157e4a39a4dfcca3e72f1e04993a))
* ***nrwl:** fix path of match rule that doesn't run upgrade scripts ([e8d8b19](https://github.com/ng-easy/renovate-config/commit/e8d8b197917bd46d647d1b646c9c561dc4d3c425))
* ***nrwl:** simplify rules ([520b77c](https://github.com/ng-easy/renovate-config/commit/520b77cfeb7655cadf6c59b4d79ddb5503729a34))
* ***nrwl:** try without additional rule ([c08129f](https://github.com/ng-easy/renovate-config/commit/c08129f8490b6e55e28d63d72d55dc06219b3f8a))

## [2.0.1](https://github.com/ng-easy/renovate-config/compare/v2.0.0...v2.0.1) (2022-02-06)

### Bug Fixes

* *:bug: run post upgrade commands only for root package to speed-up monorepos ([bc50523](https://github.com/ng-easy/renovate-config/commit/bc50523454c486e8560cec5a64977ea32021e258))
* ***nrwl:** :bug: fix to param in migration command ([eec5fc8](https://github.com/ng-easy/renovate-config/commit/eec5fc855f44bdfcc001d2aca47010b15e97f64c))

# [2.0.0](https://github.com/ng-easy/renovate-config/compare/v1.0.0...v2.0.0) (2022-02-05)

### Features

* *:sparkles: split configuration between Angular and Nx workspaces ([222e683](https://github.com/ng-easy/renovate-config/commit/222e683f3cd926a239696a25f0481ff70403e24f))

### BREAKING CHANGES

* *Angular and Nx presets have to be added manually on top of default

# 1.0.0 (2022-02-04)

### Bug Fixes

* *:bug: lint project with NX after upgrading deps ([1fe6e3a](https://github.com/ng-easy/renovate-config/commit/1fe6e3aa4bf96cff33214dd7a7b8eab39a1271ed))
* *:bug: skip nx cache when fixing linting ([a26898b](https://github.com/ng-easy/renovate-config/commit/a26898b7a12717a31026731e831f4f60a4012149))
* ***angular:** rxjs upgrade strategy ([875a09f](https://github.com/ng-easy/renovate-config/commit/875a09f11a88f1fe9312256d623d50372b32797f))
* *disable script when updating lock file ([e2a46b0](https://github.com/ng-easy/renovate-config/commit/e2a46b0b568ea719816b7b7d668f5e8360f71b77))
* ***npm:** use package names ([547e55a](https://github.com/ng-easy/renovate-config/commit/547e55a1466e93df6aed0f19c2db46df7810f1d0))
* ***nrwl:** add dependency name to migrate command ([5a800be](https://github.com/ng-easy/renovate-config/commit/5a800be5e8ff42e8cc6d222a5dab9d3aa7160f66))
* ***nrwl:** add post upgrade command to allowed list ([d27919c](https://github.com/ng-easy/renovate-config/commit/d27919cd20b9f44a413b4afe6f8ad1af82ba346b))
* ***nrwl:** fix migration command ([417ce94](https://github.com/ng-easy/renovate-config/commit/417ce94e8edda89d30f19079677979ae2b7a466a))
* *remove not-pending check to raise visibility on broken pipelines ([55193e0](https://github.com/ng-easy/renovate-config/commit/55193e0d5943230546b417d4c19693bb09ae4d11))
* *restore NX migrate command to allowed list ([81a5f0b](https://github.com/ng-easy/renovate-config/commit/81a5f0bdf22e4059091bb3d02ab65618a3daacb8))
* *revert no optional flag ([9ada924](https://github.com/ng-easy/renovate-config/commit/9ada9243e810866556e1dc9e436f2c3f7a5abb5b))

### Features

* *:sparkles: add merge confidence ([0da277e](https://github.com/ng-easy/renovate-config/commit/0da277e1a19cce18f6d0c2685c72a059b71a44f3))
* *:sparkles: don't update node and npm during lts ([b5c1efe](https://github.com/ng-easy/renovate-config/commit/b5c1efe4a8c298643d0c3ab64c84287ea875be60))
* *:sparkles: set default PR creation to not pending ([86548eb](https://github.com/ng-easy/renovate-config/commit/86548eb8d137a4b1430257a77b46ff9e1a786bc5))
* *:sparkles: use format script ([29b581c](https://github.com/ng-easy/renovate-config/commit/29b581cf863b5d56e21bf89976b0245f394e77e4))
* *:sparkles: use gitmoji ([3f84272](https://github.com/ng-easy/renovate-config/commit/3f842727fb8ca07dfcd57edc3964f60283bdc9ce))
* ***angular:** update for v12 ([7b8a6d0](https://github.com/ng-easy/renovate-config/commit/7b8a6d050ee91b4e27b2f872fe5808fd25771d4f))
* ***nrwl:** fix migrate post upgrade task ([7c16cee](https://github.com/ng-easy/renovate-config/commit/7c16cee227d24ae37d6754e2d1e365ad3a5305d5))
* *renovate shareable config ([1670b82](https://github.com/ng-easy/renovate-config/commit/1670b82a60b6c395e8a08a0c867003f50131e450))
* *schedule non office hours ([52275cf](https://github.com/ng-easy/renovate-config/commit/52275cff49d74bc6dc4e883455d58f0304b3babe))
* *skip optional packages on installing ([cd05e9c](https://github.com/ng-easy/renovate-config/commit/cd05e9ceffee9b810598f7847630b0402032fd7f))
* *use weekly schedule to reduce noise ([84929bf](https://github.com/ng-easy/renovate-config/commit/84929bf4d7db0979816648a21b970726b57fe670))
