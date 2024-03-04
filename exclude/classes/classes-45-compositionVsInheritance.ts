class User45 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

// inheritance there not good
// - we mix utilitary & business types
class Users extends Array<User45> {
  searchByName(name: string) {
    return this.filter((u) => u.name === name);
  }

  //  - not good, but replase [object][object]...
  // override toString(): string {
  //   return this.map((u) => u.name).join(', ');
  // }
}

const users = new Users();
users.push(new User45('Joe'));
console.log(users.toString()); //  = [object][object]

//composition there more better: (its no full composition there now, becouse only one element)
class UserList {
  users: User45[];

  push(u: User45) {
    this.users.push(u);
  }
}

// bad: (we mix different domains)
class Payment45 {
  date: Date;
}
class UserWithPayment extends Payment45 {
  name: string;
}

//better (composition):
// composition there - it's some agregation class 
// without hard links/mix user & payment
class UserWithPaymentComposition {
  user: User45;

  payment: Payment45;

  constructor(user: User45, payment: Payment45) {
    this.user = user;
    this.payment = payment;
  }
}

// NOTE: inheritance best when 
// we do it in one domain
