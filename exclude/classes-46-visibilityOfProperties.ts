class Vehicle {
  public make: string;

  //NOTE: 'private' word - in ts only
  private _model: string;

  // accesseble only in this class. not in childs
  private damages: string[];

  // accessible in chils classes also
  protected run: number;

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

  //???!!!!! 12min ov video chek if equal
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
    this.run = r / 0.62;// accessible in chils class
    // this.#price = 160; //error
    // this.damages // error
  }
}
