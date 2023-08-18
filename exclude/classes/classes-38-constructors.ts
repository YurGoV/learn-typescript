
class User38 {
    name: string;

    // overload (ts only)
    constructor()
    constructor(name: string)
    constructor(name?: string) {
        if (typeof name === 'string') { this.name = name }
    }
}

const user38 = new User38('Joe')
const user38_2 = new User38('Joe')


class User38b {
    name: string;
    age: number;

    // overload (ts only)
    constructor()
    constructor(name: string)
    constructor(age: number)
    constructor(name: string, age: number)
    constructor(nameOrAge?: string | number, age?: number) {
        if (typeof nameOrAge === 'string') { this.name = nameOrAge }
        if (typeof nameOrAge === 'number') { this.age = nameOrAge }
        if (typeof age === 'number') { this.age = age }
    }
}

const user38b = new User38b('Joe')
const user38_2b = new User38b('Joe')
const user38_2c = new User38b('Joe', 33)
