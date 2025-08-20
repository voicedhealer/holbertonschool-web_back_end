import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // Getter & setter for amount
  get amount() {
    return this._amount;
  }
  set amount(val) {
    this._amount = val;
  }

  // Getter & setter for currency
  get currency() {
    return this._currency;
  }
  set currency(val) {
    this._currency = val;
  }

  // displayFullPrice method
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  // static method convertPrice
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
