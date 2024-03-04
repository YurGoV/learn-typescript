class User38 {
  name: string;

  // overload (ts only)
  constructor();
  constructor(name: string);
  // constructor of implementation (can require all up constructors):
  constructor(name?: string) {
    if (typeof name === 'string') {
      this.name = name;
    }
  }
}

// NOTE: overload result - we can create class with || without arguments
const user38 = new User38('Joe');
const user38Two = new User38();

class User38b {
  name: string;

  age: number;

  // overload (ts only)
  constructor();
  constructor(name: string);
  constructor(age: number);
  constructor(name: string, age: number);
  // to avoid many if-s  overload good for 1-3 realizations
  // constructor of implementation (can require all up constructors):
  constructor(nameOrAge?: string | number, age?: number) {
    if (typeof nameOrAge === 'string') {
      this.name = nameOrAge;
    }
    if (typeof nameOrAge === 'number') {
      this.age = nameOrAge;
    }
    if (typeof age === 'number') {
      this.age = age;
    }
  }
}

const user38bEmpty = new User38b();
const user38b = new User38b('Joe');
const user38bTwo = new User38b('Joe');
const user38bThree = new User38b('Joe', 33);
