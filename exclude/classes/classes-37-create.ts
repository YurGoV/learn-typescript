class User37 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const user37 = new User37('Joe');
console.log(user37);
user37.name = 'Jimmy';
console.log(user37);

class Admin37 {
  role: number;
  // to fix error:  Property 'role' has no initializer and is not definitely assigned in the constructor. [2564]
  // - we can set up in tsconfig.json value:
  // "strictPropertyInitialization": false
  // => becouse very offen we used classes as interfaces (with or without decorators)
}
const admin37 = new Admin37();
admin37.role = 1;
