// 레코드 타입은 객체의 키와 값을 매핑할때 사용하는 유틸리티 타입.
// Record<T, K> 형태로 사용, T는 객체의 키의 타입, K는 값의 타입을 나타냄.

type StringToNumber = Record<string, number>;

const obj: StringToNumber = {
  foo: 1,
  bar: 2
};
