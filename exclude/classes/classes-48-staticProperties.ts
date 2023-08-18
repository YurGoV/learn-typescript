// NOTE: we not need to create instance to 
// refer to static ptoperty
class UserService {
  static db: any;

  id: number;

  private static dbPrivate: any;

  static getUser(id: number) {
    return this.dbPrivate.findById(id);
  }

  // constructor work only in instanse
  constructor(id: number) {
    this.id = id;
  }

  // not accessable without incstance
  create() {}

  getUserFromStatic(id: number) {
    return UserService.dbPrivate.findById(id); //there we can access in instanst to static property
  }

  // NOTE: executed immediatly when we refer to any static property
  // no any async/await there
  static { 
    UserService.db = ['lslsls', 'ndndnd', 'weewew'];
  }
}

UserService.db.findById(3);
UserService.getUser(3);
UserService.create();// not accessable without incstance
const instanse = new UserService();
instanse.create();// no error therjoe
instanse.getUser();// we loose static properties/methoods in instanse
instanse.getUserFromStatic(5); //there we can access in instanst to static property
