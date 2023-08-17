type PaymentStatus = 'new' | 'paid';

class Payment {
  id: number;

  status: PaymentStatus = 'new';

  constructor(id: number) {
    this.id = id;
  }

  pay() {
    this.status = 'paid';
  }
}

class PersistedPayment extends Payment {
  databaseId: number;

  paidAt: Date;

  // NOTE: we can (or not) redefine constructor, or make it empty
  constructor() {
    const id = Math.random();
    super(id);
  }

  save() {
    //  new method 
  }

  // NOTE: we can override method
  // pay(date?: Date) {
  //   // this.status = 'paid'; // NOT GOOD
  //   super.pay();
  //   if (date) { this.paidAt = date; }
  // }

  // NEW in js - override:
  override pay(date?: Date) {
    // this.status = 'paid'; // NOT GOOD
    super.pay();
    if (date) { this.paidAt = date; }
  }
}

// new PersistedPayment().


class User {
  name: string = 'user';

  constructor() {
    console.log(this.name);
  }
}

class Admin extends User {
  name: string = 'admin';

  constructor() {
    super();
    console.log(this.name);
  }
}

new Admin();


class HttpError extends Error {
  code: number;

  constructor(message: string, code?: number) {
    super(message);
    this.code = code ?? 500;
  }
}
