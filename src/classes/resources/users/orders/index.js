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
    return Validation.validateMandatoryParams(['status', 'mobility', 'supported', 'weight', 'vehicle'], body)
      .then(() => super.postRequest(url, body, headers));
  }

  /**
   * @description Get orders.
   * @param urlParams
   * @param headers
   * @return {Promise}
   */
  get(urlParams, headers) {
    const url = Common.formatUrl(this.configuration.routes.usersOrders, urlParams);
    return super.getRequest(url, headers);
  }

  /**
   * @description Update order.
   * @param urlParams
   * @param body
   * @param headers
   * @return {Promise}
   */
  update(urlParams, body, headers) {
    const url = Common.formatUrl(this.configuration.routes.usersOrders, urlParams);
    return super.putRequest(url, body, headers);
  }
}
