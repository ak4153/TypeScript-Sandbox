//generics

interface ApiData {
  email: string;
  username: string;
}

const prm: Promise<ApiData> = new Promise((resolve, reject) => {
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

function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
const mergeObj = merge({ name: 'Alex' }, { age: 29 });
console.log(mergeObj.age);

interface Lengthy {
  length: number;
  split: Function;
}
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  const description = element.length + '  elements';
  console.log(element.split(''));
  return [element, description];
}
console.log(countAndDescribe('hello'));

interface Obj {
  [name: string]: string;
}

function extract<T extends Obj>(obj: T, key: string) {
  return 'value  ' + obj[key];
}
console.log(extract({ email: 'aaa@ssss' }, 'email'));
