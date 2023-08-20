interface IUser {
  name: string
  age: number
}

type KeyOfUser = keyof IUser;

const key_: KeyOfUser = 'age';

function getValue<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const user: IUser = {
  name: 'Joe',
  age: 40,
};

const userName = getValue(user, 'name');
const userName2 = getValue(user, 'namee');
