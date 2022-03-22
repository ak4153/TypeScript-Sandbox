"use strict";
//generics
const prm = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ email: '123@233', username: 'alex' });
    }, 2000);
});
prm
    .then((data1) => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve(data1);
        }
    });
})
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
    .finally(() => console.log('successfully complete promise'));
//making a generic function
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergeObj = merge({ name: 'Alex' }, { age: 29 });
console.log(mergeObj.age);
function countAndDescribe(element) {
    const description = element.length + '  elements';
    console.log(element.split(''));
    return [element, description];
}
console.log(countAndDescribe('hello'));
function extract(obj, key) {
    return 'value  ' + obj[key];
}
console.log(extract({ email: 'aaa@ssss' }, 'email'));
