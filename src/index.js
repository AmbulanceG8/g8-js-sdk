import jsonOverride from 'json-override';
import SDK from './singletons';

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
    usersCompaniesOrders: '/users/{userId}/companies/{companyId}/orders',
    usersCompaniesOrdersId: '/users/{userId}/companies/{companyId}/orders/{orderId}',
    usersCompaniesOrdersInvoices: '/users/{userId}/companies/{companyId}/orders/{orderId}/invoices',
    usersCompaniesUsers: '/users/{userId}/companies/{companyId}/users',
    usersCompaniesUsersId: '/users/{userId}/companies/{companyId}/users/{companyUserId}',
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
