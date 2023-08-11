// Partial은 유틸리티 타입 중 하나로, 객체의 모든 속성을 선택적으로 만듦.
// 즉, 해당 객체의 모든 속성이 있어도 되고 없어도 되는 상태가 됨.

interface Person {
  name: string;
  age: number;
}

// Partial을 사용하여 모든 속성을 선택적으로 만듭니다.
const partialPerson: Partial<Person> = { name: 'Alice' };


// Partial의 내부 정의
type Partial<T> = {
  [P in keyof T]?: T[P];
};
//   keyof T: 객체 T의 모든 키를 추출합니다.
//   [P in keyof T]: T의 모든 키를 순회하면서
//   T[P]: 각 키에 해당하는 타입을 참조하고
//   ?:: 선택적으로 만듭니다.
