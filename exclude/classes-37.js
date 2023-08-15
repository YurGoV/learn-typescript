"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
}
const user = new User('Joe');
console.log(user);
user.name = 'Jimmy';
console.log(user);
