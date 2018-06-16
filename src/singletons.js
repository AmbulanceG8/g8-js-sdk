import Common from './classes/common/common';
import Logins from './classes/resources/logins';
import Passwords from './classes/resources/passwords';
import Users from './classes/resources/users';
import UsersId from './classes/resources/users/id';
import UsersDevicesPositions from './classes/resources/users/devices/positions';
import UsersOrders from './classes/resources/users/orders';
import UsersOrdersId from './classes/resources/users/orders/id';
import UsersOrdersProducts from './classes/resources/users/orders/products';
import UsersCompanies from './classes/resources/users/companies';
import UsersCompaniesId from './classes/resources/users/companies/id';
import UsersCompaniesMarketplace from './classes/resources/users/companies/marketplace';
import UsersCompaniesUsers from './classes/resources/users/companies/users';
import UsersCompaniesUsersId from './classes/resources/users/companies/users/id';
import UsersCompaniesOrders from './classes/resources/users/companies/orders';
import UsersCompaniesOrdersId from './classes/resources/users/companies/orders/id';
import UsersCompaniesPaymentMethods from './classes/resources/users/companies/paymentMethods';
import UsersCompaniesPaymentMethodsId from './classes/resources/users/companies/paymentMethods/id';
import UsersCommissions from './classes/resources/users/commissions';
import UsersCommissionsRequests from './classes/resources/users/commissionsRequests';
import SearchesAmbulances from './classes/resources/searches/ambulances';

export default class SDK {
  constructor(configuration) {
    this.configuration = configuration;
    this.common = Common;
  }

  /**
   * @description Returns Logins singleton.
   * @return {Logins}
   */
  get logins() {
    if (!this.loginsClass) {
      this.loginsClass = new Logins(this.configuration);
    }
    return this.loginsClass;
  }

  /**
   * @description Returns Users singleton.
   * @return {Users}
   */
  get users() {
    if (!this.usersClass) {
      this.usersClass = new Users(this.configuration);
    }
    return this.usersClass;
  }

  /**
   * @description Returns UsersId singleton.
   * @return {UsersId}
   */
  get usersId() {
    if (!this.usersIdClass) {
      this.usersIdClass = new UsersId(this.configuration);
    }
    return this.usersIdClass;
  }

  /**
   * @description Returns Passwords singleton.
   * @return {Passwords}
   */
  get passwords() {
    if (!this.passwordsClass) {
      this.passwordsClass = new Passwords(this.configuration);
    }
    return this.passwordsClass;
  }

  /**
   * @description Returns UsersDevicesPositions singleton.
   * @return {UsersDevicesPositions}
   */
  get usersDevicesPositions() {
    if (!this.usersDevicesPositionsClass) {
      this.usersDevicesPositionsClass = new UsersDevicesPositions(this.configuration);
    }
    return this.usersDevicesPositionsClass;
  }

  /**
   * @description Returns UsersOrders singleton.
   * @returns {UsersOrders}
   */
  get usersOrders() {
    if (!this.usersOrdersClass) {
      this.usersOrdersClass = new UsersOrders(this.configuration);
    }
    return this.usersOrdersClass;
  }

  /**
   * @description Returns UsersOrdersId singleton.
   * @returns {UsersOrdersId}
   */
  get usersOrdersId() {
    if (!this.usersOrdersIdClass) {
      this.usersOrdersIdClass = new UsersOrdersId(this.configuration);
    }
    return this.usersOrdersIdClass;
  }

  /**
   * @description Returns UsersOrdersProducts singleton.
   * @returns {UsersOrdersProducts}
   */
  get usersOrdersProducts() {
    if (!this.usersOrdersProductsClass) {
      this.usersOrdersProductsClass = new UsersOrdersProducts(this.configuration);
    }
    return this.usersOrdersProductsClass;
  }

  /**
   * @description Returns UsersCommissions singleton.
   * @returns {UsersCommissions}
   */
  get usersCommissions() {
    if (!this.usersCommissionsClass) {
      this.usersCommissionsClass = new UsersCommissions(this.configuration);
    }
    return this.usersCommissionsClass;
  }

