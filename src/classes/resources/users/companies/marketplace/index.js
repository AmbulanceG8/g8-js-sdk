import Common from '../../../../common/common';

export default class UsersCompaniesMarketplace extends Common {
  /**
   * @description Get user's company payment method.
   * @param urlParams
   * @param headers
   * @return {Promise}
   */
  get(urlParams, headers) {
    const url = Common.formatUrl(this.configuration.routes.usersCompaniesMarketplace, urlParams);
    return super.getRequest(url, headers);
  }
}
