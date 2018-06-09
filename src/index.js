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
    usersCompanies: '/users/{userId}/companies',
    usersCompaniesId: '/users/{userId}/companies/{companyId}',
    usersCompaniesMarketplace: '/users/{userId}/companies/{companyId}/marketplace',
    usersCompaniesPaymentMethods: '/users/{userId}/companies/{companyId}/paymentMethods',
    usersCompaniesPaymentMethodsId: '/users/{userId}/companies/{companyId}/paymentMethods/{paymentMethodId}',
    usersCommissions: '/users/{userId}/commissions',
    usersCommissionsRequests: '/users/{userId}/commissionsRequests',
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
