"use strict";
function printName(fullName) {
    console.log(`name:${fullName.first},${fullName.last} `);
}
printName({ first: 'alex', last: 'kreizi' });
function returnString(str) {
    return str;
}
function makeMeReturnString() {
    let a = 'alex';
    return typeof a === 'string' ? returnString(a) : returnString('failsafe');
}
//assertions
const myCanvas = document.getElementById('main_canvas');
function flex(a) {
    console.log(a.justifyContent);
}
flex({ justifyContent: 'center' });
//NULL UNDEFINED
//checks need to be done with assertions
function isNullChecked(x) {
    if (x === null)
        console.log('null');
    else {
        console.log('Hello, ' + x.toUpperCase());
    }
}
//or ! assertion for checking null/undefined
function isNullCheckedPostfix(x) {
    return console.log('Hello, ' + x.toUpperCase());
}
