"use strict";
let alex = {
    name: 'alex',
    age: 29,
    hobbies: ['poop'],
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    },
};
alex.greet('hi');
//form a class using the interface blueprint
class Person {
    constructor(name = 'default') {
        this.name = name;
    }
    greet(phrsae) {
        console.log(phrsae + this.name);
    }
}
const person1 = new Person();
person1.greet('bonjour');
const flexFlow = (flexType, properties) => {
    console.log(properties, flexType);
};
const flexBox = (direction) => {
    console.log('type = flexBox direction: ' + direction);
};
flexBox('center');
