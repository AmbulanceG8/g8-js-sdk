import SDK from '.';
// const SDK = require('./index');

const sdk = SDK.create();

sdk.passwords.create(null, {email: 'dobairro.dimitri+customer@gmail.com'})
  .then((res) => console.log(`TOUT OK`, res))
  .catch((err) => console.log(`ERROR`, err))
