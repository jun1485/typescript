// 제네릭 사용 시 컴포넌트가 다양한 타입에 대해 작동 가능
// 컴파일 시간에 타입의 정보를 유지.

let numbers: Array<number> = [1, 2, 3];  // 숫자 배열
let strings: Array<string> = ['Hello', 'World'];  // 문자열 배열


function identity<T>(arg: T): T {  // 제네릭 함수 T, 매개변수 타입 T
  return arg;
}

let output1 = identity<string>('Hello');
let output2 = identity<number>(123);


interface GenericIdentityFn<T> {
  (arg: T): T;
}

class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}
