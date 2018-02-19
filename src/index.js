import jsonOverride from 'json-override';
import SDK from './entry_point';

let configuration = {
  authentication: '',
  host: 'https://api.ambulance-g8.com',
  routes: {
    logins: '/logins',
    passwords: '/passwords',
    users: '/users',
    usersDevicesPositions: '/users/{userId}/devices/{deviceId}/positions',
  },
};

export default {
  configure: (config) => {
    configuration = jsonOverride(configuration, config);
  },
  create: () => new SDK(configuration),
};
