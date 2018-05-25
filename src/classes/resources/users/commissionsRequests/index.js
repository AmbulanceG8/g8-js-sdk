import Common from '../../../common/common';

export default class UsersCommissionsRequests extends Common {
  /**
   * @description Create a commission request.
   * @param urlParams
   * @param body
   * @param headers
   * @return {Promise}
   */
  create(urlParams, body, headers) {
    const url = Common.formatUrl(this.configuration.routes.usersCommissionsRequests, urlParams);
    return super.postRequest(url, body, headers);
  }
}
