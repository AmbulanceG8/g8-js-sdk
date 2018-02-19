export default class Common {
  static formatError(name, message) {
    return {error: {name, message}};
  }
}
