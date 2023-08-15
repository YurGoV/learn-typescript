
//NOTE: Asserts
interface IUser_as {
    name: string
}
const a_as = {}// for example we get it from request & dont known what it is

assertUser(a_as)
a_as.name = 'Joe'

function assertUser(obj: unknown): asserts obj is IUser_as {
    if (typeof obj === 'object' && !!obj && 'name' in obj){
        return
    }
    throw new Error('not user')
}

//NOTE: typeguard

interface IUser_tg {
    name: string,
    email: string,
    login: string
}
const user_tg: IUser_tg = {
    name: 'Joe',
    email: 'mail@com.com',
    login: 'joe'
}
interface IAdmin_tg {
    name: string,
    role: number
}

function logId_tg(id: string | number) {
    if (typeof id === 'string') {
        console.log(id)
    } else {
        console.log(id)
    }
}

function isString_tg(x: string | number): x is string {
    return typeof x === 'string'
}
function logId_tg_(id: string | number) {
    if (isString_tg(id)) {
        console.log(id)
    } else {
        console.log(id)
    }
}

//
function isAdmin_tg(user: IUser_tg | IAdmin_tg): user is IAdmin_tg {
    return 'role' in user
}
function setRoleZero_tg(user: IUser_tg | IAdmin_tg) {
    if (isAdmin_tg(user)) {
        user.role = 0
    } else {
        throw new Error('user is not admin')
    }
}
//
function isAdmin_tgAlternative(user: IUser_tg | IAdmin_tg): user is IAdmin_tg {
    return (user as IAdmin_tg).role !== undefined
}

//NOTE: casting types
let aCast = 5
let bCast: string = aCast.toString()
let eCast: string = new String(aCast)
let cCast: string = new String(aCast).valueOf()// carefull
let dCast: boolean = new Boolean(aCast).valueOf()// carefull

let mCast = 'lalala'
let nCast: number = parseInt(mCast)

interface IUser_cast {
    name: string,
    email: string,
    login: string
}
const user_cast: IUser_cast = {
    name: 'Joe',
    email: 'mail@com.com',
    login: 'joe'
}
interface IAdmin_cast {
    name: string,
    role: number
}
const notGoodAdmin_cast: IAdmin_cast = {
    ...user_cast,
    role: 1
}// not good - we put email & login to admin, which not have them in interface
// better make like this:
function userToAdmin_cast(user: IUser_cast): IAdmin_cast {
    return {
        name: user.name,
        // or // name: user.login
        role: 1
    }
}


// NOTE: null
const null1: null = null
const null2: any = null
const null3: number = null
const null4: string = null
const null5: boolean = null
const null6: undefined = null

//strictNullCheck
interface IUser_null {
    name: string
}
function getUser_null() {
    if (Math.random() > 0.5) {
        return
    } else {
        return {
            name: 'Joe'
        } as User
    }
}
const user_null = getUser_null()
const user_null_name = user_null.name// this error not seen if strictNullCheck is off 

// NOTE: Never

//1
function generateError(message: string): never {
    throw new Error(message)
}
//2
function dumpError(): never {
    while (true) { }
}
//3 infinity reccursion
function rec(): never {
    return rec()
}
//
const aNever: never = null
const bNever: never = undefined
const cNever: never = 3

const uNever: void = undefined

//exapmle real case:
type paymentAction = 'refund' | 'checkout'
// if we add new:
// type paymentAction = 'refund' | 'checkout' | 'reject'
function processAction = (action: paymentAction) {
    switch (action) {
        case 'refund':
            //
            break
        case 'checkout':
            //
            break
        default:
            const _: never = action// then we have an erroe there | '_' => to ts no error 'unused var'
            throw new Error('there no such action')
    }
}

//exapmle real case II:
function isString(x: string | number): boolean {
    if (typeof x === 'string') {
        return true
    } else if (typeof x === 'number') {
        return false
    }
    // generateError('unexpected type of x') // this fix an error
}


//NOTE: Unknown
let input: unknown
input = 2
input = ['ss', 'aa']

let resUnknown: string = input
// unknown is more strong than any
let resAny: any = input

//casting types example:
function run(i: unknown) {
    if (typeof i === 'number') {
        i++
    } else {
        i // i is still unknown there
    }
}
run(input)

//real case
async function funcUnknown() {
    try {
        await fetch('l')
    } catch (e) { // after ts 4.4 error have inknown type
        console.log(e.message)
        //therefore we must check error type:
        if (e instanceof Error) { console.log(e.message) }
    }
}
async function funcUnknownForce() {
    try {
        await fetch('l')
    } catch (e) {
        const err = e as Error// there we cast error as Error !!! be very carefull there!!!
        if (e instanceof Error) { console.log(e.message) }
        console.log(err.message)
    }
}

// union unknown with any other type give unknown:
type T1 = unknown | string // T1 type is unknown there
// intersection unknown with any other type give this other type


//NOTE: Void
// 
// void - if function no return
function logIdVoid(id: string | number): void {
    console.log(id)
}
function multiplyVoid(numOne: number, numTwo?: number): number {
    // function multiplyVoid(numOne: number, numTwo?: number): number | undefined { // no error. if we return smth - there no void there
    if (!numTwo) { return numOne * numOne }
}

//one more void case:
type voidFunc = () => void
const f1: voidFunc = () => { }
const f2: voidFunc = () => {
    return true
}
// function with void return can return anythind, but result will be
// ignored
const resVoid = f2()

