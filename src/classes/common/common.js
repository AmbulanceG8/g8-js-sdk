import stimmy from 'stimmy';
import axios from './axios';
import Errors from '../errors';

export default class Common {
  constructor(configuration) {
    this.configuration = configuration;
  }

  /**
   * @description Runs GET request.
   * @param url
   * @param body
   * @param headers = {}
   * @return {Promise}
   */
  getRequest(url, body, headers = {}) {
    return axios.get(this.configuration.host + url, body, Common.getHeaders(headers))
      .then(({data}) => Promise.resolve(data));
  }

  /**
   * @description Runs POST request.
   * @param url
   * @param body
   * @param headers = {}
   * @return {Promise}
   */
  postRequest(url, body, headers = {}) {
    return axios.post(this.configuration.host + url, body, Common.getHeaders(headers))
      .then(({data}) => Promise.resolve(data));
  }

  /**
   * @description Runs PUT request.
   * @param url
   * @param body
   * @param headers = {}
   * @return {Promise}
   */
  putRequest(url, body, headers = {}) {
    return axios.put(this.configuration.host + url, body, Common.getHeaders(headers))
      .then(({data}) => Promise.resolve(data));
  }

  /**
   * @description Runs DELETE request.
   * @param url
   * @param headers = {}
   * @return {Promise}
   */
  deleteRequest(url, headers = {}) {
    return axios.delete(this.configuration.host + url, Common.getHeaders(headers))
      .then(({data}) => Promise.resolve(data));
  }

  /**
   * @description Returns Axios object.
   * @param config
   * @returns {*}
   */
  static retry(config) {
    return axios(config)
      .then((res) => {
        console.info('[sdk/com] - request successfully retried.');
        return Promise.resolve(res);
      })
      .catch((e) => {
        console.error('[sdk/com] - error durring retry.', e);
        return Promise.reject(e);
      })
  }

  /**
   * @description Call refresh token callback.
   * @param callback
   */
  static refreshToken(callback) {
    console.log('[sdk/com] - great, you have set your own refresh token logic.');
    axios.interceptors.response.use((response) => response, (error) => {
      console.log('[sdk/com] - custom refresh token function will be called');
      return callback(error)
        .then((response) => Promise.resolve(response))
        .catch((error) => Promise.reject(Errors.getMessage(error.response)));
    });
  }

  /**
   * @description Add common headers.
   * @param headers
   */
  static addCommonHeaders(headers) {
    Object.assign(axios.defaults.headers.common, headers);
  }

  /**
   * @description Delete common headers from array.
   * @param headers
   */
  static deleteCommonHeaders(headers) {
    let newHeader = {};
    Object.keys(axios.defaults.headers.common).forEach((commonKey) => {
      headers.forEach((deleteKey) => {
        if (commonKey.toLowerCase() !== deleteKey.toLowerCase()) {
          newHeader[commonKey] = axios.defaults.headers.common[commonKey];
        }
      })
    });
    axios.defaults.headers.common = newHeader;
    console.log(`[sdk/com] - header(s) ${headers} removed, current headers: `, axios.defaults.headers.common);
  }

  /**
   * @description Get formatted header object.
   * @param headers
   */
  static getHeaders(headers = {}) {
    return {headers: Object.assign(headers, axios.defaults.headers.common)};
  }

  /**
   * @description Format Urls.
   * @param url
   * @param values
   */
  static formatUrl(url, values) {
    const urlTmp = stimmy(url, values);
    if (urlTmp.includes('{') || urlTmp.includes('}')) {
      return Promise.reject({error: {name: 'Oups...', message: `Url parameter missing: ${urlTmp}`}});
    }
    return urlTmp;
  }
}
