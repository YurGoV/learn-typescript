interface IUserServise {
  users: number
  getUsersInDb(): number
}

// NOTE: ?? only there. in src all ok
@nullUser
@threeUsersAdvanced
class UserService implements IUserServise {
  users: number = 100;
  // users: number;

  getUsersInDb(): number {
    return this.users;
  }
}

function nullUser(target: Function) {
  target.prototype.users = 0;
}

function threeUsersAdvanced<T extends { new(...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    users = 3;
  };
}

console.log(new UserService().getUsersInDb());
