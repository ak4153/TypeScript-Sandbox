function marginLeft(x: number | string) {
  if (typeof x === 'number') {
    return ''.repeat(x);
  }

  return x + ' string';
}
marginLeft(3);

function iterate(str: string | string[] | null) {
  return typeof str === 'string' ? str.toUpperCase() : null;
}
type Fish = { swim: () => void };
type Human = { swim?: () => void; fly?: () => void };
type Bird = { fly: () => void };

//type predicate
//<variable> is <type> variable has to be from the functions signature
function move(animal: Fish | Human | Bird): animal is Human {
  if ('swim' in animal) return false;
  else {
    return (animal as Human).swim !== undefined;
  }
}

interface Circle {
  kind: 'circle';
  radius: number;
}
interface Square {
  kind: 'square';
  sideLength: number;
}
interface Triangle {
  kind: 'triangle';
  sideLength: number;
}

type Shape = Square | Circle | Triangle;
//Exhaustivness checking with never
//because types cannot be assigned to "never", the default
//will alarm that all checks are exhausted
function getArea(shape: Shape) {
  switch (shape.kind) {
    case 'circle':
      return 3.14 * shape.radius ** 2;
    case 'square':
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: any = shape;
      return _exhaustiveCheck;
  }
}
getArea({ kind: 'triangle', sideLength: 5 });
