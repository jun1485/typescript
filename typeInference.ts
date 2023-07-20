// 변수의 타입을 명시적으로 선언하지 않아도 TS 컴파일러가 해당 변수의 타입을 유추하여 결정하는 기능.
// 타입 추론은 변수의 선언 및 초기화를 분석하여 변수의 타입을 유추.

let name = 'Jun';  // 타입 추론에 의해 name은 string 타입으로 추론됨
let age = 26;       // 타입 추론에 의해 age는 number 타입으로 추론됨


// 함수 반환 값으로 타입 추론
function multiply(a: number, b: number) {
  return a * b;     // 반환 값으로 인해 multiply 함수의 타입이 number로 추론됨
}
let result = multiply(5, 10);  // result는 number 타입으로 추론됨


// 배열과 객체의 초기화 값으로 타입 추론
let numbers = [1, 2, 3];       // numbers는 number[] (숫자 배열) 타입으로 추론됨
let person = { name: 'John', age: 30 };  // person은 { name: string, age: number } (객체 타입)으로 추론됨


// 함수 매개변수로 타입 추론
function greet(name: string) {
  console.log(`Hello, ${name}!`);
}

greet('John');  // name 매개변수의 타입이 string으로 추론됨
