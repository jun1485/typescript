// 타입 유틸리티란, TS에서 타입을 조작하고 변환하는 기능을 제공하는 내장 유틸리티 타입.

// Partial<T>
// 제공된 타입 'T'의 모든 속성을 선택적으로 만듦.
// 'T'의 모든 속성 === 'optional'
// PartialUser 타입은 'User' 인터페이스의 모든 속성을 선택적으로 가질 수 있음.
interface User {
  name: string;
  age: number;
}

type PartialUser = Partial<User>;

const partialUser: PartialUser = {
  name: 'John'
};


// Pick<T, K> 
// 제공된 타입 T에서 K로 지정된 속성만 선택하여 새로운 타입 생성.
interface User {
  name: string;
  age: number;
  email: string;
}
