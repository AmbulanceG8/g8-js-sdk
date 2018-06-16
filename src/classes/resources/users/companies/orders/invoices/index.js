import Common from '../../../../../common/common';
import Validation from '../../../../../common/validation';

export default class UsersCompaniesOrdersInvoices extends Common {
  /**
   * @description Export invoice.
   * @param urlParams
   * @param body
   * @param headers
   * @return {Promise}
   */
  create(urlParams, body, headers) {
    const url = Common.formatUrl(this.configuration.routes.usersCompaniesOrdersInvoices, urlParams);
    return Validation.validateMandatoryParams(['type'], body)
      .then(() => super.postRequest(url, body, headers));
  }

  /**
   * @description Get order informations.
   * @param urlParams
   * @param headers
   * @return {Promise}
   */
  get(urlParams, headers) {
    const url = Common.formatUrl(this.configuration.routes.usersCompaniesOrdersInvoices, urlParams);
    return super.getRequest(url, headers);
  }
}
