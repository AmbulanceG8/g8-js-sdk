# g8-js-sdk

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
$ npm install g8-js-sdk --save
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
* [searchesAmbulance.create()](#createSearchesAmbulance)

## Examples

Create your g8-js-sdk sdk by requiring it, making it's initial configuration and instantiating it.

**From import**
```javascript
import sdk from 'g8-js-sdk';
```

**From require**
```javascript
const sdk = require('g8-js-sdk');
```


### Instantiate it

```javascript
import SDK from 'g8-js-sdk';

// Create your instance and export it
const sdk = SDK.create();
```

### Refresh token

Bellow, it's an example of a react-native custom refresh token implementation. Obviously, you have to adapt it with your own logic.

```javascript
import DeviceInfo from 'react-native-device-info';
import {User, Authentication} from './storage';
import SDK from 'g8-js-sdk';

const sdk = SDK.create();

sdk.common.refreshToken((error) => {
  if (!error.response && !error.response.data && !error.response.data.name) {
    console.log('[lib/sdk] - unexpected error.', error);
    return Promise.reject({error: {name: 'Oups...', message: `The request could not succeed.`}});
  }

  if (error.response.data.name === 'NotAuthenticated' && error.response.data.message === 'TOKEN_EXPIRED') {
    console.info('[lib/sdk] - token expired received, start refresh token process.');
    return Promise.all([
      User.get(),
      Authentication.get(),
    ])
      .then(([user, authentication]) => {
        sdk.common.deleteCommonHeaders(['authorization']);
        return sdk.logins.update({id: user.id}, {name: 'test'}, {
          'x-refresh-token': authentication.refresh_token,
          'x-device-uid': DeviceInfo.getUniqueID(),
        })
          .then((response) => {
            sdk.common.addCommonHeaders({authorization: `Bearer ${response.token}`});
            console.info('[lib/sdk] - new refresh token retrieved.');
            return Authentication.save({token: `Bearer ${response.token}`, refresh_token: response.refresh_token})
              .then(() => {
                console.info('[lib/sdk] - retry same request with new access token.');
                error.config.headers.authorization = `Bearer ${response.token}`;
                console.log('[lib/sdk] - retry conf', error.config);
                return sdk.common.retry(error.config);
              });
          });
      })
      .catch((e) => {
        console.log('[lib/sdk] - error during refresh token process.', e);
        if (!e.status) {
          console.log('[lib/sdk] - unexpected error.', e);
          return Promise.reject({error: {name: 'Oups...', message: `The request could not succeed.`}});
        }
        return Promise.reject(e);
      });
  }
  console.log('[lib/sdk] - dispatch error to the next catch.', error);
  return Promise.reject(error);
});

export default sdk;
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
MIT © [Dimitri DO BAIRRO](https://github.com/rimiti/g8-js-sdk/blob/master/LICENSE)

[prod-dependencies-badge]: https://david-dm.org/rimiti/g8-js-sdk/status.svg
[prod-dependencies]: https://david-dm.org/rimiti/g8-js-sdk
[dev-dependencies-badge]: https://david-dm.org/rimiti/g8-js-sdk/dev-status.svg
[dev-dependencies]: https://david-dm.org/rimiti/g8-js-sdk?type=dev
[security-version-badge]: https://nodesecurity.io/orgs/dim-solution/projects/7559b06b-d1bf-4f11-81b3-b2d2f6b80004/badge
[security-version]: https://nodesecurity.io/orgs/dim-solution/projects/7559b06b-d1bf-4f11-81b3-b2d2f6b80004
[codeclimate-score-badge]: https://api.codeclimate.com/v1/badges/a36ff76f9ddf6297244b/maintainability
[codeclimate-score]: https://codeclimate.com/github/rimiti/g8-js-sdk/maintainability
[codeclimate-issues-badge]: https://codeclimate.com/github/rimiti/g8-js-sdk/badges/issue_count.svg
[codeclimate-issues]: https://codeclimate.com/github/rimiti/g8-js-sdk
[nodejs-badge]: https://img.shields.io/badge/node->=%206.9.0-blue.svg?style=flat-square
[nodejs]: https://nodejs.org/dist/latest-v6.x/docs/api/
[npm-badge]: https://img.shields.io/badge/npm->=%203.10.8-blue.svg?style=flat-square
[npm]: https://docs.npmjs.com/
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license]: https://github.com/rimiti/g8-js-sdk/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com