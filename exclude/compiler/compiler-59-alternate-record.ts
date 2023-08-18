//NOTE: to modificators of properties

class User {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
}

// NOTE: alternate record:

class UserAlternate {
  constructor(public name: string) { }
  // OR
  // constructor(private pName: string) { }
}
