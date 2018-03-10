import Common from '../../../common/common';

export default class UsersId extends Common {
  /**
   * @description Update user.
   * @param urlParams
   * @param body
   * @param headers
   * @return {Promise}
   */
  update(urlParams, body, headers) {
    const url = Common.formatUrl(this.configuration.routes.usersId, urlParams);
    return super.putRequest(url, body, headers);
  }
  /**
   * @description Get user.
   * @param urlParams
   * @param headers
   * @return {Promise}
   */
  get(urlParams, headers) {
    const url = Common.formatUrl(this.configuration.routes.usersId, urlParams);
    return super.getRequest(url, headers);
  }
}
