class User41 {
  _login: string;

  password: string;

  createAt: Date;

  set login(l: string | number) {
    // NOTE: only sync operations in getters & setters
    this.login = 'user-' + l;
    this.createAt = new Date();
    //good if we need in side effects
  }

  // NOTE: if only getter (without setter), the 'login' will be readonly
  // return type of getter - as input types in setter
  get login() {
    return this.login;
  }

  async setLogin(l: string) {
    // NOTE: if we need async-await - can do it in methoods, not in getters/setters
  }
}
