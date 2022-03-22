//intersecting types

type NumAndBool = number | boolean;
type NumAndString = number | string;

type Combined = NumAndBool & NumAndString;

//similar to bits
//  0 0 0 0 1 1 1
//&
//  1 0 0 1 0 0 0
//=
//  0 0 0 0 1 1 1
const x: Combined = 5;

//type guards when combining types
type Closet = {
  width: number;
  height: number;
};
type Locker = {
  combination: string;
  width: number;
  height: number;
};
const box1: Closet = { width: 10, height: 20 };
const box2: Locker = { width: 10, height: 20, combination: '1337' };

type Safe = Closet | Locker;

function useLocker(box: Locker) {
  if ('combination' in box) console.log('password?...');
}
useLocker(box2);

const inputBox = document.getElementById('inputBox') as HTMLInputElement;

inputBox.value = 'hello world';

interface ErrorContainer {
  //{email:"not valid", username:"not valid"}
  [prop: string]: string;
}

const error: ErrorContainer = { email: 'invalid', username: 'invalid' };
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
console.log(fetchedData.cart ?? 'default');
