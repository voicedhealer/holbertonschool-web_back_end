export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    // Vérifie si la classe fille override la méthode evacuationWarningMessage
    if (this.constructor !== Building &&
        typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }
}
