import Common from '../../../../../common/common';

export default class UsersCompaniesOrdersId extends Common {
  /**
   * @description Get company's order.
   * @param urlParams
   * @param headers
   * @return {Promise}
   */
  get(urlParams, headers) {
    const url = Common.formatUrl(this.configuration.routes.usersCompaniesOrdersId, urlParams);
    return super.getRequest(url, headers);
  }
}
