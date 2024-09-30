// JSON (JavaScript Object Nation)
// JSON muloto 2 ti kace use kora hoy 

/*
1. object ka string a convert korte. 

2. string k object a convert korte.

*/

const obj = {
    name: 'shofia',
    age: 18,
    hoddies: ['runnig', 'football', 'batmenton'],
    address: {
        city: 'BD',
        state: 'Chittagong',
        road: 'B/A12'
    },
};

const conStr = JSON.stringify(obj);
// console.log(conStr);
const conObj = JSON.parse(conStr);
console.log(conObj);