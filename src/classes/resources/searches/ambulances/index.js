import Common from '../../../common/common';
import Validation from '../../../common/validation';

export default class SearchesAmbulances extends Common {
  /**
   * @description Search ambulance.
   * @param urlParams
   * @param body
   * @param headers
   * @return {Promise}
   */
  create(urlParams, body, headers) {
    const url = `${this.configuration.routes.searchesAmbulances}`;
    return Validation.validateMandatoryParams(['keyword'], body)
      .then(() => super.postRequest(url, body, headers));
  }
}
