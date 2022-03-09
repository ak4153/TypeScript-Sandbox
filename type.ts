//types
type FullName = {
  first: string;
  last: string;
};

//extending the FullName type is a bit different than interface
type Id = FullName & {
  id: number;
};

function printName(fullName: FullName) {
  console.log(`name:${fullName.first},${fullName.last} `);
}
printName({ first: 'alex', last: 'kreizi' });

//aliases
type StringWrapper = string | number;

function returnString(str: string | number): StringWrapper {
  return str;
}

function makeMeReturnString(): string | number {
  let a: string = 'alex';
  return typeof a === 'string' ? returnString(a) : returnString('failsafe');
}

//assertions
const myCanvas = document.getElementById('main_canvas') as HTMLCanvasElement;

//literal type combined  into union
type FlexBox = {
  justifyContent: 'center' | 'flex-end' | 'flex-start';
};

function flex(a: FlexBox) {
  console.log(a.justifyContent);
}
flex({ justifyContent: 'center' });

//NULL UNDEFINED

//checks need to be done with assertions

function isNullChecked(x: string | null) {
  if (x === null) console.log('null');
  else {
    console.log('Hello, ' + x.toUpperCase());
  }
}

//or ! assertion for checking null/undefined
function isNullCheckedPostfix(x: string | null) {
  return console.log('Hello, ' + x!.toUpperCase());
}
