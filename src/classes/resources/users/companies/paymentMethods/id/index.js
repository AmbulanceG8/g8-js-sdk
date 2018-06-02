import Common from '../../../../../common/common';

export default class UsersCompaniesPaymentMethods extends Common {
  /**
   * @description Remove company's payment method.
   * @param urlParams
   * @param headers
   * @return {Promise}
   */
  remove(urlParams, headers) {
    const url = Common.formatUrl(this.configuration.routes.usersCompaniesPaymentMethodsId, urlParams);
    return super.deleteRequest(url, headers);
  }
}
