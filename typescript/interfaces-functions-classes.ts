interface PersonInterface {
  name: string;
  age: number;
  hobbies: string[];
  greet(phrase: string): void;
}

let alex: PersonInterface = {
  name: 'alex',
  age: 29,
  hobbies: ['poop'],
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  },
};

alex.greet('hi');

interface Named {
  name?: string;
}
interface Greetable extends Named {
  greet(phrsae: string): void;
}
//form a class using the interface blueprint
class Person implements Greetable {
  name: string;
  constructor(name: string = 'default') {
    this.name = name;
  }
  greet(phrsae: string): void {
    console.log(phrsae + this.name);
  }
}
const person1 = new Person();

person1.greet('bonjour');
//function interface
interface FuncInterface {
  (flexType: string, properties: string): void;
}

const flexFlow: FuncInterface = (flexType, properties) => {
  console.log(properties, flexType);
};

//function type
type justifyContent = 'flex-end' | 'center';

type FuncMadeWithType = (justifyContent: justifyContent) => void;

const flexBox: FuncMadeWithType = (direction) => {
  console.log('type = flexBox direction: ' + direction);
};

flexBox('center');
