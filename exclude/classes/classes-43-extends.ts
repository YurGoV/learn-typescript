type PaymentStatus43 = 'new' | 'paid';

class Payment43 {
  id: number;

  status: PaymentStatus43 = 'new';

  constructor(id: number) {
    this.id = id;
  }

  pay() {
    this.status = 'paid';
  }
}

class PersistedPayment43 extends Payment43 {
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

  // NEW in ts - override:
  // !!!always use uverride
  override pay(date?: Date) {
    // this.status = 'paid'; // NOT GOOD
    super.pay();
    if (date) {
      this.paidAt = date;
    }
  }
}

// new PersistedPayment().
