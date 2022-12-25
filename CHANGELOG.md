Changelog
=========
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

[1.0.0] - 2022-12-24
--------------------
### Added
- Add [TypeScript](https://www.typescriptlang.org/) types.

### Changed
- The filepath logic has been changed to better accommodate Windows environments.
- Nonessential files should no longer be part of the published package.
- The minimum required [Node.js](https://nodejs.org/) is now v16.
- Change over to [ES Modules](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c) from CommonJS.

[0.2.0] - 2017-12-17
--------------------
### Added
- Added an optional `parameters.cwd` argument to specify a different directory to operate in.
- Added `engines` metadata to the package.
- Expanded code coverage.
- Added `readme-md-cli` project config.

### Fixed
- Fixed incorrect link target for the [0.1.1] changeset.

[0.1.1] - 2017-12-16
--------------------
### Added
- Added Git metadata to the package.

### Changed
- Slight reformatting of readme.

0.1.0 - 2017-12-16
------------------
### Added
- Initial release.

[Unreleased]: https://github.com/jbenner-radham/node-yarn-lockfile-exists/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/jbenner-radham/node-yarn-lockfile-exists/compare/v0.2.0...v1.0.0
[0.2.0]: https://github.com/jbenner-radham/node-yarn-lockfile-exists/compare/v0.1.1...v0.2.0
[0.1.1]: https://github.com/jbenner-radham/node-yarn-lockfile-exists/compare/v0.1.0...v0.1.1
