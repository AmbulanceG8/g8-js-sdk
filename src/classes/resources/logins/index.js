import Common from '../../common/common.js';
import Validation from '../../common/validation';

export default class Logins extends Common {
  /**
   * @description Sign in.
   * @param urlParams
   * @param body
   * @param headers
   * @return {Promise}
   */
  create(urlParams, body, headers) {
    const url = `${this.configuration.routes.logins}`;
    return Validation.validateMandatoryParams(['email', 'password'], body)
      .then(() => Validation.validateMandatoryParams(['x-device-uid'], headers))
      .then(() => super.postRequest(url, body, headers))
      .then((response) => {
        Common.addCommonHeaders({authorization: `Bearer ${response.authentication.token}`});
        return Promise.resolve(response);
      });
  }

  /**
   * @description Update sessions.
   * @param urlParams
   * @param body
   * @param headers
   * @return {Promise}
   */
  update(urlParams, body = {}, headers) {
    const url = Common.formatUrl(`${this.configuration.routes.logins}/{id}`, urlParams);
    return Validation.validateMandatoryParams(['x-device-uid', 'x-refresh-token'], headers)
      .then(() => super.putRequest(url, body, headers));
  }

  /**
   * @description Sign out.
   * @param urlParams
   * @param headers
   * @return {Promise}
   */
  remove(urlParams, headers) {
    const url = Common.formatUrl(`${this.configuration.routes.logins}/{id}`, urlParams);
    return Validation.validateMandatoryParams(['authorization'], headers)
      .then(() => super.deleteRequest(url, headers));
  }
}
