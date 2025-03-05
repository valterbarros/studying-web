// Topic: Narrowing
// Sub topic: Using type predicates

type Fish = {
  swim: () => void;
}

type Bird = {
  fly: () => void;
}


function getSmallPet(): Fish | Bird {
  return {fly: () => {}} as unknown as Fish;
}

const pt = getSmallPet();

function isFish(pet: Fish | Bird): pet is Fish{
  return (pet as Fish).swim !== undefined;
}

if (isFish(pt)) {
  pt.swim();
} else {
  pt.fly();
}

// Sub topic: Discriminated unions

type Type = string | Array<any>

function whatIs(ob: Type) {
  if (Array.isArray(ob)) {
    return ob // Array
  } else {
    return ob // String
  }
}

interface Circle {
  kind: 'circle',
  radius: number,
}

interface Square {
  kind: 'square',
  sideLength: number,
}

interface Triangle {
  kind: "triangle";
  sideLength: number;
}

type Shape = Circle | Square | Triangle;

function getArea(shape: Shape) {
  if (shape.kind === 'circle') {
    return Math.PI * shape.radius ** 2;
  }
}

// Sub topic: Exhaustiveness checking
 
function getAreaFull(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
