let name: string;
name = 'John';  // OK
name = 123;     // Error


function greet(name: string) {
  console.log(`Hello, ${name}!`);
}

greet('John');  // OK
greet(123);     // Error


function getAge(): number {
  return 30;
}

let age: number = getAge();  // OK
let name: string = getAge(); // Error
