import Common from './common';

export default class Customs {
  static getMessage(response) {
    const {message} = response.data;
    if (message === 'BAD_CREDENTIALS_ERROR') {
      return Common.formatError('Oups...', 'Email ou mot de passe incorrect.');
    } else if (message === 'SCHEMA_VALIDATION_FAILED') {
      return Common.formatError('Oups...', 'Un paramètre semble manquer.');
    } else if (message === 'EMAIL_NOT_FOUND') {
      return Common.formatError('Oups...', 'Email introuvable.');
    } else if (message === 'PARAM_REQUIRED') {
      return Common.formatError('Oups...', 'Un paramètre semble manquer.');
    }
    return Common.formatError(response.data.name, response.data.message);
  }
}
