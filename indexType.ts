// 인덱스 타입은 동적으로 속성에 접근하고 조작하는 기능.
// 타입 시스템을 통해 정적으로 확인할 수 없는 속성에도 타입 안정성을 부여.

// 문자열 인덱스 타입(String Index Types)
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
