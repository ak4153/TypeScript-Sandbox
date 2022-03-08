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