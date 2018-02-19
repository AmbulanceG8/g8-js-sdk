import Common from '../../common/common';
import Validation from '../../common/validation';

export default class Passwords extends Common {
  /**
   * @description Password forgotten.
   * @param urlParams
   * @param body
   * @param headers
   * @return {Promise}
   */
  create(urlParams, body, headers) {
    const url = `${this.configuration.routes.passwords}`;
    return Validation.validateMandatoryParams(['email'], body)
      .then(() => super.postRequest(url, body, headers));
  }
}
