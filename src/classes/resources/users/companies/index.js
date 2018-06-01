import Common from '../../../common/common';

export default class UsersCompanies extends Common {
  /**
   * @description Get user's company.
   * @param urlParams
   * @param headers
   * @return {Promise}
   */
  get(urlParams, headers) {
    const url = Common.formatUrl(this.configuration.routes.usersCompanies, urlParams);
    return super.getRequest(url, headers);
  }
}
