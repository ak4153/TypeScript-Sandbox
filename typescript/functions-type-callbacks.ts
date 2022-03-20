function addTwo(n1: number, n2: number): number {
  return n1 + n2;
}

//function type
type FuncType = (n1: number, n2: number) => number;
let funky2 = addTwo;
console.log(funky2(1, 3));

//function type with callback
type FuncWithCallBack = (n1: number, n2: number, callBack: Function) => void;

function callBack(params: number) {
  console.log(params);
}

function addAndHandle(n1: number, n2: number, callBack: Function): void {
  callBack(n1 + n2);
}

let addAndHandleWrapper: FuncWithCallBack;
addAndHandleWrapper = addAndHandle;

addAndHandleWrapper(222, 7, callBack);
