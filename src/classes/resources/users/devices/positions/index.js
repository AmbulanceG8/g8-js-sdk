import Common from '../../../../common/common';
import Validation from '../../../../common/validation';

export default class UsersDevicesPosition extends Common {
  /**
   * @description Send device position.
   * @param urlParams
   * @param body
   * @param headers
   * @return {Promise}
   */
  create(urlParams, body, headers) {
    const url = Common.formatUrl(this.configuration.routes.usersDevicesPositions, urlParams);
    return Validation.validateMandatoryParams(['latitude', 'longitude', 'accuracy'], body)
      .then(() => super.postRequest(url, body, headers));
  }
}
