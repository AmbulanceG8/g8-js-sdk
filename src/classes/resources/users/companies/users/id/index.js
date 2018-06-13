import Common from '../../../../../common/common';

export default class UsersCompaniesUsersId extends Common {
  /**
   * @description Remove user from company.
   * @param urlParams
   * @param headers
   * @return {Promise}
   */
  remove(urlParams, headers) {
    const url = Common.formatUrl(this.configuration.routes.usersCompaniesUsersId, urlParams);
    return super.deleteRequest(url, headers);
  }

  /**
   * @description Get company's users.
   * @param urlParams
   * @param headers
   * @return {Promise}
   */
  get(urlParams, headers) {
    const url = Common.formatUrl(this.configuration.routes.usersCompaniesUsersId, urlParams);
    return super.getRequest(url, headers);
  }
}
