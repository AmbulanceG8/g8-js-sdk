import Common from '../../../../common/common';

export default class UsersOrdersId extends Common {
  /**
   * @description Update order.
   * @param urlParams
   * @param body
   * @param headers
   * @return {Promise}
   */
  update(urlParams, body, headers) {
    const url = Common.formatUrl(this.configuration.routes.usersOrdersId, urlParams);
    return super.putRequest(url, body, headers);
  }

  /**
   * @description Get order.
   * @param urlParams
   * @param headers
   * @return {Promise}
   */
  get(urlParams, headers) {
    const url = Common.formatUrl(this.configuration.routes.usersOrdersId, urlParams);
    return super.getRequest(url, headers);
  }
}
