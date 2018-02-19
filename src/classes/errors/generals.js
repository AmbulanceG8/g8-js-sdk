import Common from './common';

export default class Customs {
  static getMessage(response) {
    if (response.status === 400) { return Common.formatError('Oups...', 'La syntaxe de la requête est erronée.'); } else if (response.status === 401) { return Common.formatError('Oups...', 'Authentification nécessaire pour accéder à la ressource.'); } else if (response.status === 404) { return Common.formatError('Oups...', 'Ressource non trouvée.'); } else if (response.status === 500) { return Common.formatError('Oups...', 'Erreur interne du serveur.'); }
    return Common.formatError('Oups...', 'Une erreur inattendue est survenue.');
  }
}
