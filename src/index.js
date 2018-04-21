import jsonOverride from 'json-override';
import SDK from './singletonizer';

let configuration = {
  authentication: '',
  host: 'https://api.ambulance-g8.com',
  routes: {
    logins: '/logins',
    passwords: '/passwords',
    users: '/users',
    usersId: '/users/{userId}',
    usersOrders: '/users/{userId}/orders',
    usersOrdersId: '/users/{userId}/orders/{orderId}',
    usersOrdersProducts: '/users/{userId}/orders/{orderId}/products',
    usersDevicesPositions: '/users/{userId}/devices/{deviceId}/positions',
    searchesAmbulances: '/searches/ambulances',
  },
};

export default {
  configure: (config) => {
    configuration = jsonOverride(configuration, config);
  },
  create: () => new SDK(configuration),
};
