

// NOTE: task

enum QuestionStatus {
    PUBLISHED = 'published',
    DRAFT = 'draft',
    DELETED = 'deleted'
}

async function getFaqs(req: {
    topicId: number,
    status?: QuestionStatus
}): Promise<{
    question: string,
    answer: string,
    tags: string[],
    likes: number,
    status: QuestionStatus
}[]> {
    const res = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req)
    });
    const data = await res.json();
    return data;
}



//NOTE: enums

// 1 - success
// 2 - in process
// 3 - rejected

enum StatusCode {
    SUCCESS = 1,
    IN_PROCESS,
    REJECTED
}

const res = {
    message: 'payment successed',
    statusCode: StatusCode.SUCCESS
}

enum StatusCodeLetDig {
    SUCCESS = 1,
    IN_PROCESS = 'p',
    REJECTED = 's'
}

function action(status: StatusCodeLetDig) { }
action(StatusCodeLetDig.SUCCESS)
action(1)
//errors there:
action('p')
action(StatusCodeLetDig.REJECTED)

//const enums:
const enum Roles {
    ADMIN = 1,
    USER = 2,
}
const adminRole = Roles.ADMIN


//NOTE: readonly

const skillSimple:  [number, string] = [1, 'devops']
const skillRo: readonly [number, string] = [1, 'devops']
const skillsRo: readonly string[] = ['lalala', 'lololo']

skillSimple[0] = 2
//errors there:
skillRo[0] = 2
skillsRo[0] = 2
skillsRo.push('lololi')

//alternate rec of array:
const arr: Array<string> = ['d','b']
const arrRo: ReadonlyArray<string> = ['d', 'r']

// NOTE: tupples
//1
const skill: [number, string] = [1, 'devops']
// const id = skill[0]
// const proffession = skill[1]
// or:
const [id, proffession] = skill

//errors there:
const some = skill[2]
//but:
skill.push('some text')
// but also:
const someNew = skill[2]

//2
const tappleWithSpred:  [number, string, ...boolean[]] = [1, 'lslsls', true, false, true]
//or
const tappleWithDeclaredSpred:  [number, string, ...boolean[]] = [1, 'lslsls']


// NOTE: arrays

const skills: string[] = ['dev', 'devops']
for (const skill of skills) {
    console.log(skill.toUpperCase())
}

const ArrRes = skills
    .filter((s: string) => s !== 'devops')
    // .filter(( s: number )  => s !== 'devops')
    .map(s => s + '! ')
    .reduce((a, b) => a + b)

console.log(ArrRes)


// NOTE: objects
// 
function getFullName(fn: string, sn: string): string {
    return `${fn} ${sn}`
}
const getFullNameArrow = (fn: string, sn: string): string => {
    return `${fn} ${sn}`
}


function getFullObjectName(userEntity: { firstName: string, surname: string }): string {
    return `${userEntity.firstName} ${userEntity.surname}`
}

const user = {
    firstName: 'Yuriy', // less is bad (if commented - we have an error)
    surname: 'Gomenyuk',
    city: 'Dnipro', // more wide is good
    zip: 49000,
    skills: {
        dev: true,
        devops: false
    }
}

console.log(getFullObjectName(user))

let revenue: number = 1000
let bonus: number = 500
let objRes: number = revenue + bonus

console.log(objRes)
