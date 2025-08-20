export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Getter et setter pour name
  get name() {
    return this._name;
  }
  set name(val) {
    this._name = val;
  }

  // Getter et setter pour code
  get code() {
    return this._code;
  }
  set code(val) {
    this._code = val;
  }

  // Méthode displayFullCurrency
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
