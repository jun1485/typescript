// 인덱스 타입은 동적으로 속성에 접근하고 조작하는 기능.
// 타입 시스템을 통해 정적으로 확인할 수 없는 속성에도 타입 안정성을 부여.

// 문자열 인덱스 타입(String Index Types)
// 객체의 속성과 값을 매핑, 속성 이름을 동적으로 사용 가능.
interface Person {
  name: string;
  age: number;
  [key: string]: string | number;
}

const person: Person = {
  name: 'John',
  age: 30,
  city: 'New York',
  country: 'USA',
};


// 숫자 인덱스 타입(Number Index Types)
// 배열이나 객체의 요소 타입 정의 가능.

interface StringArray {
  [index: number]: string;    // 숫자 인덱스 시그니처
}

const arr: StringArray = ['apple', 'banana', 'cherry'];
const fruit: string = arr[0];
