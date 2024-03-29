// 타입 가드란, TS 런타임에서 변수의 타입을 확인하고, 해당 타입에 따라 다른 동작을 수행할 수 있는 기능.
// 타입 가드를 사용하면, 변수의 타입을 좁히고, 특정 타입으로 처리 가능.

// typeof 타입 가드
function printValue(value: string | number) {
  if (typeof value === 'string') {
    console.log(value.toUpperCase()); // value는 여기서 string 타입으로 좁혀짐
  } else {
    console.log(value.toFixed(2)); // value는 여기서 number 타입으로 좁혀짐
  }
}


// instanceof 타입 가드
class Circle {
  radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }
}

class Rectangle {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
}

function calculateArea(shape: Circle | Rectangle) {
  if (shape instanceof Circle) {
    console.log(Math.PI * shape.radius ** 2); // shape는 여기서 Circle 타입으로 좁혀짐
  } else {
    console.log(shape.width * shape.height); // shape는 여기서 Rectangle 타입으로 좁혀짐
  }
}


// 사용자 정의 타입 가드
interface Cat {
  name: string;
  meow(): void;
}

interface Dog {
  name: string;
  bark(): void;
}

function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).meow !== undefined;
}

function playSound(animal: Cat | Dog) {
  if (isCat(animal)) {
    animal.meow(); // animal은 여기서 Cat 타입으로 좁혀짐
  } else {
    animal.bark(); // animal은 여기서 Dog 타입으로 좁혀짐
  }
}
