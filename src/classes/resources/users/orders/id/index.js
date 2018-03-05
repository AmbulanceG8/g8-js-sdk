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
}
