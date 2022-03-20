"use strict";
function addTwo(n1, n2) {
    return n1 + n2;
}
let funky2 = addTwo;
console.log(funky2(1, 3));
function callBack(params) {
    console.log(params);
}
function addAndHandle(n1, n2, callBack) {
    callBack(n1 + n2);
}
let addAndHandleWrapper;
addAndHandleWrapper = addAndHandle;
addAndHandleWrapper(222, 7, callBack);
