interface Prototype<T> {
  clone(): T;
}

class UserHistory implements Prototype<UserHistory> {
  createdAt: Date;

  constructor(
    public email: string,
    public name: string,
  ) {
    this.createdAt = new Date();
  }

  clone(): UserHistory {
    let target = new UserHistory(this.email, this.name);
    target.createdAt = this.createdAt;
    return target;
  }
}

let user = new UserHistory('u@u.ua', 'YVG');
console.log(user);
let user2 = user.clone();
console.log(user2);
user2.email = 'u2@u.ua';
console.log('after email resetted:');
console.log(user);
console.log(user2);

// NOTE: console output: (user !== user2)
//
//UserHistory {
//   email: 'u@u.ua',
//   name: 'YVG',
//   createdAt: 2024-02-19T15:05:47.058Z
// }
// UserHistory {
//   email: 'u@u.ua',
//   name: 'YVG',
//   createdAt: 2024-02-19T15:05:47.058Z
// }
// after email resetted:
// UserHistory {
//   email: 'u@u.ua',
//   name: 'YVG',
//   createdAt: 2024-02-19T15:05:47.058Z
// }
// UserHistory {
//   email: 'u2@u.ua',
//   name: 'YVG',
//   createdAt: 2024-02-19T15:05:47.058Z
// }
