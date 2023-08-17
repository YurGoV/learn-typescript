class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

// inheritance there not good
// - we mix utilitary & business types
class Users extends Array<User> {
  searchByName(name: string) {
    return this.filter(u => u.name === name);
  }
}


const users = new Users();
users.push(new User('Joe'));
console.log(users.toString()); // error = [object][object]

//composition there more better: (its no composition there now)
class UserList {
  users: User[];

  push(u: User) {
    this.users.push(u);
  }
}

// bad:
class Payment {
  date: Date;
}
class UserWithPayment extends Payment {
  name: string;
}
//better (composition):
class UserWithPaymentComposition {
  user: User;

  payment: Payment;

  constructor(user: User, payment: Payment) {
    this.user = user;
    this.payment = payment;
  }
}


// NOTE: inheritance best when we do it in one domain
