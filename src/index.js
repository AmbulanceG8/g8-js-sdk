import jsonOverride from 'json-override';
import SDK from './singletonizer';

let configuration = {
  authentication: '',
  host: 'https://api.ambulance-g8.com',
  routes: {
    logins: '/logins',
    passwords: '/passwords',
    users: '/users',
    usersOrders: '/users/{userId}/orders',
    usersDevicesPositions: '/users/{userId}/devices/{deviceId}/positions',
  },
};

export default {
  configure: (config) => {
    configuration = jsonOverride(configuration, config);
  },
  create: () => new SDK(configuration),
};
