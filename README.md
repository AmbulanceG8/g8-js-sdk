# ambulance-g8-js-sdk

[![Dependencies][prod-dependencies-badge]][prod-dependencies]
[![Dependencies][dev-dependencies-badge]][dev-dependencies]
[![Code Climate score][codeclimate-score-badge]][codeclimate-score]
[![Code Climate issues][codeclimate-issues-badge]][codeclimate-issues]
[![Node.js version][nodejs-badge]][nodejs]
[![NPM version][npm-badge]][npm]
[![Security version][security-version-badge]][security-version]
[![MIT License][license-badge]][LICENSE]
[![PRs Welcome][prs-badge]][prs]

## Description

This module provides an Ambulance G8 API implementation.

## Install
```
$ npm install ambulance-g8-js-sdk --save
```

## Features

- Logins
- Passwords
- Users
- UsersDevicesPositions

## Documentation

* [logins.create()](#createLogins)
* [logins.update()](#updateLogins)
* [logins.remove()](#removeLogins)
* [passwords.create()](#createPasswords)
* [users.create()](#createUsers)
* [usersDevicesPositions.create()](#createUserDevicesPositions)

## Examples

Create your ambulance-g8-js-sdk sdk by requiring it, making it's initial configuration and instantiating it.

**From import**
```javascript
import sdk from 'ambulance-g8-js-sdk';
```

**From require**
```javascript
const sdk = require('ambulance-g8-js-sdk');
```

```javascript
import SDK from 'ambulance-g8-js-sdk'

// To create an instance
const sdk = SDK.create();
```


## Scripts

Run using npm run <script> command.

    clean - remove coverage data, Jest cache and transpiled files,
    lint - lint source files and tests,
    typecheck - check type annotations,
    test - lint, typecheck and run tests with coverage,
    test-only - run tests with coverage,
    test:watch - interactive watch mode to automatically re-run tests,
    build - compile source files,
    build:watch - interactive watch mode, compile sources on change.


## License
MIT © [Dimitri DO BAIRRO](https://github.com/rimiti/ambulance-g8-js-sdk/blob/master/LICENSE)

[prod-dependencies-badge]: https://david-dm.org/rimiti/ambulance-g8-js-sdk/status.svg
[prod-dependencies]: https://david-dm.org/rimiti/ambulance-g8-js-sdk
[dev-dependencies-badge]: https://david-dm.org/rimiti/ambulance-g8-js-sdk/dev-status.svg
[dev-dependencies]: https://david-dm.org/rimiti/ambulance-g8-js-sdk?type=dev
[security-version-badge]: https://nodesecurity.io/orgs/dim-solution/projects/7559b06b-d1bf-4f11-81b3-b2d2f6b80004/badge
[security-version]: https://nodesecurity.io/orgs/dim-solution/projects/7559b06b-d1bf-4f11-81b3-b2d2f6b80004
[codeclimate-score-badge]: https://api.codeclimate.com/v1/badges/d3bba64e11d0acc2f525/maintainability
[codeclimate-score]: https://codeclimate.com/github/rimiti/ambulance-g8-js-sdk/maintainability
[codeclimate-issues-badge]: https://codeclimate.com/github/rimiti/ambulance-g8-js-sdk/badges/issue_count.svg
[codeclimate-issues]: https://codeclimate.com/github/rimiti/ambulance-g8-js-sdk
[nodejs-badge]: https://img.shields.io/badge/node->=%206.9.0-blue.svg?style=flat-square
[nodejs]: https://nodejs.org/dist/latest-v6.x/docs/api/
[npm-badge]: https://img.shields.io/badge/npm->=%203.10.8-blue.svg?style=flat-square
[npm]: https://docs.npmjs.com/
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license]: https://github.com/rimiti/ambulance-g8-js-sdk/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com