const skillsVoid = ['dev', 'devops']
const usersVoid = {
    s: ['s']
}
skills.forEach((skill) => usersVoid.s.push(skill))

//NOTE: Optional
interface IUserOpt {
    name: string,
    id?: number
}
let userOpt1 = {
    name: 'joe',
    id: 2
}
let userOpt2 = {
    name: 'joe',
}
//
function multiply(first: number, second?: number): number {
    // return first * second  // error
    if (second) {
        return first * second
    }
    return first * first
}
// default value
function multiplyDefault(first: number, second: number = 5): number {
    return first * second
}
//optional chain:
interface IUserOCh {
    login: string,
    password?: {
        type: 'primary' | 'secondary'
    }
}
function testPass(user: IUserOCh) {
    const t = user.password?.type
    //equivalent to:
    // const t = user.password ? user.password.type : undefined
}
function testPassBeVeryCarefull(user: IUserOCh) {
    const t = user.password!.type
}

function testWithOptionalParamAndCalculatedValue(param?: number): number {
    //if is param - return param. else return calculated value
    return param ?? multiply(5)
}

//NOTE: interface OR type?
//
//merge definition in interface (not work with types):
interface IUserMerge {
    name: string
}
interface IUserMerge {
    age: number
}
let userWithMergeInterface: IUserMerge = {
    name: 'Joe',
    age: 43
}

//unions & intersection work with type (primitive types) (not word with interfaces)
type ID = string | number


// conclusion - interfaces with objects & classes, type with primitive types

// NOTE: interface

interface IUser {
    name: string,
    age: number,
    skills: string[]
}
let UserWithInterface: IUser = {
    name: 'john',
    age: 30,
    skills: ['1', '2']
}
// like intersection:
interface IUserWithRole extends User {
    roleId: number
}
// //or:
// interface IRole {
//     roleId: number
// }
// interface IUserWithRole extends User, IRole {
// //there we can put more(or not))
// }

let userWighRoleByInterface: IUserWithRole = {
    name: 'john',
    age: 30,
    skills: ['1', '2'],
    //error without roleId
    // roleId: 2
}

// with function (can do in types too):
interface IUserWithFunc {
    name: string,
    age: number,
    skills: string[],

    log: (id: number) => string
}
let UserWithInterfaceWithFunc: IUserWithFunc = {
    name: 'john',
    age: 30,
    skills: ['1', '2'],

    log(id: number) {
        return (`${id}`)
    }
}

// ????describe dictionary (can do in types too):
interface IUserDict {
    [index: number]: IUser
}
type IUserDictType = {
    [index: number]: IUser
}
// or by Record

// NOTE: Aliases
type httpMethod = 'post' | 'get'

function fetchWithAlias(url: string, methood: httpMethod): 1 | -1 {
    return 1
}

let userWighoutAlias: {
    name: string,
    age: number,
    skills: string[]
} = {
    name: 'john',
    age: 30,
    skills: ['1', '2']
}

type User = {
    name: string,
    age: number,
    skills: string[]
}
let userWighAlias: User = {
    name: 'john',
    age: 30,
    skills: ['1', '2']
}

// intersection:
type Role = {
    id: number
}
type UserWithRole = User & Role // this is intersection
let userWighRole: UserWithRole = {
    name: 'john',
    age: 30,
    skills: ['1', '2'],
    // id: 2 //this fix an error
}




// NOTE: Literal types
function fetchWithAuth(url: string, methood: 'post' | 'get'): 1 | -1 {
    return 1
    return 2
}
fetchWithAuth('ldldld', 'post')
fetchWithAuth('ldldld', 'delete')

let methood = 'get'
// becouse methood is let and can be not only 'get' value
fetchWithAuth('ldldld', methood)
const newMethood = 'get'
// becouse newMethood is const and can't be changed
fetchWithAuth('ldldld', newMethood)

// let methodForCast = 'get'
let methodForCast = 'lslsl'
fetchWithAuth('ldldld', methodForCast as 'get') // 'cast' - be very carefull



const aa = 1
let bb = 1
let cc: 1 = 1
aa = 2
bb = 2
cc = 2


// NOTE: union
function logId(id: string | number) {
    console.log(id)
    //err
    console.log(id.toLowerCase())
    //звуження типів
    if (typeof id === 'string') {
        console.log(id.toLowerCase())
    }
}

logId(1)
logId('lalala')
logId(true)

function logError(err: string | string[]) {
    if (Array.isArray(err)) {
        console.log(err)
    } else {
        console.log(err)
    }
}

function logObject(obj: { a: number } | { b: number }) {
    if ('a' in obj) {
        console.log(obj.a)
    } else {
        // err becouse no check if 'a' is present (union type)
        console.log(obj.a)
        //no error besouse wb check before that is no 'a' there => there 'b' is.
        console.log(obj.b)
    }
}

function logMultiplayIds(a: string | number, b: string | boolean) {
    //because there string in both 'a' and 'b' =>
    if (a === b) {
        // => we can access to 'a' as to string
        a.toLowerCase()
    } else {
        // number or string can be there
        console.log(a.toLowerCase())
        // string or boolean can be there
        console.log(b.toLowerCase())
    }
}

const a = 1
let b = 1
let c: 1 = 1
a = 2
b = 2
c = 2


