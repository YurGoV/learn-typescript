class Payment {
  private date: Date = new Date();

  getDate() {
    return this.date;
  }

  getDateWithThis(this: Payment) {
    return this.date;
  }

  //also to avoid of loose context we can use an arrow func:
  getDateArrow = () => {
    return this.date;
  };
}

const p = new Payment();

const user = {
  id: 1,
  paymentDate: p.getDate,
  paymentDateBinded: p.getDate.bind(p),
  paymentDateWithThis: p.getDateWithThis,
  paymentDateArrow: p.getDateArrow,
};

console.log(p.getDate());
console.log('upD ', user.paymentDate()); // undefind & we have NO error in ts
console.log('upDB ', user.paymentDateBinded());
// console.log('upDWT ',user.paymentDateWithThis());// undefind & we HAVE error in ts
console.log('upDA ', user.paymentDateArrow());

//NOTE: !!!!?????? but:
class PaymentPersisted extends Payment {
  save() {
    // return super.getDate();
    // return super.getDateArrow() // we have an error = is not a function
    return this.getDateArrow(); // no error
  }
}
