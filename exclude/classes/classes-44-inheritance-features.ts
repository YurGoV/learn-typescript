class User44 {
  name: string = 'user';

  constructor() {
    console.log(this.name);
  }
}

class Admin44 extends User44 {
  override name: string = 'admin';

  constructor() {
    super();
    console.log(this.name);
  }
}

new Admin44();

class HttpError extends Error {
  code: number;

  constructor(message: string, code?: number) {
    super(message);
    this.code = code ?? 500;
  }
}
