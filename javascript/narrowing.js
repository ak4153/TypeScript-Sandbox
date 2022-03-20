"use strict";
function marginLeft(x) {
    if (typeof x === 'number') {
        return ''.repeat(x);
    }
    return x + ' string';
}
marginLeft(3);
function iterate(str) {
    return typeof str === 'string' ? str.toUpperCase() : null;
}
//type predicate
//<variable> is <type> variable has to be from the functions signature
function move(animal) {
    if ('swim' in animal)
        return false;
    else {
        return animal.swim !== undefined;
    }
}
//Exhaustivness checking with never
//because types cannot be assigned to "never", the default
//will alarm that all checks are exhausted
function getArea(shape) {
    switch (shape.kind) {
        case 'circle':
            return 3.14 * shape.radius ** 2;
        case 'square':
            return shape.sideLength ** 2;
        default:
            const _exhaustiveCheck = shape;
            return _exhaustiveCheck;
    }
}
getArea({ kind: 'triangle', sideLength: 5 });
