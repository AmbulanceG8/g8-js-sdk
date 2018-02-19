import Generals  from './generals';
import Customs from './customs';

export default class Errors {
  static getMessage(response) {
    if (response.data && response.data.message) return Customs.getMessage(response);
    return Generals.getMessage(response);
  }
}
