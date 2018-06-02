import Common from '../../../../common/common';
import Validation from '../../../../common/validation';

export default class UsersCompaniesPaymentMethods extends Common {
  /**
   * @description Create user's company payment method.
   * @param urlParams
   * @param body
   * @param headers
   * @return {Promise}
   */
  create(urlParams, body, headers) {
    const url = Common.formatUrl(this.configuration.routes.usersCompaniesPaymentMethods, urlParams);
    return Validation.validateMandatoryParams(['type', 'expiration_month', 'expiration_year', 'number', 'cvv2'], body)
      .then(() => super.postRequest(url, body, headers));
  }

  /**
   * @description Get user's company payment method.
   * @param urlParams
   * @param headers
   * @return {Promise}
   */
  get(urlParams, headers) {
    const url = Common.formatUrl(this.configuration.routes.usersCompaniesPaymentMethods, urlParams);
    return super.getRequest(url, headers);
  }
}
