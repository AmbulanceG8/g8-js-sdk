import Common from '../../../../common/common';
import Validation from '../../../../common/validation';

export default class UsersOrdersCommissionsRequests extends Common {
  /**
   * @description Create a commission request.
   * @param urlParams
   * @param body
   * @param headers
   * @return {Promise}
   */
  create(urlParams, body, headers) {
    const url = Common.formatUrl(this.configuration.routes.usersOrdersCommissionsRequests, urlParams);
    return super.postRequest(url, body, headers);
  }
  /**
   * @description Update commission_paid status.
   * @param urlParams
   * @param body
   * @param headers
   * @return {Promise}
   */
  update(urlParams, body, headers) {
    const url = Common.formatUrl(this.configuration.routes.usersOrdersCommissionsRequests, urlParams);
    return Validation.validateMandatoryParams(['commission_paid'], body)
      .then(() => super.putRequest(url, body, headers));
  }
}
