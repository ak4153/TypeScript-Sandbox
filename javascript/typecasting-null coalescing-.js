"use strict";
//intersecting types
var _a;
//similar to bits
//  0 0 0 0 1 1 1
//&
//  1 0 0 1 0 0 0
//=
//  0 0 0 0 1 1 1
const x = 5;
const box1 = { width: 10, height: 20 };
const box2 = { width: 10, height: 20, combination: '1337' };
function useLocker(box) {
    if ('combination' in box)
        console.log('password?...');
}
useLocker(box2);
const inputBox = document.getElementById('inputBox');
inputBox.value = 'hello world';
const error = { email: 'invalid', username: 'invalid' };
console.log('error: ' + error.email);
//optional chaining
const fetchedData = {
    userName: 'user',
    email: 'sss@sss.com',
    cart: ['cheese'],
};
//instead of  fetchedData && fetchedData.cart
// console.log('fetched data: ', fetchedData?.cart);
//null coalescing
console.log((_a = fetchedData.cart) !== null && _a !== void 0 ? _a : 'default');
