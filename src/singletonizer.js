import Common from './classes/common/common';
import Logins from './classes/resources/logins';
import Passwords from './classes/resources/passwords';
import Users from './classes/resources/users';
import UsersId from './classes/resources/users/id';
import UsersDevicesPositions from './classes/resources/users/devices/positions';
import UsersOrders from './classes/resources/users/orders';
import UsersOrdersId from './classes/resources/users/orders/id';
import UsersOrdersProducts from './classes/resources/users/orders/products';

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
  get UsersId() {
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
   * @description Returns UsersOrders singleton.
   * @returns {UsersOrdersProducts}
   */
  get usersOrdersProducts() {
    if (!this.usersOrdersProductsClass) {
      this.usersOrdersProductsClass = new UsersOrdersProducts(this.configuration);
    }
    return this.usersOrdersProductsClass;
  }
}
