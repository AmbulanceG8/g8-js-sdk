export default class Validation {
  /**
   * @description Validate mandatory parameters.
   * @param mandatoryParams
   * @param params
   * @return {Promise<any>}
   */
  static validateMandatoryParams(mandatoryParams, params = {}) {
    return new Promise((resolve, reject) => {
      const requestKeys = Object.keys(params);
      const missingParams = mandatoryParams.filter((attribute) => requestKeys.indexOf(attribute) < 0);
      if (missingParams.length === 1) {
        return reject({error: {name: 'Oups...', message: `Parameter "${missingParams}" is missing.`}});
      } else if (missingParams.length > 1) {
        return reject({error: {name: 'Oups...', message: `Parameter(s) "${missingParams}" are missing.`}});
      }
      return resolve(true);
    });
  }
}
