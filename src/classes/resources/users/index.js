import Common from '../../common/common.js';
import Validation from '../../common/validation';

export default class Users extends Common {
  /**
   * @description Create user.
   * @param urlParams
   * @param body
   * @param headers
   * @return {Promise}
   */
  create(urlParams, body, headers) {
    const url = `${this.configuration.routes.users}`;
    return Validation.validateMandatoryParams(['first_name', 'last_name', 'phone_number', 'email', 'password', 'gender', 'type'], body)
      .then(() => super.postRequest(url, body, headers));
  }
}
