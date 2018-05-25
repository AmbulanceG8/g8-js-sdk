import Common from '../../../common/common';

export default class UsersCommissions extends Common {
  /**
   * @description Get user's commissions.
   * @param urlParams
   * @param headers
   * @return {Promise}
   */
  get(urlParams, headers) {
    const url = Common.formatUrl(this.configuration.routes.usersCommissions, urlParams);
    return super.getRequest(url, headers);
  }
}
