"use strict";
// NOTE: arrays
//
const skills = ['dev', 'devops'];
for (const skill of skills) {
    console.log(skill.toUpperCase());
}
const res = skills
    .filter((s) => s !== 'devops')
    // .filter(( s: number )  => s !== 'devops')
    .map(s => s + '! ')
    .reduce((a, b) => a + b);
console.log(res);
// NOTE: objects
// 
// function getFullName(fn: string, sn: string): string {
//     return `${fn} ${sn}`
// }
// const getFullNameArrow = (fn: string, sn: string): string => {
//     return `${fn} ${sn}`
// }
//
//
// function getFullObjectName(userEntity: { firstName: string, surname: string }): string {
//     return `${userEntity.firstName} ${userEntity.surname}`
// }
//
// const user = {
//     firstName: 'Yuriy', // less is bad (if commented - we have an error)
//     surname: 'Gomenyuk',
//     city: 'Dnipro', // more wide is good
//     zip: 49000,
//     skills: {
//         dev: true,
//         devops: false
//     }
// }
//
// console.log(getFullObjectName(user))
// let revenue: number = 1000
// let bonus: number = 500
// let res: number = revenue + bonus
//
// console.log(res)
