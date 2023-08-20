interface IHTTPresponse<T extends 'success' | 'failed'> {
  code: number;
  data: T extends 'success' ? string : Error
}

const succss: IHTTPresponse<'success'> = {
  code: 100,
  data: 'done',
};

const err: IHTTPresponse<'failed'> = {
  code: 400,
  data: new Error('custom error'),
};


class User {
  id: number;

  name: string;
}
class UserPersistend extends User {
  dbId: string;
}

// with overload
function getuser(dbId: string): UserPersistend; 
function getuser(id: number): User;
function getuser(dbIdOrId: string | number): User | UserPersistend {
  if (typeof dbIdOrId === 'string') {
    return new UserPersistend;
  } else {
    return new User;
  }
}

// with conditional types
type UserOrUserPersisted<T extends string | number> = T extends string ? UserPersistend : User;
function getuser2<T extends string | number>(id: T): UserOrUserPersisted<T> {
  if (typeof id === 'string') {
    return new UserPersistend as UserOrUserPersisted<T>;
  } else {
    return new User as UserOrUserPersisted<T>;
  }
}
