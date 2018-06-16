import Common from '../../../../common/common';

export default class UsersCompaniesOrders extends Common {
  /**
   * @description Create company's order.
   * @param urlParams
   * @param body
   * @param headers
   * @return {Promise}
   */
  create(urlParams, body, headers) {
    const url = Common.formatUrl(this.configuration.routes.usersCompaniesOrders, urlParams);
    return super.postRequest(url, body, headers);
  }

  /**
   * @description Get company's orders.
   * @param urlParams
   * @param headers
   * @return {Promise}
   */
  get(urlParams, headers) {
    const url = Common.formatUrl(this.configuration.routes.usersCompaniesOrders, urlParams);
    return super.getRequest(url, headers);
  }
}
