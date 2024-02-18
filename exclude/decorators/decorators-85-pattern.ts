interface IUserServise {
  users: number
  getUsersInDb(): number
}

class UserService implements IUserServise {
  users: number = 100;

  getUsersInDb(): number {
    return this.users;
  }
}

function nullUser(obj: UserService) {
  obj.users = 0;

  return obj;
}

function logUser(obj: UserService) {
  console.log(obj.users);

  return obj;
}

console.log(new UserService().getUsersInDb());
console.log(nullUser( new UserService() ).getUsersInDb());

console.log('-----');
console.log(logUser( nullUser( new UserService() ) ).getUsersInDb());
console.log('-----');
console.log(nullUser( logUser( new UserService() ) ).getUsersInDb());
