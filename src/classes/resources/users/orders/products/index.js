import Common from '../../../../common/common';
import Validation from '../../../../common/validation';

export default class UsersOrdersProducts extends Common {
  /**
   * @description Add product in order.
   * @param urlParams
   * @param body
   * @param headers
   * @return {Promise}
   */
  create(urlParams, body, headers) {
    const url = Common.formatUrl(this.configuration.routes.usersOrdersProducts, urlParams);
    return Validation.validateMandatoryParams(['quantity', 'start_date', 'position_start', 'position_end'], body)
      .then(() => super.postRequest(url, body, headers));
  }
}
