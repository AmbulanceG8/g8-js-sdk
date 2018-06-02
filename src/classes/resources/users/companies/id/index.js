import Common from '../../../../common/common';

export default class UsersCompaniesId extends Common {
  /**
   * @description Update user companies.
   * @param urlParams
   * @param body
   * @param headers
   * @return {Promise}
   */
  update(urlParams, body, headers) {
    const url = Common.formatUrl(this.configuration.routes.usersCompaniesId, urlParams);
    return super.putRequest(url, body, headers);
  }
}