  /**
   * @description Returns UsersCompanies singleton.
   * @returns {UsersCompanies}
   */
  get usersCompanies() {
    if (!this.usersCompaniesClass) {
      this.usersCompaniesClass = new UsersCompanies(this.configuration);
    }
    return this.usersCompaniesClass;
  }

  /**
   * @description Returns UsersCompaniesId singleton.
   * @returns {UsersCompaniesId}
   */
  get usersCompaniesId() {
    if (!this.usersCompaniesIdClass) {
      this.usersCompaniesIdClass = new UsersCompaniesId(this.configuration);
    }
    return this.usersCompaniesIdClass;
  }

  /**
   * @description Returns UsersCompaniesMarketplace singleton.
   * @returns {UsersCompaniesMarketplace}
   */
  get usersCompaniesMarketplace() {
    if (!this.usersCompaniesMarketplaceClass) {
      this.usersCompaniesMarketplaceClass = new UsersCompaniesMarketplace(this.configuration);
    }
    return this.usersCompaniesMarketplaceClass;
  }

  /**
   * @description Returns UsersCompaniesPaymentMethods singleton.
   * @returns {UsersCompaniesPaymentMethods}
   */
  get usersCompaniesPaymentMethods() {
    if (!this.usersCompaniesPaymentMethodsClass) {
      this.usersCompaniesPaymentMethodsClass = new UsersCompaniesPaymentMethods(this.configuration);
    }
    return this.usersCompaniesPaymentMethodsClass;
  }

  /**
   * @description Returns UsersCompaniesPaymentMethodsId singleton.
   * @returns {UsersCompaniesPaymentMethodsId}
   */
  get usersCompaniesPaymentMethodsId() {
    if (!this.usersCompaniesPaymentMethodsIdClass) {
      this.usersCompaniesPaymentMethodsIdClass = new UsersCompaniesPaymentMethodsId(this.configuration);
    }
    return this.usersCompaniesPaymentMethodsIdClass;
  }

  /**
   * @description Returns UsersCompaniesUsers singleton.
   * @returns {UsersCompaniesUsers}
   */
  get usersCompaniesUsers() {
    if (!this.usersCompaniesUsersClass) {
      this.usersCompaniesUsersClass = new UsersCompaniesUsers(this.configuration);
    }
    return this.usersCompaniesUsersClass;
  }

  /**
   * @description Returns UsersCompaniesUsersId singleton.
   * @returns {UsersCompaniesUsersId}
   */
  get usersCompaniesUsersId() {
    if (!this.usersCompaniesUsersIdClass) {
      this.usersCompaniesUsersIdClass = new UsersCompaniesUsersId(this.configuration);
    }
    return this.usersCompaniesUsersIdClass;
  }

  /**
   * @description Returns UsersCompaniesOrders singleton.
   * @returns {UsersCompaniesOrders}
   */
  get usersCompaniesOrders() {
    if (!this.usersCompaniesOrdersClass) {
      this.usersCompaniesOrdersClass = new UsersCompaniesOrders(this.configuration);
    }
    return this.usersCompaniesOrdersClass;
  }

  /**
   * @description Returns UsersCompaniesOrdersId singleton.
   * @returns {UsersCompaniesOrdersId}
   */
  get usersCompaniesOrdersId() {
    if (!this.usersCompaniesOrdersIdClass) {
      this.usersCompaniesOrdersIdClass = new UsersCompaniesOrdersId(this.configuration);
    }
    return this.usersCompaniesOrdersIdClass;
  }

  /**
   * @description Returns UsersCommissionsRequests singleton.
   * @returns {UsersCommissionsRequests}
   */
  get usersCommissionsRequests() {
    if (!this.usersCommissionsRequestsClass) {
      this.usersCommissionsRequestsClass = new UsersCommissionsRequests(this.configuration);
    }
    return this.usersCommissionsRequestsClass;
  }

  /**
   * @description Returns UsersOrders singleton.
   * @returns {SearchesAmbulances}
   */
  get searchesAmbulances() {
    if (!this.searchesAmbulancesClass) {
      this.searchesAmbulancesClass = new SearchesAmbulances(this.configuration);
    }
    return this.searchesAmbulancesClass;
  }
}
