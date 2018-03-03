import Common from '../../../common/common';
import Validation from '../../../common/validation';

export default class UsersOrders extends Common {
  /**
   * @description Create an order.
   * @param urlParams
   * @param body
   * @param headers
   * @return {Promise}
   */
  create(urlParams, body, headers) {
    const url = Common.formatUrl(this.configuration.routes.usersOrders, urlParams);
    return Validation.validateMandatoryParams(['first_name', 'last_name', 'status', 'mobility', 'supported', 'weight'], body)
      .then(() => super.postRequest(url, body, headers));
  }
}
