class UserBuilder {
  name: string;

  setName(name: string) {
    this.name = name;
    return this;
  }

  isAdmin(): this is AdminBuilder {
    return this instanceof AdminBuilder; //??? error
  }
}

class AdminBuilder extends UserBuilder {
  // roles: string[]; // if no differences - we can't check...
}

const res = new UserBuilder().setName('Joe');
const res2 = new AdminBuilder().setName('Joe');

let user: UserBuilder | AdminBuilder = new UserBuilder();

if (user.isAdmin()) {
  console.log(user);
} else {
  console.log(user);
}


// NOTE: chat GPT:
// Type Checking in isAdmin(): You're trying to use the instanceof operator to check whether an object is an 
// instance of AdminBuilder, but TypeScript's type system doesn't have runtime type information. 
// Therefore, the instanceof AdminBuilder check won't work as expected. You need to use a different 
// approach to achieve this. Circular Dependency Issue: You're referencing AdminBuilder in the 
// UserBuilder class, and vice versa. This creates a circular dependency that can lead to issues. 
// You also mentioned a "no-use-before-define" error, which likely relates to this circular dependency. 
// Fixing "inBuilder' was used before it was defined": This error is likely because you're using the 
// AdminBuilder type before it's defined. This is a result of the circular dependency issue. 
// Here's a refactored version of your code that addresses these issues:

class FixedUserBuilder {
  fixedName: string;

  setFixedName(name: string) {
    this.fixedName = name;
    return this;
  }

  isFixedAdmin(): boolean {
    return false; // FixedUserBuilder is not an admin
  }
}

class FixedAdminBuilder extends FixedUserBuilder {
  fixedRoles: string[];

  constructor() {
    super();
    this.fixedRoles = [];
  }

  isFixedAdmin(): boolean {
    return true; // FixedAdminBuilder is an admin
  }
}

const resF = new FixedUserBuilder().setFixedName('Joe');
const res2F = new FixedAdminBuilder().setFixedName('Joe');

let userF: FixedUserBuilder = new FixedUserBuilder();
let userAdminF: FixedUserBuilder = new FixedAdminBuilder();

if (userAdminF.isFixedAdmin()) {
  console.log('Fixed Admin User:', userAdminF);
} else {
  console.log('Fixed Regular User:', userAdminF);
}
