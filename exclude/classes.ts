
class User {
    name: string;

    constructor(name: string) {
        this.name = name
    }
}

const user = new User('Joe')
console.log(user)
user.name = 'Jimmy'
console.log(user)

class Admin {
    role: number
    // to fix error:  Property 'role' has no initializer and is not definitely assigned in the constructor. [2564]
    // - we can set up in tsconfig.json value:
    // "strictPropertyInitialization": false
    // => becouse very offen we used classes as interfaces (with or without decorators)
}
const admin = new Admin
admin.role = 1

