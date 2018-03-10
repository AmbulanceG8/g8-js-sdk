import Common from '../../../common/common';

export default class UsersId extends Common {
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
