export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  // Conversion en Number
  valueOf() {
    return this.size;
  }

  // Conversion en String
  toString() {
    return this.location;
  }
}
