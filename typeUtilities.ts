// 타입 유틸리티란, TS에서 타입을 조작하고 변환하는 기능을 제공하는 내장 유틸리티 타입.

// Partial<T>
// 제공된 타입 'T'의 모든 속성을 선택적으로 만듦.
// 'T'의 모든 속성 === 'optional'
interface User {
  name: string;
  age: number;
}
