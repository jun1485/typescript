// Partial은 유틸리티 타입 중 하나로, 객체의 모든 속성을 선택적으로 만듦.
// 즉, 해당 객체의 모든 속성이 있어도 되고 없어도 되는 상태가 됨.

interface Person {
  name: string;
  age: number;
}

// Partial을 사용하여 모든 속성을 선택적으로 만듭니다.
const partialPerson: Partial<Person> = { name: 'Alice' };
