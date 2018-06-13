import Common from '../../../../common/common';

export default class UsersCompaniesUsers extends Common {
  /**
   * @description Create user in company.
   * @param urlParams
   * @param body
   * @param headers
   * @return {Promise}
   */
  create(urlParams, body, headers) {
    const url = Common.formatUrl(this.configuration.routes.usersCompaniesUsers, urlParams);
    return super.postRequest(url, body, headers);
  }

  /**
   * @description Get company's users.
   * @param urlParams
   * @param headers
   * @return {Promise}
   */
  get(urlParams, headers) {
    const url = Common.formatUrl(this.configuration.routes.usersCompaniesUsers, urlParams);
    return super.getRequest(url, headers);
  }
}
