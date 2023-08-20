"use strict";
function groupData(data, key) {
    // return null;
    const valuesSet = new Set(data.map(el => el[key]));
    const uniqueKeysValues = Array.from(valuesSet);
    // console.log(uniqueKeysValues);
    const res = uniqueKeysValues.reduce((acc, value) => {
        // const valueStr = value.toString();
        const filteredData = data.filter(element => element[key] === value);
        // console.log(filteredData);
        // acc[valueStr] = filteredData;
        acc[value] = filteredData;
        return acc;
    }, {});
    // console.log(res);
    return res;
}
const dataD = [
    { id: 2, name: 'Петя' },
    { id: 1, name: 'Вася' },
    { id: 1, name: 'Lola' },
    { id: 3, name: 'Надя' },
    { id: 3, name: 'Serg' },
    { id: 1, name: 'Serg' },
];
console.log(groupData(dataD, 'id'));
// groupData(dataD, 'name');
//# sourceMappingURL=manipulOfTypes-71-exercise.js.map