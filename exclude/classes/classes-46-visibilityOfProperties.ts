class Vehicle {
  public make: string;

  //NOTE: 'private' word - in ts only
  private _model: string;

  // NOTE: accesseble only in this class. not in childs
  private damages: string[];

  // NOTE: !accessible in chils classes also
  protected run: number;

  // NOTE: private in runtime also
  #price: number;

  set model(m: string) {
    this._model = m;
    this.#price = 100;
  }

  get model() {
    return this._model;
  }

  // addDamage(d: string) {
  private addDamage(d: string) {
    this.damages.push(d);
  }

  // NOTE: ???!!!!! 12min ov video chek if equal
  isPriceEqual(v: Vehicle) {
    return this.#price === v.#price;
  }
}

// new Vehicle().
// new Vehicle().damages
// new Vehicle().price;

class EuroTrack extends Vehicle {
  setDamage() {
    //this.
    //NOTE: we also can't access there to private properties
    //of Vecicle
  }

  setRunInMiles(r: number) {
    this.run = r / 0.62; // NOTE: accessible in chils class
    // NOTE: this.#price = 160; //error
    // this.damages // error
  }
}

// NOTE: recomendations:
// on backens (as it's run wighout foriegn access) - use private
// on front - # (on private dtat, to avoid of access by external scripts)
// (chrome extensions for example)
