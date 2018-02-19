import Common from './classes/common/common';
import Logins from './classes/resources/logins';
import Passwords from './classes/resources/passwords';
import Users from './classes/resources/users';
import UsersDevicesPositions from './classes/resources/users/devices/positions';

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
}
